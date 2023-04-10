import { useState } from "react";
import Galery from "./ChardPackage";


const User =()=>{
    const [atribut,setAtribut] = useState ([{
        "gambar":"./4.JPG",
            "title" :"FOTO DI BUKIT",
            "potongan":"Rp.12.000", 
            "harga":"Rp.10.000",
        },
        {
            "gambar":"./6.JPG",
            "title" :"FOTO PROFIL",
            "potongan":"Rp.12.000", 
            "harga":"Rp.10.000",
        },
        {
            "gambar":"./8.JPG",
            "title" :"FOTO ESTETIK",
            "potongan":"Rp.12.000", 
            "harga":"Rp.10.000",
        },
        {
            "gambar":"./10.JPG",
            "title" :"FOTO NGESIPP",
            "potongan":"Rp.12.000", 
            "harga":"Rp.10.000",
        },
        {
            "gambar":"./123.JPG",
            "title" :"FOTO DI BUKIT",
            "potongan":"Rp.12.000", 
            "harga":"Rp.10.000",
        },
        {
            "gambar":"./321.jpg",
            "title" :"FOTO DI SAWAH",
            "potongan":"Rp.12.000", 
            "harga":"Rp.10.000",
        }
    ])
    const clikPromo =()=>{8
        const atribut2 = [{
            "gambar":"./4.JPG",
            "title" :"FOTO DI BUKIT",
            "potongan":"Rp.12.000", 
            "harga":"Rp.10.000",
        },
        {
            "gambar":"./6.JPG",
            "title" :"FOTO DI BUKIT",
            "potongan":"Rp.12.000", 
            "harga":"Rp.10.000",
        },
        {
            "gambar":"./8.JPG",
            "title" :"FOTO DI BUKIT",
            "potongan":"Rp.12.000", 
            "harga":"Rp.10.000",
        },
        {
            "gambar":"./10.JPG",
            "title" :"FOTO DI BUKIT",
            "potongan":"Rp.12.000", 
            "harga":"Rp.10.000",
        },
        {
            "gambar":"./123.JPG",
            "title" :"FOTO DI BUKIT",
            "potongan":"Rp.12.000", 
            "harga":"Rp.10.000",
        },
        {
            "gambar":"./321.jpg",
            "title" :"FOTO DI BUKIT",
            "potongan":"Rp.12.000", 
            "harga":"Rp.10.000",
        }
        ]
        setAtribut( atribut2)
    }

    const clikFamili =()=>{
        const atribut3 = [{
            "gambar":"./1212.jpg",
            "title" :"FOTO DI BUKIT",
            "potongan":"Rp.30.000", 
            "harga":"Rp.20.000",
        },
        {
            "gambar":"./3.JPG",
            "title" :"FOTO DI BUKIT",
            "potongan":"Rp.20.000", 
            "harga":"Rp.10.000",
        },
        {
            "gambar":"./5.JPG",
            "title" :"FOTO DI BUKIT",
            "potongan":"Rp.20.000", 
            "harga":"Rp.10.000",
        },
        {
            "gambar":"./7.JPG",
            "title" :"FOTO DI BUKIT",
            "potongan":"Rp.20.000", 
            "harga":"Rp.10.000",
        },
        {
            "gambar":"./9.JPG",
            "title" :"FOTO DI BUKIT",
            "potongan":"Rp.20.000", 
            "harga":"Rp.10.000",
        },
        {
            "gambar":"./321.jpg",
            "title" :"FOTO DI BUKIT",
            "potongan":"Rp.20.000", 
            "harga":"Rp.10.000",
        }
        ]
        setAtribut( atribut3)
    }

    return (
            <div className="bungkus">
                <div className="grid" id="grid">
                    <ul style={{cursor : "pointer"}}>
                        <li className="list-judul">CATEGORIES</li>
                        <li className="li-list" onClick={clikPromo}>PROMO</li>
                        <li className="li-list" onClick={clikFamili}>FAMILI</li>
                        <li className="li-list" onClick={clikPromo}>PREWEDING</li>
                        <li className="li-list" onClick={clikFamili}>WISUDA STUDIO</li>
                        <li className="li-list" onClick={clikPromo}>CORPORATE</li>
                        <li className="li-list" onClick={clikFamili}>FOTO PERSONAL</li>
                    </ul>
                    
                </div>
                <div className="grid1" id="grid1">
                    <div className="name">
                        <h3>Galery Example</h3>
                    </div>

                    <div className="grid2" id="grid2" >
                    {
                        atribut.map((nv,indexlp) => (
                            <Galery key={indexlp} atribut={nv} />
                        ))
                    }
                    </div>
                </div> 
            </div>
           
        
    )
}

export default User;