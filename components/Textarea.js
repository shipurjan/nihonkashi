import styles from '../styles/Textarea.module.scss'


export default function Textarea({id, width, height, color, readonly}) {
    return (
        <textarea autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" id={id} className={styles.textarea} 
        style={{
            backgroundColor: color,
            width: width,
            height: height
        }}
        readOnly={readonly}
        />
    )
}