import { useSelector } from 'react-redux';
import type {RootState} from '../../app/store';
import { Link } from 'react-router-dom';
import RequestCard from '../../widgets/RequestCard';
import styles from './RequestsList.module.scss';
import React from "react";

const RequestsList: React.FC = () => {
  const requests = useSelector((state: RootState) => state.requests);

  return (
    <div className={styles.container}>
      <h1>Список заявок</h1>
      <Link to="/requests/new" className={styles.createButton}>
        Создать заявку
      </Link>

      {requests.length === 0 ? (
        <p className={styles.emptyMessage}>Нет данных</p>
      ) : (
        <div className={styles.list}>
          {requests.map(request => (
            <RequestCard key={request.id} request={request} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RequestsList;