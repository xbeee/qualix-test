export type RequestCategory = 'technical' | 'financial' | 'hr' | 'other';

export interface Request {
  id: string;
  title: string;
  description: string;
  category: RequestCategory;
  createdAt: string;
}

export interface RequestFormData {
  title: string;
  description: string;
  category: RequestCategory;
}