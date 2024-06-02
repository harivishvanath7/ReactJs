import profilePic from '../assets/hari.jpg';
import Button from '../Button/Button.jsx';
import styles from './Card.module.css';

function Card(){
    return(
        <div className={styles.card}>
            <img className={styles.cardImage} src={profilePic} alt="Profile Image"></img>
            <h2 className={styles.cardTitle}>HARI VISHVANATH S</h2>
            <p className={styles.cardText}>Hi There!!, I'm a developer from India.</p>
            <Button />
        </div>
    );
}

export default Card;