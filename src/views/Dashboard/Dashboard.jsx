import React from 'react';
import {
    Card, CardHeader, CardBody, CardFooter, CardTitle, Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Table,
} from 'reactstrap';
// react plugin used to create charts
import { Line, Bar } from 'react-chartjs-2';
// function that returns a color based on an interval of numbers
import appicon from 'assets/img/appicon120.png'

import { NavLink } from 'react-router-dom';
import FlipMove from 'react-flip-move';
import {
    PanelHeader, Stats, CardCategory, Tasks
} from 'components';
import {init as firebaseInit} from '../../firebaseConfig'
import * as firebase from 'firebase'
import {
    dashboardPanelChart,
    dashboardShippedProductsChart,
    dashboardAllProductsChart,
    dashboard24HoursPerformanceChart
} from 'variables/charts.jsx';

import healthMeter from 'assets/img/health.PNG';

import happinesMeter from 'assets/img/happiness.PNG';
import bg1 from 'assets/img/bg1.jpg';
import bg6 from 'assets/img/bg6.jpg';
import bg3 from 'assets/img/bg3.jpg';
import bg4 from 'assets/img/bg4.jpg';
import bg5 from 'assets/img/bg5.jpg';

import {Carousel} from 'react-responsive-carousel';
import { tasks } from 'variables/general.jsx';



 firebaseInit()
class Dashboard extends React.Component{
    constructor(props) {
      var data = localStorage.getItem('userData2')
      console.log('data2222',data)
      if (data === null || data === undefined) {
           window.location = "/login"; 
      }
      let userdata = {
        impactleague_name:'HIL',
        team_name:'Jaipur',
        user_first_name:'Piyush',
        user_last_name:'Nagle',
        user_total_amount:10,
        user_img:'https://cdn.pixabay.com/photo/2016/09/12/03/18/mushrooms-1662959__480.png'
      };
    
      let runs = {
         start_time:new Date(),
         cause_name:'run for cause',
         duration:'00:10:30',
         distance:1.0,
         amount:10,
         calories:240,
      };
      super(props)
      this.state = {
        userData:JSON.parse(data) ,
        Mydata:null,
        total_active_user:0,
        total_calories_burnt:0,
        total_workout:0,
        leagueName:'',
        ShowTeamMember:false,
        memberData:null,
        teamName:'',
        NowValue:0,
        ref:firebase.database().ref(`/`+userdata.impactleague_name),
        articles:[
        {id:"0",title:"data"},
        {id:"2",title:'some more data'}
        ],
        top50user:[],
       
      }
      
       
      
     
       // firebase.database().ref().child('amount').on('value', snap => {
       //  console.log('snap',snap);
       // })
     
      // firebase.database().ref(`/`+userdata.impactleague_name+'/'+userdata.team_id+'/'+'details').push({
      //   team_name:userdata.team_name,

      // })
  }


  fetchData(){
    let _this = this;
     let userData = this.state.userData
      fetch('http://localhost:8000/app/v0/IlDashboard/?team_id='+userData.league_id, {
          method: 'GET',
          headers:{
              "Authorization":"bearer 271c0a26ce3f8a1ba32c4343f3836d5bb0544a93",
              "Content-Type":"application/json",
               
          }
         
      })
      .then((response) => response.json())
      .then(function(response) {
        console.log('response',response)
          _this.setState({
            total_active_user : response.result[0].active_user,
            total_calories_burnt : response.result[0].calories_burnt,
            total_workout : response.result[0].total_workouts,
            leagueName:response.result[0].leagueName,
          })
          console.log('response',response,_this.state.responseData);
      }).catch((err)=>{
        console.log('err',err);
      })
  }

  fetchDataTop50(){
    let _this = this;
     let userData = this.state.userData
      fetch('http://localhost:8000/app/v0/IlDashboardGetTop50/?team_id='+userData.league_id, {
          method: 'GET',
          headers:{
              "Authorization":"bearer 271c0a26ce3f8a1ba32c4343f3836d5bb0544a93",
              "Content-Type":"application/json",
               
          }
         
      })
      .then((response) => response.json())
      .then(function(response) {
        console.log('response',response)
        response.result.sort(function(obj1, obj2) {
                // Ascending: first age less than the previous
              return obj1.sum - obj2.sum
              
          });
        _this.setState({
             top50user:response.result.reverse(),
         })
          // _this.setState({
          //   total_active_user : response.result[0].active_user,
          //   total_calories_burnt : response.result[0].calories_burnt,
          //   total_workout : response.result[0].total_workouts,
          //   leagueName:response.result[0].leagueName,
          // })
          console.log('response',response);
      }).catch((err)=>{
        console.log('err',err);
      })
  }



