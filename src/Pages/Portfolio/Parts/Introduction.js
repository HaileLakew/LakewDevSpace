import React from "react";
import { Html } from '@react-three/drei'

import TextLoop from 'react-text-loop';
import { Content } from "../../../Components/Content";

export default function Introduction() {
    return (
        <Html center>
            <div class='introduction'>
                <div class='introduction__header'>
                    Hello, I'm Haile
                </div>
                <div class='introduction__sub-header'>
                    I am a
                    <TextLoop interval={950}>
                        <span>n Engineer</span>
                        <span>n Artist</span>
                        <span>&ensp;Tinkerer</span>
                        <span>&ensp;Christian</span>
                        <span>&ensp;Programmer</span>
                        <span>&ensp;Troubleshooter</span>
                    </TextLoop>
                    &ensp;by nature
                </div>
                <div class='introduction__body'>
                    A Javascript Enthusiast, I've put my hand into a lot of different kinds of proverbial cookie pots. My first time
                    ever actually programming actually started when I was 14, in highschool. We coded a pretty cool Java space shooter game,
                    and since then, I've been hooked! The feeling of having no limits except time and effort to do whatever we want has always
                    been the gleam in my eye. And all of my fond memories is going from.. "Can we do that" to... "WE CAN DO THAT". Pretty much
                    sums up my coding style. I love to have fun coding, and coding is a fun thing to do! 
                </div>
            </div>
        </Html>
    )
}