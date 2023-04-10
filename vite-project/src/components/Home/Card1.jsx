import { Link } from "react-router-dom";
import { useState } from "react";
import Heading from "./Heading";


const Card1 = () => {
        const [atribut, setAtribut] = useState ([
        {   
            "GAMBAR" : "./IMG_4747.JPG",
            "NAMA" : "ARIEF", 
            "JABATAN" : "MANAGER",
            "nama1" : "MR KHONEZZZ",
            "jabatan1" : "Mendapat Penghargaan The Best Manager in the World dari Duta USA, Lahir di Banyuwangi pada tanggal 14 January 2003, dan dulu bertempat di kota Los Angeles Amerika Serikat, sekarang sudah bertempat di Banyuwangi    "
        },
        {   
            "GAMBAR" : "./romi.jpg",
            "NAMA" : "JOKO", 
            "JABATAN" : "BOS",
            "nama1" : "WARASSZ",
            "jabatan1" : "Merupakan Bos dari perusahaan Umega Studio yang sudah menjadi kepala perusahaan sejak tahun 2020 diculiku sebagai The King Of Leader, Lahir pada tahun 23 Juni 2001 dan sekarang bertempat di kota Banyuangi"

        },
        {
            "GAMBAR" : "./karyawan.jpg",
            "NAMA" : "SAMSUL", 
            "JABATAN" : "KARYAWAN",
            "nama1" : "CELIBOY",
            "jabatan1" : "Merupakan Karyawan dari perusahaan Umega Studio yang sudah menjadi Karyawan sejak tahun 2020 dijuluki sebagai The King Of Admin, Lahir pada tahun 21 Juni 2001 dan sekarang bertempat di kota Banyuangi"

        },

        ]
        // setAtribut(atribut))
    )



    return ( 
        <div className="card1">
            <main >
            <div id="myCarousel" className="carousel slide satu" data-bs-ride="carousel">
                <div className="carousel-indicators ">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={0} className="active" aria-label="Slide 1" aria-current="true" />
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={1} aria-label="Slide 2" className />
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={2} aria-label="Slide 3" className />
                </div>
                <div className="carousel-inner nol">
                <div className="carousel-item active dua">
                    {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)" /></svg> */}
                    <img src="keluarga.jpg" className="lima" alt="" />
                    <div className="container mars">
                    <div className="carousel-caption text-start">
                        <h1 className="judul">Happy Family.</h1>
                        <p className="lanjutan">Some representative placeholder content for the first slide of the carousel.</p>
                        <p><a className="btn btn-lg btn-primary" href="#">Masuk Sekarang</a></p>
                    </div>
                    </div>
                </div>
                <div className="carousel-item dua">
                    <img src="bajuadat.jpg" className="lima" alt="" />
                    <div className="container mars">
                    <div className="carousel-caption">
                        <h1 className="judul">Foto Couple Sepertinya Menyenangkan.</h1>
                        <p className="lanjutan">Some representative placeholder content for the second slide of the carousel.</p>
                        <p className="mars"><a className="btn btn-lg btn-success" href="#">Ayo Segera</a></p>
                    </div>
                    </div>
                </div>
                <div className="carousel-item dua">
                    <img src="polisi.jpg" className="lima" alt="" />
                    <div className="container mars">
                    <div className="carousel-caption text-end">
                        <h1 className="judul">One more for good measure.</h1>
                        <p className="lanjutan">Some representative placeholder content for the third slide of this carousel.</p>
                        <p className="mars"><a className="btn btn-lg btn-primary" href="#">Login Untuk Memulai</a></p>
                    </div>
                    </div>
                </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* Marketing messaging and featurettes
            ================================================== */}
            {/* Wrap the rest of the page in another container to center all the content. */}
            <div className="container marketing tiga p-5 kratos">
                {/* Three columns of text below the carousel */}
                <div className="row">
                
               {
                atribut.map((v,i) => (
                    <Heading key={i} atribut={v}/>
                ))
               }

                
                </div>{/* /.row */}
                {/* START THE FEATURETTES */}
               
                
                
                <div className="row featurette">
                {/* <div className="col-md-7 ">
                    <h2 className="featurette-heading fw-normal lh-1">And lastly, this one. <span className="text-body-secondary">Checkmate.</span></h2>
                    <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
                </div> */}
                {/* <div className="col-md-5">
                    <img src="IMG_4747.JPG" className="enam" alt="" />
                </div> */}
                </div>
                <hr className="featurette-divider" />
                {/* /END THE FEATURETTES */}
            </div>{/* /.container */}
            {/* FOOTER */}
            </main>
        </div>
     );
}
 
export default Card1;