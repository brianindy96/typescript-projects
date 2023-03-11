import styles from "./select.module.css"

type SelectOption = {
  label: string
  value: any
}

type SelectProps = {
  // options has to be an array of objects with label and value properties as specified in Select Option
  options: SelectOption[] 
  // value has to be an object with label and value properties as specified in Select Option; value is optional
  value?: SelectOption

  // onChange takes in a value based on SelectOption type, or it is undefined
  onChange: (value: SelectOption | undefined) => void
  //  The function does not return anything (i.e., it has a return type of "void"). The purpose of this function is to handle changes to the selected option in the component. 
}


const Select = ({ options, value, onChange } : SelectProps) => {
  return (
    <div tabIndex={0} className={styles.container}>
      {/* value here doesn't show label if we don't have one */}
        <span className={styles.value}>{value?.label}</span>
        <button className={styles["close-btn"]}>&times;</button>
        <div className={styles.divider}></div>
        <div className={styles.caret}></div>
        <ul className={`${styles.options} ${styles.show}`}>
          {options.map((option) => (
            <li key={option.label} className={styles.option}>
                {option.label}
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Select