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
    <div className={styles.container}>
        <span className={styles.value}>Value</span>
        <button className={styles["clear-btn"]}>&times;</button>
        <div className={styles.divider}></div>
        <div className={styles.caret}></div>
        <ul className={styles.options}>
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