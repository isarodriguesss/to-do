import React from "react"

export default function useHandleChange (callback) {
  const [inputValue, setInputValue] = React.useState({text:'', title:''})

  function handleChange(event: { preventDefault: () => void }) {
    const { name, value } = event.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));

  }

  const handleSubmit = (callback) => (event: { preventDefault: () => void }) => {
    event.preventDefault()
    if (!inputValue.text){
      return
    }
    callback()
    setInputValue({text:"", title:''})
  } 
  return [inputValue, handleChange, handleSubmit]
}
  