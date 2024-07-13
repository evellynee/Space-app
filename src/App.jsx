import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import bannerBackground from './assets/banner.png'
import Banner from "./componentes/Banner"
import Galeria from "./componentes/Galeria"
import fotos from "./fotos.json"
import { useEffect, useState } from "react"
import ModalZoom from "./componentes/ModalDeZoom"
import Rodape from "./componentes/Rodape"


const FundoGradiente = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
  
`

const AppContainer = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`

const Maincontainer = styled.main`
  display: flex;
  gap: 44px;
`

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
  const [filtro, setFiltro] = useState('')
  const [tag, setTag] = useState(0)
  const [fotoComZoom, setFotoComZoom] = useState(null)

  useEffect(() => {
    const fotosFiltradas = fotos.filter(foto => {
      const filtroPorTag = !tag || foto.tagId === tag;
      const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase())
      return filtroPorTag && filtroPorTitulo
    })
    
    setFotosDaGaleria(fotosFiltradas)
  }, [filtro, tag])

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      })
    }
    setFotosDaGaleria(fotosDaGaleria.map(fotoDaGaleria => {
      return {
        ...fotoDaGaleria,
        favorita: fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita
      }
    }))
  }

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho
          filtro={filtro}
          setFiltro={setFiltro}
        />
        <Maincontainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              texto="A galeria mais completa de fotos do espaço!"
              backgroundImage={bannerBackground}
            />
            <Galeria
               fotos={fotosDaGaleria}
               aoFotoSelecionada={foto => setFotoComZoom(foto)}
               aoAlternarFavorito={aoAlternarFavorito}
               setTag={setTag}
            />
          </ConteudoGaleria>
        </Maincontainer>
      </AppContainer>
      <Rodape />
      <ModalZoom
        foto={fotoComZoom}
        aoFechar={() => setFotoComZoom(null)}
        aoAlternarFavorito={aoAlternarFavorito} />
    </FundoGradiente >
  )
}

export default App
