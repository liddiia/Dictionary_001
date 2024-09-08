import React, { Component } from 'react'

export default class ListItem extends Component {
   render(){
    const {enWord, ukWord} = this.props.word;
    //====2 var========div WordList=========
//  const {enWord, ukWord,id} = this.props.word;

    return (
    <li className='listItem'> 
        <span>{enWord} </span> <br />
        <span>{ukWord}</span> <br />
{/* // ============2var ===div WordList===================
     <button type='button' onClick={()=>this.props.handleDelWord(id)}> &#10060; </button> */}
        <button type='button' onClick={this.props.handleDelWord}> &#10060; </button>
    </li>
    );
  }
}
