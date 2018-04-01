import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <div>
  <header className="masthead">
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-lg-7 my-auto">
          <div className="header-content mx-auto">
            <h1 className="mb-5">New Age is an app landing page that will help you beautifully showcase your new mobile app, or anything else!</h1>
            <a href="/download" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a>
          </div>
        </div>
        <div className="col-lg-5 my-auto">
          <div className="device-container">
            <div className="device-mockup iphone6_plus portrait white">
              <div className="device">
                <div className="screen">
                  {/* Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! */}
                  <img src="https://blackrockdigital.github.io/startbootstrap-new-age/img/demo-screen-1.jpg" className="img-fluid"  alt="App for iphone"  />
                </div>
                <div className="button">
                  {/* You can hook the "home button" to some JavaScript events or just remove it */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <section className="download bg-primary text-center" id="download">
    <div className="container">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <h2 className="section-heading">Discover what all the buzz is about!</h2>
          <p>Our app is available on any mobile device! Download now to get started!</p>
          
        </div>
      </div>
    </div>
  </section>
</div>

            </div>
        );
    }
}

export default Home;