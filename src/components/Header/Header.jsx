import React from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Container, InputGroup, InputGroupAddon, Input
} from 'reactstrap';

import dashboardRoutes from 'routes/dashboard.jsx';

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            dropdownOpen: false,
            color: "transparent"
        };
        this.toggle = this.toggle.bind(this);
        this.dropdownToggle = this.dropdownToggle.bind(this);
    }
    toggle() {
        if(this.state.isOpen){
            this.setState({
                color: "transparent"
            });
        } else {
            this.setState({
                color: "white"
            });
        }
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    dropdownToggle(e){
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    getBrand(){
        var name;
        dashboardRoutes.map((prop,key) => {
            if(prop.collapse){
                 prop.views.map((prop,key) => {
                    if(prop.path === this.props.location.pathname){
                        name = prop.name;
                    }
                    return null;
                })
            } else {
                if(prop.redirect){
                    if(prop.path === this.props.location.pathname){
                        name = prop.name;
                    }
                }else{
                    if(prop.path === this.props.location.pathname){
                        name = prop.name;
                    }
                }
            }
            return null;
        })
        return name;
    }
    openSidebar(){
        document.documentElement.classList.toggle('nav-open');
        this.refs.sidebarToggle.classList.toggle('toggled');
    }
    // function that adds color white/transparent to the navbar on resize (this is for the collapse)
    updateColor(){
        if(window.innerWidth < 993 && this.state.isOpen){
            this.setState({
                color: "white"
            });
        } else {
            this.setState({
                color: "transparent"
            });
        }

    }
    componentDidMount(){
        window.addEventListener("resize", this.updateColor.bind(this));
    }
    componentDidUpdate(e){
        if(window.innerWidth < 993 && e.history.location.pathname !== e.location.pathname && document.documentElement.className.indexOf('nav-open') !== -1){
            document.documentElement.classList.toggle('nav-open');
            this.refs.sidebarToggle.classList.toggle('toggled');
        }
    }
    Logout(){
        localStorage.removeItem("userData2")
        window.location = "/login";
    }

    dashboardLink(){
        
        if (window.location.pathname != '/dashboard') {
            return(
                <NavItem>
                <Link to="/dashboard" className="nav-link">
                   <i className="fas fa-tachometer-alt"></i>
                    <p>
                        <span className="d-lg-none d-md-block">Testimonials</span>
                    </p>
                </Link>
                </NavItem>  
            )
        };
    }

   navBarIcon(){
      var data = localStorage.getItem('userData2');
      let parsedData = JSON.parse(data);
    if (data != null || data != undefined) {
       return(
           <Nav navbar>  
           {this.dashboardLink()}                  
            
            <Dropdown nav isOpen={this.state.dropdownOpen} toggle={(e) => this.dropdownToggle(e)}>
                <DropdownToggle caret nav>
                    
                    <i className="now-ui-icons users_single-02"></i>
                    <p>
                        <span className="d-lg-none d-md-block">Profile</span>
                    </p>
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem tag="a">{parsedData.first_name} {parsedData.last_name}</DropdownItem>
                    <DropdownItem tag="a" onClick={()=>this.Logout()}>Logout</DropdownItem>
                </DropdownMenu>
            </Dropdown>
          </Nav>
        )
    }
   }

    render(){
      
        return (
            // add or remove classes depending if we are on full-screen-maps page or not
            <Navbar
                color={this.props.location.pathname.indexOf('full-screen-maps') !== -1 ? "white":this.state.color} expand="lg"
                className={
                    this.props.location.pathname.indexOf('full-screen-maps') !== -1 ?
                    "navbar-absolute fixed-top":"navbar-absolute fixed-top " + (this.state.color === "transparent" ? "navbar-transparent ":"")}>
                <Container fluid>
                    <div className="navbar-wrapper">
                        
                        <NavbarBrand href="/">{this.getBrand()}</NavbarBrand>
                    </div>
                    <NavbarToggler onClick={this.toggle}>
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                        <span className="navbar-toggler-bar navbar-kebab"></span>
                    </NavbarToggler>
                    <Collapse isOpen={this.state.isOpen} navbar className="justify-content-end">
                      {this.navBarIcon()}
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;
