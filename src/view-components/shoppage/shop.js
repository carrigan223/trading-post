import React from 'react'
import PreviewCollection from '../../../src/components/preview-collection/preview-collection'

import SHOP_DATA from '../../../src/components/data/shop-data'

class ShopPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            collections: SHOP_DATA,
        }
    }

    render() {
        const { collections } = this.state
        return (
            <div className="shop-page">
                {collections.map(({ id, ...otherCollectionProps }) => (
                    <PreviewCollection key={id} {...otherCollectionProps} />
                ))}
            </div>
        )
    }
}

export default ShopPage
