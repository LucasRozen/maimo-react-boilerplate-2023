import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import CardsContainer from '../CardsContainer/CardsContainer';
import Cta from '../Cta/Cta';
import Form from '../Form/Form';
import { Element } from 'react-scroll';

const App = () => {
  return (
    <div className='App'>     
      <Element name="header" className="element">
        <Header />
      </Element>
      <main>
        <Element name="hero" className="element">
          <Hero 
          titulo="Cuarteto de Nos" 
          descripcion="Banda de rock alternativo originaria de Montevideo, Uruguay."
          txtBtn="Escuchá nuestra música"
          />
        </Element>
        <Element name="cardsContainer" className="element">
          <CardsContainer />
        </Element>
        <Element name="form" className="element">
          <Form />
        </Element>
        <Element name="cta" className="element">
          <Cta />
        </Element>
      </main>
      <Element name="footer" className="element">
        <Footer />
      </Element>
    </div>
  );
};

export default App;
