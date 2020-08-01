import React, { useState } from 'react'
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField';

function CadastroCategoria() {

  const valoresInicias = {
    nome: '',
    descricao: '',
    cor: '#000'
  }

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresInicias);

  function setValue( chave, valor ) {
     setValues({
       ...values,
       [chave] : valor
     })
  }

  function handleChange(e) {
    setValue(e.target.getAttribute('name'), e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Voce tentou enviar o Form')

    setCategorias([
       ...categorias,
       values
    ]);

   setValues(valoresInicias)
  }

  return (
    <PageDefault>
      <h1> Pagina de Cadastro de Categoria : {valoresInicias.nome}  </h1>

      <form onSubmit= { (e) => handleSubmit(e)} >

         <FormField
            type="text"
            name="nome"
            label="Nome da Categoria"
            value={values.nome}
            onChange={handleChange} 
         />

        <div>
        <label>
            Descricao
                    <textarea 
                    type="text" 
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange} 
              ></textarea>
          </label>
        </div>

        <FormField
            type="color"
            name="cor"
            label="Cor:"
            value={values.cor}
            onChange={handleChange} 
         />
        <button> Cadastrar </button>
      </form>

      <ul>
         {categorias.map((categoria, index) => {
           return (
             <li key={index}  >
                {categoria.nome}
             </li>
           )
         })}
      </ul>

      <Link to="/">
        Go to Home
           </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;
