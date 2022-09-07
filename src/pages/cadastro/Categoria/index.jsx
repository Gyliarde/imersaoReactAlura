/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresInicias = {
    titulo: '',
    descricao: '',
    cor: '#000',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresInicias);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(e) {
    setValue(e.target.getAttribute('name'), e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log('values',values)

    setCategorias([
      ...categorias,
      values,
    ]);

    setValues(valoresInicias);
  }

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = 'https://devflixdepalura.herokuapp.com/categorias';
      fetch(URL)
        .then(async (respostaDoServer) => {
          if (respostaDoServer.ok) {
            const resposta = await respostaDoServer.json();
            setCategorias(resposta);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);

  return (
    <PageDefault>
      <h1>
        {' '}
        Pagina de Cadastro de Categoria :
        {valoresInicias.nome}
      </h1>

      <form onSubmit={(e) => handleSubmit(e)}>

        <FormField
          type="text"
          name="titulo"
          label="Nome da Categoria"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          type="textarea"
          name="descricao"
          label="Descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          type="color"
          name="cor"
          label="Cor:"
          value={values.cor}
          onChange={handleChange}
        />

        <Button type="submit"> Salvar Categoria </Button>
      </form>

      <ul>
        {categorias.map((categoria) => (
          <li key={categoria.id}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Go to Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
