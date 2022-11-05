import { Link } from "react-router-dom"

const Notfound = () => {
  return (
    <div className="flex flex-col justify-center py-52">
      <h3 className="text-8xl font-extrabold text-gray-800 flex flex-col justify-center items-center">404 Error Page</h3>
      <Link className="flex flex-col justify-center items-center py-4 font-semibold text-3xl text-red-700 underline" to="/" >Go back</Link>
    </div>
  )
}

export default Notfound
