import { updatePlayTime } from "../services/fakeGameService";

const React = require("react");
const ms = require("pretty-ms");

class Timer extends React.Component {
  state = {
    time: 0,
    isOn: false,
    start: 0
  };

  startTimer = () => {
    this.setState({
      isOn: true,
      time: this.state.time,
      start: Date.now() - this.state.time
    });
    this.timer = setInterval(
      () =>
        this.setState({
          time: Date.now() - this.state.start
        }),
      1
    );
  };

  stopTimer = () => {
    this.setState({ isOn: false, time : 0 });
    clearInterval(this.timer);
    updatePlayTime(this.props.game, this.state.time);
    this.props.handleRecord()
  };

  renderButton = () => {
    if (this.state.time == 0) {
      console.log("clikked start");
      return (
        <button className="btn btn-danger btn-sm" onClick={this.startTimer}>
          Start
        </button>
      );
    }
    if (!this.state.time == 0 && !this.state.isOn) {
      return (
        <button className="btn btn-danger btn-sm" onClick={this.startTimer}>
          Resume
        </button>
      );
    } else {
      return (
        <button className="btn btn-danger btn-sm" onClick={this.stopTimer}>
          {ms(this.state.time)}
        </button>
      );
    }
  };

  render() {
    return <div style={{ width: 50, height: 50 }}>{this.renderButton()}</div>;
  }
}

export default Timer;