  // AddTeam(){
  //   console.log('data');
  //    let userdata = {
  //     impactleague_name:'HIL',
  //     team_name:'Char',
  //     user_first_name:'Nishant',
  //     user_last_name:'Khendelwal',
  //     user_total_amount:10,
  //     user_img:'https://cdn.pixabay.com/photo/2016/09/12/03/18/mushrooms-1662959__480.png'
  //   };
       



      

  //     var Ref = firebase.database().ref(`/`+'5/teams'+'/'+userdata.team_name+'/Teamdata/team_raised_amount');
  //       Ref.once('value',function(snapshot) {
  //         console.log('my team data',snapshot.val());
  //         var Ref = firebase.database().ref(`/`+'HIL/teams'+'/'+userdata.team_name+'/Teamdata/');
  //         Ref.update({
  //          team_raised_amount:snapshot.val()+10,
  //         })       
  //     })

  //     // firebase.database().ref(`/`+userdata.impactleague_name+'/'+'teams'+"/"+userdata.team_name+"/Teamdata").set({
  //     //   team_name:userdata.team_name,
  //     //   team_raised_amount:userdata.user_total_amount,
  //     // })
  //     // firebase.database().ref('/'+userdata.impactleague_name+'/'+'teams'+"/"+userdata.team_name+'/members/'+userdata.user_first_name).set({
  //     //   user_first_name:userdata.user_first_name,
  //     //   user_last_name:userdata.user_last_name,
  //     //   user_img:userdata.user_img,
  //     //   user_total_amount:userdata.user_total_amount,
  //     // })
  // }

  
 
   
 compareValues(key, order='asc') {
  return function(a, b) {
    if(!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      // property doesn't exist on either object
        return 0; 
    }

    const varA = (typeof a[key] === 'string') ? 
      a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string') ? 
      b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order == 'desc') ? (comparison * -1) : comparison
    );
  };
}


  componentWillMount() {
  
    this.fetchData();
    this.fetchDataTop50();
    let _this = this;

      const usersRef = firebase.database().ref(`/`+this.state.userData.league_id+"/teams").orderByChild('team_raised_amount');
      usersRef.on('value', (snapshot) => {
          let newState = [];
           let sumteamamount = 0 ;
             
          Object.entries(snapshot.val()).map(([key1,value1])=>{
              let sumuseramount = 0 ;
             
             let memberList = [];
             
              Object.values(value1.members).forEach(function(childSnapshotmembers) {
                sumuseramount += (childSnapshotmembers.user_total_amount == undefined)? 0:childSnapshotmembers.user_total_amount;
                 memberList.push({
                                   user_first_name:childSnapshotmembers.user_first_name,
                                   user_last_name:childSnapshotmembers.user_last_name,
                                   user_total_amount:(childSnapshotmembers.user_total_amount != undefined) ?childSnapshotmembers.user_total_amount:0 ,
                                   user_img:childSnapshotmembers.user_img
                                 });
                 
                 value1.Teamdata.team_raised_amount = sumuseramount
                 
                 

              })  
                memberList.sort(function(obj1, obj2) {
                console.log(obj1,obj2)
                return obj1.user_total_amount - obj2.user_total_amount
                })
                memberList.reverse();
             
             
                 sumteamamount += value1.Teamdata.team_raised_amount
                
             
                console.log('memberList',sumteamamount);
                newState.push({
                  team_data: value1.Teamdata,
                  members: memberList,     
                 
                });

              console.log('dat12233',  newState.sort(function(obj1, obj2) {
                // Ascending: first age less than the previous
              return obj1.team_data.team_raised_amount - obj2.team_data.team_raised_amount}))
              
          });

          
          // console.log('newState123',newState.sort(compare));

          this.setState({
              Mydata: newState.reverse(),
              NowValue:sumteamamount, 
          });
        
          
      });
  }


  navigateTOteamleaderboard(data,teamname){
    this.setState({
      ShowTeamMember:true,
      memberData:data,
      teamName:teamname,
    })
  }


  onAdd(){
    let moreData = [{id:"1",data:"third"}]
    this.setState({
      articles:moreData.concat(this.state.articles)
    })
  }


  renderTeamMembersList(){
    let valuedata = this.state.Mydata;
     if (this.state.ShowTeamMember) {
         
       const TeamList = this.state.memberData.map((value,key)=>{
             console.log('user_total_raised',value,value.user_total_amount);
          if (this.state.ShowTeamMember != null || this.state.ShowTeamMember != undefined) {
         
          return (

                 <tr key ={key}>
                   <td>
                   {key+1}
                   <img className="user_image"src={value.user_img} alt="..."/>
                  {value.user_first_name } {value.user_last_name}</td>
                   <td className="text-right"><span><i className="fas fa-rupee-sign"></i></span> {(value.user_total_amount != undefined)? value.user_total_amount:0} </td>
               </tr>          
             
          );
        }else{
          return(<div></div>)
        }
        })

      return(

          <Col xs={12} md={6}>
            <Card>
              <CardHeader>
               <div className="teamBoardClosebtn" onClick={()=> this.setState({ShowTeamMember:false})}><i className="now-ui-icons arrows-1_minimal-left"></i></div>
                <CardTitle>{this.state.teamName}</CardTitle>
                <p className="category">#ChangeMaker </p>
              </CardHeader>
              <CardBody className="leaderboard">
                <Table responsive>
                  
               <tbody>
                  
                  
                    {TeamList}           
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
                      
        )

     }else{
      return(
        <Col xs={12} md={6}>
          <Card>
            <CardHeader>
              <CardTitle>Leaderboard</CardTitle>
              <p className="category">All Teams in ESSAR IMPACT LEAGUE </p>
            </CardHeader>
            <CardBody className="leaderboard">
             <Table responsive> 
           <FlipMove  duration={350} easing={'linear'} staggerDurationBy={30}
            staggerDelayBy={20} typeName="tbody" className="flip-wrapper" style={{ color: 'red' }} >
           {
            valuedata.map((value,key )=> (
                <tr key = {value.team_data.team_raised_amount} {...value}  onClick={()=>this.navigateTOteamleaderboard(value.members,value.team_data.team_name)}>
               <td>
               <span className="rank">{key+1}</span>
               {value.team_data.team_name} </td>
               <td className="text-right"><span><i className="fas fa-rupee-sign"></i></span> {(value.team_data.team_raised_amount == undefined || value.team_data.team_raised_amount == null)? 0 : value.team_data.team_raised_amount.toLocaleString('en-IN', {minimumFractionDigits: 0})}</td>
            </tr>
            ))
          }
          </FlipMove>
            
          </Table>
             
            </CardBody>
          </Card>
        </Col>
         
        )
     }
  }

    render(){
       
      
        if ( this.state.Mydata != null) {
          let _this = this;
       let articles = this.state.articles;
         console.log('articles',this.state.NowValue);
        let LineData = (canvas) => {
        const ctx = canvas.getContext("2d");
        var chartColor = "#FFFFFF";
        var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
        gradientStroke.addColorStop(0, '#80b6f4');
        gradientStroke.addColorStop(1, chartColor);
        var gradientFill = ctx.createLinearGradient(0, 200, 0, 50);
        gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
        gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.14)");

        return {
            labels: [ "day 1", "day 2", "day 3", "day 4", "day 5", "day 6", "day 7", "day 8", "day 9", "day 10", "day 11", "day 12", "day 13", "day 14", "day 15", "day 16", "day 17", "day 18", "day 19", "day 20"],
            datasets: [{
                label: "Data",
                borderColor: chartColor,
                pointBorderColor: "white",
                pointBackgroundColor: "#03A9F4",
                pointHoverBackgroundColor: "#2c2c2c",
                pointHoverBorderColor: chartColor,
                pointBorderWidth: 3,
                pointHoverRadius: 7,
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                fill: true,
                backgroundColor: gradientFill,
                borderWidth: 2,
                data: [10, 100, 500, 1000, 2000, 2459, 3690, 4429, 4860, 5652,5894,_this.state.NowValue]
            }],
            
        }
    };




       
        const top50User = this.state.top50user.map((value,key)=>(         
          <tr key = {key} >
             <td>
              <span className="rank">{key+1} <img className="user_image"src={value.social_thumb} alt="..."/></span>
             {value.first_name} </td>
             <td className="text-right"><span><i className="fas fa-rupee-sign"></i></span> {(value.sum == undefined || value.sum == null)? 0 : value.sum.toLocaleString('en-IN', {minimumFractionDigits: 0})}</td>
          </tr>
           
        ))

        var data = localStorage.getItem('userData2')
      
        if (data != null || data != undefined && this.state.responseData != null) {        
        return (
            <div>
                <PanelHeader
                    size="lg"
                    content={
                      
                       <div>
                          <div className = 'Title' > <h1 className='titleheader'>{this.state.leagueName}</h1></div>
                           <Line data={LineData} options={dashboardPanelChart.options}/>
                        </div>
                 }/>

                <div className="content">
                    <Row>
                        <Col xs={12} md={4}>
                            <Card className="card-chart">
                                <CardHeader>
                                    <CardCategory></CardCategory>
                                    <CardTitle>Total Active Users</CardTitle>
                                   
                                </CardHeader>
                                <CardBody>
                                    <div className="chart-area">
                                    <i className="material-icons calories">person</i>
                                     <h3 className='tottalactiveuser'>{this.state.total_active_user}</h3>
                                    </div>
                                </CardBody>
                                <CardFooter>
                                    <Stats>
                                        {[
                                            { i: "now-ui-icons arrows-1_refresh-69", t: "Just Updated"}
                                        ]}
                                    </Stats>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col xs={12} md={4}>
                            <Card className="card-chart">
                                <CardHeader>
                                    <CardCategory></CardCategory>
                                    <CardTitle>Total Calories Burnt</CardTitle>
                                   
                                </CardHeader>
                                <CardBody>
                                    <div className="chart-area">
                                        <i className="material-icons calories">whatshot</i>
                                       <h3 className='tottalactiveuser'>{this.state.total_calories_burnt}</h3>
                                    </div>
                                </CardBody>
                                <CardFooter>
                                    <Stats>
                                        {[
                                            { i: "now-ui-icons arrows-1_refresh-69", t: "Just Updated"}
                                        ]}
                                    </Stats>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col xs={12} md={4}>
                            <Card className="card-chart">
                                <CardHeader>
                                    <CardCategory></CardCategory>
                                    <CardTitle>Total Workouts So Far</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <div className="chart-area">
                                      <i className="material-icons calories">directions_run</i>
                                        <h3 className='tottalactiveuser'>{this.state.total_workout}</h3>
                                    </div>
                                </CardBody>
                                <CardFooter>
                                    <Stats>
                                        {[
                                            { i: "now-ui-icons ui-2_time-alarm", t: "Last 7 days"}
                                        ]}
                                    </Stats>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                      <Col xs={12} md={6}>
                        <Card>
                          <CardHeader>
                            <CardTitle>Top 50 Users</CardTitle>
                            <p className="category">#ChangeMaker </p>
                          </CardHeader>
                          <CardBody className="leaderboard">
                            <Table responsive>
                              
                           <tbody>
                            {top50User}
                                     
                              </tbody>
                            </Table>
                          </CardBody>
                        </Card>
                      </Col>
                    
                        
                       
                        {this.renderTeamMembersList()}
                     
                     
                     
                     
                        <Carousel showThumbs={false} showIndicators={false} autoPlay interval={1000} infiniteLoop centerMode centerSlidePercentage={50} emulateTouch>
                              <div>
                              <img className="social_thumb" src={bg1} />
                              <p className="legend">
                              Legend 
                            
                              </p>
                              // <div></div>
                              </div>
                              <div>
                              <h1>day</h1>
                              <img className="social_thumb"  src={bg6} />
                              <p className="legend">
                              Legend 
                              
                              </p>
                              </div>
                              <div>
                              <img className="social_thumb"  src={bg3} />
                              <p className="legend">
                              Legend 
                            
                              </p>
                              </div>
                              <div>
                              <img className="social_thumb"  src={bg4} />
                              <p className="legend">
                              Legend 
                             
                              </p>
                              </div>
                              <div>
                              <img className="social_thumb"  src={bg5} />
                              <p className="legend">
                              Legend 
                             
                              </p>
                              </div>
                              </Carousel>
                    </Row>
                </div>

            </div>
        );
      }
}else{
  return(<div>Loading</div>)
}

    }
}


 // <Col md={6}  xs={12}>
 //                            <Card className="card-user">
 //                                <div className="image">
 //                                    <img src={healthMeter} alt="..."/>
 //                                </div>
 //                                <CardBody>
                                    
 //                                    <p className="description text-center">
 //                                        A score out of 10 indicating the fitness  <br/>
 //                                        of your employees calculated based on no. of  <br/>
 //                                        kilometres, total calories burnt, no. of workouts
 //                                    </p>
 //                                </CardBody>
 //                                <hr />
                                
 //                            </Card>
 //                        </Col>
 //                        <Col md={6}  xs={12}>
 //                            <Card className="card-user">
 //                                <div onClick={()=>this.onAdd()}className="image">
 //                                    <img src={happinesMeter} alt="..."/>
 //                                </div>
 //                                <CardBody>
                                    
 //                                    <p className="description text-center">
 //                                        A score out of 10 indicating the happiness <br/>
 //                                        of your employees calculated based on in-app <br/>
 //                                        feedback and consistency of workout
 //                                    </p>
 //                                </CardBody>
 //                                <hr />
                                
 //                            </Card>

 //                        </Col>

export default Dashboard;
