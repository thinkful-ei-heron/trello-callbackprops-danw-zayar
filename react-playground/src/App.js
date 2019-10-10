import React from 'react';
// import Card from './composition/Card'
import List from './composition/List';

export default class App extends React.Component {
  state = {
    lists: [
      {
        id: '1',
        header: 'First list',
        cardIds: ['a', 'b', 'e', 'f', 'g', 'j', 'l', 'm']
      },
      {
        id: '2',
        header: 'Second list',
        cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k']
      },
      {
        id: '3',
        header: 'Third list',
        cardIds: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm']
      },
      {
        id: '4',
        header: 'Fourth list',
        cardIds: ['l', 'm']
      }
    ],
    allCards: {
      a: { id: 'a', title: 'First card', content: 'lorem ipsum' },
      b: { id: 'b', title: 'Second card', content: 'lorem ipsum' },
      c: { id: 'c', title: 'Third card', content: 'lorem ipsum' },
      d: { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
      e: { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
      f: { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
      g: { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
      h: { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
      i: { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
      j: { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
      k: { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
      l: { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
      m: { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' }
    }
  };

  omit(obj, keyToOmit) {
    return Object.entries(obj).reduce(
      (newObj, [key, value]) => (key === keyToOmit ? newObj : { ...newObj, [key]: value }),
      {}
    );
  }

  handleDelete = cardId => {
    //console.log(this.state.allCards);
    const newCards = this.omit(this.state.allCards, cardId);

    // let newCards = this.state.allCards.filter(card => card.id !== cardId);

    const newLists = this.state.lists.map(list => {
      list.cardIds = list.cardIds.filter(id => id !== cardId);
      return list;
    });

    this.setState({
      allCards: newCards,
      lists: newLists
    });
  };

  handleAddNew = listId => {
    const newRandom = this.newRandomCard();
    const newRandomId = newRandom.id;

    let newCards = {};
    newCards = {
      ...this.state.allCards
    };
    newCards[`${newRandomId}`] = newRandom;

    this.setState({
      allCards: newCards,
      lists: this.state.lists.map(list => {
        if (list.id === listId) {
          list.cardIds = [...list.cardIds, newRandomId];
        }
        return list;
      })
    });
  };

  newRandomCard = () => {
    const id =
      Math.random()
        .toString(36)
        .substring(2, 4) +
      Math.random()
        .toString(36)
        .substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum'
    };
  };

  render = () => {
    let lists = this.state.lists;
    // console.log(lists);
    let allCards = this.state.allCards;

    let Lists = lists.map(list => {
      let cards = [];
      list.cardIds.forEach(id => {
        cards.push(allCards[id]);
        // console.log(allCards[id]);
      });
      return (
        <List
          key={list.id}
          id={list.id}
          header={list.header}
          cards={cards}
          handleAddNew={this.handleAddNew}
          handleDelete={this.handleDelete}
        />
      );
    });
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">{Lists}</div>
      </main>
    );
  };
}
