import React, { Component } from 'react';

class QuestionItem extends Component {

    render() {
        return (
            <div className="question-component">
                <div className="question-title">
                    {this.props.content.question}
                </div>
                <div className="question-ans">
                    {this.props.content.ans}
                </div>
            </div>
        )
    }
}

export default QuestionItem
