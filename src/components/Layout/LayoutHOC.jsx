import React from 'react';
import {Container} from 'reactstrap';
import NavBarContainer from "./NavBarContainer"
import {Layout as AntLayout} from 'antd'

export default function Layout(WrappedComponent) {
  return class extends React.Component {
    render() {
      return <div style={{height: "100%"}}>
        <NavBarContainer/>
        <Container style={{minHeight: '82.5%'}} className='mt-3'>
          <WrappedComponent {...this.props}/>
        </Container>
        <AntLayout.Footer>QA</AntLayout.Footer>
      </div>
    }
  }
}
