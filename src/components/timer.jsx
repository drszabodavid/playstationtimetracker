import { updatePlayTime } from "../services/fakeGameService";

const React = require("react");
const ms = require("pretty-ms");

class Timer extends React.Component {
  state = {
    time: 0,
    isOn: false,
    start: 0,
  };

  startTimer =  () => {
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

  stopTimer = async () => {
    await this.props.handleRecord(this.props.game, this.state.time);
    clearInterval(this.timer);
    this.setState({ isOn: false, time : 0 });
  };

  renderButton = () => {
    if (this.props.game.completed){
      return null;
    }

    if (this.state.time === 0) {
      return (
        <button className="btn btn-danger btn-sm" onClick={this.startTimer}>
          Start
        </button>
      );
    }
   else {
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
