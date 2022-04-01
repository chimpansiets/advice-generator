import React from "react";
import "./styles.css";

interface Props {
    classes?: string,
}

export class Label extends React.Component<Props> {
    render() {
        let classes;

        if (this.props.classes) {
            classes = this.props.classes.split(" ").map((elem) => {
                return "label__" + elem;
            }).join(" ");
        }

        return <div className={"label " + classes}>
            {this.props.children}
        </div>
    }
}