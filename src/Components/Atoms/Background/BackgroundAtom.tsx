import React from "react";
import "./styles.css";

export class Background extends React.Component {
    render() {
        return <div className="background">
            {this.props.children}
        </div>
    }
}