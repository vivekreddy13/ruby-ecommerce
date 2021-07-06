import React from 'react';
import './styles.scss';
import ShopMens from './../../assets/mens.jpg';
import ShopWomens from './../../assets/womens.jpg';
import ShopSneakers from './../../assets/sneakers.jpeg';
import ShopAccesories from './../../assets/accesories.jpg';
import ShopJackets from './../../assets/jackets.jpg';


const Directory = props => {
    return(
        <div className="directory">
            <div className="wrap">
                <div className="item"
                style={{
                    backgroundImage: `url(${ShopJackets})`
                }}>
                    <a>
                        Shop Jackets
                    </a>
                </div>
                <div className="item"
                style={{
                    backgroundImage: `url(${ShopAccesories})`
                }}>
                    <a>
                        Shop Accesories
                    </a>
                </div>
                <div className="item"
                style={{
                    backgroundImage: `url(${ShopSneakers})`
                }}>
                    <a>
                        Shop Sneakers
                    </a>
                </div>
                <div className="item"
                style={{
                    backgroundImage: `url(${ShopWomens})`
                }}>
                    <a>
                        Shop Womens
                    </a>
                </div>
                <div className="item"
                style={{
                    backgroundImage: `url(${ShopMens})`
                }}>
                    <a>
                        Shop Mens
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Directory;