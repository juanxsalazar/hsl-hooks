import React, { Component } from 'react'

export default function HelloWorld () {
    return <>
    <header>
    <h1>React Hooks HSL Color Changer!</h1>
    <section>
      <section className="square"></section>
      <section className="controls">
      <h3>Hue</h3>
      <input type="range"/>
      <h3>Saturation</h3>
      <input type="range"/>
      <h3>Lightness</h3>
      <input type="range"/>
      </section>
    </section>
    <p>HSL: () </p>
    </header>
    <section className="middle">
    <button className="save-color">Remember Color</button>
    <button>Random Color</button>
    </section>
    <section className="saved-list">
    <h2>Saved Colors:</h2>
    <ul>
      <li className="saved-color">
      <section className="square">
      </section>
      <p className="small-font">HSL: () </p>
      </li>
    </ul>
    </section>
     </>
}


