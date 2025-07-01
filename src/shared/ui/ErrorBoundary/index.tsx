import { useRouteError } from "react-router-dom";
import Button from "../Button";

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className={'container mt-5'}>
      <h1>Что-то пошло не так</h1>
      <p>Произошла непредвиденная ошибка</p>
      <Button onClick={() => window.location.reload()}>
        Обновить страницу
      </Button>
    </div>
  );
}