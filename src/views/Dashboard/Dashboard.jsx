import React from 'react';
import {
    Card, CardHeader, CardBody, CardFooter, CardTitle, Row, Col, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Table,
} from 'reactstrap';
// react plugin used to create charts
import { Line, Bar } from 'react-chartjs-2';
// function that returns a color based on an interval of numbers
import Gauge from 'react-svg-gauge';
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
import $ from 'jquery'
import Progress from 'react-progressbar';
 
import healthMeter from 'assets/img/health.PNG';

import happinesMeter from 'assets/img/happiness.PNG';
import bg1 from 'assets/img/default-avatar.png';
import bg6 from 'assets/img/bg6.jpg';
import bg3 from 'assets/img/bg3.jpg';
import bg4 from 'assets/img/bg4.jpg';
import bg5 from 'assets/img/bg5.jpg';
import badge from 'assets/img/badge.jpg';
import Trophy from 'assets/img/trophy.jpg';
import heart from 'assets/img/heart.gif';
import {Carousel} from 'react-responsive-carousel';
import { tasks } from 'variables/general.jsx';
import Rank1 from 'assets/img/Rank1.png';
import Rank2 from 'assets/img/Rank2.png';
import Rank3 from 'assets/img/Rank3.png';

const DataCause = [
  {
    cause_name:'For hunger relief',
    cause_catagory:'Povety',
    cause_img:'http://www.worldbank.org/content/dam/photos/780x439/2016/may-9/Lao_poverty_780x439.jpg',
    cause_goal:100000,
    amount_raised:50000,
  },
  {
    cause_name:'Calories for calories',
    cause_catagory:'Povety',
    cause_img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJmayYm976kTXRmwl4ZGlhq2RoQ7wuxcFbXxMyTgvloFN_RRZn',
    cause_goal:1500000,
    amount_raised:500000,
  }
]
  
   const style = {
    height: 48,
    width: 42,
    backgroundImage: "url("+Rank1+")",
    backgroundSize: "100% 100%",
    display:"flex",
    justifyContent: "center",    
    left: 12,
    /* margin-right: 20px; */
    color: "white",
    fontWeight: "bolder",
    paddingTop: 9,
    fontSize: 14,
  }
  const styleForRank1 = {
    height: 48,
    width: 42,
    backgroundImage: "url("+Rank1+")",
    backgroundSize: "100% 100%",
    display:"flex",
    justifyContent: "center",    
    left: 12,
    /* margin-right: 20px; */
    color: "white",
    fontWeight: "bolder",
    paddingTop: 9,
    fontSize: 14,
  }
  const styleForRank2 = {
    height: 48,
    width: 42,
    backgroundImage: "url("+Rank2+")",
    backgroundSize: "100% 100%",
    display:"flex",
    justifyContent: "center",    
    left: 12,
    /* margin-right: 20px; */
    color: "white",
    fontWeight: "bolder",
    paddingTop: 9,
    fontSize: 14,
  }
  const styleForRank3 = {
    height: 48,
    width: 42,
    backgroundImage: "url("+Rank3+")",
    backgroundSize: "100% 100%",
    display:"flex",
    justifyContent: "center",    
    left: 12,
    /* margin-right: 20px; */
    color: "white",
    fontWeight: "bolder",
    paddingTop: 9,
    fontSize: 14,
  }
  const style2 = {
            height: 50,
            width: 42,
            display:"flex",
            justifyContent: "center",    
            left: 12,
            /* margin-right: 20px; */
            color: "#4c4949",
            fontWeight: "bolder",
            paddingTop: 9,
            fontSize: 20,
          }

  const styleTeam = {
            height: 50,
            width: 50,
            backgroundImage: "url("+Trophy+")",
            backgroundSize: "100% 100%",
            display:"flex",
            justifyContent: "center",    
            left: 12,
            /* margin-right: 20px; */
            color: "white",
            fontWeight: "bolder",
            paddingTop: 5,
            fontSize: 14,
          }


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

      // this.renderTeamList =  this.renderTeamList(this);
      
       
      
     
       // firebase.database().ref().child('amount').on('value', snap => {
       //  console.log('snap',snap);
       // })
     
      // firebase.database().ref(`/`+userdata.impactleague_name+'/'+userdata.team_id+'/'+'details').push({
      //   team_name:userdata.team_name,

      // })
  }



  addComma(){
   let number = '100';
   let string = '';
    
    if(number.length <= 3){   
      var data = number.length-4;
      number.slice(0,data);
      string =  number.slice(0,data)+","+number.slice(2,4)+","+number.slice(4,number.length);
      console.log('number',number,string);
    }else if (number.length == 4 ){
      let minusData = number.length-3 ;

      string = number.slice(0,minusData) +","+number.slice(minusData,number.length);
      number = string;
      console.log('number4',number);
   }else if (number.length == 5 ){
      let minusData = number.length-3 ;

      string = number.slice(0,minusData) +","+number.slice(minusData,number.length);
      number = string;
      console.log('number5',number);
   }else if (number.length == 6 ){
      let minusData = number.length-3 ;

      string = number.slice(0,1) +","+number.slice(1,minusData)+","+number.slice(minusData,number.length);
      number = string;
      console.log('number6',number);
   }
   else if (number.length == 7 ){
      let minusData = number.length-3 ;

      string = number.slice(0,2) +","+number.slice(2,minusData)+","+number.slice(minusData,number.length);
      number = string;
      console.log('number7',number);
   }




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
      fetch('http://api.impactrun.com/app/v0/IlDashboardGetTop50/?team_id='+userData.league_id, {
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
    this.addComma();
    this.scrollCardsOnhover();
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
              if (value1.length > 0){
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
              }
              memberList.sort(function(obj1, obj2) {
                console.log(obj1,obj2)
                if (obj1.user_total_amount != NaN && obj2.user_total_amount != NaN) {
                  return obj1.user_total_amount - obj2.user_total_amount
                  }else {
                    obj1.user_total_amount = 0
                    obj2.user_total_amount = 0
                    return obj1.user_total_amount - obj2.user_total_amount
                  }
              })

                memberList.reverse();             
                sumteamamount += value1.Teamdata.team_raised_amount
                console.log('memberList',sumteamamount,value1.Teamdata);
                newState.push({
                  team_data: value1.Teamdata,
                  members: memberList,     
                 
                });

              console.log('dat12233',  newState.sort(function(obj1, obj2) {
                // Ascending: first age less than the previous
                if (obj1.team_data.team_raised_amount != NaN && obj2.team_data.team_raised_amount != NaN) {
              return obj1.team_data.team_raised_amount - obj2.team_data.team_raised_amount
              }else{
                obj1.team_data.team_raised_amount = 0;
                obj2.team_data.team_raised_amount = 0;
                return obj1.team_data.team_raised_amount - obj2.team_data.team_raised_amount
             }
            }))
            
              
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

  // renderTeamList(){
   
  //   if (valuedata != null || valuedata != undefined) {
     
  //   } 
  // }




  scrollCardsOnhover(){
    $(".scroll_on_hover").mouseover(function() {
    $(this).removeClass("ellipsis");
    var maxscroll = $(this).width();
    var speed = maxscroll * 15;
    $(this).animate({
        scrollLeft: maxscroll
    }, speed, "linear");
    });

  }


  renderTeamMembersList(){
     let valuedata = this.state.Mydata;
     if (this.state.ShowTeamMember) {
         
        const TeamList = this.state.memberData.map((value,key)=>{
             console.log('user_total_raised',value,value.user_total_amount);
          if (this.state.ShowTeamMember != null || this.state.ShowTeamMember != undefined) {
          if (key == 0) {
            return (
              <tr  key = {key} >
                 <td className="text-left">
                  <div className="rank"> <div style={styleForRank1}></div><img className="user_image"src={value.user_img} alt="..."/>
                 {value.user_first_name}</div></td>
                 <td className="text-right"><span><i className="fas fa-rupee-sign"></i></span> {(value.user_total_amount == undefined || value.user_total_amount == null)? 0 : value.user_total_amount.toLocaleString('en-IN', {minimumFractionDigits: 0})}</td>
              </tr>
            )

          }else if (key == 1) {
            return (
              <tr  key = {key} >
                 <td className="text-left">
                  <div className="rank"> <div style={styleForRank2}></div><img className="user_image"src={value.user_img} alt="..."/>
                 {value.user_first_name}</div></td>
                 <td className="text-right"><span><i className="fas fa-rupee-sign"></i></span> {(value.user_total_amount == undefined || value.user_total_amount == null)? 0 : value.user_total_amount.toLocaleString('en-IN', {minimumFractionDigits: 0})}</td>
              </tr>
            )

          }else if (key == 2) {
            return (
              <tr  key = {key} >
                 <td className="text-left">
                  <div className="rank"> <div style={styleForRank3}></div><img className="user_image"src={value.user_img} alt="..."/>
                 {value.user_first_name}</div></td>
                 <td className="text-right"><span><i className="fas fa-rupee-sign"></i></span> {(value.user_total_amount == undefined || value.user_total_amount == null)? 0 : value.user_total_amount.toLocaleString('en-IN', {minimumFractionDigits: 0})}</td>
              </tr>
            )

          }else if (key > 2){
          return (
              <tr  key = {key} >
                 <td className="text-left">
                  <div className="rank"> <div style={style2}><p>{key+1}</p></div><img className="user_image"src={value.user_img} alt="..."/>
                 {value.user_first_name}</div></td>
                 <td className="text-right"><span><i className="fas fa-rupee-sign"></i></span> {(value.user_total_amount == undefined || value.user_total_amount == null)? 0 : value.user_total_amount.toLocaleString('en-IN', {minimumFractionDigits: 0})}</td>
              </tr>
            )
        }
         
          
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
              <p className="category">All Teams  </p>
            </CardHeader>
            <CardBody className="leaderboard">
             <Table responsive> 
           <FlipMove  duration={350} easing={'linear'} staggerDurationBy={30}
            staggerDelayBy={20} typeName="tbody" className="flip-wrapper" style={{ color: 'red' }} >
           {  valuedata.map((value,key )=> {

             if (key == 0) {
            return (
              <tr  className= "teamRowWrap " key = {key} onClick={()=>this.navigateTOteamleaderboard(value.members,value.team_data.team_name)} >
                 <td className="text-left">
                  <div className="rank"> <div style={styleForRank1}></div><img className="user_image"src={Trophy} alt="..."/>
                 {value.team_data.team_name}</div></td>
                 <td className="text-right"><span><i className="fas fa-rupee-sign"></i></span> {(value.team_data.team_raised_amount == undefined || value.team_data.team_raised_amount == null)? 0 : value.team_data.team_raised_amount.toLocaleString('en-IN', {minimumFractionDigits: 0})}</td>
              </tr>
            )

          }else if (key == 1) {
            return (
              <tr  className= "teamRowWrap " key = {key} onClick={()=>this.navigateTOteamleaderboard(value.members,value.team_data.team_name)}>
                 <td className="text-left">
                  <div className="rank"> <div style={styleForRank2}></div><img className="user_image"src={Trophy} alt="..."/>
                 {value.team_data.team_name}</div></td>
                 <td className="text-right"><span><i className="fas fa-rupee-sign"></i></span> {(value.team_data.team_raised_amount == undefined || value.team_data.team_raised_amount == null)? 0 : value.team_data.team_raised_amount.toLocaleString('en-IN', {minimumFractionDigits: 0})}</td>
              </tr>
            )

          }else if (key == 2) {
            return (
              <tr  className= "teamRowWrap " key = {key} onClick={()=>this.navigateTOteamleaderboard(value.members,value.team_data.team_name)}>
                 <td className="text-left">
                  <div className="rank"> <div style={styleForRank3}></div><img className="user_image"src={Trophy} alt="..."/>
                 {value.team_data.team_name}</div></td>
                 <td className="text-right"><span><i className="fas fa-rupee-sign"></i></span> {(value.team_data.team_raised_amount == undefined || value.team_data.team_raised_amount == null)? 0 : value.team_data.team_raised_amount.toLocaleString('en-IN', {minimumFractionDigits: 0})}</td>
              </tr>
            )

          }else if (key > 2){
          return (
              <tr  className= "teamRowWrap " key = {key} onClick={()=>this.navigateTOteamleaderboard(value.members,value.team_data.team_name)}>
                 <td className="text-left">
                  <div className="rank"> <div style={style2}><p>{key+1}</p></div><img className="user_image"src={Trophy} alt="..."/>
                 {value.team_data.team_name}</div></td>
                 <td className="text-right"><span><i className="fas fa-rupee-sign"></i></span> {(value.team_data.team_raised_amount == undefined || value.team_data.team_raised_amount == null)? 0 : value.team_data.team_raised_amount.toLocaleString('en-IN', {minimumFractionDigits: 0})}</td>
              </tr>
            )
        }





        
        
      }) }
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



        var classNameForRank = '';
          
        const top50User = this.state.top50user.map((value,key)=>{
          
          if (key == 0) {
            return (
              <tr  key = {key} >
                 <td className="text-left">
                  <div className="rank"> <div style={styleForRank1}></div><img className="user_image"src={value.social_thumb} alt="..."/>
                 {value.first_name}</div></td>
                 <td className="text-right"><span><i className="fas fa-rupee-sign"></i></span> {(value.sum == undefined || value.sum == null)? 0 : value.sum.toLocaleString('en-IN', {minimumFractionDigits: 0})}</td>
              </tr>
            )

          }else if (key == 1) {
            return (
              <tr  key = {key} >
                 <td className="text-left">
                  <div className="rank"> <div style={styleForRank2}></div><img className="user_image"src={value.social_thumb} alt="..."/>
                 {value.first_name}</div></td>
                 <td className="text-right"><span><i className="fas fa-rupee-sign"></i></span> {(value.sum == undefined || value.sum == null)? 0 : value.sum.toLocaleString('en-IN', {minimumFractionDigits: 0})}</td>
              </tr>
            )

          }else if (key == 2) {
            return (
              <tr  key = {key} >
                 <td className="text-left">
                  <div className="rank"> <div style={styleForRank3}></div><img className="user_image"src={value.social_thumb} alt="..."/>
                 {value.first_name}</div></td>
                 <td className="text-right"><span><i className="fas fa-rupee-sign"></i></span> {(value.sum == undefined || value.sum == null)? 0 : value.sum.toLocaleString('en-IN', {minimumFractionDigits: 0})}</td>
              </tr>
            )

          }else if (key > 2){
          return (
              <tr  key = {key} >
                 <td className="text-left">
                  <div className="rank"> <div style={style2}><p>{key+1}</p></div><img className="user_image"src={value.social_thumb} alt="..."/>
                 {value.first_name}</div></td>
                 <td className="text-right"><span><i className="fas fa-rupee-sign"></i></span> {(value.sum == undefined || value.sum == null)? 0 : value.sum.toLocaleString('en-IN', {minimumFractionDigits: 0})}</td>
              </tr>
            )
        }
        })
        



        var data = localStorage.getItem('userData2')
        var totalIball = 72322;
        var totalHeartbeat = 10223223;
        if (data != null || data != undefined && this.state.responseData != null) {        
        return (
            <div>
                <PanelHeader
                    size="lg"
                    content={
                       <div>
                        <div>
                          <div className = 'Title' ><h1 className='titleheader'>{this.state.leagueName}</h1></div>
                           <Line data={LineData} options={dashboardPanelChart.options}/>

                        </div>
                        <div className="wraperRemainingDays">
                            <div className="totalRaisedAmountWrap">
                             <p className="label">Total charity raised</p>
                             <h4 className="label"><span><i className="fas fa-rupee-sign"></i></span> {(this.state.NowValue == undefined || this.state.NowValue == null)? 0 : this.state.NowValue.toLocaleString('en-IN', {minimumFractionDigits: 0})}</h4>

                            </div>
                            <div className="totalTimeLeftWrap">
                            <p className="label" >Time Left</p>
                            <h4 className="label">02:32:04</h4>
                            </div>
                        </div>
                        </div>
                }/>

                <div className="content ">
                    <Row  className=" cardsWrapper  ">
                        <div className="Scroll_view">
                        <Col className="cardTextWrapper" xs={12} md={3}>
                        <Card>
                          <div>
                             <CardBody>
                               <Gauge value={4} width={300} height={302}  label="Health meter"/>
                            </CardBody>
                          </div>
                        </Card>
                        </Col>
                        <Col className="cardTextWrapper" xs={12} md={3}>
                            <Card className="card-chart">
                                <CardHeader>
                                    <CardCategory></CardCategory>
                                    <CardTitle>Total Calories Burnt</CardTitle>
                                   
                                </CardHeader>
                                <CardBody>
                                    <div className="chart-area">
                                       <i className="material-icons calories">whatshot</i>
                                       <h3 className='tottalactiveuser'>{parseFloat(this.state.total_calories_burnt).toFixed(0)}</h3>
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

                        <Col className="cardTextWrapper" xs={12} md={3}>
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
                        {DataCause.map((value,key)=>(

                         
                             <Col className="cardTextWrapper" xs={12} md={3} key = {key}>
                              <Card className="card-chart">
                                  <div> 
                                     <img className="causeCardImage" src={value.cause_img}>
                                     </img>
                                     <h2 className="causeTitle">{value.cause_name}</h2> 
                                      <div className="stats" >
                                        <p className="remainingPercent">70%</p>                                     
                                      </div>
                                      <div>

                                        <Progress completed={70} />
                                      </div>
                                      <div className="textWrapCard">
                                      <div className="stats raised" >
                                       <p className="causeLabel">Raised amount</p>
                                       <p>{value.amount_raised}</p>
                                      </div>
                                      <div className="stats goal">
                                       <p className="causeLabel">Goal amount</p>
                                       <p>{value.cause_goal}</p>
                                      </div>
                                     </div>
                                  </div>
                              </Card>
                          </Col>
                          
                      ))}
                    </div>
                      
                    </Row>

                    <Row>
                      <Col xs={12} md={12}>
                      <div className="iballwrap"><p className="iballtext">  <span> { totalIball.toLocaleString('en-IN', {minimumFractionDigits: 0})}</span>  people have spent   <span> {totalHeartbeat.toLocaleString('en-IN', {minimumFractionDigits: 0})} </span>    <span><img src={heart}></img></span> beats with your brand till now</p></div>
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
                           
                    </Row>
                     <Row>
                        <Col xs={12} md={12}>
                            <Carousel showThumbs={false} showIndicators={false} autoPlay interval={3000} infiniteLoop centerMode centerSlidePercentage={50} emulateTouch>
                              <div>
                                <div>
                                     <img className="user_image testimonials" src={bg1} alt="..."/>
                                     <h3 className="user_name_text_testimonial">Nikhil Khandelwal</h3>
                                     <p>Ishan dreams of making the world fitter and kinder. With a 3-year experience of scaling business products, operations and digital marketing, he is the brain of Impact managing business, investments and customer excellence.</p>
                                </div>
                              </div>
                              <div>
                                <div>
                                     <img className="user_image testimonials"src={"data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMbaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkYwMDQ1Q0ZFQjNDMDExRTc5MkQ0QTA4NzkzQjJGRUQ5IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkYwMDQ1Q0ZEQjNDMDExRTc5MkQ0QTA4NzkzQjJGRUQ5IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgTWFjaW50b3NoIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9IjM5OTRDQUJBNEVFNTlGRjYxOTgzODBFQ0E3RkFDM0NCIiBzdFJlZjpkb2N1bWVudElEPSIzOTk0Q0FCQTRFRTU5RkY2MTk4MzgwRUNBN0ZBQzNDQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uACZBZG9iZQBkwAAAAAEDABUEAwYKDQAACG0AAAoRAAANuwAAEt//2wCEAAYEBAQFBAYFBQYJ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"} alt="..."/>
                                     <h3 className="user_name_text_testimonial">Ishan Nadkarni</h3>
                                     <p>Ishan dreams of making the world fitter and kinder. With a 3-year experience of scaling business products, operations and digital marketing, he is the brain of Impact managing business, investments and customer excellence.</p>
                                </div>
                              </div>
                              <div>
                                <div>
                                    <img className="user_image testimonials"src={bg1} alt="..."/>
                                    <h3 className="user_name_text_testimonial">Akash Nautiyal</h3>
                                    <p>Ishan dreams of making the world fitter and kinder. With a 3-year experience of scaling business products, operations and digital marketing, he is the brain of Impact managing business, investments and customer excellence.</p>
                                </div>
                              </div>
                              <div>
                                <div>
                                     <img className="user_image testimonials"src={bg1} alt="..."/>
                                     <h3 className="user_name_text_testimonial">Nishant khandelwal</h3>
                                     <p>Ishan dreams of making the world fitter and kinder. With a 3-year experience of scaling business products, operations and digital marketing, he is the brain of Impact managing business, investments and customer excellence.</p>
                                </div>
                              </div>
                            </Carousel>
                        </Col>
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


 //                       <Col md={6}  xs={12}>
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
 // <Col xs={12} md={3}>
 //                            <Card className="card-chart">
 //                                <CardHeader>
 //                                    <CardCategory></CardCategory>
 //                                    <CardTitle>Total Active Users</CardTitle>
                                   
 //                                </CardHeader>
 //                                <CardBody>
 //                                    <div className="chart-area">
 //                                    <i className="material-icons calories">person</i>
 //                                     <h3 className='tottalactiveuser'>{this.state.total_active_user}</h3>
 //                                    </div>
 //                                </CardBody>
 //                                <CardFooter>
 //                                    <Stats>
 //                                        {[
 //                                            { i: "now-ui-icons arrows-1_refresh-69", t: "Just Updated"}
 //                                        ]}
 //                                    </Stats>
 //                                </CardFooter>
 //                            </Card>
 //                        </Col>

export default Dashboard;
