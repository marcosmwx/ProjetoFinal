import { Button } from '@mui/material';
import styles from './Button.module.css';

function MyButton() {
  return (
    <Button variant="contained" className={`${styles.button} ${styles.purple}`}>
      Cadastre-se
    </Button>
  );
}

export default MyButton;
