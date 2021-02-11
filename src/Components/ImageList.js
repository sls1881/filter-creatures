import React from 'react'
import ImageItem from './ImageItem.js'

export default class ImageList extends React.Component {
    render() {
        return (
            <div className='images'>
                {
                    this.props.images.map(image =>
                        <ImageItem key={image.description}
                            title={image.title}
                            image={image.url}
                            description={image.description}
                            horns={image.horns}
                        />)
                }
            </div>
        )
    }
}

