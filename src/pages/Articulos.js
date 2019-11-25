import React from 'react';
import {Link} from 'react-router-dom';
import Articulo from '../components/Articulo';
import {getArticulos} from '../requests/ArticulosService';

class Articulos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articulos: []
        }
    }

    componentDidMount() {
        getArticulos().then(res=>{
            let data = res.data;
            this.setState({
                articulos: data.articulos
            });
        }).catch(error=>console.log(error));
    }

    render() {
        const articulosItems = this.state.articulos.map((articulo) =>
            <Articulo key={articulo._id} articulo={articulo} />
        );
        return (
            <div className="container">
                <h1>Articulos</h1>
                <Link to="/articulos/create" className="btn btn-success">Añadir</Link>
                <hr />
                <div className="card-columns">
                    {articulosItems}
                </div>
            </div>
        );
    }
}

export default Articulos;