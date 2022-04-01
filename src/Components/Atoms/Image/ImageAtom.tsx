import React from "react";
import "./styles.css";

interface Props {
    classes?: string;
    src: string;
}

export class ImageAtom extends React.Component<Props> {
    render() {
        let classes;

        if (this.props.classes) {
            classes = this.props.classes.split(" ").map((elem) => {
                return "image__" + elem;
            }).join(" ");
        }

        return <img className={"image " + classes} src={this.props.src}/>;
    }
}