import React from 'react';
import {
    Card, CardHeader, CardBody, Row, Col,CardTitle,Table
} from 'reactstrap';

import { PanelHeader, FormInputs, CardAuthor, CardSocials } from 'components';

import userBackground from 'assets/img/bg5.jpg';
import userAvatar from 'assets/img/mike.jpg';

class User extends React.Component{
    render(){
        console.log('window',window.data);
        return (
            <div>
                <PanelHeader size="sm"/>
                <div className="content">
                    <Row>
                        <Col xs={12} md={10}>
                        <Card>
                          <CardHeader>
                            <CardTitle>Team name</CardTitle>
                            <p className="category">#ChangeMaker </p>
                          </CardHeader>
                          <CardBody>
                            <Table responsive>
                              
                           <tbody>
                              <tr>
                                   
                                   <td>
                                   1
                                   <img className="user_image"src="http://www.impactapp.in/static/media/Nikhil.46a61b34.jpg" alt="..."/>
                                    Nikhil 
                                   </td>
                                   <td className="text-right"><span><i className="fas fa-rupee-sign"></i></span> 1,040</td>
                               </tr>
                               <tr>
                                   <td>
                                   2
                                   <img className="user_image"src="http://www.impactapp.in/static/media/Ishan.f5fb0829.jpg" alt="..."/>
                                   Ishan </td>
                                   <td className="text-right"><span><i className="fas fa-rupee-sign"></i></span> 840 </td>
                               </tr>  
                               <tr>
                                   <td>
                                   3
                                   <img className="user_image"src="http://www.impactapp.in/static/media/akash.cfced8cc.jpg" alt="..."/>
                                   Akash </td>
                                   <td className="text-right"><span><i className="fas fa-rupee-sign"></i></span> 210 </td>
                               </tr>  
                               <tr>
                                   <td>
                                   4
                                   <img className="user_image"src="http://www.impactapp.in/static/media/nishant.32559010.jpg" alt="..."/>
                                   Nishant </td>
                                   <td className="text-right"><span><i className="fas fa-rupee-sign"></i></span> 140 </td>
                               </tr>  
                               <tr>
                                   <td>
                                   5
                                   <img className="user_image"src="http://www.impactapp.in/static/media/kanak.1bbbfdce.jpg" alt="..."/>
                                   Kanak </td>
                                   <td className="text-right"><span><i className="fas fa-rupee-sign"></i></span> 103 </td>
                               </tr>  
                               <tr>
                                   <td>
                                   6
                                   <img className="user_image"src="http://www.impactapp.in/static/media/kanak.1bbbfdce.jpg" alt="..."/>
                                   Kanak </td>
                                   <td className="text-right"><span><i className="fas fa-rupee-sign"></i></span> 103 </td>
                               </tr>  
                               <tr>
                                   <td>
                                   7
                                   <img className="user_image"src="http://www.impactapp.in/static/media/kanak.1bbbfdce.jpg" alt="..."/>
                                   Kanak </td>
                                   <td className="text-right"><span><i className="fas fa-rupee-sign"></i></span> 103 </td>
                               </tr>  
                               <tr>
                                   <td>
                                   8
                                   <img className="user_image"src="http://www.impactapp.in/static/media/kanak.1bbbfdce.jpg" alt="..."/>
                                   Kanak </td>
                                   <td className="text-right"><span><i className="fas fa-rupee-sign"></i></span> 103 </td>
                               </tr>  
                               <tr>
                                   <td>
                                   9
                                   <img className="user_image"src="http://www.impactapp.in/static/media/kanak.1bbbfdce.jpg" alt="..."/>
                                   Kanak </td>
                                   <td className="text-right"><span><i className="fas fa-rupee-sign"></i></span> 103 </td>
                               </tr>  
                               <tr>
                                   <td>
                                   10
                                   <img className="user_image"src="http://www.impactapp.in/static/media/kanak.1bbbfdce.jpg" alt="..."/>
                                   Kanak </td>
                                   <td className="text-right"><span><i className="fas fa-rupee-sign"></i></span> 103 </td>
                               </tr>  
                               <tr>
                                   <td>
                                   11
                                   <img className="user_image"src="http://www.impactapp.in/static/media/kanak.1bbbfdce.jpg" alt="..."/>
                                   Kanak </td>
                                   <td className="text-right"><span><i className="fas fa-rupee-sign"></i></span> 103 </td>
                               </tr>          
                              </tbody>
                            </Table>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default User;
