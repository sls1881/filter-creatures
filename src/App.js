import React from 'react'
import './App.css';
import ImageList from './Components/ImageList.js'
import images from './Data.js'
import Header from './Components/Header.js'
import Dropdown from './Components/Dropdown.js'

export default class App extends React.Component {

  state = {
    keyword: '',
    horns: '',
  }

  handleKeywordChange = (e) => {
    e.preventDefault()

    this.setState({
      keyword: e.target.value
    })
  }

  ////handler for horns
  handleHornsChange = (e) => {
    e.preventDefault()

    this.setState({
      //Horns is a number
      horns: e.target.value
    })
  }

  render() {
    //Update constructor to reflect state if nothing is selected, if keyword is selected, is horns is selected, if they are both selected
    const filterImages = images.filter((image) => {

      if (!this.state.keyword) return true;

      if (image.keyword === this.state.keyword) return true;

      return false;
    })

    return (
      <main>
        <Header />
        {/* call dropdown component for each dropdown, include the value, handler, and options */}
        Name:
        <Dropdown currentValue={this.state.keyword}
          changeHandle={this.handleKeywordChange}
          options={['narwal', 'rhino', 'unicorn', 'unilego', 'triceratops', 'markhor', 'mouflon', 'addax', 'lizard', 'dragon']} />
        Horns:
        <Dropdown currentValue={this.state.horns}
          changeHandle={this.handleHornsChange}
          options={[1, 2, 3, 4, 5]} />
        <ImageList images={filterImages} />

      </main>
    )
  }
}
