import React from 'react';
import {getArticulosById} from "../requests/ArticulosService"
import DetalleArticulo from '../components/DetalleArticulo';

class ShowArticulo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: "",
            cuerpo: ""
        };
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        getArticulosById(id).then(res => {
            this.setState({
                titulo : res.data.articulo.titulo,
                cuerpo : res.data.articulo.cuerpo
            });
        }).catch(error => console.log(error));
    }
    render() {
        return (
            <div>
                <DetalleArticulo articulo={this.state} />
            </div>
        );
    }
}

export default ShowArticulo;