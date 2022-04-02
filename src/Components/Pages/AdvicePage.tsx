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

export class AdvicePage extends React.Component {
    render() {
        return <Background>
            <Card classes="advice">
                <Label classes="advice_number heading_s green centered">ADVICE #117</Label>
                <Label classes="advice heading_l cyan centered">
                “It is easy to sit up and take notice, what's difficult is getting up and taking action.”
                </Label>
                <ImageAtom classes="divider" src={divider} />
                <Button classes="generate_advice" onClick={() => () => {}}>
                    <Icon classes="dice" src={dice}></Icon>
                </Button>
            </Card>
        </Background>
    }
}