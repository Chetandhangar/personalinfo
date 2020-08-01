import React from 'react';
import { Card, CardTitle, CardImg, CardBody} from 'reactstrap';
import { Link } from 'react-router-dom';

    function RenderPro({project}) {
        return(
        <div className="row">
            <div className="col-12 col-md-12 ml-3 mr-1">
                <Card>
                    <CardImg width="50%" height="50%" src={project.image} alt={project.title}/>
                    <CardBody>
                    < CardTitle>{project.title}</CardTitle>
                        <p>{project.description}</p>
                    </CardBody>
                  <div className="row mt-2">
                       <div className="col-12 col-md-6">
                       <Link className="text-secondary" href={project.url}>View Project</Link>
                       </div>
                       <div className="col-12 col-md-5 offset-1">
                         <a className="text-secondary" href={project.url}>View Code</a>
                       </div>
                  </div>
                </Card>  
            </div>
        </div>
        );
    }

 const Work = (props) => {

    const projects = props.projects.map((project) => {
        return(
            <div key={props.projects.id} className="col-12 col-md-5 mt-5 ml-4 text-center offset-1">
            <RenderPro project={project} />
        </div>
        );
    })
 
        return(
            <div>
                 <div className="container">
                    <div className="row mt-5">
                        <h2>My Projects</h2>
                    </div>
                </div>
                <div className="row mt-5">
                    {projects}
                </div>
            </div>
        );
    }


export default Work;