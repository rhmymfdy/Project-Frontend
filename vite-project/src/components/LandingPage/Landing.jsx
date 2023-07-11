import { Link } from "react-router-dom";
const LandingPages = () => {
    return ( 
        <div>
            
<section className="bg-center bg-cover h-screen bg-no-repeat bg-[url('family2.jpg')] bg-gray-700 bg-blend-multiply">
  <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
    <img  className="w-36 opacity-70 m-auto"  src="logo.png" alt="" />
    <h1 className="mb-4  text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl opacity-50">WELLCOME TO UMEGA'S STUDIO COMPANY</h1>
    <p className="mt-5 mb-10 text-lg font-normal italic text-gray-300 lg:text-xl sm:px-16 lg:px-48">"Inovasi. Keunggulan. Kepercayaan. Di Umega's Studio, kami menggabungkan nilai-nilai ini untuk memberikan layanan terbaik kepada pelanggan kami."</p>
    <div >
        <Link className="text-blue-700 w-64 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800" to={'/Login'}>Logn In</Link>
        <Link  className="text-blue-700 w-64 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800" to={'/SignUp'}>Sign Up</Link>
    </div>
    
  </div>
</section>


        </div>
     );

}
 
export default LandingPages;