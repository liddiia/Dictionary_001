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

handleDelWord=(wordId)=>{
  this.setState(prevState=>({words: prevState.words.filter(word=>word.id !==wordId),
  }))
}
render() {
    return (
      <div>
    <WordForm 
    handleAddWord={this.handleAddWord}/>
        <WordFilter/>
        <WordList  words={this.state.words} handleDelWord={this.handleDelWord}/>
      </div>
    )
  }
}
