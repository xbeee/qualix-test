import React from 'react';
import styles from './Loader.module.scss';

interface LoaderProps {
  size?: number;
  color?: string;
  borderWidth?: number;
  speed?: number;
}

const Loader: React.FC<LoaderProps> = ({
                                         size = 50,
                                         borderWidth = 5,
                                         speed = 1
                                       }) => {
  const loaderStyle = {
    width: `${size}px`,
    height: `${size}px`,
    borderWidth: `${borderWidth}px`,
    animationDuration: `${speed}s`
  };

  return <div className={styles.loader} style={loaderStyle}></div>;
};

export default Loader; // <- Изменено на дефолтный экспорт