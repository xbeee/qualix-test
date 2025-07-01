import {Link, useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';
import type {RootState} from '../../app/store';
import Button from '../../shared/ui/Button';
import styles from './RequestDetail.module.scss';
import EditRequestModal from "../../features/EditRequest";
import {useState} from "react";
import DeleteRequestButton from "../../features/DeleteRequest";

const RequestDetail = () => {
    const { id } = useParams();

    const request = useSelector((state: RootState) =>
      state.requests.find(req => req.id === id)
    );

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    if (!request) {
        return <div className={styles.notFound}>Заявка не найдена</div>;
    }

    return (
      <div className={styles.container}>
          <Link to={'/requests'}>Назад</Link>
          <h1>{request.title}</h1>
          <p className={styles.date}>
              Создано: {new Date(request.createdAt).toLocaleString()}
          </p>
          <p className={styles.category}>Категория: {request.category}</p>
          <p className={styles.description}>{request.description}</p>

          <div className={styles.actions}>
              <Button variant={'primary'} onClick={() => setIsEditModalOpen(true)}>
                  Редактировать заявку
              </Button>
              <DeleteRequestButton requestId={request.id} />
          </div>

          {
            isEditModalOpen && (
              <EditRequestModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                request={request}
              />
            )
          }
      </div>
    );
};

export default RequestDetail;