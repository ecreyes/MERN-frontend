import React from "react";
import FormArticulo from "../components/FormArticulo";

class EditArticulo extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Formulario editar articulo</h1>
                <hr />
                <FormArticulo form="update" />
            </div>
        );
    }
}

export default EditArticulo;