import React from 'react'
import { Link } from 'react-router-dom'
import './App.css';
import { Tabs, Icon } from 'antd';
const TabPane = Tabs.TabPane;

const Header = () => (
    
        <Tabs defaultActiveKey="1">
          <TabPane tab={<span><Icon type="home" /><Link to='/'>Home</Link></span>} key="1">
            <div> Wecome to TODO List</div>
          </TabPane>

          <TabPane tab={<span><Icon type="api" /><Link to='/api'>API</Link></span>} key="2">
            
          </TabPane>
          <TabPane tab={<span><Icon type="database" /><Link to='/db'>Database</Link></span>} key="3">
            
          </TabPane>
          <TabPane tab={<span><Icon type="cloud-o" /><Link to='/firebase'>Firebase</Link></span>} key="4">
            
          </TabPane>
        </Tabs>
    
    )
export default Header
