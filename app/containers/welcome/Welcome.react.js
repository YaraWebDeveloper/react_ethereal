/*
  Welcome to React ethera, a stater-kit for React based on Redux

  Here are your react and redux code, ready to code

 */

 /* here main dependencies */
import React from 'react';
import {Route, Switch} from 'react-router';


/*  here class render */
class Welcome extends React.Component {
  constructor() {
    super();
  }

  /* render */
  render(){
    return (

      <section class="hero is-fullheight is-light is-bold has-text-centered">
        <div class="hero-head"><small>if you wanna help, send me a mail to <a href="mailto:fyara014@gmail.com">fyara014@gmail.com</a></small></div>
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Welcome to <strong className="has-text-success">React Ethereal</strong>
            </h1>
            <h2 class="subtitle">
              a simple starter-kit ReactJs and Redux
            </h2>
          </div>
        </div>
        <div class="hero-foot">Enjoy the ride, love the ending</div>
      </section>

    )
  }
}

export default Welcome;
