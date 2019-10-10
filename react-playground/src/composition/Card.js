import React from 'react';

class Card extends React.Component {
    render() {
        return (<div className="Card">
                    <button className="button">
                        delete
                    </button>
                    <h3>
                        {this.props.title}
                    </h3>
                    <p>
                        {this.props.message}
                    </p>
                </div>)
    }
}

export default Card;