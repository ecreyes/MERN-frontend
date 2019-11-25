import React from 'react';
import {Link} from 'react-router-dom';
import Articulo from '../components/Articulo';
import {getArticulos,deleteArticulo} from '../requests/ArticulosService';

class Articulos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articulos: []
        }
        this.handleEliminarArticulo = this.handleEliminarArticulo.bind(this);
    }

    componentDidMount() {
        getArticulos().then(res=>{
            let data = res.data;
            this.setState({
                articulos: data.articulos
            });
        }).catch(error=>console.log(error));
    }

    handleEliminarArticulo(id){
        deleteArticulo(id).then(res=>{
            let cloneArticulos = this.state.articulos.slice();
            let articulos = [];
            cloneArticulos.forEach(articulo=>{
                if(articulo._id!==id){
                    articulos.push(articulo);
                }
            });
            this.setState({
                articulos:articulos
            });
        }).catch(error=>console.log(error));

    }

    render() {
        const articulosItems = this.state.articulos.map((articulo) =>
            <Articulo key={articulo._id} articulo={articulo} onEliminarClick={this.handleEliminarArticulo} />
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