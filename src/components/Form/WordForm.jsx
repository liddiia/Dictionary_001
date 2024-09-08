import React, { Component } from 'react'

export default class WordForm extends Component {
    state={
        enWord:"",
        ukWord:"",
     //   id:
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.handleAddWord(this.state);
    }
  render() {
    return (
      <div>
        <form action="" className="wordForm" onSubmit={this.handleSubmit}>
        <label className="word">
            <input type="text" className='wordInput' />
        </label>

        <label className="word">
             <input type="text" className='wordInput'/>
        </label>
        <button type='submit' className='SubmitButton'>
Submit
        </button>
        </form>
      </div>
    )
  }
}
