import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import type {Request, RequestFormData} from '../../entities/request/types';
import { updateRequest } from '../../entities/request/slice';
import { useNavigate } from 'react-router-dom';
import { deleteRequest } from '../../entities/request/slice';
import { addRequest } from '../../entities/request/slice';
import {loadState, removeRequestFromState, saveState} from '../lib/localStorage';
export const useEditRequest = (request: Request, onClose: () => void) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<Omit<Request, 'id' | 'createdAt'>>({
    title: request.title,
    description: request.description,
    category: request.category,
  });

  const [errors, setErrors] = useState<Partial<Request>>({});
  const categories: Request['category'][] = ['technical', 'financial', 'hr', 'other'];

  const handleChange = (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({...formData, [field]: e.target.value});
    };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({...formData, category: e.target.value as Request['category']});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Partial<Request> = {};
    if (!formData.title.trim()) newErrors.title = 'Название обязательно';
    if (!formData.description.trim()) newErrors.description = 'Описание обязательно';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const updatedRequest = {
      ...request,
      ...formData,
    };

    dispatch(updateRequest(updatedRequest));

    try {
      const currentState = loadState();
      if (Array.isArray(currentState)) {
        const updatedState = currentState.map(req =>
          req.id === updatedRequest.id ? updatedRequest : req
        );
        saveState(updatedState);
      }
    } catch (e) {
      console.warn('Ошибка при обновлении localStorage', e);
    }

    onClose();
  };

  return {
    formData,
    errors,
    categories,
    handleSubmit,
    handleChange,
    handleCategoryChange,
  };
};
export const useDeleteRequest = (requestId: string) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm('Вы уверены, что хотите удалить заявку?')) {
      dispatch(deleteRequest(requestId));
      removeRequestFromState(requestId);
      navigate('/requests');
    }
  };

  return { handleDelete };
};

export const useCreateRequest = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<RequestFormData>({
    title: '',
    description: '',
    category: 'technical',
  });

  const [errors, setErrors] = useState<Partial<RequestFormData>>({});

  const categories = [
    { value: 'technical', label: 'Техническая' },
    { value: 'financial', label: 'Финансовая' },
    { value: 'hr', label: 'HR' },
    { value: 'other', label: 'Другая' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Partial<RequestFormData> = {};
    if (!formData.title.trim()) newErrors.title = 'Название обязательно';
    if (!formData.description.trim()) newErrors.description = 'Описание обязательно';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newRequest = {
      ...formData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };

    dispatch(addRequest(newRequest));
    saveState([newRequest]);
    navigate('/requests');
  };

  const handleChange = (field: keyof RequestFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: undefined }));
  };

  return {
    formData,
    errors,
    categories,
    handleChange,
    handleSubmit,
  };
};