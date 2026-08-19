import './App.css'
import { FormularioDeEvento } from "./components/FormularioDeEvento";
import { Tema } from "./components/Tema/index.jsx";
import { Banner } from "./components/Banner/index.jsx";
import { CardEvento } from "./components/CardEvento/index.jsx";
import { useEffect, useState } from "react";
import { Footer } from "./components/Footer/index.jsx";
import { Header } from "./components/Header/index.jsx";

function App() {
  const temas = [
    {
      id: 1,
      nome: 'Transatlântico'
    },
    {
      id: 2,
      nome: 'Navio de guerra'
    },
    {
      id: 3,
      nome: 'Cargueiro'
    },
    {
      id: 4,
      nome: 'Navio mercante'
    },
    {
      id: 5,
      nome: 'Navio de passageiros'
    },
    {
      id: 6,
      nome: 'Submarino'
    },
    {
      id: 7,
      nome: 'Outros'
    }
  ]

  const [eventos, setEventos] = useState(() => {
    const eventosSalvos = localStorage.getItem('wreckatlas-navios')

    if (eventosSalvos) {
      const eventosConvertidos = JSON.parse(eventosSalvos)

      return eventosConvertidos.map((evento) => ({
        ...evento,
            data: new Date(evento.data)
      }))
    }

        return [
      {
        capa: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/RMS_Titanic_3.jpg?utm_source=pt.wikipedia.org&utm_campaign=imageinfo&utm_content=original',
        tema: temas[0],
        data: new Date(1912, 3, 15 ),
        titulo: 'RMS Titanic',
        local: 'Atlântico Norte'
      }
    ]
  })

  useEffect(() => {
    localStorage.setItem(
        'wreckatlas-navios',
        JSON.stringify(eventos)
    )
  }, [eventos]);

  function adicionarEvento(evento) {
    setEventos([...eventos, evento])
  }

  return (
    <main>
      <Header />
      <Banner />
        <FormularioDeEvento temas={temas} aoSubmeter={adicionarEvento}/>
      <section className='container'>

        {temas.map(function (tema) {
          if (!eventos.some(function (evento) {
            return evento.tema.id == tema.id
          })) {
            return null
          }
          return (
            <section key={tema.id}>
              <Tema tema={tema} />
              <div className='eventos'>
                {eventos.filter(function (evento) {
                  return evento.tema.id == tema.id
                })
                .map(function (evento, indice) {
                  return <CardEvento evento={evento} key={indice} />
                })}
              </div>
            </section>
          )
        })}
      </section>
      <Footer />
    </main>
  )
}


export default App
