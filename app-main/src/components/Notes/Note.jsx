import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout, Form, Input, Icon, Row, Col, Button, Card, List, Spin} from 'antd';
import './Note.css'

class Note extends Component{
    
    constructor(props){
        super(props);
        this.noteId = props.noteId
        this.noteContent = props.noteContent

        this.handleRemove = this.handleRemove.bind(this)
    }// end constructor

    handleRemove(id){

        console.log(id)
        this.props.removeNote(id)

    }

    render(props){
        return (
            <div>
                 {/* <List
                        bordered
                        dataSource={data}
                        renderItem={(item,index) => (
                        <List.Item >s
                            {item}
                        </List.Item>
                    )}
                /> */}

                
                <h1> {this.noteContent} 
                <span className="closebtn" 
                      onClick={() => this.handleRemove(this.noteId)}>
                      &times;
                </span>
                </h1>
            </div>
        )
    }
}// end class

Note.propTypes = {
    noteId : PropTypes.string,
    noteContent : PropTypes.string
}
export default Note;