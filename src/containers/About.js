import React from 'react';
import { Card ,CardTitle, CardBody, CardImg } from 'reactstrap';

class About extends React.Component{
    render(){
        return(
            <div>
                  <div className="row mt-5 ml-4 mr-1">
                    <div className="col-auto">
                    <h3>About Me</h3>
                    </div>
               </div>

               <div className="row mt-5 ml-4 mr-1">
                    <div className="col-12 col-md-5">
                        <h3>My name is Chetan Dhangar.</h3>
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
                    <div className="col-12 col-md-5">
                         <h3>My Journey</h3>
                         <p>I started my journey as Web developer in 2020. As I was already an <b>IT</b> student so it was really quick for me to get start.</p>
                         <p>Also i got so talnted and good mentors who guide me in my journey as web developer.</p>
                         <p><a className="text-secondary" href="/tanaysir">Tanay</a> sir really help to me understand the things easily and in  a different way.</p>
                         <p><a className="text-secondary" href="/mullapasir">Jogesh K. Muppalla</a> sir really help me to understand React.</p>
                         <p><a className="text-secondary" href="/ranjanaban">Ranjana</a> ma'ms ebook really help me to  follow the path.</p>
                    </div>
                    <div className="col-12 col-md-5 offset-1">
                        <Card>
                            <CardTitle className="text-center text-dark">Journey</CardTitle>
                            <CardBody>
                            <dl className="row p-1 text-center">
                                <dt className="col-6">Languages and Frameworks</dt>
                                <dd className="col-6">Javascript, Reactjs, Java, Bootstrap, CSS</dd>
                                <dt className="col-6">Projects</dt>
                                <dd className="col-6"><span><a className="text-secondary" href="https://github.com/Chetandhangar/Blog">1: Personal Blog</a></span></dd>
                                <dt className="col-6"></dt>
                                <dd className="col-6"><span><a className="text-secondary" href="https://github.com/Chetandhangar/Confusion">2: Restorente De Confusion</a></span></dd>
                                <dt className="col-6"></dt>
                                <dd className="col-6"><span><a className="text-secondary" href="https://github.com/Chetandhangar/Youtube-Ui-clone">3: Youtube Ui Clone</a></span></dd>
                                <dt className="col-6"></dt>
                                <dd className="col-6"><span><a className="text-secondary" href="https://github.com/Chetandhangar/Buddha_Quotes">4: Buddha Quotes</a></span></dd>
                                <dt className="col-12"></dt>
                                <dt className="col-12"></dt>
                                <dt className="col-6">Certifications</dt>
                                <dd className="col-6"><span><a  className="text-secondary" href="https://www.coursera.org/account/accomplishments/certificate/CRQGF6D5FE4Y">1: Front end Web development with React</a></span></dd>
                                <dt className="col-6"></dt>
                                <dd className="col-6"><span><a  className="text-secondary" href="https://www.coursera.org/account/accomplishments/certificate/3J8Q76MHCWG3">1: Front end Web development with Bootstrap 4</a></span></dd>
                            </dl>
                        </CardBody>
                        </Card>
                    </div>
                </div>

                <div className="row mt-5 ml-4 mr-1">
                      <div className="col-auto">
                        <h2></h2>
                      </div>
                </div>
                <div className="row mt-5 ml-4 mr-1">
                    <div className="col-auto">
                    <h3>Web developement</h3>
                    </div> 
                 </div>
                 <div className="row mt-5 ml-4 mr-1">
                      <div className="col-auto">
                        <h2></h2>
                      </div>
                </div>
                <div className="row ml-4 mr-1">
                    <div className="col-12 col-md-6">
                        <p>I'm a Front-end developer. Currently learning Back-end. I think web developement is the future snd wanted to be part of it. For most of the projects i have use React for developement. But i'm also familiar with other Languages as well.</p>
                    </div>
                </div>

                <div className="row mt-5 ml-4 mr-1">
                    <div className="col-auto">
                    <h3>Mobile App developement</h3>
                    </div> 
                 </div>

            <div className="row mt-5 ml-4 mr-1">
            <div className="col-12 col-md-6">
                <p>I'm also learning Mobile developement as i have intrest in it. I'm also learning it so that it gives flexibility to me. I use Java currently for developement and also learning React Native.</p>
            </div>
            </div>

                <div className="row mt-5 ml-4 mr-1">
                      <div className="col-auto">
                        <h2></h2>
                      </div>
                </div>
               <div className="row mt-5 ml-4 mr-1">
                   <div className="col-auto">
                        <h3>Certifications</h3>
                   </div>
               </div>
               <div className="row mt-5 ml-4 mr-1">
                    <div className="col-12 col-md-5">
                        <a className="text-secondary" href="https://www.coursera.org/account/accomplishments/certificate/CRQGF6D5FE4Y"><h3>Front End Web Developement With React</h3></a>
                    </div>
                    <div className="col12 col-md-5 offset-1">
                        <a className="text-secondary" href="https://www.coursera.org/account/accomplishments/records/CRQGF6D5FE4Y">Grade Achieved: 100.00%</a>
                    </div>
               </div>
               <div className="row mt-5 ml-4 mr-1">
                    <div className="col-12 col-md-5">
                        <a className="text-secondary" href="https://www.coursera.org/account/accomplishments/certificate/3J8Q76MHCWG3"><h3>Front End Web Developement With Bootstrap 4</h3></a>
                    </div>
                    <div className="col12 col-md-5 offset-1">
                        <a className="text-secondary" href="https://www.coursera.org/account/accomplishments/records/3J8Q76MHCWG3">Grade Achieved: 100.00%</a>
                    </div>
               </div>


            </div>
        );
    }
}
export default About;