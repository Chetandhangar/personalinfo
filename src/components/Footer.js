import React from "react";

function Footer(){
    return(
        <footer>
            <div className="row mt-5">
                <div className="col-auto">
                    <diV></diV>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row row-content">
                    <div className="col-12 col-md-6 mr-auto">
                       <h3>Let's Build Something Toghether</h3>
                       <p></p>
                       <p></p>
                       <p>Feel free to reach if you are looking for a developer,have a question or just want to Connect.</p>
                    </div>
                    <div className="col-12 col-md-5">
                        <h3></h3>
                        <p className="text-center">Email:<a className="text-secondary" href="chetansdhanagar@gmail.com"> chetansdhangar@gmail.com</a></p>
                        <div className="text-center">
                        <a className="btn btn-socail-icon btn-instagram" href="http://instagram.com/chetan.o21"><i className="fa fa-instagram"></i></a>
                        <a className="btn btn-socail-icon btn-github" href="http://github.com/Chetandhangar"><i className="fa fa-github"></i></a>
                        <a className="btn btn-socail-icon btn-linkedin" href="https://www.linkedin.com/in/chetandhangar/"><i className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
            <div className="row justify-content-center">  
                    <div className="col-auto text-fade row-content">
                        <p>© Chetan Dhangar 2020. All rights Reserve.</p>
                        <span className="text-center"><p>Made with ❤️ in India.</p></span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;