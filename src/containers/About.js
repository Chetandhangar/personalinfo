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
                         <p>I started my journey as Web developer in mid-june. As I was already an <b>IT</b> student so it was really quick for me to get start.</p>
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
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">Jun. 2020</dd>
                                <dt className="col-6">Languages and Frameworks</dt>
                                <dd className="col-6">Javascript, React, Java</dd>
                                <dt className="col-6">Projects</dt>
                                <dd className="col-6"><span><a className="text-secondary" href="#">1: Personal Blog</a></span></dd>
                                <dt className="col-6"></dt>
                                <dd className="col-6"><span><a className="text-secondary" href="#">2: Restorente De Confusion</a></span></dd>
                                <dt className="col-6"></dt>
                                <dd className="col-6"><span><a className="text-secondary" href="#">3: Youtube Ui Clone</a></span></dd>
                                <dt className="col-6"></dt>
                                <dd className="col-6"><span><a className="text-secondary" href="#">4: Buddha Quotes</a></span></dd>
                                <dt className="col-12"></dt>
                                <dt className="col-12"></dt>
                                <dt className="col-6">Certifications</dt>
                                <dd className="col-6"><span><a  className="text-secondary" href="#">1: Front end Web development with React</a></span></dd>
                                <dt className="col-6"></dt>
                                <dd className="col-6"><span><a  className="text-secondary" href="#">1: Front end Web development with Bootstrap 4</a></span></dd>
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
                <p>I A'm also learning Mobile developement as i have intrest in it. I'm also learning it so that it gives flexibility to me. I use Java currently for developement and also learning React Native.</p>
            </div>
            </div>

                <div className="row mt-5 ml-4 mr-1">
                      <div className="col-auto">
                        <h2></h2>
                      </div>
                </div>
                <div className="row mt-5 ml-4 mr-1">
                      <div className="col-auto">
                        <h2>My Mentors</h2>
                      </div>
                </div>
                
                <div className="row mt-5 ml-4 mr-1">
                    <div className="col-12 col-md-4">
                         <Card>
                             <CardImg src="#" alt="Tanay sir"></CardImg>
                             <CardBody>
                                 <CardTitle className="text-center">Tanay Sir</CardTitle>
                                    <div className="text-center mt-4">
                                        <a className="btn btn-socail-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram"></i></a>
                                        <a className="btn btn-socail-icon btn-github" href="http://github.com/"><i className="fa fa-github"></i></a>
                                        <a className="btn btn-socail-icon btn-youtube" href="#"><i className="fa fa-youtube"></i></a>
                                    </div>
                             </CardBody>
                         </Card>
                    </div>
                    <div className="col-12 col-md-7 offset-1">
                        <p>The main reason i started web developement is becuause of Tanany sir. Tanay sir really change my thinking as a developer. When you see him or follow him you recongnise the he is different and unique than others. I follow sir's path as web developers. The way sir explain some things you will get mesmerize.</p>
                        <p>Sir had also organise one hiring program for any stack you use. For more detail you can <a className="text-secondary" href="#">click here.</a></p>
                        <p>If you are starting your journey as web developer or intrested in web developement you should follow sir's path. You can check sir's youtube channel to where sir provide all the content for free.</p>
                        <h4 className="mt-3">Path Recomended</h4>
                        <ul className="list-unstyled mt-3">
                            <li><a className="text-secondary" href="#">HTML AND CSS</a></li>
                            <li><a className="text-secondary" href="#">JAVASCRIPT</a></li>
                            <li><a className="text-secondary" href="#">REACT</a></li>
                            <li><a className="text-secondary" href="#">REACT AND STYLE</a></li>
                            <li><a className="text-secondary" href="#">REACT HOOKS</a></li>
                        </ul>
                    </div>
                </div>

                <div className="row mt-5 ml-4 mr-1">
                    <div className="col-12 col-md-4">
                        <Card>
                            <CardImg src="#" alt="Jojesh K. Muppala sir"></CardImg>
                              <CardBody>
                                <CardTitle className="text-center">Jogesh K. Muppala Sir</CardTitle>
                                <div className="text-center mt-4">
                                    <a className="btn btn-socail-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram"></i></a>
                                    <a className="btn btn-socail-icon btn-github" href="http://github.com/"><i className="fa fa-github"></i></a>
                                    <a className="btn btn-socail-icon btn-youtube" href="#"><i className="fa fa-youtube"></i></a>
                              </div>
                              </CardBody>
                           
                        </Card>
                    </div>

                    <div className="col-12 col-md-7 offset-1">
                        <p>The next thing yi  follow after Tanay sir's course in Muppala sir's course on Coursera. There is a specialization course on Coursera Realted to React. In that course You will get so helpful knowledge releated to React as well as Bootstrap, React native and Nodejs , Express and also Mongo DB. The course has also assignments to follow. Which will be helpful to check your knowledge. i would say it is a great course to follow. </p>
                        <p>I find sir's point of view towards the developement is so unique. Sir has also youtube channel where they taught React toatally free. You should check that also. Also you can apply for the <b>financial aid</b> for the course available on Coursera; I have done in the same way. </p>
                        <h3 className="mt-3">specialization with React</h3>
                        <ul className="list-unstyled mt-2">
                            <li><a className="text-secondary" href="#">Bootstrap</a></li>
                            <li><a className="text-secondary" href="#">REACT</a></li>
                            <li><a className="text-secondary" href="#">REACT NATIVE</a></li>
                            <li><a className="text-secondary" href="#">NODEJS, EXPRESS, MONGODB</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}
export default About;