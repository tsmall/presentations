import React from "react/addons";

import {
  Appear, BlockQuote, Cite, Code, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text, S
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

// const images = {
//   kat: require("./kat.png")
// };

// preloader([images.kat]);

// Live Examples
var TimerApp = require("./live/timer/views/timerapp");

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
            About <S type="bold" color="blue">me</S>
          </Heading>
        </Slide>
        <Slide notes="Who is using React? Who has used Flux?">
          <Heading size={1}>
            About <S type="bold" color="blue">you</S>
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1}>
            What is <S type="bold" color="green">Flux</S>?
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1}>
            Architectural <S type="bold" color="orange">pattern</S>
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1}>
            Like <S type="bold" color="red">MVC</S>,<br/>
            only different
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1}>
            Not a <S type="bold" color="blue">library</S><br/>
            or <S type="bold" color="blue">framework</S>
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1}>
            Plain old <S type="bold" color="green">JavaScript</S>
          </Heading>
          <Heading size={3}>
            (POJS)
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1}>
            React <S type="bold" color="orange">not required</S>
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1}>
            Why create <S type="bold" color="yellow">another</S> architecture?
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1}>
            Facebook ran into <S type="bold" color="red">problems</S><br/>
            using MVC
          </Heading>
        </Slide>
        <Slide>
          <Heading size={4} textAlign="left" margin="0 0 -40px 0">
            Problem:
          </Heading>
          <Heading size={3} textAlign="left">
            <S type="bold" color="red">Two-way</S> data binding
          </Heading>
          <List>
            <ListItem><Appear>Hard to know what made a change</Appear></ListItem>
            <ListItem><Appear>Cascading updates</Appear></ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={4} textAlign="left" margin="0 0 -40px 0">
            Solution:
          </Heading>
          <Heading size={3} textAlign="left">
            <S type="bold" color="green">One-way</S> data flow
          </Heading>
          <List>
            <ListItem><Appear>Easier to trace execution in code</Appear></ListItem>
            <ListItem><Appear>Actions become explicit</Appear></ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={4} textAlign="left" margin="0 0 -40px 0">
            Problem:
          </Heading>
          <Heading size={3} textAlign="left">
            <S type="bold" color="red">Mutable</S> objects
          </Heading>
          <List>
            <ListItem><Appear>Accidental side-effects</Appear></ListItem>
            <ListItem><Appear>“How’d it get like this?”</Appear></ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={4} textAlign="left" margin="0 0 -40px 0">
            Solution:
          </Heading>
          <Heading size={3} textAlign="left">
            Designed for <S type="bold" color="green">immutable</S> data
          </Heading>
          <List>
            <ListItem><Appear>Side-effect are explicit (look for <code>=</code>)</Appear></ListItem>
            <ListItem><Appear>Safe to share</Appear></ListItem>
          </List>
        </Slide>
        <Slide notes="Four parts to Flux">
          <Heading size={1}>
            <S type="bold" color="orange">Diving in</S> to the details
          </Heading>
        </Slide>
        <Slide>
          <Heading size={4} textAlign="left" margin="0 0 -40px 0">
            Part #1:
          </Heading>
          <Heading size={3} textAlign="left">
            <S type="bold" color="blue">Views</S>
          </Heading>
          <List>
            <ListItem><Appear>React view objects</Appear></ListItem>
            <ListItem><Appear>Don’t contain any business logic</Appear></ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={4} textAlign="left" margin="0 0 -40px 0">
            Part #2:
          </Heading>
          <Heading size={3} textAlign="left">
            <S type="bold" color="yellow">Actions</S>
          </Heading>
          <List>
            <ListItem><Appear>Notifications of events</Appear></ListItem>
            <ListItem><Appear>Generated by user interactions</Appear></ListItem>
            <ListItem><Appear>&hellip; or network request responses</Appear></ListItem>
            <ListItem><Appear>&hellip; or real-time updates</Appear></ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={4} textAlign="left" margin="0 0 -40px 0">
            Part #3:
          </Heading>
          <Heading size={3} textAlign="left">
            <S type="bold" color="orange">Stores</S>
          </Heading>
          <List>
            <ListItem><Appear>Respond to actions</Appear></ListItem>
            <ListItem><Appear>Views listen to stores</Appear></ListItem>
            <ListItem><Appear>Contain the app’s state</Appear></ListItem>
            <ListItem><Appear>Larger than models in MVC</Appear></ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={4} textAlign="left" margin="0 0 -40px 0">
            Part #4:
          </Heading>
          <Heading size={3} textAlign="left">
            <S type="bold" color="green">Dispatcher</S>
          </Heading>
          <List>
            <ListItem><Appear>Routes actions to stores</Appear></ListItem>
            <ListItem><Appear>Singleton</Appear></ListItem>
            <ListItem><Appear>Generic, reusable</Appear></ListItem>
            <ListItem><Appear>Provided by Facebook in <code>flux</code> NPM module</Appear></ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={1}>
            [Diagram goes here]
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1}>
            <S type="bold" color="orange">Example</S>: Countdown timer
          </Heading>
        </Slide>
        <Slide>
         <Text textAlign="left">
            <pre>views/timer.jsx</pre>
          </Text>
          <CodePane
            lang="javascript"
            source={require("raw!./examples/countdown/views/timer.example")}/>
         </Slide>
        <Slide>
         <Text textAlign="left">
            <pre>views/timerapp.jsx</pre>
          </Text>
          <CodePane
            lang="javascript"
            source={require("raw!./examples/countdown/views/timerapp.example")}/>
         </Slide>
        <Slide>
         <Text textAlign="left">
            <pre>actions/timer.js</pre>
          </Text>
          <CodePane
            lang="javascript"
            source={require("raw!./examples/countdown/actions/timer.example")}/>
         </Slide>
        <Slide>
         <Text textAlign="left">
            <pre>stores/timer.js</pre>
          </Text>
          <Layout>
            <Fill>
              <CodePane
                lang="javascript"
                source={require("raw!./examples/countdown/stores/timer.top.example")}/>
            </Fill>
            <Fill>
              <CodePane
                lang="javascript"
                source={require("raw!./examples/countdown/stores/timer.bottom.example")}/>
            </Fill>
          </Layout>
         </Slide>
        <Slide>
         <Text textAlign="left">
            <pre>dispatchers/appdispatcher.js</pre>
          </Text>
          <CodePane
            lang="javascript"
            source={require("raw!./examples/countdown/dispatchers/appdispatcher.example")}/>
         </Slide>
        <Slide>
         <Heading size={1}>
           Live Timer App
         </Heading>
         <TimerApp/>
       </Slide>
      </Deck>
    );
  }
}
