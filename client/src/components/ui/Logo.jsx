import LogoDaurAksi from "/logo-final.png"
import { useNavigate } from "react-router-dom"

const Logo = () => {
  const navigate = useNavigate()
  const handleLogoClick = () => {
    navigate("/")
  }
  return (
    <div className="w-40 cursor-pointer hover:opacity-80 transition-all duration-200 h-full">
      <img className="w-16" onClick={handleLogoClick} src={LogoDaurAksi} alt="Logo DaurAksi" />
    </div>
  )
}

export default Logo
