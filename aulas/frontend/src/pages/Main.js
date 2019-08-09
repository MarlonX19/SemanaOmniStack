import React from 'react';
import './Main.css'

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

export default function Main({ match }){
    return (
        <div className="main-container">
            <img src={logo} alt="tindev" />
            <ul>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/31692159?s=400&u=e69532861f4f0da73a805afa61c393163fd1b0ee&v=4" alt="user" />
                    <footer>
                        <strong>Marlon Englemam</strong>
                        <p>Dev react native e node no geralfhfjhrtbjertjrtkjetyk cdfgdhw</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={like} alt="like" />
                        </button>
                        <button type="button">
                            <img src={dislike} alt="dislike" />
                        </button>
                    </div>
                </li>

                <li>
                    <img src="https://avatars2.githubusercontent.com/u/31692159?s=400&u=e69532861f4f0da73a805afa61c393163fd1b0ee&v=4" alt="user" />
                    <footer>
                        <strong>Marlon Englemam</strong>
                        <p>Dev react native e node no geral</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={like} />
                        </button>
                        <button type="button">
                            <img src={dislike} />
                        </button>
                    </div>
                </li>

                <li>
                    <img src="https://avatars2.githubusercontent.com/u/31692159?s=400&u=e69532861f4f0da73a805afa61c393163fd1b0ee&v=4" alt="user" />
                    <footer>
                        <strong>Marlon Englemam</strong>
                        <p>Dev react native e node no geral</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={like} />
                        </button>
                        <button type="button">
                            <img src={dislike} />
                        </button>
                    </div>
                </li>

                <li>
                    <img src="https://avatars2.githubusercontent.com/u/31692159?s=400&u=e69532861f4f0da73a805afa61c393163fd1b0ee&v=4" alt="user" />
                    <footer>
                        <strong>Marlon Englemam</strong>
                        <p>Dev react native e node no geral</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={like} />
                        </button>
                        <button type="button">
                            <img src={dislike} />
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}