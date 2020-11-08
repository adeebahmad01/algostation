import React, { useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const bg = {};
  bg["--bg"] = "#1e1e1e";
  const { current: header } = useRef(null)
  useEffect(()=>{
    window.addEventListener("scroll",scrollHeader);
    return ()=> window.removeEventListener("scroll",scrollHeader);
  });
  const scrollHeader = ()=>{
    if(header){
      if(window.scrollY > window.innerHeight/1.5 ){
        header.classList.add("scroll")
      }
      if(window.scrollY < window.innerHeight/1.5 ){
        header.classList.remove("scroll")
      }
    }
  }
  return (
    <header style={bg} ref={header}>
      <div className="header">
        <div>
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <a className="navbar-brand nav-brand" href="#">
                ALG<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="Brain"><path d="m32 20v-6h-.08a7 7 0 0 0 -13.785-2.361 7.994 7.994 0 0 0 -8.969 12.823 8.99 8.99 0 0 0 -2.766 15.577 5 5 0 0 0 4.6 6.961 5.045 5.045 0 0 0 1.005-.1c0 .034-.005.067-.005.1a6 6 0 0 0 6 6c.1 0 .2-.01.3-.015a7.008 7.008 0 1 0 13.62 1.015h.08v-8a13 13 0 0 0 0-26zm0 22a9 9 0 1 1 9-9 9 9 0 0 1 -9 9z" className="fill-1"/><g className="fill-2"><path d="m33 39v-1.1c1.741-.327 3-1.477 3-2.9 0-1.682-1.757-3-4-3-1.221 0-2-.592-2-1s.779-1 2-1 2 .592 2 1a1 1 0 0 0 2 0c0-1.421-1.259-2.571-3-2.9v-1.1a1 1 0 0 0 -2 0v1.1c-1.741.327-3 1.477-3 2.9 0 1.682 1.757 3 4 3 1.221 0 2 .592 2 1s-.779 1-2 1-2-.592-2-1a1 1 0 0 0 -2 0c0 1.421 1.259 2.571 3 2.9v1.1a1 1 0 0 0 2 0z"/><path d="m61 26h-7.09a22 22 0 0 0 -1.47-3.54l5.02-5.01a1.033 1.033 0 0 0 .29-.71 1.052 1.052 0 0 0 -.29-.71l-8.49-8.49a1.008 1.008 0 0 0 -1.42 0l-5.01 5.02a22 22 0 0 0 -3.54-1.47v-7.09a1 1 0 0 0 -1-1h-6a1 1 0 0 0 -1 1v3.73a7.977 7.977 0 0 0 -13.54 2.62 8.864 8.864 0 0 0 -2.46-.35 8.989 8.989 0 0 0 -7.44 14.05 10 10 0 0 0 -5.56 8.95 9.885 9.885 0 0 0 3.24 7.34 5.982 5.982 0 0 0 5.76 7.66c.03 0 .05-.01.08-.01a6.977 6.977 0 0 0 6 5.94 7.706 7.706 0 0 0 -.08 1.07 7.987 7.987 0 0 0 14 5.27v1.73a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7.09a22 22 0 0 0 3.54-1.47l5.01 5.02a1.008 1.008 0 0 0 1.42 0l8.49-8.49a1.008 1.008 0 0 0 0-1.42l-5.02-5.01a22 22 0 0 0 1.47-3.54h7.09a1 1 0 0 0 1-1v-12a1 1 0 0 0 -1-1zm-30 20v9a6 6 0 0 1 -12 0 6.723 6.723 0 0 1 .11-1.1 7 7 0 0 0 5.89-6.9 1 1 0 0 1 2 0v1a1 1 0 0 0 2 0v-1a3 3 0 0 0 -6 0 5 5 0 1 1 -10-.15 5.172 5.172 0 0 1 5.25-4.85h1.75a1 1 0 0 0 0-2h-1.75a7.226 7.226 0 0 0 -7.17 5.99c-.03 0-.05.01-.08.01a4 4 0 0 1 0-8 1 1 0 0 0 0-2 5.979 5.979 0 0 0 -4.83 2.46 7.905 7.905 0 0 1 -2.17-5.46 8.013 8.013 0 0 1 5.49-7.59c.02-.01.03-.01.05-.02a8.018 8.018 0 0 1 2.46-.39 7.934 7.934 0 0 1 5.45 2.15 1 1 0 0 0 1.37-1.47 9.977 9.977 0 0 0 -6.82-2.68 9.851 9.851 0 0 0 -2.5.33 7.006 7.006 0 0 1 7.54-11.03c-.02.23-.04.47-.04.7a8.011 8.011 0 0 0 8 8h1a1 1 0 0 0 0-2h-1a6 6 0 1 1 6-6v7a1 1 0 0 0 1 1 12 12 0 0 1 0 24 1 1 0 0 0 -1 1zm29-8h-6.83a1 1 0 0 0 -.96.73 20.736 20.736 0 0 1 -1.87 4.5 1.014 1.014 0 0 0 .16 1.2l4.84 4.83-7.08 7.08-4.83-4.84a1.014 1.014 0 0 0 -1.2-.16 20.736 20.736 0 0 1 -4.5 1.87 1 1 0 0 0 -.73.96v6.83h-4v-14.04a14 14 0 0 0 0-27.92v-14.04h4v6.83a1 1 0 0 0 .73.96 20.736 20.736 0 0 1 4.5 1.87 1.014 1.014 0 0 0 1.2-.16l4.83-4.84 7.08 7.08-4.84 4.83a1.014 1.014 0 0 0 -.16 1.2 20.736 20.736 0 0 1 1.87 4.5 1 1 0 0 0 .96.73h6.83z"/><path d="m14 29a4 4 0 0 0 -4 4 1 1 0 0 0 2 0 2 2 0 1 1 2 2 1 1 0 0 0 0 2 4 4 0 0 0 0-8z"/><path d="m15 14a5.006 5.006 0 0 0 -5 5 1 1 0 0 0 2 0 3 3 0 0 1 3-3 1 1 0 0 0 0-2z"/><path d="m28 14a1 1 0 0 0 1-1 4 4 0 0 0 -4-4 1 1 0 0 0 0 2 2 2 0 0 1 2 2 1 1 0 0 0 1 1z"/><path d="m27 54a1 1 0 0 0 -1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 0 2h1a3 3 0 0 0 3-3v-1a1 1 0 0 0 -1-1z"/><path d="m42 33a10 10 0 1 0 -10 10 10.011 10.011 0 0 0 10-10zm-18 0a8 8 0 1 1 8 8 8.009 8.009 0 0 1 -8-8z"/></g></g></svg>STATI<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="Brain"><path d="m32 20v-6h-.08a7 7 0 0 0 -13.785-2.361 7.994 7.994 0 0 0 -8.969 12.823 8.99 8.99 0 0 0 -2.766 15.577 5 5 0 0 0 4.6 6.961 5.045 5.045 0 0 0 1.005-.1c0 .034-.005.067-.005.1a6 6 0 0 0 6 6c.1 0 .2-.01.3-.015a7.008 7.008 0 1 0 13.62 1.015h.08v-8a13 13 0 0 0 0-26zm0 22a9 9 0 1 1 9-9 9 9 0 0 1 -9 9z" className="fill-1"/><g className="fill-2"><path d="m33 39v-1.1c1.741-.327 3-1.477 3-2.9 0-1.682-1.757-3-4-3-1.221 0-2-.592-2-1s.779-1 2-1 2 .592 2 1a1 1 0 0 0 2 0c0-1.421-1.259-2.571-3-2.9v-1.1a1 1 0 0 0 -2 0v1.1c-1.741.327-3 1.477-3 2.9 0 1.682 1.757 3 4 3 1.221 0 2 .592 2 1s-.779 1-2 1-2-.592-2-1a1 1 0 0 0 -2 0c0 1.421 1.259 2.571 3 2.9v1.1a1 1 0 0 0 2 0z"/><path d="m61 26h-7.09a22 22 0 0 0 -1.47-3.54l5.02-5.01a1.033 1.033 0 0 0 .29-.71 1.052 1.052 0 0 0 -.29-.71l-8.49-8.49a1.008 1.008 0 0 0 -1.42 0l-5.01 5.02a22 22 0 0 0 -3.54-1.47v-7.09a1 1 0 0 0 -1-1h-6a1 1 0 0 0 -1 1v3.73a7.977 7.977 0 0 0 -13.54 2.62 8.864 8.864 0 0 0 -2.46-.35 8.989 8.989 0 0 0 -7.44 14.05 10 10 0 0 0 -5.56 8.95 9.885 9.885 0 0 0 3.24 7.34 5.982 5.982 0 0 0 5.76 7.66c.03 0 .05-.01.08-.01a6.977 6.977 0 0 0 6 5.94 7.706 7.706 0 0 0 -.08 1.07 7.987 7.987 0 0 0 14 5.27v1.73a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7.09a22 22 0 0 0 3.54-1.47l5.01 5.02a1.008 1.008 0 0 0 1.42 0l8.49-8.49a1.008 1.008 0 0 0 0-1.42l-5.02-5.01a22 22 0 0 0 1.47-3.54h7.09a1 1 0 0 0 1-1v-12a1 1 0 0 0 -1-1zm-30 20v9a6 6 0 0 1 -12 0 6.723 6.723 0 0 1 .11-1.1 7 7 0 0 0 5.89-6.9 1 1 0 0 1 2 0v1a1 1 0 0 0 2 0v-1a3 3 0 0 0 -6 0 5 5 0 1 1 -10-.15 5.172 5.172 0 0 1 5.25-4.85h1.75a1 1 0 0 0 0-2h-1.75a7.226 7.226 0 0 0 -7.17 5.99c-.03 0-.05.01-.08.01a4 4 0 0 1 0-8 1 1 0 0 0 0-2 5.979 5.979 0 0 0 -4.83 2.46 7.905 7.905 0 0 1 -2.17-5.46 8.013 8.013 0 0 1 5.49-7.59c.02-.01.03-.01.05-.02a8.018 8.018 0 0 1 2.46-.39 7.934 7.934 0 0 1 5.45 2.15 1 1 0 0 0 1.37-1.47 9.977 9.977 0 0 0 -6.82-2.68 9.851 9.851 0 0 0 -2.5.33 7.006 7.006 0 0 1 7.54-11.03c-.02.23-.04.47-.04.7a8.011 8.011 0 0 0 8 8h1a1 1 0 0 0 0-2h-1a6 6 0 1 1 6-6v7a1 1 0 0 0 1 1 12 12 0 0 1 0 24 1 1 0 0 0 -1 1zm29-8h-6.83a1 1 0 0 0 -.96.73 20.736 20.736 0 0 1 -1.87 4.5 1.014 1.014 0 0 0 .16 1.2l4.84 4.83-7.08 7.08-4.83-4.84a1.014 1.014 0 0 0 -1.2-.16 20.736 20.736 0 0 1 -4.5 1.87 1 1 0 0 0 -.73.96v6.83h-4v-14.04a14 14 0 0 0 0-27.92v-14.04h4v6.83a1 1 0 0 0 .73.96 20.736 20.736 0 0 1 4.5 1.87 1.014 1.014 0 0 0 1.2-.16l4.83-4.84 7.08 7.08-4.84 4.83a1.014 1.014 0 0 0 -.16 1.2 20.736 20.736 0 0 1 1.87 4.5 1 1 0 0 0 .96.73h6.83z"/><path d="m14 29a4 4 0 0 0 -4 4 1 1 0 0 0 2 0 2 2 0 1 1 2 2 1 1 0 0 0 0 2 4 4 0 0 0 0-8z"/><path d="m15 14a5.006 5.006 0 0 0 -5 5 1 1 0 0 0 2 0 3 3 0 0 1 3-3 1 1 0 0 0 0-2z"/><path d="m28 14a1 1 0 0 0 1-1 4 4 0 0 0 -4-4 1 1 0 0 0 0 2 2 2 0 0 1 2 2 1 1 0 0 0 1 1z"/><path d="m27 54a1 1 0 0 0 -1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 0 2h1a3 3 0 0 0 3-3v-1a1 1 0 0 0 -1-1z"/><path d="m42 33a10 10 0 1 0 -10 10 10.011 10.011 0 0 0 10-10zm-18 0a8 8 0 1 1 8 8 8.009 8.009 0 0 1 -8-8z"/></g></g></svg>N
              </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse justify-content-end navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item d-flex justify-content-center align-items-center">
                  <NavLink exact activeClassName="active" to="/" className="nav-link text-white font-weight-bold">Home</NavLink>
                </li>
                <li className="nav-item d-flex justify-content-center align-items-center">
                  <NavLink exact activeClassName="active"  to="/setup" className="nav-link text-white font-weight-bold">Setup</NavLink>
                </li>
                <li className="nav-item d-flex justify-content-center align-items-center">
                  <NavLink exact activeClassName="active" className="nav-link text-white font-weight-bold" to="/performance">Performance</NavLink>
                </li>
                <li className="">
                  <a href="http://bit.ly/ABAlgoTrade" className="learn-more font-weight-bold"> Sign In </a>
                </li>
              </ul>
            </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;