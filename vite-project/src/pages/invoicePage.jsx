import { Icon } from "@iconify/react"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import apis from '../Api/order.jsx'
import { useParams } from "react-router-dom";

const Invoice = ()=>{
  const {id} = useParams()
    const [Order, setOrder] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await apis.getOrderById(id)
                console.log(response.data)
                // if(Frame){
                //     response = await apis.getFrameById(id);
                // }
                setOrder(response.data)
                console.log(response.data)
                // const selector = order.filter(innerArray => innerArray.includes(1))
                // console.log(selector)
                // console.log(order)
                
            } catch (error) {
                // setError(error.message);
                console.log(error)
            }
        };
        
        fetchData();
        // console.log(Frame);
    }, []);
    return(
      <div className="text-center font-bold text-2xl mt-20 bg-gray-100 w-full m-auto p-10 shadow-2xl">
            <h1>
                Terimaksih Atas Order Anda
            </h1>
            <br />
            
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left">
        <tbody>
          {Order.orderFrames?.map((order,i) =>(
                        <tr key={i} class="bg-white border-b ">
                        <th scope="row" class="px-6 py-4">
                            Nama Pembeli :
                        </th>
                        <td class="px-6 py-4">
                            {order.namaPembeli}
                        </td>
                        <th scope="row" class="px-6 py-4">
                            Alamat :
                        </th>
                        <td class="px-6 py-4">
                            {order.alamat}
                        </td> 
                        <th scope="row" class="px-6 py-4">
                            Harga :
                        </th>
                        <td class="px-6 py-4">
                            {order.harga}
                        </td> 
                        <th scope="row" class="px-6 py-4">
                            Jumlah :
                        </th>
                        <td class="px-6 py-4">
                            {order.jumlah}
                        </td> 
                        <th scope="row" class="px-6 py-4">
                            Total :
                        </th>
                        <td class="px-6 py-4">
                            {order.total}
                        </td> 
          
                    </tr>
                    
                    
          ))}
          <hr />
          <br />
            <tr class="bg-white border-b ">
                <th scope="row" class="px-6 py-4">
                    Nama Frame
                </th>
                <td class="px-6 py-4">
                    {Order.nama}
                </td>   
            </tr>
            <tr class="bg-white border-b ">
                <th scope="row" class="px-6 py-4">
                    Ukuran
                </th>
                <td class="px-6 py-4">
                    {Order.ukuran}
                </td>   
            </tr>
            <tr class="bg-white border-b ">
                <th scope="row" class="px-6 py-4">
                    Harga
                </th>
                <td class="px-6 py-4">
                    {Order.harga}
                </td>   
            </tr>
            <tr class="bg-white border-b ">
                <th scope="row" class="px-6 py-4">
                    Stok
                </th>
                <td class="px-6 py-4">
                    {Order.stok}
                </td>   
            </tr>
            <tr class="bg-white border-b ">
                <th scope="row" class="px-6 py-4">
                    Deskripsi
                </th>
                <td class="px-6 py-4">
                    {Order.deskripsi}
                </td>   
            </tr>
            <tr class="bg-white border-b ">
                <th scope="row" colSpan={0} class="px-6 py-4">
                    Gambar
                </th>
                <td class="px-6 py-4">
                    <img className="w-20" src={Order.url} alt="" />
                </td>   
            </tr>
          
        </tbody>
    </table>
</div>


            <Icon icon="lucide:badge-check" color="green" width='200' className="w-full" />
            <h3 className="mb-4">Pesanan anda akan kami proses</h3>

            <Link to={'/frame'}>
                <button className="bg-blue-700 rounded-lg py-3 px-6 text-white">Back</button>
            </Link>
            
        </div>

    )
}
        
export default Invoice