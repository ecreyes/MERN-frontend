import React from 'react';
import FormArticulo from '../components/FormArticulo';

class CreateArticulo extends React.Component{
    render(){
        return(
            <div className="container">
                <h1>Formulario crear articulo</h1>
                <hr/>
                <FormArticulo form="create"/>
            </div>
        );
    }

}

export default CreateArticulo;