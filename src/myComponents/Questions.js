import React, { Component } from 'react'
import { SingleQ } from './SingleQ'
import Footer from './Footer';

export default class Questions extends Component {
    
    state = {
        score: 0
    };
    
    setScore = () => {
        this.setState({score: this.state.score+10})
    }

    render() {

        return (
            <div className="container">
                <center><div className='card1'><span className='temp'>
                <h3>Score: {this.state.score}/{(this.props.totques)*10}</h3></span>
                </div></center><ol>
                    {this.props.ques.map((singleq, i) => {
                        return <li key={singleq.id}><SingleQ index={i} singleq={singleq} score={this.state.score} updateScore={this.setScore}/></li>
                    })}
                </ol>
                <Footer score={this.state.score} totques={this.props.totques}/>
            </div>
        )
    }
}
