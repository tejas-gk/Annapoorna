import React from 'react'
import './card.css'
export default function Card() {
    return (
        <div className='card_container'>
            <div className="card">
                <div className="card__image">
                    <img src="https://images.unsplash.com/photo-1680016280079-2ef95cf3bebc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="card" />
                </div>
                <div className="card__content">
                    <h3 className="card__title">Card Title</h3>
                    <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
                    <button className="card__button">Read More</button>
                </div>
                
            </div>
            
        </div>
    )
}
