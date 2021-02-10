import React from 'react'
import './App.css';
import ImageList from './ImageList.js'
import images from './Data.js'
import Header from './Header.js'

export default class App extends React.Component {

  state = {
    title: '',
    image: '',
    description: '',
    keyword: '',
    horns: '',
  }

  handleTitleChange = (e) => {
    e.preventDefault()

    this.setState({
      keyword: e.target.value
    })
  }

  render() {
    const filterImages = images.filter((image) => {

      if (!this.state.keyword) return true;

      if (image.keyword === this.state.keyword) return true;

      return false;
    })

    return (
      <main>
        <Header />
        <form className='form'>
          Choose a Horned Creature
          <select value={this.state.title}
            onChange={this.handleTitleChange}>
            <option value=''></option>
            <option value='narwhal'>Narwhal</option>
            <option value='rhino'>Rhino</option>
            <option value='unicorn'>Unicorn</option>
            <option value='unilego'>Unilego</option>
            <option value='triceratops'>Triceratops</option>
            <option value='markhor'>Markhor</option>
            <option value='mouflon'>Mouflon</option>
            <option value='addax'>Addax</option>
            <option value='lizard'>Lizard</option>
            <option value='dragon'>Dragon</option>
          </select>
        </form>
        <ul>
          <ImageList images={filterImages} />
        </ul>
      </main>
    )
  }
}
