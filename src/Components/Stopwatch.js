import React from "react";
import './App.css';




class Stopwatch extends React.Component {
    //setting state to store timer data and keep track.
    state = {
        timerOn: false,
        timerStart: 0,
        timerTime: 0
    };
    // setting interval for the start timer that handles the commencement of stopwatch
    startTimer = () => {
        this.setState({
            timerOn: true,
            timerTime: this.state.timerTime,
            timerStart: Date.now() - this.state.timerTime
        });
        this.timer = setInterval(() => {
            this.setState({
                timerTime: Date.now() - this.state.timerStart
            });
        }, 10);
    };
    // function for the stop timer that handles the stoppage of stopwatch
    stopTimer = () => {
        this.setState({ timerOn: false });
        clearInterval(this.timer);
    };
    // this returns the timestart back to 0
    resetTimer = () => {
        this.setState({
            timerStart: 0,
            timerTime: 0
        });
    };
    render() {
        //rendering The Math.floor() helps display the time displaying hours, minutes, seconds and centiseconds
        const { timerTime } = this.state;
        let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
        let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
        let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
        let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
        return (
            //this display the buttons for control. To start, pause and reset.
            <div className="Stopwatch">
                <div className="Stopwatch-header">Stopwatch</div>
                <div className="Stopwatch-display">
                    {hours} : {minutes} : {seconds} : {centiseconds}
                    {this.state.timerOn === false && this.state.timerTime === 0 && (
                        
                       <p><button onClick={this.startTimer}>Start</button></p> 
                    )}
                    {this.state.timerOn === true && (
                        <p><button onClick={this.stopTimer}>Stop</button></p>
                    )}
                    {this.state.timerOn === false && this.state.timerTime > 0 && (
                        <p><button onClick={this.startTimer}>Resume</button></p>
                    )}
                    {this.state.timerOn === false && this.state.timerTime > 0 && (
                        <p><button onClick={this.resetTimer}>Reset</button></p>
                    )}
                </div>
            </div>
        );
    }
}
export default Stopwatch;