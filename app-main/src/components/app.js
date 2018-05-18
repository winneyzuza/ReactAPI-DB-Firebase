import React, { Component } from 'react';
import { Layout, Form, Input, Icon, Row, Col, Button, Card, List, Spin} from 'antd';


import Note from './Notes/Note'
class app extends Component {
    constructor(props) {
        super(props);
        this.state = {
          notes: [
            {id:1, noteContents: "Note 1 here"},
            {id:2, noteContents: "Note 2 here"}
          ]
        };
      }//end constructor
    render() {
        return (
          <div className="App">
           <Card style={{ width: 500 }}>
              <h1>Firebase To-do-list</h1>
              
                <div>{
                    this.state.notes.map((note)=>{
                      return (
                        <Note noteContent={note.noteContents} noteId={note.id} key={note.id}/>
                      )
                    })
                    
                }
                </div>
            </Card>
          </div>
        );
      }
}// end class




