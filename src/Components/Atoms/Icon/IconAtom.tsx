import React from "react";
import "./styles.css";

interface Props {
    src: string,
    classes?: string,
}

export class Icon extends React.Component<Props> {
    render() {
        let classes;

        if (this.props.classes) {
            classes = this.props.classes.split(" ").map((elem) => {
                return "icon__" + elem;
            }).join(" ");
        }

        return <img className={"icon " + classes} src={this.props.src}/>
    }
}