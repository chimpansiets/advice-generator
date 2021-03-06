import React from "react";
import "./styles.css";

interface Props {
    classes?: string,
}

export class Card extends React.Component<Props> {
    render() {
        let classes;

        if (this.props.classes) {
            classes = this.props.classes.split(" ").map((elem) => {
                return "card__" + elem;
            }).join(" ");
        }

        return <div className={"card " + classes}>
            {this.props.children}
        </div>
    }
}