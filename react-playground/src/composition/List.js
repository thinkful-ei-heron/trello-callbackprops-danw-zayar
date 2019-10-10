import React from 'react';
import Card from './Card';

class List extends React.Component {
  render() {
    let Cards = this.props.cards.map(card => {
      return (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          message={card.content}
          handleDelete={this.props.handleDelete}
        />
      );
    });
    return (
      <section className="List">
        <header className="List-header">
          <h2>{this.props.header}</h2>
        </header>
        <div className="List-cards">{Cards}</div>
        <button
          onClick={() => {
            this.props.handleAddNew(this.props.id);
          }}
        >
          + Add Random
        </button>
      </section>
    );
  }
}

export default List;
