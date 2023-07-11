import React,{ useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import apis from "../../Api/shopApi.jsx";

const AddFrame = () =>{
    const [nama, setNama] = useState("")
    const [ukuran, setUkuran] = useState("")
    const [harga, setHarga] = useState("")
    const [stok, setStok] = useState("")
    const [deskripsi, setDeskripsi] = useState("")
    const [file,setFile] =useState("")
    const [preview,setPreview] =useState("")
    const navigate = useNavigate()

       const loadImage = (e) =>{
            const image = e.target.files[0]
            setFile(image);
            setPreview(URL.createObjectURL(image))
       }

    const postFrame =async (e) =>{
        if (!nama || !ukuran || !harga  || !stok || !deskripsi|| !file) {
            alert("Data Masih Ada Yang Kosong")
        }else{
        e.preventDefault();
        const formData = new FormData();
        formData.append("nama",nama)
        formData.append("ukuran",ukuran)
        formData.append("harga",harga)
        formData.append("stok",stok)
        formData.append("deskripsi",deskripsi)
        formData.append("image",file)
        console.log(nama)
        console.log(ukuran)
        console.log(harga)
        console.log(stok)
        console.log(deskripsi)
        
        console.log(formData)
        try {
           await apis.postFrame(formData)
            navigate('/frame')
            alert("berhasil menambahkan")
        } catch (error) {
            console.log(error)
        }
        }
    }

    return(
        <div className="p-10 mt-20 m-auto w-96 rounded-lg bg-gray-100 shadow-lg "> 
            <form onSubmit={postFrame}>
                <div class="relative z-0 w-full mb-6 group">
                       <label for="small" class="block mb-2 text-sm text-gray-400">Category select</label>
                        <select id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 
                        rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 
                        dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
                        dark:focus:border-blue-500" value={ukuran} onChange={(e) => setUkuran(e.target.value)}>
                            <option selected>Pilih Ukuran</option>
                            <option value="10RS">10RS</option>
                            <option value="12RS">12RS</option>
                            <option value="16RS">16RS</option>
                            <option value="20RS">20RS</option>
                        </select>
                    </div>
                <div class="relative z-0 w-full mb-6 group">
                    <input
                        type="text" name="text" id="text" 
                        class="block py-2.5 px-0 w-full text-sm 
                        text-gray-900 bg-transparent border-0 border-b-2 
                        border-gray-300 appearance-none dark:text-gray-900 
                        dark:border-gray-600 dark:focus:border-blue-500 
                        focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        value={nama} onChange={(e) => setNama(e.target.value)}
                    />
                    <label for="text" 
                    class="peer-focus:font-medium absolute text-sm text-gray-500
                    dark:text-gray-400 duration-300 transform -translate-y-6 
                    scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 
                    peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                    peer-focus:scale-75 peer-focus:-translate-y-6">Title Frame</label>
                </div>

                <div class="relative z-0 w-full mb-6 group">
                    <input
                        type="number" name="text" id="text" 
                        class="block py-2.5 px-0 w-full text-sm 
                        text-gray-900 bg-transparent border-0 border-b-2 
                        border-gray-300 appearance-none dark:text-gray-900 
                        dark:border-gray-600 dark:focus:border-blue-500 
                        focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        value={harga} onChange={(e) => setHarga(e.target.value)}
                    />
                    <label for="text" 
                    class="peer-focus:font-medium absolute text-sm text-gray-500
                    dark:text-gray-400 duration-300 transform -translate-y-6 
                    scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 
                    peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                    peer-focus:scale-75 peer-focus:-translate-y-6">Harga</label>
                </div>

                <div class="relative z-0 w-full mb-6 group">
                    <input
                        type="text" name="text" id="text" 
                        class="block py-2.5 px-0 w-full text-sm 
                        text-gray-900 bg-transparent border-0 border-b-2 
                        border-gray-300 appearance-none dark:text-gray-900 
                        dark:border-gray-600 dark:focus:border-blue-500 
                        focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        value={stok} onChange={(e) => setStok(e.target.value)}
                    />
                    <label for="text" 
                    class="peer-focus:font-medium absolute text-sm text-gray-500
                    dark:text-gray-400 duration-300 transform -translate-y-6 
                    scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 
                    peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                    peer-focus:scale-75 peer-focus:-translate-y-6">Stok</label>
                </div>

                <div class="relative z-0 w-full mb-6 group">
                    <input
                        type="text" name="text" id="text" 
                        class="block py-2.5 px-0 w-full text-sm 
                        text-gray-900 bg-transparent border-0 border-b-2 
                        border-gray-300 appearance-none dark:text-gray-900 
                        dark:border-gray-600 dark:focus:border-blue-500 
                        focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)}
                    />
                    <label for="text" 
                    class="peer-focus:font-medium absolute text-sm text-gray-500
                    dark:text-gray-400 duration-300 transform -translate-y-6 
                    scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 
                    peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
                    peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                    peer-focus:scale-75 peer-focus:-translate-y-6">Deskripsi</label>
                </div>

                <div className="relative z-0 w-full mb-6 group">
                    <label className="label">Image</label>
                    <div className="control">
                        <div className="file">
                            <label className="file-label">
                                <input type="file" className="file-input" onChange={loadImage}/>
                                <span className="file-cta">
                                    <span className="file-label"></span>
                                </span>
                            </label>
                        </div>
                    </div>
                    
                </div>

                {preview ? (
                    <figure className="image w-full mb-5">
                        <img src={preview} alt="Preview Image" />
                    </figure>
                ): (
                    ""
                )}

           
            
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
    )
}

export default AddFrame