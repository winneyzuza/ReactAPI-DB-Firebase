import React, { Component } from 'react';

import { Layout, Form, Input, Icon, Row, Col, Button, Card, List, Spin} from 'antd';

import Api from  '../lib/libApi'
import firebase  from  '../config/firebase'
import {browserHistory} from 'react-router'
import 'firebase/database'
import Note from './Notes/Note'
import Noteform from './Notes/Noteform';



const db = firebase.getFirestore();

class Firebase extends Component {
  constructor(props) {
    super(props);
    this.addNote = this.addNote.bind(this)
    this.removeNote = this.removeNote.bind(this)
    this.app = firebase
    this.db =  this.app.getDatabase().ref().child('contents')
    this.state = {
      // notes: [
      //   {id:1, noteContents: "Note 1 here"},
      //   {id:2, noteContents: "Note 2 here"}
      // ],

      notes : []

    };


    //this.setState({speed: speed})
  }

  componentWillMount(){
    const previousNote = this.state.notes
    console.log('previousNote ' + previousNote)
    this.db.on('child_added', snap =>{

      previousNote.push({
          id: snap.key,
          noteContents : snap.val().noteContents
      })

      console.log('step add willMount' + snap.key)
      this.setState({

          notes: previousNote

      })
    })

    
    this.db.on('child_removed', snap =>{
        for(var i = 0; i < previousNote.length; i++){
          if(previousNote[i].id === snap.key){
              previousNote.splice(i, 1);
          }// if
        }//for
        this.setState({
          notes : previousNote

        })
    })//firebase

    

  }

  addNote(note){
    console.log("note " + note)
    this.db.push().set({

      noteContents : note
    })
/*
    const previousNote = this.state.notes
    //previousNote.push(note)
    previousNote.push({id: previousNote.length+1, noteContents: note})
    this.setState({
      notes: previousNote
    })
*/
  } 

  removeNote(noteId){
    console.log("from the parent: " + noteId);
    this.db.child(noteId).remove();

  }

  render() {
    return (
      <div className="App">
       


       <Card style={{ width: 500 , backgroundColor : this.props.myColor }}>
         
          
            <div>
            <h1>Firebase To-do-list</h1>
            <Noteform addNote={this.addNote}/>
            {
                this.state.notes.map((note)=>{
                  return (
                    <Note noteContent={note.noteContents} 
                    noteId={note.id} 
                    key={note.id} 
                    removeNote={this.removeNote}/>

                  )
                
                })
                
            }
            </div>
            
        </Card>


      
      </div>
    );
  }
}

export default Firebase;