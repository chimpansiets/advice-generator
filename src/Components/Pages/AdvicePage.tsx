import React from "react";
import "./styles.css";
import { Background } from "../Atoms/Background/BackgroundAtom";
import { Card } from "../Atoms/Card/CardAtom";
import { Label } from "../Atoms/Label/LabelAtom";
import { ImageAtom } from "../Atoms/Image/ImageAtom";
import { Button } from "../Atoms/Button/ButtonAtom";
import { Icon } from "../Atoms/Icon/IconAtom";

import divider from "../../images/pattern-divider-mobile.svg";
import dice from "../../images/icon-dice.svg";

interface Props {

}

interface State {
    id: number,
    advice: string,
}

export class AdvicePage extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            id: 0,
            advice: "initial advice",
        };

        this.getAdvice();
    }

    async getAdvice() {
        const answer = await fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(data => data.slip);

        console.log(answer.id, answer.advice);
        this.setState({
            id: answer.id,
            advice: answer.advice,
        });
    }

    render() {
        return <Background>
            <Card classes="advice">
                <Label classes="advice_number heading_s green centered">ADVICE #{this.state.id}</Label>
                <Label classes="advice heading_l cyan centered">
                    {this.state.advice}
                </Label>
                <ImageAtom classes="divider" src={divider} />

                <Button classes="generate_advice" onClick={this.getAdvice.bind(this)}>
                    <Icon classes="dice" src={dice}></Icon>
                </Button>
            </Card>
        </Background>
    }
}