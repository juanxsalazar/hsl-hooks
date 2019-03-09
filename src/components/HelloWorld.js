import React, { useState } from 'react'

export default function HelloWorld (props) {
  const [hue, changeHue] = useState(0)
  const [saturation, changeSaturation] = useState(0)
  const [lightness, changeLightness] = useState(0)
   
   return <>
    <header>
    <h1>React Hooks HSL Color Changer!</h1>
    <section>
      <section className="square"
        style={{
          backgroundColor: `hsl(${hue},${saturation}%,${lightness}%)`
        }}
      ></section>
      <section className="controls">
      <h3>Hue</h3>
      <input type="range" value={hue} max="360" 
      onChange={event => changeHue(event.target.value)}/>
      <h3>Saturation</h3>
      <input type="range" value={saturation}
      onChange={event => changeSaturation(event.target.value)}/>
      <h3>Lightness</h3>
      <input type="range" value={lightness}
      onChange={event => changeLightness(event.target.value)}/>
      </section>
    </section>
    <p>HSL: ({hue},{saturation}%,{lightness}%) </p>
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


