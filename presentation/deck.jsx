import React from "react/addons";

import {
  Appear, BlockQuote, Cite, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text, S
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

// const images = {
//   kat: require("./kat.png")
// };

// preloader([images.kat]);

export default class extends React.Component {
  render() {
    return (
      <Deck progress="none">
        <Slide>
          <Heading size={1} fit>
            Dive Into Flux
          </Heading>
        </Slide>
        <Slide notes="I'm Tom Small. I'm a Software Architect here at Offerpop.">
          <Heading size={1}>
            About <S type="bold">Me</S>
          </Heading>
        </Slide>
        <Slide notes="Who is using React? Who has used Flux?">
          <Heading size={1}>
            About <S type="bold">You</S>
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1}>
            What is <S type="bold">Flux</S>?
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1}>
            Architectural <S type="bold">Pattern</S>
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1}>
            Like <S type="bold">MVC</S>,<br/>
            Only Different
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1}>
            Not a <S type="bold">Library</S><br/>
            or <S type="bold">Framework</S>
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1}>
            Plain Old <S type="bold">JavaScript</S>
          </Heading>
          <Heading size={3}>
            (POJS)
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1}>
            React <S type="bold">Not Required</S>
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
