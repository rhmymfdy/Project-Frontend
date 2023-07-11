import React, {useState,useEffect} from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import { input } from "@material-tailwind/react";

import apis from "../../Api/PackageApi"

const DetailProduk = ()=>{
    const {id} = useParams();
    const [product,setProduct]= useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        const getProduct =async () =>{
            setLoading(true);
            try {
                let response = await apis.getPackageId(id)
                console.log(response.data)
                setProduct(response.data)
            } catch (error) {
                console.log(error)
            }
            setLoading(false)
        }
        getProduct()
    },[])

    const Loading = () =>{
        return(
            <>
                Loading....
            </>
        )
    }
    const ShowProduct = () =>{
        return(
            <div className="w-ful">  
                <div className=" flex justify-center">
                    <img class="w-96 mt-20" src={product.url} alt={product.title}/>
                    <div class=" p-20 mt-20 border">
                        <h3 className="text-gray-400 text-3xl mb-2">{product.category}</h3>
                        <h5 class="mb-2 w-90 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-900">{product.title}</h5>
                        <p class="mb-3 font-normal text-xl text-gray-600 dark:text-gray-400 text-left">{product.description}</p>
                        <h1 className="font-bold text-4xl">Rp. {product.price}</h1>
                        <div className="mt-8">
                       
                        <Link to={'/Finis'}>
                        <button type="button" class="text-gray-900 hover:text-white border 
                        border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none
                        focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
                        mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white
                        dark:hover:bg-gray-600 dark:focus:ring-gray-800">BUY NOW</button>
                        </Link>

                        <Link to={'/Package'}>
                        <button type="button" class="text-white bg-gray-900 focus:ring-4 
                        focus:outline-none focus:ring-gray-900 font-medium rounded-lg text-sm px-5 
                        py-2.5 text-center border border-gray-800 dark:hover:bg-gray-900 dark:focus:ring-gray-800">CANCEL</button>
                        </Link>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

    return(
        <>
            <div>
                <div className="container">
                    <div className="row">
                        {loading ? <Loading/> : <ShowProduct/>}
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default DetailProduk