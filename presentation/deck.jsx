import React from "react/addons";

import {
  Appear, BlockQuote, Cite, Code, CodePane, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Quote, Slide, Text, S
} from "../src/spectacle";

import preloader from "../src/utils/preloader";

const images = {
  flux1: require("./images/flux.001.jpg"),
  flux2: require("./images/flux.002.jpg"),
  flux3: require("./images/flux.003.jpg"),
  flux4: require("./images/flux.004.jpg"),
  flux5: require("./images/flux.005.jpg")
};

preloader([images.flux1, images.flux2, images.flux3, images.flux4]);

// Live Examples
var TimerApp = require("./live/timer/views/app");
var PomodoroApp = require("./live/pomodoro/views/app");

export default class extends React.Component {
  render() {
    return (
      <Deck progress="none">
        <Slide notes="Welcome!<br/>Thank NYC JavaScript React Group.<br/>Thank audience.">
          <Heading size={1} fit>
            Dive Into Flux
          </Heading>
        </Slide>

        <Slide notes="I'm Tom Small.<br/>I'm a Software Architect here at Offerpop.<br/>I love the web.">
          <Heading size={1}>
            About <S type="bold" color="blue">me</S>
          </Heading>
        </Slide>
        <Slide notes="Poll:<br/>Who is using React?<br/>Who has used Flux?">
          <Heading size={1}>
            About <S type="bold" color="blue">you</S>
          </Heading>
        </Slide>

        <Slide notes="React provides only view.<br/>Still need to organize rest of code.<br/>That's what Flux helps with.">
          <Heading size={1}>
            What is <S type="bold" color="green">Flux</S>?
          </Heading>
        </Slide>
        <Slide notes="It's a way to organize your code.">
          <Heading size={1}>
            Architectural <S type="bold" color="orange">pattern</S>
          </Heading>
        </Slide>
        <Slide notes="Says how to break up code.<br/>What those parts should do.">
          <Heading size={1}>
            Like <S type="bold" color="red">MVC</S>,<br/>
            only different
          </Heading>
        </Slide>
        <Slide notes="While there are libraries and frameworks,<br/>Flux is just a description.">
          <Heading size={1}>
            Not a <S type="bold" color="blue">library</S><br/>
            or <S type="bold" color="blue">framework</S>
          </Heading>
        </Slide>
        <Slide notes="Can be implemented with plain JavaScript.">
          <Heading size={1}>
            Plain old <S type="bold" color="green">JavaScript</S>
          </Heading>
          <Heading size={3}>
            (POJS)
          </Heading>
        </Slide>
        <Slide notes="Not specific to React at all.<br/>I've used it with Angular.<br/>All well and good, but &hellip;">
          <Heading size={1}>
            React <S type="bold" color="orange">not required</S>
          </Heading>
        </Slide>

        <Slide notes="Have MVC.<br/>And MVP.<br/>And MVVM.">
          <Heading size={1}>
            Why create <S type="bold" color="yellow">another</S> architecture?
          </Heading>
        </Slide>
        <Slide notes="Their client-side apps grew larger.<br/>Harder to change.<br/>More bugs.<br/>Specificially 2 problems&hellip;">
          <Heading size={1}>
            Facebook used MVC,<br/>
            but ran into <S type="bold" color="red">problems</S>
          </Heading>
        </Slide>
        <Slide notes="Views listen to models.<br/>Models also listen to views.<br/>Bullets: 2">
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
        <Slide notes="Views subscribe for state updates.<br/>But broadcast user actions.<br/>Bullets: 2">
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
        <Slide notes="MVC designed around mutable objects.<br/>Data binding updates in place.<br/>Bullets: 2">
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
        <Slide notes="Not required.<br/>But Flux designed around immutable data.<br/>Bullets: 2">
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
        <Slide notes="Bullets: 2">
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
        <Slide notes="Bullets: 4">
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
        <Slide notes="Bullets: 4">
          <Heading size={4} textAlign="left" margin="0 0 -40px 0">
            Part #3:
          </Heading>
          <Heading size={3} textAlign="left">
            <S type="bold" color="orange">Stores</S>
          </Heading>
          <List>
            <ListItem><Appear>Contain the app’s state</Appear></ListItem>
            <ListItem><Appear>Respond to actions</Appear></ListItem>
            <ListItem><Appear>Views listen to stores</Appear></ListItem>
            <ListItem><Appear>Larger than models in MVC</Appear></ListItem>
          </List>
        </Slide>
        <Slide notes="Bullets: 4">
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
          <Image src={images.flux1.replace('/', '')} width="1600px"/>
        </Slide>
        <Slide>
          <Image src={images.flux2.replace('/', '')} width="1600px"/>
        </Slide>
        <Slide>
          <Image src={images.flux3.replace('/', '')} width="1600px"/>
        </Slide>
        <Slide>
          <Image src={images.flux4.replace('/', '')} width="1600px"/>
        </Slide>
        <Slide>
          <Image src={images.flux5.replace('/', '')} width="1600px"/>
        </Slide>

        <Slide notes="Let's walk through a simple example.<br/>App that counts down from 5 seconds.<br/>Will go through all four parts.">
          <Heading size={1}>
            <S type="bold" color="orange">Example</S>: Countdown timer
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1}>
            <S type="bold" color="blue">Views</S>
          </Heading>
        </Slide>
        <Slide notes="Displays time remaining.<br/>Gets state from <code>TimerStore</code>.">
         <Text textAlign="left">
            <pre>views/timer.jsx</pre>
          </Text>
          <CodePane
            lang="javascript"
            source={require("raw!./examples/timer/views/timer.example")}/>
        </Slide>
        <Slide notes="Uses <code>Timer</code> view.<br/>Triggers actions.">
         <Text textAlign="left">
            <pre>views/app.jsx</pre>
          </Text>
          <CodePane
            lang="javascript"
            source={require("raw!./examples/timer/views/app.example")}/>
        </Slide>
        <Slide>
          <Heading size={1}>
            <S type="bold" color="yellow">Actions</S>
          </Heading>
        </Slide>
        <Slide notes="Explicitly defines all possible actions in the app.">
         <Text textAlign="left">
            <pre>actions/timer.js</pre>
          </Text>
          <CodePane
            lang="javascript"
            source={require("raw!./examples/timer/actions/timer.example")}/>
        </Slide>
        <Slide>
          <Heading size={1}>
            <S type="bold" color="orange">Stores</S>
          </Heading>
        </Slide>
        <Slide notes="State at top: <code>secondsRemaining</code> and <code>isDone</code>.<br/>Helper functions.<br/><code>TimerStore</code> defines public interface.<br/>Listens to actions.">
         <Text textAlign="left">
            <pre>stores/timer.js</pre>
          </Text>
          <CodePane
            lang="javascript"
            source={require("raw!./examples/timer/stores/timer.example")}/>
        </Slide>
        <Slide>
          <Heading size={1}>
            <S type="bold" color="green">Dispatcher</S>
          </Heading>
        </Slide>
        <Slide notes="Instantiate singleton.">
          <Text textAlign="left">
             <pre>dispatchers/appdispatcher.js</pre>
          </Text>
          <CodePane
            lang="javascript"
            source={require("raw!./examples/timer/dispatchers/appdispatcher.example")}/>
        </Slide>
        <Slide>
          <Heading size={1}>
            Live Timer App
          </Heading>
          <TimerApp/>
        </Slide>
        <Slide notes="Bullets: 4">
          <Heading size={4} textAlign="left" margin="0 0 -40px 0">
            Takeaway:
          </Heading>
          <Heading size={3} textAlign="left">
            <S type="bold" color="green">Organization and data flow</S>
          </Heading>
          <List>
            <ListItem><Appear>Decoupled, with business logic only in stores</Appear></ListItem>
            <ListItem><Appear>All code to modify state privately encapsulated in stores</Appear></ListItem>
            <ListItem><Appear>Every possible action explicitly defined and visible</Appear></ListItem>
            <ListItem><Appear>Most of the code is very simple</Appear></ListItem>
          </List>
        </Slide>

        <Slide notes="Now let's extend it.<br/>Pomodoro timer: alternate work and break.<br/>Work: 5 seconds<br/>Break: 3 seconds">
          <Heading size={1}>
            <S type="bold" color="orange">Example</S>: Pomodoro timer
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1}>
            <S type="bold" color="blue">Views</S>
          </Heading>
        </Slide>
        <Slide notes="Changed app to use <code>PomodoroTimer</code>.<br/>Trigger Pomodoro actions.">
         <Text textAlign="left">
            <pre>views/app.jsx</pre>
          </Text>
          <CodePane
            lang="javascript"
            source={require("raw!./examples/pomodoro/views/app.example")}/>
        </Slide>
        <Slide notes="New <code>PomodoroTimer</code> view.<br/>Basically same as <code>Timer</code> view.<br/>Listens to store.">
         <Text textAlign="left">
            <pre>views/pomodoro.jsx</pre>
          </Text>
          <CodePane
            lang="javascript"
            source={require("raw!./examples/pomodoro/views/pomodoro.example")}/>
        </Slide>
        <Slide>
          <Heading size={1}>
            <S type="bold" color="yellow">Actions</S>
          </Heading>
        </Slide>
        <Slide notes="Now there are two new things you can do.<br/>So we added two new actions.">
         <Text textAlign="left">
            <pre>actions/pomodoro.js</pre>
          </Text>
          <CodePane
            lang="javascript"
            source={require("raw!./examples/pomodoro/actions/pomodoro.example")}/>
        </Slide>
        <Slide>
          <Heading size={1}>
            <S type="bold" color="orange">Stores</S>
          </Heading>
        </Slide>
        <Slide notes="New store for Pomodoro logic.<br/>State: <code>currentStage</code><br/>Public API: <code>PomodoroStore</code><br/>Waits for <code>TimerStore</code>.<br/>Uses <code>defer()</code> to trigger actions.">
         <Text textAlign="left">
            <pre>stores/pomodoro.js</pre>
          </Text>
          <CodePane
            lang="javascript"
            source={require("raw!./examples/pomodoro/stores/pomodoro.example")}/>
        </Slide>
        <Slide>
          <Heading size={1}>
            Live Pomodoro App
          </Heading>
          <PomodoroApp/>
        </Slide>
        <Slide notes="Bullets: 3">
          <Heading size={4} textAlign="left" margin="0 0 -40px 0">
            Takeaway:
          </Heading>
          <Heading size={3} textAlign="left">
            <S type="bold" color="green">Change by adding</S>
          </Heading>
          <List>
            <ListItem><Appear>Most of the existing code was left alone</Appear></ListItem>
            <ListItem><Appear>Only views changed</Appear></ListItem>
            <ListItem><Appear>Stores can depend on each other</Appear></ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={1}>
            <S type="bold" color="yellow">See also&hellip;</S>
          </Heading>
        </Slide>
        <Slide>
          <Heading size={4} textAlign="left" margin="0 0 -40px 0">
            References:
          </Heading>
          <Heading size={3} textAlign="left">
            <S type="bold" color="green">Learning more</S>
          </Heading>
          <List>
            <ListItem><Link href="https://facebook.github.io/flux/">Facebook's Flux project page</Link></ListItem>
            <ListItem><Link href="http://fluxxor.com/">Fluxxor</Link></ListItem>
            <ListItem><Link href="http://deloreanjs.com/">DeLorean.js</Link></ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={4} textAlign="left" margin="0 0 -40px 0">
            References:
          </Heading>
          <Heading size={3} textAlign="left">
            <S type="bold" color="orange">Evolving Flux</S>
          </Heading>
          <List>
            <ListItem><Link href="https://medium.com/@dan_abramov/the-evolution-of-flux-frameworks-6c16ad26bb31">The Evolution of Flux Frameworks</Link></ListItem>
            <ListItem><Link href="https://github.com/evancz/elm-architecture-tutorial">The Elm Architecture</Link></ListItem>
            <ListItem><Link href="https://github.com/gaearon/redux">Redux</Link></ListItem>
            <ListItem><Link href="https://github.com/omcljs/om">Om</Link></ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={4} textAlign="left" margin="0 0 -40px 0">
            References:
          </Heading>
          <Heading size={3} textAlign="left">
            <S type="bold" color="yellow">Other cool stuff</S>
          </Heading>
          <List>
            <ListItem><Link href="http://jlongster.com/Removing-User-Interface-Complexity,-or-Why-React-is-Awesome">Removing User Interface Complexity, or Why React is Awesome</Link></ListItem>
            <ListItem><Link href="https://facebook.github.io/react/blog/2015/02/20/introducing-relay-and-graphql.html">Introducing Relay and GraphQL</Link></ListItem>
            <ListItem><Link href="https://github.com/FormidableLabs/spectacle">Spectacle</Link></ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={1}>
            Questions?
          </Heading>
        </Slide>
        <Slide notes="My name is Tom Small.<br/>I'll be around if you want to talk.">
          <Heading size={1}>
            Thank you!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
