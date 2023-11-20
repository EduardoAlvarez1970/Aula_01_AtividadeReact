import "./styles.css"
import image from "../../images/img1.jpg";
import onda from "../../images/Wave.png";

export function Home(){

    return(
    <>
        <main>

            <img id="img1" src={image} alt="img1" />

            <div id="main-text" >
                <h1>O seu próximo <span>destino</span> pode estar aqui...</h1>
            </div>

            <div id="middle-text">
                <p>Aqui você encontra uma seleção de <b>pacotes completos</b> para as suas férias!</p>
                <p>No <b>ConnectFlight</b> você encontra pacotes de viagens nacionais e internacionais que incluem: passagens aéreas, hotéis, café da manhã, e até seguro viagem com <b>preços arrasadores!</b></p>
            </div>

            <div id="bottom-text" >
                <p>Se você ainda não tem um destino definido, confira nossa seção de ofertas.</p>
            </div>

        </main>

        <footer>
            <div id="line"><hr /></div>
        
            <div>
                <a className="destinos" href="">Destinos</a>
                <a className="ofertas" href="">Ofertas</a>
                <a className="contato" href="">Contato</a>
            </div>
            
            <img id="img2" src={onda} alt="onda" />


        </footer>
        
        </>

    )
}
    