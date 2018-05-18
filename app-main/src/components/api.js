import React, { Component } from 'react';

import { Layout, Form, Input, Icon, Row, Col, Button, Card, List, Spin} from 'antd';

import Api from  '../lib/libApi'
const path = 'ToDONameList';
let itemA = '';

export default class api extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputText : '',
      listItem: [],
      isLoading: true
    }

    this.handleChangeText = this.handleChangeText.bind(this);
    this.submitList = this.submitList.bind(this);

  }

  async fetchGet() {

    const result = await Api.get(path);
    const status = await result.status;
    

    if (status === 200) {
      const data = await result.json();
      
      console.log('data  ' + data)
      let listItem = data.map((value, index) => {
        return value.contents
      });

      let listItemID = data.map((value, index) => {
        return value.id
      });
  
      this.setState({ listItem , isLoading : false})
    }
  }

  async fetchPost (text) {
    const result = await Api.post(path, text);
    const status = await result.status;

    if (status == 201) {
      // ท่านี้ก็ได้ดูดีกว่า 1
      let data = await result.json()
      let listItem = this.state.listItem.concat(data.contents);
      this.setState({ listItem , isLoading : false })
    }
    
  }

  componentDidMount () {
    // เราควรจะ fetch เพื่อเอาค่ามาจาก MockAPI 
    this.fetchGet();
  }

  async fetchAll(text) {
    this.isLoading = true;
     const response = await Api.get(path);
     const status = await response.status;
 
     if (status === 200) {
       const data = await response.json();
      // let listItem = this.state.listItem.concat(data.contents);
 
       for(let temp of data){
       
         if(temp.contents === text){
           //console.log(temp.id)
           itemA = temp.id;
         
           console.log(itemA)
           const result = await Api.delete(`${path}/${itemA}`);
           const status = await result.status;
 
           if (status === 200) {
            
             let data = await result.json()
             let listItem = this.state.listItem.splice(data.contents);
 
             this.setState({ listItem , isLoading : false })
 
           }
 
 
         }
         
       }
     }
   }
 
 
   async fetchRemove(text) {
     //this.isLoading = true;
     this.fetchAll(text);
 
   }
 
   deleteListAtIndex = (index, item) => {
     // ไม่ควรทำเพราะเป็นการ Render ใหม่ทั้ง State ถ้ามีเยอะก็ฉิบหายยย สิครับ
     // this.state.listItem.splice(index, 1);
     // this.setState({}); 
     this.fetchRemove( item);
     const result = this.state.listItem;
     result.splice(index, 1);
     this.setState({listItem: result});  
 
   }
 
   submitList = () => {
     this.fetchPost(this.state.inputText);
     this.setState({
       //listItem: this.state.listItem.concat([this.state.inputText]),
       inputText: ''
     })
 
    
     //console.log(this.state.listItem);
   }
 
   handleKeyPress = (event) => {
     if (event.key === 'Enter') {
       this.submitList();
     }
   }
 
   handleChangeText = (event) => {
     this.setState({inputText: event.target.value});
   }
  render() {

    const { Header, Footer, Sider, Content } = Layout;
    const Search = Input.Search;
    const FormItem = Form.Item;

    return (
        
      <div>
      { 
        this.state.isLoading == false ? <Card style={{ width: 500 , backgroundColor : this.props.myColor }}>
          <h1>API To-do-list</h1>

          <div style={{ marginBottom:'10px'}}>
            <Input
              addonAfter={<Button type="primary" onClick={this.submitList}>Add</Button>}
              onChange={this.handleChangeText}
              value={this.state.inputText}
              onKeyPress={this.handleKeyPress}/>
          </div>

          <List
            bordered
            dataSource={this.state.listItem}
            renderItem={(item,index) => (
              <List.Item actions={[<a onClick={() => this.deleteListAtIndex(index,item)}><Icon type="close-circle" style={{ fontSize: 16, color: 'rgb(255, 145, 0)' }} /></a>]}>
                  {item}
              </List.Item>
          )}
          />
      </Card>:<Spin />
    }
      
    </div>
      );
    }

}