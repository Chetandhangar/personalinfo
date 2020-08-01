import React from 'react';
import { CardImg, Card, CardTitle, CardBody } from 'reactstrap';

function RenderProject({project}){
    return(
        <div className="col-auto mt-5 ml-3">
            <Card>
                <CardImg  width="100%" src={project.image} alt={project.title}></CardImg>
                <CardBody>
                    <CardTitle>{project.title}</CardTitle>
                     <span className="text-start">{project.description}</span> 
                </CardBody>
                <a className="text-secondary" href={project.url}>View Project</a>
            </Card>
        </div>
    );
}

  const Home = (props) =>{

    const projects = props.projects.map((project) =>{
        return(
        <div key={props.projects.id} className="col-12 col-md-5 ml-4 text-center offset-1">
            <RenderProject project={project} />
        </div>
        );
    })
         return(
            <div>
                
                <div className="row mt-5 ml-4 mr-1">
                    <div className="col-12 col-md-5">
                        <h1>Hi there, I'm Chetan. Front-end Developer.</h1> 
                        <span><p>Reply time: Within 1 or 2 days.</p></span>
                    </div>
                    <div className="col-12 col-md-6 offset-1">
                        <img  className="img" width="70%" height="70%" src="/assets/profile.jpg" alt="Profile Image"></img>
                    </div>
                </div>
               
               <div className="row mt-5 ml-4 mr-1">
                    <div className="col-auto">
                    <h3>About Me</h3>
                    </div>
               </div>
                <div className="row mt-3 ml-4 mr-1">
                    <div className="col-12 col-md-6">
                        <span><p>I'm 21-year-old student at DY PATIL-RAIT currently studing in Information Technology.</p></span>
                    </div>
                    <div className="col-12 col-md-5">
                        <span><p>As I'm learning web developement. I'm also working on multiple side proects to improve my coding skills.</p></span>
                    </div>
                </div>                         
                 
                <div className="row mt-5 ml-4 mr-1">
                  <div className="col-auto">
                    <h2>What I've been Working On.</h2>
                  </div>
                </div>
                <div className="row mt-4 ml-4 mr-1">
                    <div className="col-md-5">
                        <span><p>I always like to make my self busy and surround with projects.Take a look at some of my projects.</p></span>
                    </div>
                </div>
            
             <div className="row mt-5">
                  {projects}
             </div>

            </div>

           
        );
    }
  
export default Home;