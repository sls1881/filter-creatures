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
      //If neither are selected, display all
      if (!this.state.keyword && !this.state.horns) return true;

      //If keyword is selected, filter and display keyword
      if (this.state.keyword && !this.state.horns)

        return image.keyword === this.state.keyword;

      //If horns is selected, filter and display horns
      if (this.state.horns && !this.state.keyword)
        return image.horns === this.state.horns;

      //If both are selected, filter images by both
      if (this.state.keyword && this.state.horns)

        return image.keyword === this.state.keyword && image.horns === this.state.horns;

      return false;

    })

    return (
      <main>
        <Header />
        {/* call dropdown component for each dropdown, include the value, handler, and options */}
        Name:
        <Dropdown currentValue={this.state.keyword}
          handleChange={this.handleKeywordChange}
          options={['narwal', 'rhino', 'unicorn', 'unilego', 'triceratops', 'markhor', 'mouflon', 'addax', 'lizard', 'dragon']} />
        Horns:
        <Dropdown currentValue={this.state.horns}
          handleChange={this.handleHornsChange}
          options={[1, 2, 3, 100]} />
        <ImageList images={filterImages} />

      </main>
    )
  }
}
