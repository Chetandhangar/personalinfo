import React from 'react';
import { Navbar , NavbarBrand, NavItem, Nav, NavbarToggler, Collapse, NavLink} from 'reactstrap';

class Header extends React.Component{

    
    constructor(props){
        super(props);

        this.handleNav = this.handleNav.bind(this);

        this.state ={
            isNavOpen: false
        }

    }
    handleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
          });
    }

    render(){
        return(
            <React.Fragment>
                <Navbar light expand="md" id="nav">
                   <div className="container">
                       <NavbarToggler onClick={this.handleNav} />
                        <NavbarBrand>Chetan Dhangar</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar className="ml-auto">
                        <NavItem>
                            <NavLink className="nav-link" href=".home">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" href="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" href="/work">Work</NavLink>
                        </NavItem>
                        </Nav>
                        </Collapse>
                        </div>
                </Navbar>
            </React.Fragment>
        );
    }
}       
export default Header;