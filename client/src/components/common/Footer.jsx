const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <footer className="w-screen grid place-content-center bg-green-700 py-3">
      <p>&copy; {date}. DaurAksi</p>
    </footer>
  )
}

export default Footer
