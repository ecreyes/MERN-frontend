import React from 'react';
import {withRouter} from "react-router-dom";
import {addArticulo} from '../requests/ArticulosService';

class FormArticulo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titulo: "",
            cuerpo: ""
        };
        this.handleTituloChange = this.handleTituloChange.bind(this);
        this.handleCuerpoChange = this.handleCuerpoChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTituloChange(e){
        this.setState({
            titulo:e.target.value
        });
    }

    handleCuerpoChange(e){
        this.setState({
            cuerpo:e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        addArticulo(this.state).then(res=>{
            this.props.history.push('/articulos');
        }).catch(error=>console.log(error));
        e.currentTarget.reset();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group row">
                    <label htmlFor="titulo" className="col-sm-2 col-form-label">Titulo</label>
                    <div className="col-sm-10">
                        <input onChange={this.handleTituloChange} type="text" id="titulo" className="form-control" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="cuerpo" className="col-sm-2 col-form-label">Cuerpo</label>
                    <div className="col-sm-10">
                        <textarea onChange={this.handleCuerpoChange} id="cuerpo" className="form-control"/>
                    </div>
                </div>
                <input type="submit" className="btn btn-primary float-right" value="Crear"/>
            </form>
        );
    }

}

export default withRouter(FormArticulo);