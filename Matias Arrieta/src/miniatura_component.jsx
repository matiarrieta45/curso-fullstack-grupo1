import React from "react";

function MiniaturaComponent(props) {

    return (
        <div style={{ margin: 20 }}>

            <h3>{props.titulo}</h3>

            <img
                src={props.imagen}
                alt={props.titulo}
                width="250"
            />

        </div>
    );

}

export default MiniaturaComponent;