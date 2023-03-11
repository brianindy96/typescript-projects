import { useState, useEffect } from "react"
import styles from "./select.module.css"

type SelectOption = {
  label: string
  value: string | number
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

  // we only want the options to be shown, if the select is opened
  const [showOptions, setShowOptions] = useState(false)
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const clearOptions = () => {
    // clears the values in onChange
    onChange(undefined)
  }

  // select option choice as value
  const selectOption = (option: SelectOption) => {
    if (option !== value) onChange(option);
  }

  // isOptionSelected
  const isOptionSelected = (option: SelectOption) => {
    return option === value;
  }

  // setsHighlightedIndex to default 0 everytime div is left and entered again
  useEffect(() => {
    if(showOptions) setHighlightedIndex(0);
  }, [showOptions])


  return (
    <div 
    tabIndex={0} 
    onClick={() => setShowOptions(prev => !prev)}
    className={styles.container}
    // when i click anywhere else other than the div, it will close the div
    onBlur={() => setShowOptions(false)}
    >
      {/* value here doesn't show label if we don't have one */}
        <span className={styles.value}>{value?.label}</span>
        <button 
        onClick={e => {
          // this will prevent the event from bubbling up to the parent element
          e.stopPropagation()
          // this will set the value to undefined
          clearOptions();
        }}
        className={styles["close-btn"]}>&times;</button>
        <div className={styles.divider}></div>
        <div className={styles.caret}></div>
        <ul className={`${styles.options} ${showOptions ? styles.show : ""}`}>
          {options.map((option, index) => (
            <li 
            key={option.value} 
            onClick={e => {
              e.stopPropagation();
              selectOption(option);
              setShowOptions(false);
              console.log(option.value);
            }}
            onMouseEnter={() => {
              console.log('onMouseEnter fired');
              console.log(option.value);
              setHighlightedIndex(index)}}
            className={`${styles.option} ${isOptionSelected(option) ? styles.selected : ""} ${highlightedIndex === index ? styles.highlighted : ""}`}
            >
                {option.label}
            </li>
          ))}
        </ul>
    </div>
  )
} 

export default Select