import CardsDisplay from "../../components/CardsDisplay/CardsDisplay";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import c1 from "../../assets/img/c1.jpg";
import c2 from "../../assets/img/c2.jpg";
import c3 from "../../assets/img/c3.jpg";
import c4 from "../../assets/img/c4.png";
import c5 from "../../assets/img/c5.webp";
import MainCard from "../../components/MainCard/MainCard";

export default function Home() {

    return (
        <main>
            <Header />
            <Carousel title={"O mundo mágico dos pokemons!"} slots={5} images={[c1, c2, c3, c4, c5]} />
            <MainCard />
            <CardsDisplay />

            <Footer />
        </main>
    );
}