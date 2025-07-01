// features/request-edit/components/EditRequestModal.tsx
import Input from '../../shared/ui/Input';
import Select from '../../shared/ui/Select';
import Button from '../../shared/ui/Button';
import styles from './EditRequest.module.scss';
import Modal from "../../shared/ui/Modal";
import type { Request } from '../../entities/request/types';
import {useEditRequest} from "../../shared/hooks/hooks.ts";

interface EditRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  request: Request;
}

const EditRequestModal = ({ isOpen, onClose, request }: EditRequestModalProps) => {
  const {
    formData,
    errors,
    categories,
    handleSubmit,
    handleChange,
    handleCategoryChange,
  } = useEditRequest(request, onClose);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Редактировать заявку">
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          label="Название заявки"
          value={formData.title}
          onChange={handleChange('title')}
          error={errors.title}
          required
        />

        <Input
          label="Описание"
          value={formData.description}
          onChange={handleChange('description')}
          multiline
          error={errors.description}
          required
        />

        <Select
          label="Категория"
          value={formData.category}
          onChange={handleCategoryChange}
          options={categories.map(cat => ({value: cat, label: cat}))}
        />

        <div className={styles.buttons}>
          <Button type="submit">Сохранить</Button>
          <Button type="button" variant="danger" onClick={onClose}>
            Отмена
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default EditRequestModal;