import './card-evento.estilos.css'

export function CardEvento({ evento }) {
  return (
    <div className='card-evento'>
      <img className='imagem-card' src={evento.capa} alt={evento.titulo}/>
      <div className='corpo'>
        <p className='tag'>
          {evento.tema.nome}
        </p>
        <h4 className='titulo'>
          {evento.titulo}
        </h4>
        <p className='data'>
          {evento.data.toLocaleDateString('pt-BR')}
        </p>
          <p>
              ⌖ {evento.local}
          </p>
      </div>
    </div>
  )
}