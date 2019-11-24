import React from 'react';
import Articulo from '../components/Articulo';
import axios from 'axios';

class Articulos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articulos: []
        }
    }

    componentDidMount() {
        let url = 'http://localhost:2000/articulos';
        axios.get(url).then(res => {
            let data = res.data;
            this.setState({
                articulos: data.articulos
            });
        }).catch(error => console.log(error));
    }

    render() {
        const articulosItems = this.state.articulos.map((articulo) =>
            <Articulo key={articulo._id} articulo={articulo} />
        );
        return (
            <div className="container">
                <h1>Articulos</h1>
                <button className="btn btn-success">Añadir</button>
                <hr />
                <div className="card-columns">
                    {articulosItems}
                </div>
            </div>
        );
    }
}

export default Articulos;