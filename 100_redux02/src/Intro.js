import React, { Component } from 'react';

class Intro extends Component {

     render() {
        return (
            <div>
                <h2> Day la component intro ; </h2> 
                {
                    this.props.dataA
                }
            </div>
        );
    }
}

export default Intro;