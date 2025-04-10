import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Cta = ({ title, icon }) => {
  return (
    <button
      className="btn btn-sm lg:btn-lg xl:btn-xl md:btn-md sm:btn-sm
    border border-green-700
    hover:text-white hover:scale-105 hover:bg-warning transition-all ease-in-out">
      {title} <FontAwesomeIcon icon={icon} />
    </button>
  )
}

export default Cta
