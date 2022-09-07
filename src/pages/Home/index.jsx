import React from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import dadosIniciais from '../../data/dados_iniciais.json';
import Carousel from '../../components/Carousel';

function Home() {
  const firstCategoria = dadosIniciais.categorias.slice(0, 1)[0];
  const otherCategories = dadosIniciais.categorias.slice(1, 5);

  return (
    <div style={{ background: '#141414' }}>
      <Menu />

      <BannerMain
        videoTitle={firstCategoria.videos[0].titulo}
        url={firstCategoria.videos[0].url}
        videosDescription="O Que e Front End ?"
      />

      <Carousel
        ignoreFirstVideo
        category={firstCategoria}
      />

      {otherCategories.map((category) => <Carousel category={category} />)}
    </div>
  );
}

export default Home;
