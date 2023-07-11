import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Contact  = () => {

  const navigasi = useNavigate()
  const [email, setEmail] = useState('')
  const [pesan, setPesan] = useState('')

  const KirimPesan = async(e)=>{
    e.preventDefault()
    try {
      await axios.post('http://localhost:5000/contact',{
                email: email,
                pesan:pesan
            })

            alert("BERHASIL MENGIRIM PESAN")

        
            navigasi('/Kontak')
    } catch (error) {
      console.log(error)
    }
  }

    return ( 
        
    
        <div className=" m-auto ">
<section className="bg-white dark:bg-gray-900 pt-48 pb-20">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md ">
    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
    <form onSubmit={KirimPesan} className="space-y-8">
      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
        <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
        <textarea value={pesan} onChange={(e)=> setPesan(e.target.value)} id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..." defaultValue={""} />
      </div>
      <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
    </form>
  </div>
</section>

</div>


     );
}
 
export default Contact 
