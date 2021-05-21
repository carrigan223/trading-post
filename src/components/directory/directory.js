import React from 'react'
import sections from '../data/sections-data'
import './directory.styles.scss'
import MenuItem from '../../components/menu-items/menu-items'

class Directory extends React.Component {
    constructor() {
        super()
        this.state = {
            sections: sections,
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({ title, imageUrl, id, size }) => (
                    <MenuItem
                        key={id}
                        title={title.toUpperCase()}
                        imageUrl={imageUrl}
                        size={size}
                    />
                ))}
            </div>
        )
    }
}

export default Directory
