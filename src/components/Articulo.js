import React from 'react';

class Articulo extends React.Component {
    render() {
        const { titulo, cuerpo } = this.props.articulo;
        return (
            <div className="card card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{cuerpo}</p>
                <button className="btn btn-info btn-block">Ver</button>
            </div>
        );
    }
}

export default Articulo;