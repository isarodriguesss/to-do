
interface Props {
  type: String
  placeholder: String
  value: String
  onChange: () => void
  name: String
  className
}

const Input = ({type, placeholder, value, onChange, name, className}:Props) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        className={className}
      />
    </div>
  )
}

export default Input