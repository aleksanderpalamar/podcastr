import styles from './styles.module.scss';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

export default function Header() {
    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBR,
    });

    return (
        <header className={styles.headerContainer}>
            <a href="/">
                <img src="/podcastr-logo.png" alt="Podcastr" />
            </a>
            <p>Um podcast sobre tecnologia e cultura POP</p>
            <span>{currentDate}</span>
        </header>
    );
}