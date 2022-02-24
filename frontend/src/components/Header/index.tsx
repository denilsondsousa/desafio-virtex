import format from 'date-fns/format';
import ptBr from 'date-fns/locale/pt-BR';

import styles from './styles.module.css';

export function Header() {
  const currentDate = format(new Date(), 'EEEE, d MMMM', {
    locale: ptBr,
  });
  return (
    <header className={styles.container}>
      <img src="/virtex-logo.png" alt="virtex Telecom" />
      <p>Desafio – VirteX - Desenvolvimento</p>

      <span>{currentDate}</span>
    </header>
  );
}
