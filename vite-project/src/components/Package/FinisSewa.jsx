import { Icon } from "@iconify/react"
import { Link } from "react-router-dom"

const FinisSewa = ()=>{
    return(
        <div className="text-center font-bold text-2xl mt-20 bg-gray-100 w-96 m-auto p-10 shadow-2xl">
            <h1>
                Terimaksih Atas Order Anda
            </h1>
            <Icon icon="lucide:badge-check" color="green" width='200' className="w-full" />
            <h3 className="mb-4">Pesanan anda akan kami proses</h3>

            <Link to={'/package'}>
                <button className="bg-blue-700 rounded-lg py-3 px-6 text-white">Back</button>
            </Link>
            
        </div>
    )
}

export default FinisSewa