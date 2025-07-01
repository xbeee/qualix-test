import styles from './CreateRequest.module.scss';
import RequestCreateForm from "../../features/CreateRequest";
import {useCreateRequest} from "../../shared/hooks/hooks.ts";
import {Link} from "react-router-dom";

const RequestCreatePage = () => {
  const {formData, errors, categories, handleChange, handleSubmit} = useCreateRequest();
    return (
      <div className={styles.container}>
          <Link to={'/requests'}>Назад</Link>
          <h1>Создать заявку</h1>
          <RequestCreateForm formData={formData} errors={errors} categories={categories} onChange={handleChange} onSubmit={handleSubmit}/>
      </div>
    );
};

export default RequestCreatePage;