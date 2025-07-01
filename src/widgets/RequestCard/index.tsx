import type { Request } from '../../entities/request/types';
import { Link } from 'react-router-dom';
import styles from './RequestCard.module.scss';

interface RequestCardProps {
  request: Request;
}

const RequestCard = ({ request }: RequestCardProps) => {

  return (
    <div className={styles.card}>
      <Link to={`/requests/${request.id}`} className={styles.link}>
        <div className={styles.header}>
          <h3 className={styles.title}>{request.title}</h3>
          <span className={styles.category} data-category={request.category}>
            {request.category}
          </span>
        </div>

        <p className={styles.description}>
          {request.description}
        </p>

        <p className={styles.date}>
          {new Date(request.createdAt).toLocaleDateString('ru-RU', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}
        </p>
      </Link>
    </div>
  );
};

export default RequestCard;