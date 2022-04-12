import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Deck from './components/Deck';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.checkButton = this.checkButton.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.deleteButtonClick = this.deleteButtonClick.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],
    };
  }

  // Código das linhas 34/35 e 105/109 retirado de dúvida postada no Slack do colega Yuri Resende, respondidos pelos colegas Italo Rockenbach e Giuseppe Nunes.
  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => {
      this.checkButton();
    });
  }

  onSaveButtonClick(event) {
    event.preventDefault();
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    } = this.state;

    if (cardTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    }

    const currentCard = {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
    };

    // Extraído de https://stackoverflow.com/questions/26505064/what-is-the-best-way-to-add-a-value-to-an-array-in-state
    this.setState((previousState) => ({
      savedCards: [...previousState.savedCards, currentCard],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }));
  }

  checkButton() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const attValue1 = parseInt(cardAttr1, 10);
    const attValue2 = parseInt(cardAttr2, 10);
    const attValue3 = parseInt(cardAttr3, 10);
    const maxNumber = 90;
    const maxNumberTotal = 210;
    if (cardName.length > 0 && cardDescription.length > 0 && cardImage.length > 0
      && attValue1 + attValue2 + attValue3 <= maxNumberTotal && attValue1 >= 0
      && attValue1 <= maxNumber && attValue2 >= 0 && attValue2 <= maxNumber
      && attValue3 >= 0 && attValue3 <= maxNumber && cardRare.length > 0) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  deleteButtonClick(event) {
    event.preventDefault();
    const {
      savedCards,
    } = this.state;

    const selectedCard = savedCards.find((item) => item.cardName === event.target.id);
    if (selectedCard.cardTrunfo) {
      this.setState({
        hasTrunfo: false,
      });
    }

    for (let i = 0; i < savedCards.length; i += 1) {
      if (savedCards[i].cardName === event.target.id) {
        savedCards.splice(i, 1);
      }
    }
    this.setState({
      savedCards,
    });
  }

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
      savedCards,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo NBA</h1>
        <div className="container">
          <Form
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
          />
          <div className="basketball">
            <div className="ball">
              <div className="lines" />
            </div>
            <div className="shadow" />
          </div>
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
          <Deck
            savedCards={ savedCards }
            deleteButtonClick={ this.deleteButtonClick }
          />
        </div>
      </div>
    );
  }
}

export default App;
