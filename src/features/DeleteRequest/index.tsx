import {useDeleteRequest} from "../../shared/hooks/hooks.ts";
import Button from "../../shared/ui/Button";

interface DeleteRequestButtonProps {
  requestId: string;
  className?: string;
}

const DeleteRequestButton = ({ requestId, className }: DeleteRequestButtonProps) => {
  const { handleDelete } = useDeleteRequest(requestId);

  return (
    <Button
      variant="danger"
      onClick={handleDelete}
      className={className}
    >
      Удалить заявку
    </Button>
  );
};

export default DeleteRequestButton;