import React from 'react';
import {Link} from 'react-router-dom';

class Articulo extends React.Component {
    render() {
        const {_id, titulo, cuerpo } = this.props.articulo;
        return (
            <div className="card card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{cuerpo}</p>
                <Link to={"/articulos/show/"+_id} className="btn btn-info">Ver</Link>
                <button onClick={(e)=>this.props.onEliminarClick(_id,e)} className="btn btn-danger">Eliminar</button>
            </div>
        );
    }
}

export default Articulo;