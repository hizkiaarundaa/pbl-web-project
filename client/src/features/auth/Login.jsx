import React from "react"
import Button from "../../components/ui/Button"

const Login = () => {
  return (
    <form action="" className="card card-xl border border-warning bg-green-700 text-warning  max-w-3xlp-8">
      <div className="card-body w-full min-w-2xl">
        <label htmlFor="email">Email:</label>
        <input className="input validator w-full" type="email" required placeholder="mail@site.com" />
        <div className="validator-hint">Enter valid email address</div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="input validator w-full"
          required
          placeholder="admin123"
          minlength="8"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
        />
        <p className="validator-hint">Email atau password tidak sesuai</p>
        <div className="card-actions justify-end p-1">
          <Button title="Login" style="btn btn-warning btn-outline" />
        </div>
      </div>
    </form>
  )
}

export default Login
