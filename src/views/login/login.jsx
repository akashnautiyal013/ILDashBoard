import React from 'react';
import {
    Card, CardHeader, CardBody, Row, Col,Button
} from 'reactstrap';
import { NavLink,withRouter ,BrowserRouter} from 'react-router-dom';
import { PanelHeader, FormInputs, CardAuthor, CardSocials } from 'components';
import appicon from 'assets/img/appicon120.png'
import userBackground from 'assets/img/bg5.jpg';
import userAvatar from 'assets/img/mike.jpg';

class User extends React.Component{
    
    constructor(props) {
    var data = localStorage.getItem('userData2')
    console.log('data2222',data)
    if (data != null || data != undefined) {
         window.location = "/dashboard"; 
     }
      super(props);
    
      this.state = {
        email:null,
        password:null,
        loading:false
      };
      this.handleEmailChange = this.handleEmailChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);


    }

    handleEmailChange(text){

        console.log('this',this.state.email,text.target.value);
        this.setState({
            email:text.target.value,
        })

    }
     

    handlePasswordChange(text){ 

        this.setState({
            password:text.target.value,
        })

    }

    loadingView(){
        if (this.state.loading) {
            return(
                 <div class="overlayloading">loading</div>
                )

        }else{
            return(
                <div></div>
                )
        }
    }

    onSubmitLogin(){
        this.setState({
            loading:true,
        })
        let _this = this;
        console.log('onSubmitLogin')
        if (this.state.email != null && this.state.password != '') {
            if (this.state.password != null && this.state.password != '' ) {

           let data = {
                email:this.state.email,
                password:this.state.password,               
            }
            
            fetch('http://localhost:8000/app/v0/IlRegistration/', {
                method: 'PUT',
                headers:{
                    "Authorization":"bearer 271c0a26ce3f8a1ba32c4343f3836d5bb0544a93",
                    "Content-Type":"application/json",
                     
                },
                body: JSON.stringify(data),
            })
            .then((response) => response.json())
            .then(function(response) {
                console.log()
                _this.setState({
                    loading:false,
                })
                let data = localStorage.getItem('userData2');

                console.log('data',data,response);
 
               
              if (response.result.length > 0) {
               localStorage.setItem('userData2',JSON.stringify(response.result[0]));
              window.location = "/dashboard"; 
              }else{
                alert('invalid username password');
                _this.setState({
                    loading:false,
                })
              }              
            })
            }else{
               alert('enter your password');
               _this.setState({
                    loading:false,
                })
            }
        }else{

            alert('enter your email')
            _this.setState({
                    loading:false,
                })
        }

    }


    render(){
    var data = localStorage.getItem('userData2')
    console.log('data2222',data)
    if (data == null || data == undefined) {
         
     
        return (
            <div class="loginContainer">                
                <Col md={4}  xs={12}>
                    <Card className="card-user login">
                        <div className="image">
                            <img src={appicon} alt="..."/>
                            <h1 class="loginTitle">Impact League</h1>
                        </div>
                        <CardBody>
                            <div class="wraperloginform">
                                <input placeholder="Email" class="loginformInput" type="text" value={this.state.email} onChange={this.handleEmailChange} />
                                <input placeholder="Password" class="loginformInput" type="text" value={this.state.password} onChange={this.handlePasswordChange} />
                                <Button onClick={()=>this.onSubmitLogin()}>
                                SUBMIT    
                                </Button>
                            </div>
                          
                        </CardBody>
                    </Card>
                </Col>
                {this.loadingView()}
            </div>
        );
     }
    }


}

export default User;
