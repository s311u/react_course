import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return(
    <header class="c-header">
      <nav class="navbar navbar-default">
        <div class="container">
          <div class="navbar-header">
            <button class="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#main-navbar" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span> 
              <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button> <a class="navbar-brand" href="/">
                <img width="140" height="34" title="jsDelivr" src="https://cdn.jsdelivr.net/www.jsdelivr.com/e20120342129bdfc9c21c8dac76ed533808cdf96/img/logo-horizontal.svg"/>
                  </a>
                  </div> 
                  <div class="collapse navbar-collapse navbar-nav" id="main-navbar">
                    <ul>
                      <li class="nav-item">
                      <Link className="nav-Link" to="/">Home</Link>
                      </li>
                      <li class="nav-item">
                      <Link className="nav-Link" to="/about">about us</Link>
                      </li>
                      <li class="nav-item">
                      <Link className="nav-Link" to="/contactus">contact us</Link>
                      </li>
                    </ul>
          </div>
        </div>
      </nav>
    </header>

 )
}

