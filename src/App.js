import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Libasse Dia',
        bio: 'A passionate developer',
        imgSrc: 'link-to-image',
        profession: 'Web Developer'
      },
      show: false,
      interval: 0
    };
  }

  toggleProfile = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ interval: prevState.interval + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, interval } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleProfile}>
          Toggle Profile
        </button>
        {show && (
          <div>
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <p>{profession}</p>
            <img src={imgSrc} alt="Profile" />
          </div>
        )}
        <p>Interval since mount: {interval} seconds</p>
      </div>
    );
  }
}


export default App;
