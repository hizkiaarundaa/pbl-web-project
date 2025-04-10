import Logo from "../ui/Logo.jsx"
import Button from "../ui/Button.jsx"
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons"
import { faUserPlus } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"
const Header = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate("/login")
  }
  const handleSignUp = () => {
    navigate("/signup")
  }

  return (
    <header className="w-screen flex justify-between items-center xl:px-16 py-3 bg-green-700 md:justify-center md:px-2 sm:px-2">
      <Logo />
      <nav className=" flex-1 flex md:justify-center justify-center gap-2 md:gap-32 xl:text-xl lg:text-lg font-bold ">
        <a className="hover:translate-y-1 hover:text-warning transition-all ease-in-out" href="/edukasi">
          Edukasi
        </a>
        <a className="hover:translate-y-1 hover:text-warning transition-all ease-in-out" href="/layanan">
          Layanan
        </a>
        <a className="hover:translate-y-1 hover:text-warning transition-all ease-in-out" href="/hadiah">
          Hadiah
        </a>
      </nav>
      <div className="wrapper w-40 flex justify-center gap-4">
        <Button
          handleClick={handleLogin}
          icon={faPaperPlane}
          title="Login"
          style="btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-warning max-w-16"
        />
        <Button
          handleClick={handleSignUp}
          icon={faUserPlus}
          title="Sign Up"
          style="btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl btn-warning max-w-16"
        />
      </div>
    </header>
  )
}

export default Header
