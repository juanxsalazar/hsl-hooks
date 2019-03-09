import React, { useState } from 'react'

export default function HelloWorld (props) {
  const [hue, changeHue] = useState(0)
  const [saturation, changeSaturation] = useState(0)
  const [lightness, changeLightness] = useState(0)
  const [save, savedColor] = useState ([])

  const saveColor = () => {
    savedColor(prevSave => prevSave.concat(`hsl(${hue},${saturation}%,${lightness}%)`))
  }

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
    <button className="save-color" onClick={() => saveColor()}>Remember Color</button>
    <button>Random Color</button>
    </section>
    <section className="saved-list">
    <h2>Saved Colors:</h2>
    <ul>
      {save.map((color,i) => {
        return (
          <li key={i} className="saved-color">
          <section className="square" style={{backgroundColor: `${color}`}}>
          </section>
          <p className="small-font">HSL: ({color}) </p>
          </li>
         )
      })}
    </ul>
    </section>
     </>
}


