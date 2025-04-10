import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Button = ({ title, icon, style, handleClick }) => {
  return (
    <button onClick={handleClick} className={style}>
      {icon ? <FontAwesomeIcon icon={icon} /> : title}
    </button>
  )
}

export default Button
