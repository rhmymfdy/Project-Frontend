const Heading = ({atribut}) => {
    const gantiOke = (e) =>{
        const jabatan = e.target.previousElementSibling
        const nama = jabatan.previousElementSibling
        jabatan.textContent = atribut.jabatan1
        nama.textContent = atribut.nama1

        console.log(atribut)
        
    }
    return ( 
            <div className="col-lg-3 helm">
                    <img src={atribut.GAMBAR} className="heading" alt="" />
                    <h2 className="fw-normal nama">{atribut.NAMA}</h2>
                    <p>{atribut.JABATAN}</p>
                    <p onClick={gantiOke} className="btn btn-secondary">view detil</p>
            </div>
     );
}
 
export default Heading;