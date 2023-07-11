import { useEffect, useState } from "react";
import { Link} from "react-router-dom";

import apis from "../../Api/PackageApi"

import './css/sewa.css'


const Product =() =>{

    const [data,setData] = useState([])
    const [loading,setloading] = useState(false)
    const[id,setId] = useState('')
    let componentMounted = true

    useEffect(()=>{
        const getProducts = async () =>{
            setloading(true)
            if(componentMounted){
                try {
                    let res = await apis.getPackage()
                    if(data){
                        res = await apis.getPackageId(id)
                    }
                    setData(res.data)
                } catch (error) {
                    console.log(error)
                }
            }
            setloading(false)
        }
        getProducts()

    }, [id])

    const tombol = async ()=>{
        try {
            let res = await apis.getPackage()
            if(data){
                res = await apis.getPackageId(id)
            }
            setData(res.data)
        } catch (error) {
            console.log(error)
        }

    }

    const setTombol = async (category)=>{
        try {
            let res = await apis.getPackage()
            if(data){
                res = await apis.getPackageByCategory(category)
            }
            setData(res.data)
        } catch (error) {
            console.log(error)
        }

    }
    //function untuk bagian delete
    const getPackage = async () =>{
        const response = await apis.getPackage()
        setData(response.data)
    }
    const hapusPackage = async (id) =>{
        try {
            let res = await apis.getPackage()
            if(data){
                res = await apis.deletePackage(id)
                getPackage()
            }
        } catch (error) {
            console.log(error)   
        }
       
    }



    const Loading = ()=>{
        return(
            <>
                Loading....
            </>
        )

    }


    const ShowProduct =()=>{
        return(
            <>
            
            {data.map((product)=>{
                return(
                    <div className="kotakk">
                    <div class="bungkus m-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 card h-100 text-center p-4" >
                        <a href="">
                            <img className="gambar rounded-t-lg w" src={product.url} alt={product.title}/>
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="bungkus2 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.title.substring(0,14)}</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Rp. {product.price}</p>
                            <Link to={`/package/${product.id}`} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </Link>
                        </div>
                    </div>
                       
                </div>
                )
            })}

            </>
        )
    }
    return(
        <div>
            <div className="contents">
                <div className="">
                    <div className=" my-10 p-20 mb-0">
                        <h1 className="font-bold text-4xl
                         ">Latest Product</h1>
                         <br />
                         <hr />
                    </div>
                </div>
                <div>
                <div className="tombol">
                <button type="button" class="text-gray-900 hover:text-white border 
                border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none
                focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
                mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white
                dark:hover:bg-gray-600 dark:focus:ring-gray-800"onClick={()=>tombol()}>All</button>
                <button type="button" class="text-gray-900 hover:text-white border 
                border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none
                focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
                mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white
                dark:hover:bg-gray-600 dark:focus:ring-gray-800"onClick={()=>setTombol("Family")}>Family</button>
                <button type="button" class="text-gray-900 hover:text-white border 
                border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none
                focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
                mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white
                dark:hover:bg-gray-600 dark:focus:ring-gray-800"onClick={()=>setTombol("preweding")}>Preweding</button>
                <button type="button" class="text-gray-900 hover:text-white border 
                border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none
                focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
                mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white
                dark:hover:bg-gray-600 dark:focus:ring-gray-800"onClick={()=>setTombol("wisuda")}>Wisuda</button>
                
            </div>
                </div>
                <div>
                    <div className="awass container">
                    {loading ? <Loading/> : <ShowProduct/>}
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Product