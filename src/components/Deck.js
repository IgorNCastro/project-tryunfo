import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Deck extends React.Component {
  render() {
    const {
      savedCards,
      deleteButtonClick,
    } = this.props;

    return (
      <div className="deck-card-design">
        {savedCards.map((item) => (
          <div key={ item.cardName }>
            <Card
              key={ item.cardName }
              cardName={ item.cardName }
              cardDescription={ item.cardDescription }
              cardAttr1={ item.cardAttr1 }
              cardAttr2={ item.cardAttr2 }
              cardAttr3={ item.cardAttr3 }
              cardImage={ item.cardImage }
              cardRare={ item.cardRare }
              cardTrunfo={ item.cardTrunfo }
            />
            <button
              className="deck-button"
              id={ item.cardName }
              type="submit"
              name="delete-button"
              data-testid="delete-button"
              onClick={ deleteButtonClick }
            >
              Excluir
            </button>
          </div>
        ))}
      </div>
    );
  }
}

Deck.propTypes = {
  savedCards: PropTypes.arrayOf(
    PropTypes.shape({
      cardName: PropTypes.string,
      cardDescription: PropTypes.string,
      cardAttr1: PropTypes.string,
      cardAttr2: PropTypes.string,
      cardAttr3: PropTypes.string,
      cardImage: PropTypes.string,
      cardRare: PropTypes.string,
      cardTrunfo: PropTypes.bool,
    }),
  ).isRequired,
  deleteButtonClick: PropTypes.func.isRequired,
};

export default Deck;
