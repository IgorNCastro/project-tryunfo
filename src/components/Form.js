import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div>
        <form>
          <h2>Adicionar nova carta</h2>
          <label htmlFor="card-name">
            Nome
            <br />
            <input
              type="text"
              name="cardName"
              id="card-name"
              placeholder="Nome da Carta"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
              required
            />
          </label>
          <br />
          <label htmlFor="card-description">
            Descrição
            <br />
            <textarea
              name="cardDescription"
              id="card-description"
              placeholder="Descrição da Carta"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
              required
            />
          </label>
          <br />
          <label htmlFor="card-att-01">
            Ataque
            <input
              type="number"
              name="cardAttr1"
              id="card-att-01"
              placeholder="Valor de Ataque"
              data-testid="attr1-input"
              min="0"
              max="90"
              value={ cardAttr1 }
              onChange={ onInputChange }
              required
            />
          </label>
          <br />
          <label htmlFor="card-att-02">
            Defesa
            <input
              type="number"
              name="cardAttr2"
              id="card-att-02"
              placeholder="Valor de Defesa"
              data-testid="attr2-input"
              min="0"
              max="90"
              value={ cardAttr2 }
              onChange={ onInputChange }
              required
            />
          </label>
          <br />
          <label htmlFor="card-att-03">
            Físico
            <input
              type="number"
              name="cardAttr3"
              id="card-att-03"
              placeholder="Valor de Defesa"
              data-testid="attr3-input"
              min="0"
              max="90"
              value={ cardAttr3 }
              onChange={ onInputChange }
              required
            />
          </label>
          <br />
          <label htmlFor="card-image">
            Imagem
            <input
              type="text"
              name="cardImage"
              id="card-image"
              placeholder="Imagem da Carta"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
              required
            />
          </label>
          <br />
          <label htmlFor="rare-select">
            Raridade:
            <select
              id="rare-select"
              name="cardRare"
              data-testid="rare-input"
              onChange={ onInputChange }
              value={ cardRare }
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          <br />
          {
            hasTrunfo
              ? <p>Você já tem um Super Trunfo em seu baralho</p>
              : <label htmlFor="check">
                Super Trunfo
                <input
                  type="checkbox"
                  id="check"
                  name="cardTrunfo"
                  data-testid="trunfo-input"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
                </label>
          }
          <div>
            <button
              type="submit"
              name="save-button"
              data-testid="save-button"
              disabled={ isSaveButtonDisabled }
              onClick={ onSaveButtonClick }
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
