import React from 'react';

export default class Searchbar extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          data-testid="home-initial-message"
          placeholder="Digite algum termo de pesquisa ou escolha uma categoria."
        />
        <input type="button" value="Busca" />
      </div>
    );
  }
}
