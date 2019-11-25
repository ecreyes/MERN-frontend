import React from 'react';

class DetalleArticulo extends React.Component {
    render() {
        const { titulo, cuerpo } = this.props.articulo;
        return (
            <div className="container">
                <h1>Nombre del articulo: {titulo}</h1>
                <hr />
                <p>{cuerpo}</p>
            </div>
        );
    }
}

export default DetalleArticulo;