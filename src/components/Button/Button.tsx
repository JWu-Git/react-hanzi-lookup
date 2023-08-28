import React, { useState } from 'react';
import styles from './styles.module.css';

interface Props {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
}

export function Button({ children, handleClick }: Props) {
  return (
    <button className={styles.button} onClick={handleClick}>
      {children}
    </button>
  );
}
