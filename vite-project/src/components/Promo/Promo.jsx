import React from "react";

const Promo = ()=>{
    return(

        <div className="carousel relative container mx-auto" style={{maxWidth: 1600}}>
        <div className=" carousel-inner relative overflow-hidden w-full">
            {/*Slide 1*/}
            <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden defaultChecked="checked" />
            <div className="carousel-item absolute opacity-0 mt-96 " style={{height: '50vh'}}>
            <div className="h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right">
                <img className="relative" src="family1.jpg" alt="" />
                <div className="container absolute z-50 mx-auto">
                <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                    <p className="text-white text-2xl my-4 " >Promo Hari Ini </p>
                    <a className="text-white text-xl inline-block no-underline border-b border-white-900 leading-relaxed hover:text-white hover:border-white" href="#">view product</a>
                </div>
                </div>
                
            </div>
            </div>
            <label htmlFor="carousel-3" className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
            <label htmlFor="carousel-2" className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900 leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
            {/*Slide 2*/}
            <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden />
            <div className="carousel-item absolute opacity-0 bg-cover bg-right" style={{height: '50vh'}}>
            <div className=" h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right" >
                <img className="relative" src="family2.jpg" alt="" />
                <div className="absolute z-50 container mx-auto">
                <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                    <p className="text-black text-2xl my-4">Real Bamboo Wall Clock</p>
                    <a className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black" href="#">view product</a>
                </div>
                </div>
            </div>
            </div>
            <label htmlFor="carousel-1" className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
            <label htmlFor="carousel-3" className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
            {/*Slide 3*/}
            <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden />
            <div className="carousel-item absolute opacity-0" style={{height: '50vh'}}>
            <div className=" h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-bottom">
                <img className="relative" src="modelproduct.jpg" alt="" />
                <div className="absolute z-50 container mx-auto">
                <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-6 tracking-wide">
                    <p className="text-black text-2xl my-4">Brown and blue hardbound book</p>
                    <a className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black" href="#">view product</a>
                </div>
                </div>
            </div>
            </div>
            <label htmlFor="carousel-2" className="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 left-0 my-auto">‹</label>
            <label htmlFor="carousel-1" className="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-gray-900  leading-tight text-center z-10 inset-y-0 right-0 my-auto">›</label>
        </div>
        </div>

    )
}

export default Promo