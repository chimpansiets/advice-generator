import React from "react";
import "./styles.css";

interface Props {
    type: string,
}

export class Label extends React.Component<Props> {
    render() {
        return <div className="label">
            {this.props.children}
        </div>
    }
}