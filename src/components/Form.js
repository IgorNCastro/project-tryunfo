import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <h2>Adicionar nova carta</h2>
          <label htmlFor="card-name">
            Nome
            <br />
            <input
              type="text"
              name="nome"
              id="card-name"
              placeholder="Nome da Carta"
              data-testid="name-input"
              required
            />
          </label>
          <br />
          <label htmlFor="card-description">
            Descrição
            <br />
            <textarea
              name="description"
              id="card-description"
              placeholder="Descrição da Carta"
              data-testid="description-input"
              required
            />
          </label>
          <br />
          <label htmlFor="card-att-01">
            Ataque
            <input
              type="number"
              name="att-01"
              id="card-att-01"
              placeholder="Valor de Ataque"
              data-testid="attr1-input"
              min="0"
              max="90"
              required
            />
          </label>
          <br />
          <label htmlFor="card-att-02">
            Defesa
            <input
              type="number"
              name="att-02"
              id="card-att-02"
              placeholder="Valor de Defesa"
              data-testid="attr2-input"
              min="0"
              max="90"
              required
            />
          </label>
          <br />
          <label htmlFor="card-att-03">
            Físico
            <input
              type="number"
              name="att-03"
              id="card-att-03"
              placeholder="Valor de Defesa"
              data-testid="attr3-input"
              min="0"
              max="90"
              required
            />
          </label>
          <br />
          <label htmlFor="card-image">
            Imagem
            <input
              type="text"
              name="imagem"
              id="card-image"
              placeholder="Imagem da Carta"
              data-testid="image-input"
              required
            />
          </label>
          <br />
          Raridade
          <select
            name="raridade"
            data-testid="rare-input"
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
          <br />
          <label htmlFor="check">
            <input
              type="checkbox"
              id="check"
              name="checkbox"
              data-testid="trunfo-input"
              required
            />
            Super Trunfo
          </label>
          <div>
            <button type="submit" name="salvar" data-testid="save-button">Salvar</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
