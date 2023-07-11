import { useEffect, useState } from "react";
import apis from "../../Api/shopApi.jsx";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import apiPaket from '../../Api/PackageApi.jsx'
import apiOrder from '../../Api/order.jsx'


const GetFrame = () => {

    const navigate = useNavigate()

    const [Frame, setFrame] = useState([]);
    const [order, setOrder] = useState([])
    const [error, setError] = useState(null);
    const [_id, set_id] = useState('')

    const [data,setData] = useState([])
    const [id,setId]= useState('')

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                let response = await apis.getFrame()
                // console.log(response.data)
                if(Frame){
                    response = await apis.getFrameById(id);
                }
                setFrame(response.data)
                // console.log(response.datad)
            } catch (error) {
                // setError(error.message);
                console.log(error)
            }
        };
        fetchData();
        //get data package
        const getData = async () => {
            try {
                let response = await apiPaket.getPackage()
                // console.log(response)
                if(data){
                    response = await apiPaket.getPackageId(id);
                }
                setData(response.data)
            } catch (error) {
                // setError(error.message);
                console.log(error)
            }
        };
        getData();
        
    }, [id]);


     //function untuk bagian delete
     const getPackage = async () =>{
        const response = await apiPaket.getPackage()
        setData(response.data)
    }
    const hapusPackage = async (id) =>{
        try {
            let response = await apiPaket.getPackage()
            if(data){
                response = await apiPaket.deletePackage(id)
                getPackage()
            }
        } catch (error) {
            console.log(error)   
        }
       
    }

    const OrderData = async (id) => {
        try {
            let response = await apiOrder.getOrderById(id)
            console.log(response.data)
            setOrder(response.data)
            console.log(response.data)
            navigate(`/invoice/${id}`)
            
        } catch (error) {
            console.log(error)
        }
    }

    //function untuk bagian delete FRAME
    const getFrame = async () =>{
        const response = await apis.getFrame()
        setFrame(response.data)
        console.log(response.data)
        
    }
    const hapusFrame = async (uuid) =>{
        try {
            let response = await apis.getFrame()
            if(Frame){
                response = await apis.deleteFrame(uuid)
                getFrame()
                console.log(response.data)
            }
        } catch (error) {
            console.log(error)   
        }
       
    }


    if (error) {
        return <div>Error: {error}</div>;
    }
    return(
        <>
            
            <div class="relative overflow-x-auto">
                <h1 className="text-2xl font-bold mt-2">Daftar Package</h1>
                        
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                title
                            </th>
                            <th scope="col" class="px-6 py-3">
                                description
                            </th>
                            <th scope="col" class="px-6 py-3">
                                price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                image
                            </th>
                            <th scope="col" class="px-6 py-3">
                                add
                            </th>
                            <th scope="col" class="px-6 py-3 w-auto">
                                delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((product) => (
                            <tr key={product.id} className="bg-white dark:bg-gray-800 hover:bg-gray-900">
                                <td className="px-6 py-4 font-sm whitespace-nowrap">{product.category}</td>
                                <td className="px-6 py-4 font-sm whitespace-nowrap">{product.title}</td>
                                <td className="px-6 py-4 font-sm whitespace-nowrap">{product.description.substring(0,18)}</td>
                                <td className="px-6 py-4 font-sm whitespace-nowrap">Rp. {product.price}</td>
                                <td className="px-6 w-auto py-4 font-sm whitespace-nowrap"><img className="w-20" src={product.url} alt="" /></td>
                               
                                    <td className="px-6 py-4 font-sm whitespace-nowrap">
                                    <div className="">
                                    <Link to={"/add"}><button class="focus:outline-none text-white bg-green-700 
                                    hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg 
                                    text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 
                                    dark:focus:ring-green-800 ml-5">Tambah</button></Link>
                    </div>
                                </td>
                                <td className="px-6 py-4 font-sm whitespace-nowrap">
                                <button className="text-white bg-gray-800 border border-gray-200 rounded-lg hover:bg-gray-900 py-2 px-10" onClick={()=>hapusPackage(product.id)}>delete</button>
                                </td>
                               
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            {/* data Frame */}
            <div class="relative overflow-x-auto">
                <h1 className="text-2xl font-bold mt-2">Daftar Frame</h1>
             
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" class="px-6 py-3">
                                NAMA
                            </th>
                            <th scope="col" class="px-6 py-3">
                                UKURAN
                            </th>
                            <th scope="col" class="px-6 py-3">
                                HARGA
                            </th>
                            <th scope="col" class="px-6 py-3">
                                STOK
                            </th>
                            <th scope="col" class="px-6 py-3">
                                DESKRIPSI
                            </th>
                            <th scope="col" class="px-6 py-3 w-auto">
                                IMAGE
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Frame.map((frame) => (
                            <tr key={frame.uuid} className="bg-white dark:bg-gray-800 hover:bg-gray-900">
                                <td className="px-6 py-4 font-sm whitespace-nowrap">{frame.id}</td>
                                <td className="px-6 py-4 font-sm whitespace-nowrap">{frame.nama}</td>
                                <td className="px-6 py-4 font-sm whitespace-nowrap">{frame.ukuran}</td>
                                <td className="px-6 py-4 font-sm whitespace-nowrap">Rp. {frame.harga}</td>
                                <td className="px-6 py-4 font-sm whitespace-nowrap">{frame.stok}</td>
                                <td className="px-6 py-4 font-sm whitespace-nowrap">{frame.deskripsi}</td>
                                <td className="px-6 w-auto py-4 font-sm whitespace-nowrap"><img className="w-20" src={frame.url} alt="" /></td>
                               
                                    
                                <td className="px-6 py-4 font-sm whitespace-nowrap">
                                        <button className="text-white bg-gray-800 border border-gray-200 rounded-lg hover:bg-gray-900 py-2 px-10" onClick={()=>{hapusFrame(frame.uuid)}}>delete</button>
                                </td>
                                <td className="px-6 py-4 font-sm whitespace-nowrap">
                                        <button className="text-white bg-gray-800 border border-gray-200 rounded-lg hover:bg-gray-900 py-2 px-10" onClick={()=>{OrderData(frame.id)}}>Cek Order</button>
                                </td>
                               
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>

        

        
    );
}



export default GetFrame;