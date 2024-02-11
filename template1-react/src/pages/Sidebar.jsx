import React from 'react'

function Sidebar() {
  return (
    <div className="sidebar-group info-group">
        <div className="sidebar-widget">
            <div className="sidebar-widget-container">
                <div className="widget-heading">
                    <a href="#" className="close-side-widget">
                        <i className="bi bi-x-lg"></i>
                    </a>
                </div>
                <div className="sidebar-textwidget">
                    <div className="sidebar-info-contents">
                        <div className="content-inner">
                            <div className="sidebar-logo">
                                <a href="index.html"><img src="assets/images/logo.png" alt="logo" /></a>
                            </div>
                            <div className="sidebar-widget-menu">
                                <ul>
                                    <li className="dropdown"><a href="#" data-toggle="dropdown">Home <i
                                                className="icon-arrow"></i></a>
                                        <ul className="dropdown-menu">
                                            <li><a href="index.html">Home </a></li>
                                            <li><a href="landing.html">Home Landing</a></li>
                                            <li><a href="video.html">Home Video</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a href="#" data-toggle="dropdown">Courses <i class="icon-arrow"></i></a>
                                        <ul className="dropdown-menu">
                                            <li><a href="service.html">Courses</a></li>
                                            <li><a href="course-details.html">Courses Details</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a href="#" data-toggle="dropdown">Team <i
                                                className="icon-arrow"></i></a>
                                        <ul className="dropdown-menu">
                                            <li><a href="team.html">Team</a></li>
                                            <li><a href="team-detials.html">Team Details</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a href="#project" data-toggle="dropdown">Pages <i
                                                className="icon-arrow"></i></a>
                                        <ul className="dropdown-menu">
                                            <li><a href="team.html">Team</a></li>
                                            <li><a href="team-detials.html">Team Details</a></li>
                                            <li><a href="project-grid.html">Gallery</a></li>
                                            <li><a href="projects-details.html">Gallery Details</a></li>
                                            <li><a href="faq.html">Faq Page</a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                            <li><a href="error.html">Error Page</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a href="#" data-toggle="dropdown">Blog <i
                                                className="icon-arrow"></i></a>
                                        <ul className="dropdown-menu">
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><a href="blog-details.html">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a href="contact.html" data-toggle="dropdown">Contacts</a></li>
                                </ul>
                            </div>
                            <div className="contact-info">
                                <h2>Contact Info</h2>
                                <ul className="list-style-one">
                                    <li><i className="bi bi-geo-alt-fill"></i>6391 Elgin St. Celina, Delaware</li>
                                    <li><i className="bi bi-telephone-fill"></i>(+001) 123-456-789</li>
                                    <li><i className="bi bi-envelope"></i> info@example.com</li>
                                    <li><i className="bi bi-alarm-fill"></i> Week Days: 08.00 to 10.00
                                    </li>
                                </ul>
                            </div>
                            <ul className="social-box">
                                <li className="facebook"><a href="#" className="fab fa-facebook-f"></a></li>
                                <li className="twitter"><a href="#" className="fab fa-instagram"></a></li>
                                <li className="linkedin"><a href="#" className="fab fa-twitter"></a></li>
                                <li className="instagram"><a href="#" className="fab fa-pinterest-p"></a></li>
                                <li className="youtube"><a href="#" className="fab fa-linkedin-in"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar