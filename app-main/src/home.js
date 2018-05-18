import React from 'react'
import { Link } from 'react-router-dom'
import { Tabs, Icon } from 'antd';
const TabPane = Tabs.TabPane;

const Home = () => (
    <div className="App">
        <Tabs defaultActiveKey="3">
          <TabPane tab={<span><Icon type="api" /><Link to='/api'>API</Link></span>} key="1">
            
          </TabPane>
          <TabPane tab={<span><Icon type="database" /><Link to='/db'>Database</Link></span>} key="2">
            
          </TabPane>
          <TabPane tab={<span><Icon type="cloud-o" /><Link to='/firebase'>firebase</Link></span>} key="3">
            
          </TabPane>
        </Tabs>
    </div>
    )

export default Home
