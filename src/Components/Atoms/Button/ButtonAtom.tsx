import React from "react";
import "./styles.css";

interface Props {
    classes?: string,
    onClick: () => void,
}

export class Button extends React.Component<Props> {
    render() {
        let classes;

        if (this.props.classes) {
            classes = this.props.classes.split(" ").map((elem) => {
                return "btn__" + elem;
            }).join(" ");
        }

        return <button className={"btn " + classes} onClick={this.props.onClick}>
            {this.props.children}
        </button>
    }
}