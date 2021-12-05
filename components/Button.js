import styles from '../styles/Button.module.scss'

export default function Button(props) {
    return (
        <button className={styles.button}
            onClick={props.click}
        >
        {props.text}
        </button>
    )
}