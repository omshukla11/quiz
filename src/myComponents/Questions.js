import React, { Component } from 'react'
import { SingleQ } from './SingleQ'
import Footer from './Footer';

export default class Questions extends Component {
    
    state = {
        score: 0
    };
    
    setScore = () => {
        this.setState({score: this.state.score+1})
    }

    render() {

        return (
            <div className="container">
                <h3 className="text-center my-3">Questions</h3>
                <h3>Score: {this.state.score}</h3>
                <ol>
                    {this.props.ques.map((singleq) => {
                        return <li key={singleq.id}><SingleQ singleq={singleq} score={this.state.score} updateScore={this.setScore}/></li>
                    })}
                </ol>
                <Footer score={this.state.score}/>
            </div>
        )
    }
}
