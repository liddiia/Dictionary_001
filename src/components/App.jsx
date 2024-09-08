import React, { Component } from 'react'
import WordForm from 'components/Form/WordForm'
import WordList from 'components/List/WordList'
import WordFilter from './Filter/WordFilter'

export class App extends Component {
  state={
  words: [],
  filter:'',
  
}
handleAddWord=(newWord)=>{
 this.setState((prevState)=> {
  return {
words: [...prevState.words, newWord]
 }
})
}
render() {
    return (
      <div>
    <WordForm 
    handleAddWord={this.handleAddWord}/>
        <WordFilter/>
        <WordList/>
      </div>
    )
  }
}
