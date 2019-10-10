import React from 'react';
// import Card from './composition/Card'
import List from './composition/List'

function App(props) {
  let lists = props.store.lists;
  // console.log(lists);
  let allCards = props.store.allCards;

  let Lists = lists.map((list) => {
    let cards = [];
    list.cardIds.forEach(id => {
      cards.push(allCards[id])
      // console.log(allCards[id]);
    })
    return (<List key={list.id} header={list.header} cards={cards} />)
  })


  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {Lists}
      </div>
    </main>
  );
}

export default App;