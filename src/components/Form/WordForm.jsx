import { nanoid } from 'nanoid';
import React, { Component } from 'react'

export default class WordForm extends Component {
    state={
        enWord:"",
        ukWord:"",
    //    id: nanoid(),
    }
    handleSubmit = (e)=>{
         e.preventDefault();
         
         const newWord = {...this.state, id: nanoid(5)}
       
        this.props.handleAddWord(newWord);
    }
handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value });

}
  render() {
    return (
      <div>
        <form action="" className="wordForm" onSubmit={this.handleSubmit}>
        <label className="word">
            En
            <input onChange= {this.handleChange} name="enWord" type="text" className='wordInput' />
        </label>

        <label className="word">
            Uk
             <input onChange= {this.handleChange} name="ukWord" type="text" className='wordInput'/>
        </label>
        <button type='submit' className='SubmitButton'>
Submit
        </button>
        </form>
      </div>
    )
  }
}
