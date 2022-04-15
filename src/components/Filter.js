import React from 'react';
import PropTypes from 'prop-types';

class Filter extends React.Component {
  render() {
    const {
      nameFilter,
      rareFilter,
      cardTrunfoFilter,
      onFilterChange,
    } = this.props;

    return (
      <div className="filter-div">
        <form>
          <h3>Filtros de busca</h3>
          <input
            type="text"
            name="nameFilter"
            placeholder="Nome da Carta"
            data-testid="name-filter"
            value={ nameFilter }
            onChange={ onFilterChange }
          />
          <br />
          <select
            name="rareFilter"
            data-testid="rare-filter"
            onChange={ onFilterChange }
            value={ rareFilter }
          >
            <option>todas</option>
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
          <br />
          <div className="check-form">
            <label htmlFor="check-trunfo">
              Super Trunfo
              <input
                type="checkbox"
                id="check-trunfo"
                name="cardTrunfoFilter"
                data-testid="trunfo-filter"
                checked={ cardTrunfoFilter }
                onChange={ onFilterChange }
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

Filter.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  rareFilter: PropTypes.string.isRequired,
  cardTrunfoFilter: PropTypes.bool.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
