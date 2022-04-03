import React from "react";
import "./styles.css";

export class Background extends React.Component {
    render() {
        return <div id="background">
            {this.props.children}
        </div>
    }
}