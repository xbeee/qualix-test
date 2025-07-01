const STORAGE_KEY = 'app_state';

export const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, serializedState);
  } catch (e) {
    console.warn('ошибка сохранение в localstorage', e);
  }
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(STORAGE_KEY);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn('ошибка загрузки данных в localstorage', e);
    return undefined;
  }
};

export const removeRequestFromState = (requestId: string) => {
  try {
    const currentState = loadState();
    if (Array.isArray(currentState)) {
      const updatedState = currentState.filter((request: { id: string }) => request.id !== requestId);
      saveState(updatedState);
    }
  } catch (e) {
    console.warn('Ошибка при удалении заявки из localStorage', e);
  }
};