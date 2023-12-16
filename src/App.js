import React, { Component } from "react";

export default class App extends Component {
  state = {
    hour: 0,
    minute: 0,
    second: 0,
    disabled: false,
    intervals: "",
    saveIntervals: [],
  };

  incriment = () => {
    this.setState({
      hour: this.state.hour + 1,
    });
  };
  decriment = () => {
    this.setState({
      hour: this.state.hour - 1,
    });
  };
  incriment1 = () => {
    this.setState({
      minute: this.state.minute + 1,
    });
  };
  decriment1 = () => {
    this.setState({
      minute: this.state.minute - 1,
    });
  };
  incriment2 = () => {
    this.setState({
      second: this.state.second + 1,
    });
  };
  decriment2 = () => {
    this.setState({
      second: this.state.second + 1,
    });
  };

  start = () => {
    this.setState({
      disabled: true,
    });
    let interval = setInterval(() => {
      const { second, minute, hour } = this.state;
      if(hour === 0 && minute === 0 && second === 0){
      clearInterval(this.state.intervals);
      this.setState({
        hour: 0,
        minute: 0,
        second: 0,
        disabled: false,
      });
      }else if (second === 0) {
        this.setState({
          second: 59,
        });
        if (minute === 0) {
          this.setState({
            minute: 59,
          });
          if (hour === 0) {
            this.setState({
              hour: 23,
            });
          }else {
            this.setState({
              hour: hour - 1,
            })
          }
        } else {
          this.setState({
            minute: minute - 1,
          });
        }
      } else {
        this.setState({
          second: second - 1,
        });
      }
    }, 1000);
    this.setState({
      intervals: interval,
    });
  };
  stop = () => {
    const { intervals } = this.state;
    clearInterval(intervals);
    this.setState({
      disabled: false,
    });
  };
  interval = () => {
    const { hour, minute, second, saveIntervals } = this.state;
    let result = saveIntervals;
    result.push(hour + ":" + minute + ":" + second);
    this.setState({
      saveIntervals: result,
    });
  };
  clear = () => {
    clearInterval(this.state.intervals);
    this.setState({
      hour: 0,
      minute: 0,
      second: 0,
      disabled: false,
      intervals: "",
      saveIntervals: [],
    });
  };
  render() {
    const { hour, minute, second, disabled, saveIntervals } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-3">
            <div className="card">
              <div className="card-header">
                <h1 className="text-center">StopWatch</h1>
              </div>
              <div className="card-body d-flex justify-content-center">
                <button className="btn btn-success" onClick={this.incriment}>
                  +
                </button>
                <h1>{hour}</h1>
                <button className="btn btn-danger" onClick={this.decriment}>
                  -
                </button>
                <h1>:</h1>
                <button className="btn btn-success" onClick={this.incriment1}>
                  +
                </button>
                <h1>{minute}</h1>
                <button className="btn btn-danger" onClick={this.decriment1}>
                  -
                </button>
                <h1>:</h1>
                <button className="btn btn-success" onClick={this.incriment2}>
                  +
                </button>
                <h1>{second}</h1>
                <button className="btn btn-danger" onClick={this.decriment2}>
                  -
                </button>
              </div>
              <div className="card-footer d-flex justify-content-around">
                <button
                  className="btn btn-info"
                  onClick={this.start}
                  disabled={disabled}
                >
                  Start
                </button>
                <button className="btn btn-primary" onClick={this.stop}>
                  Stop
                </button>
                <button className="btn btn-warning" onClick={this.interval}>
                  Interval
                </button>
                <button className="btn btn-danger" onClick={this.clear}>
                  Clear
                </button>
              </div>
              <div>
                {saveIntervals.map((item) => (
                  <p>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
