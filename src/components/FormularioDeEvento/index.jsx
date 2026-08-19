import './formulario-de-evento.estilos.css'
import { TituloFormulario } from "../TituloFormulario";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { Label } from "../Label/index.jsx";
import {Botao} from "../Botao/index.jsx";
import {ListaSuspensa} from "../ListaSuspensa/index.jsx";

export function FormularioDeEvento({ temas, aoSubmeter }) {

  function aoFormSubmetido(formData) {
    console.log('opa', formData)
    const evento = {
      capa: formData.get('capa'),
      tema: temas.find(function (item) {
        return item.id == formData.get('tema')
      }),
      data: new Date(formData.get('dataEvento')),
      titulo: formData.get('nomeEvento'),
      local: formData.get('localEvento'),
    }

    console.log('evento =>', evento)
    aoSubmeter(evento)
  }

  return (
    <form className="form-evento" action={aoFormSubmetido}>
      <TituloFormulario>Cadastrar navio</TituloFormulario>
      <div className='campos'>
        <CampoDeFormulario>
          <Label htmlFor="nome">Qual o nome do navio?</Label>
          <CampoDeEntrada
            id="nomeEvento"
            type="text"
            placeholder='RMS Titanic'
            name='nomeEvento'
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="capa">Qual o endereço da imagem?</Label>
          <CampoDeEntrada
              id="capa"
              type="text"
              placeholder='http://...'
              name='capa'
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="nome">Data do naufrágio</Label>
          <CampoDeEntrada
            id="dataEvento"
            type="date"
            name='dataEvento'
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="nome">Local do naufrágio</Label>
          <CampoDeEntrada
              id="localEvento"
              type="text"
              placeholder='Atlântico Norte'
              name='localEvento'
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="tema">Tipo de Embarcação</Label>
          <ListaSuspensa id="tema" name="tema" itens={temas}/>
        </CampoDeFormulario>
        <div className='acoes'>
          <Botao>
            Adicionar naufrágio
          </Botao>
        </div>
      </div>
    </form>
  )
}