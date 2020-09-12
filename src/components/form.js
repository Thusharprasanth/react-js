import React,{ Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Col,Form} from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons'

class Input extends Component{

    state = {
            data : [],
            textContent : ''
        }
    
    textChange = (event)=>{
     
        this.setState({textContent : event.target.value})

    }
    itemAdd = (event) =>{
        event.preventDefault()
        let currentText = this.state.textContent
        let currentItems = this.state.data
        currentItems.push(currentText)
        this.setState({data:currentItems}) 
        }
    removeItem = (i) =>{
        let currentItems = this.state.data
        currentItems.splice(i,1)
        this.setState({data:currentItems})
    }

    render(){
        return(
            <div className="container bg-light">
            <div className="col-md-4 bg-light offset-md-4">
           
              <Form>
                    <h1><img style={{width:'38px'}} src='data:image/png;base64,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'/>TODO APP</h1>
                  <Form className="row align-items-center" onSubmit={this.itemAdd}>
                      <Col xs="auto">
                        <input
                            onChange={this.textChange}
                                type="text"
                                className="form-control"
                                placeholder="Enter Todo...."
                                
                            />
                      </Col>
                      <Col xs="auto">
                        <Button variant='success' className="mb-2 " onClick={this.itemAdd}>
                          Add
                        </Button>
                      </Col>
                </Form>
              </Form>
              <ul className='list-unstyled'>
                  {this.state.data.map((itm,ky)=>{
                      return(
                          <li>{itm}<Button onClick = { ()=>{this.removeItem(ky)}} variant='danger' className= 'm-2'>Delete</Button></li>
                      )
                  })}
              </ul>
          </div>
          <div class="col-md-12 bg-light" style={{alignItems:'center' ,textAlign:'center'}}>
                <h6 style={{color:'dark'}}>Created by Thushar Prasanth</h6>
                <SocialIcon url="https://www.linkedin.com/in/thushar-prasanth-25582b1a9/" style={{ height: 40, width: 40 }}/>
                <SocialIcon url="https://github.com/Thusharprasanth" style={{ height: 40, width: 40 }} bgColor="black"/>
                <SocialIcon url="https://www.facebook.com/thusharprasanth1/" style={{ height: 40, width: 40 }}/>     
            </div>
        </div>
        )
    }
}

export default Input