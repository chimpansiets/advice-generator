import React from "react";
import "./styles.css";

interface Props {
    type: string,
}

export class Card extends React.Component<Props> {
    render() {
        return <div className="card">
            {this.props.children}
        </div>
    }
}