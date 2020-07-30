import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../containers/Home';
import About from '../containers/About';
import Work from '../containers/Work';
import { Route,Switch,Redirect} from 'react-router-dom';

class Main extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <Switch>
                   <Route path="/home" component={Home} />
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