import type {RequestFormData} from "../../entities/request/types.ts";
import Input from "../../shared/ui/Input";
import Select from "../../shared/ui/Select";
import Button from "../../shared/ui/Button";

interface RequestCreateFormProps {
  formData: RequestFormData;
  errors: Partial<RequestFormData>;
  categories: { value: string; label: string }[];
  onChange: (field: keyof RequestFormData, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const RequestCreateForm = ({
                             formData,
                             errors,
                             categories,
                             onChange,
                             onSubmit,
                           }: RequestCreateFormProps) => {
  const handleChange = (field: keyof RequestFormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      onChange(field, e.target.value);
    };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange('category', e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
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
        options={categories}
      />

      <Button type="submit">Создать заявку</Button>
    </form>
  );
};

export default RequestCreateForm;