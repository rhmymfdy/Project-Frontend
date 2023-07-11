import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apis from "../../Api/order.jsx";



const Detil = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [frame, setFrame] = useState([])

    const [namaPembeli,setNamaPembeli] = useState('')
    const [alamat,setAlamat] = useState('')
    const [ukuran,setUkuran] = useState('')
    const [jumlah,setJumlah] = useState('')
    const [harga,setHarga] = useState('')
    const [total,setTotal] = useState(0)
    const [_id,setId] = useState('')

    useEffect(()=> {
        const fetchData = async()=>{
            try {
                let response = await apis.getOrderById(id)
                console.log(response.data)
                setFrame(response.data)
                setUkuran(response.data.ukuran)
                setHarga(response.data.harga)
                
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    },[])
   

    // console.log(namaPembeli)
    // console.log(alamat)
    // console.log(ukuran)
    // console.log(total)

    const Beli = async(e) => {
        e.preventDefault()

        console.log(harga * +jumlah)
        try {
            setTotal(harga * jumlah)
            const res = await apis.postOrder(
                {
                    namaPembeli: namaPembeli,
                    alamat: alamat,
                    frameId : _id,
                    harga : harga,
                    jumlah : jumlah,
                    total : harga * +jumlah
                }
            )

            console.log(res.data)
            navigate(`/invoice/${id}`)
            alert("BERHASIL Cetak Transaksi")
            
        } catch (error) {
            alert("EMAIL TIDAK DITEMUKAN")
            console.log(error.message)
        }
    }

    

    return ( 
            <div>
                        <div className="min-w-screen min-h-screen  flex items-center p-5 lg:p-10 overflow-hidden relative">
                            <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
                            <div className="md:flex items-center -mx-10">
                                <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                                <div className="relative">
                                    <img src={frame.url} className="w-full relative z-10" alt />
                                    <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0" />
                                </div>
                                </div>
                                <div className="w-full md:w-1/2 px-10">
                                <div className="">
                                    <h1 className="font-bold uppercase text-2xl mb-5">{frame.nama} </h1>
                                    <p className="text-sm">{frame.deskripsi} 
                                    <br /><a href="#" className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900">MORE <i className="mdi mdi-arrow-right" /></a></p>
                                </div>
                                <div>
                                <form onSubmit={Beli}
                                className="space-y-4 md:space-y-6">
                                    <div>
                                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Pembeli</label>
                                        <input value={_id} onChange={(e)=> setId(e.target.value)} 
                                        type="text" name="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukan Nama Anda" required />
                                    </div>
                                    <div>
                                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Pembeli</label>
                                        <input value={namaPembeli} onChange={(e)=> setNamaPembeli(e.target.value)} 
                                        type="text" name="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukan Nama Anda" required />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alamat</label>
                                        <input value={alamat} onChange={(e)=> setAlamat(e.target.value)} 
                                        type="text" name="text" id="text" placeholder="Masukan Alamat Anda" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    </div> 
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Alamat</label>
                                        <input value={jumlah} onChange={(e)=> setJumlah(e.target.value)} 
                                        type="number" name="text" id="text" placeholder="Masukan Jumlah Pembelian" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    </div> 
                                    <div className="inline-block align-bottom mr-2 p-10">
                                    <span className="text-2xl leading-none align-baseline">Rp. </span>
                                    <span className="font-bold text-5xl leading-none align-baseline" >{frame.harga}</span>
                                    </div>
                                    <div>
                                    <div className="inline-block align-bottom mr-2 p-10">
                                    <span value={frame.ukuran} className="font-bold text-5xl leading-none align-baseline">{frame.ukuran}</span>
                                    </div>
                                    <br />
                                    <div className="inline-block align-bottom">
                                    <button type="submit"
                                    className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"><i className="mdi mdi-cart -ml-2 mr-2" /> BUY NOW</button>
                                    </div>
                                </div>
                                    </form>
                                </div>
                                
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* BUY ME A BEER AND HELP SUPPORT OPEN-SOURCE RESOURCES */}
                        <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
                            <div>
                            <a title="Buy me a beer" href="https://www.buymeacoffee.com/scottwindon" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                                <img className="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg" />
                            </a>
                            </div>
                        </div>
            </div>

     );
}
 
export default Detil;