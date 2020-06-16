import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const openMenu = () => {
     document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <div classNameName="App">
      <div className="grid-container">
    <header className="header">
      <div className="brand">
        <button onClick={openMenu}>
          &#9776;
        </button>
        <a href="index.html">Perfectly Imperfect</a>
      </div>
      <div className="header-links">
        <a href="cart.html">Cart</a>
        <a href="signin.html">Sign In</a>
      </div>
    </header>
    <aside className="sidebar">
      <h3>Shopping Categories</h3>
      <button className="sidebar-close-button" onClick={closeMenu}>x</button>
      <ul>
        <li>
          <a href="index.html">Cups</a>
        </li>

        <li>
          <a href="index.html">Shirts</a>
        </li>
        <li>
        <a href="index.html">Jnpxewlery</a>
       </li>
       <li>
        <a href="index.html">Mirrors</a>
</li>

      </ul>
    </aside>
    <main className="main">
      <div className="content">
        <ul className="products">
          <li>
            <div className="product">
              <img className="product-image" src="images/pic1.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Faith Hope Love</a>
              </div>
              <div className="product-brand"></div>
              <div className="product-price"Aprils creations>$15</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="./images/pic2.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">gone with the wind</a>
              </div>
              <div className="product-brand">aprilcreations</div>
              <div className="product-price">$15</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="./images/pic4.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Science</a>
              </div>
              <div className="product-brand">april creations </div>
              <div className="product-price">$15</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="./images/pic5.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">cowboy skull</a>
              </div>
              <div className="product-brand">aprilcreations</div>
              <div className="product-price">$15</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="./images/pic6.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">nightmare before christmas</a>
              </div>
              <div className="product-brand">april creations</div>
              <div className="product-price">$10</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="./images/pic8.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">girl</a>
              </div>
              <div className="product-brand">aprilcreations</div>
              <div className="product-price">$15</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>

        </ul>
      </div>

    </main>
    <footer className="footer">
      All right reserved.
    </footer>
  </div>
    </div>
  );
}

export default App;
