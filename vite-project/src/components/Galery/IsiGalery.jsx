import './IsiGalery.css'
import Promo from '../Promo/Promo'
import Navbar from '../Header/Navbar'
const IsiGalery = () =>{
    return(
        <div>
        <Navbar/>
        <Promo/>
        <main  className='mt-5 p-10'>
            <section class="ndas">
                <h3>G</h3>
                <h3>A</h3>
                <h3>L</h3>
                <h3>E</h3>
                <h3>R</h3>
                <h3>Y</h3>
            </section>
            <p>UmegaStudio:alls photo from Umega</p>
            <section class="kotak">
                <section class="poto">
                    <img src="satu.jpg" alt=""/>
                    <img src="tito.jpg" alt=""/>
                    <img src="romi.jpg" alt=""/>
                    <img src="polisi.jpg" alt=""/>
                    <img src="5.jpg" alt=""/>
                </section>

                <section class="poto">
                    <img src="manten.jpg" alt=""/>
                    <img src="modelproduct" alt=""/>
                    <img src="family1.jpg" alt=""/>
                    <img src="1111.jpg" alt=""/>
                    <img src="dua.jpg" alt=""/>
                </section>

                <section class="poto">
                    <img src="gandrung.jpg" alt=""/>
                    <img src="karyawan.jpg" alt=""/>
                    <img src="aku.jpg" alt=""/>
                    <img src="bajuadat.jpg" alt=""/>
                    
                </section>
            </section>
            <p class="tombol"><a href="https://www.freepik.com/">More</a></p>
        </main>

    </div>
    )
}
export default IsiGalery