import React, {Component} from 'react';
import { Layout, Form, Input, Icon, Row, Col, Button, Card, List, Spin} from 'antd';


class Noteform extends Component{

    constructor(props){
        super(props)
        this.state = {
            newContent : '',
        };
        this.handleUserInput = this.handleUserInput.bind(this)
        this.writeContent = this.writeContent.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)

    }//end constructor

handleUserInput(e){
    //console.log(e.target.value)
    console.log(this) // must bind this as constructor
    this.setState({
        newContent : e.target.value
    })
}

handleKeyPress(e){

    if (e.key === 'Enter') {
        this.writeContent();
      }
}

writeContent(){

    this.props.addNote(this.state.newContent)
    this.setState({

        newContent:'',

    })

}


render(props){
    return(

        <div style={{ marginBottom:'10px'}}>
            <Input
              placeholder="Write a new content"
              value={this.state.newContent}
              onChange={this.handleUserInput}
              onKeyPress={this.handleKeyPress}
              addonAfter={<Button type="primary" onClick={this.writeContent} >Add</Button>}
            />
        </div>
    )
}

}// end class


export default Noteform;