import React from "react"
const Galery = ({atribut})=>{
    return(

        <div className="card" style={{border:"solid 1px grey", padding:"5px",}}>
            <img src={atribut.gambar} className="card-img-top " alt=""/>
            <div className="card-body " >
                <h5 className="card-title text-black-800 font-bold">{atribut.title}</h5>
                <p className="card-text text-red-500 text-lg mt-2">{atribut.potongan}</p>
                <p className="card-text text-green-500 text-lg bold mb-2">{atribut.harga}</p>
                <a href="" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

    )
}
export default Galery