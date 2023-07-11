import { useState } from "react";

const CardOne = () => {

  const [image, setImage] = useState(['bajuadat.jpg','satu.jpg', 'family2.jpg', 'bajuadat.jpg','satu.jpg','family2.jpg'])

  const gantiSolo =() =>{
    setImage(['romi.jpg','tito.jpg','karyawan.jpg','manten.jpg','IMG_4747.JPG','gandrung.jpg',])
  }

  const gantiCouple =() =>{
    setImage(['bajuadat.jpg','bajuadat.jpg','bajuadat.jpg','bajuadat.jpg','bajuadat.jpg','bajuadat.jpg',])
  }

  const gantiFamily =() =>{
    setImage(['family2.jpg','polisi.jpg','dua.jpg','family1.jpg','keluarga.jpg','tiga.jpg',])
  }

  const All =() =>{
    setImage(['bajuadat.jpg','satu.jpg', 'modelproduct.jpg', 'keluarga.jpg','polisi.jpg','family1.jpg'])
  }

  
  

  
    return ( 
        <div>
            
            <section className="bg-white dark:bg-gray-900 h-full">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                <h1 className="mt-20 mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">UMEGA STUDIO COMPANY</h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Foto bersama keluarga atau bersama pasangan menjadi lebih indah di Umega Studio</p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                
                </div>
            </div>
    
            </section>
            <div>
                
<div>
<div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
    <button onClick={All} type="button" class="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All categories</button>
    <button  onClick={gantiSolo} type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Solo</button>
    <button onClick={gantiCouple} type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Couple</button>
    <button onClick={gantiFamily} type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800">Family</button>

</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 container m-auto">
  <div>
    <img className="h-auto max-w-full rounded-lg" src={image[0]} alt />
  </div>
  <div>
    <img className="h-auto max-w-full rounded-lg" src={image[1]}alt />
  </div>
  <div>
    <img className="h-auto max-w-full rounded-lg" src={image[2]} alt />
  </div>
  <div>
    <img className="h-auto max-w-full rounded-lg" src={image[3]} alt />
  </div>
  <div>
    <img className="h-auto max-w-full rounded-lg" src={image[4]}alt />
  </div>
  <div>
    <img className="h-auto max-w-full rounded-lg" src={image[5]} alt />
  </div>
  {/* <button onClick={gantiSolo}>solo</button> */}

</div>
</div>


            </div>

        </div>
     );
}
 
export default CardOne;