import './App.css';
import './index.css'
import Card from './components/Card'
import React from 'react'
import satya from './img/satya.png'
import geeta from './img/geeta.png'
import hindu from './img/hindu.png'
import om from './img/om.png'
import shree from './img/shree.png'
import broome from './img/broome.png'
import prem from './img/prem.png'
import ganesh from './img/ganesh.png'
import hanuman from './img/hanuman.png'
import baps from './img/baps.png'


const App = () => {

  return (
    <div className="App">
      <h1>Places Of Worship For Hindus In NYC🗽🕉️</h1>
      <h2>Here Is Where You Can Go To Pray In The City</h2>
      <div className = "cards">
      <Card name = "Satya Narayan Mandir" location = "Jackson Heights, NY" link = "https://www.satyanarayanmandir.org/" image = {satya}/>
      <Card name = "Geeta Temple" location = "Queens, NY" link = "https://www.geetatemple.org/" image = {geeta}/>
      <Card name = "Hindu Temple Society" location = "Queens, NY" link = "https://nyganeshtemple.org/" image = {hindu}/>
      <Card name = "BAPS Shri Swaminarayan Mandir" location = "Queens, NY" link = "https://www.baps.org/Global-Network/North-America/NewYork.aspx" image = {baps}/>
      <Card name = "Hanuman Mandir" location = "Queens, NY" link = "https://hanumanmandirofny.org/" image = {hanuman}/>
      <Card name = "Ganesh Temple" location = "Queens, NY" link = "http://canteen.nyganeshtemple.org/" image = {ganesh}/>
      <Card name = "Prem Prakash Mandir" location = "Elmhurst, NY" link = "https://www.premprakashpanth.com/" image = {prem}/>
      <Card name = "Broome Street Ganesha Temple" location = "Manhattan, NY" link = "https://www.satyanarayanmandir.org/" image = {broome}/>
      <Card name = "Shree Divya Dham" location = "Woodside, NY" link = "http://geeta-divyadhamtemple.com/" image = {shree}/>
      <Card name = "Om Shakti Temple" location = "Queens, NY" link = "http://www.omshaktitemple.org/" image = {om}/>

      </div>
      
    </div>
  )
}

export default App