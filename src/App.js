import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Deck from './components/Deck';
import Filter from './components/Filter';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.checkButton = this.checkButton.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.deleteButtonClick = this.deleteButtonClick.bind(this);
    this.onFilterChange = this.onFilterChange.bind(this);
    this.filterCards = this.filterCards.bind(this);
    this.onTrunfoChange = this.onTrunfoChange.bind(this);
    this.onTrunfoFilterChange = this.onTrunfoFilterChange.bind(this);
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
      nameFilter: '',
      rareFilter: 'todas',
      cardTrunfoFilter: false,
      savedCards: [],
      deckOfCards: [],
    };
  }

  // Código abaixo retirado de dúvida postada no Slack do colega Yuri Resende, respondidos pelos colegas Italo Rockenbach e Giuseppe Nunes.
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
    const { cardName, cardDescription, cardImage, cardRare,
      cardAttr1, cardAttr2, cardAttr3, cardTrunfo } = this.state;

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
      cardTrunfo };

    // Extraído de https://stackoverflow.com/questions/26505064/what-is-the-best-way-to-add-a-value-to-an-array-in-state
    this.setState((previousState) => ({
      savedCards: [...previousState.savedCards, currentCard],
      deckOfCards: [...previousState.savedCards, currentCard],
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

  onFilterChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      this.filterCards();
    });
  }

  onTrunfoChange({ target }) {
    const { name } = target;
    const value = target.checked;
    this.setState({
      [name]: value,
    }, () => {
      this.onTrunfoFilterChange();
    });
  }

  onTrunfoFilterChange() {
    const { cardTrunfoFilter, deckOfCards } = this.state;

    if (cardTrunfoFilter === true) {
      const filterTrunfo = deckOfCards.filter((e) => e.cardTrunfo === true);
      return this.setState({
        savedCards: filterTrunfo,
      });
    }
    this.setState({
      savedCards: deckOfCards,
    });
  }

  checkButton() {
    const { cardName, cardDescription, cardImage, cardRare,
      cardAttr1, cardAttr2, cardAttr3 } = this.state;
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
    const { savedCards } = this.state;
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

  filterCards() {
    const { nameFilter, rareFilter, deckOfCards } = this.state;
    if (nameFilter !== '') {
      const filterCards = deckOfCards.filter((e) => e.cardName.includes(nameFilter));
      this.setState({
        savedCards: filterCards,
      });
    }
    if (nameFilter === '') {
      this.setState({
        savedCards: deckOfCards,
      });
    }
    if (rareFilter !== 'todas') {
      const filterRare = deckOfCards.filter((e) => e.cardRare === rareFilter);
      this.setState({
        savedCards: filterRare,
      });
    }
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
      nameFilter,
      rareFilter,
      cardTrunfoFilter,
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
          <Filter
            onFilterChange={ this.onFilterChange }
            onTrunfoChange={ this.onTrunfoChange }
            nameFilter={ nameFilter }
            rareFilter={ rareFilter }
            cardTrunfoFilter={ cardTrunfoFilter }
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
