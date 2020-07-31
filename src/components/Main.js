import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../containers/Home';
import About from '../containers/About';
import Work from '../containers/Work';
import { Route,Switch,Redirect} from 'react-router-dom';
import PROJECTS from '../shared/projects';
import { Card, CardImg } from 'reactstrap';

class Main extends React.Component{

    constructor(props){
        super(props);

        this.state ={
            projects: PROJECTS
        }
    }

    render(){
        return(
            <div>
                <Header />
                <Card />
                <Switch>
                   <Route path="/home" component={ () => <Home projects={this.state.projects}/>} />
                   <Route exact path="/about" component={About} />
                   <Route exact path="/work" component={Work} />
                   <Redirect to="/home"/>
                </Switch>
                <Footer />
            </div>
        );
    }
}
export default Main;