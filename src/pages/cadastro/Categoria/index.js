import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const valoresInicias = {
    nome: '',
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
    setCategorias([
      ...categorias,
      values,
    ]);

    setValues(valoresInicias);
  }

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
          name="nome"
          label="Nome da Categoria"
          value={values.nome}
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

      </form>

      <ul>
        {categorias.map((categoria, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${index} + ${categoria.name}`}>
            {categoria.nome}
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
