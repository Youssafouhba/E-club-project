import React from 'react'

function Footer() {
  return (
    <div className="footer-area">
		<div className="container">
			<div className="footer-shape1 bounce-animate-slow">
				<img src="assets/images/footer/footer-shape-1.png" alt="" />
			</div>
			<div className="footer-shape2 bounce-animate-slow">
				<img src="assets/images/footer/footer-shape-2.png" alt="" />
			</div>
			<div className="row">
				<div className="col-lg-3 col-md-6">
					<div className="footer-wiget wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s">
						<div className="footer-wiget-logo">
							<img src="assets/images/footer-logo.png" alt="" />
						</div>
						<div className="footer-wiget-text">
							<h4>Get a full cRontrol of debts in the dsu digital world simpl labore et dolore ma</h4>
						</div>
						<div className="footer-socilal-title">
							<h4>Follow us on</h4>
						</div>
						<div className="footer-social">
							<ul>
								<li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
								<li><a href="#"><i className="fab fa-twitter"></i></a></li>
								<li><a href="#"><i className="fab fa-vimeo-v"></i></a></li>
								<li><a href="#"><i className="fab fa-instagram"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="footer-wiget wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1s">
						<div className="footer-wiget-title">
							<h4>Our Services</h4>
						</div>
						<div className="footer-wiget-menu">
							<ul>
								<li><a href="#">About Us</a></li>
								<li><a href="#">Contact Us Our</a></li>
								<li><a href="#">Team Our </a></li>
								<li><a href="#">Services Our</a></li>
								<li><a href="#">Projects</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="footer-wiget wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="1s">
						<div className="footer-wiget-title">
							<h4>Get In Touch</h4>
						</div>
						<div className="footer-wiget-touch">
							<ul>
								<li>
									<div className="icon">
										<i className="bi bi-geo-alt"></i>
									</div>
									<div className="title">
										<h6>Address</h6>
									</div>
									<div className="adress">
										<a href="#">244, First Floor, Los Angeles </a>
									</div>
								</li>
								<li>
									<div className="icon">
										<i className="bi bi-telephone-plus-fill"></i>
									</div>
									<div className="title">
										<h6>Phone</h6>
									</div>
									<div className="adress">
										<a href="#">(+01) 123 456 7890</a>
									</div>
								</li>
								<li>
									<div className="icon">
										<i className="bi bi-envelope"></i>
									</div>
									<div className="title">
										<h6>Email</h6>
									</div>
									<div className="adress">
										<a href="#">info@example.com</a>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="footer-wiget wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="1s">
						<div className="footer-wiget-title">
							<h4>Our Projects</h4>
						</div>
						<div className="footer-widget-photo">
							<ul>
								<li><img src="assets/images/footer/footer1.png" alt="" /></li>
								<li><img src="assets/images/footer/footer2.png" alt="" /></li>
								<li><img src="assets/images/footer/footer3.png" alt="" /></li>
								<li><img src="assets/images/footer/footer4.png" alt="" /></li>
								<li><img src="assets/images/footer/footer5.png" alt="" /></li>
								<li><img src="assets/images/footer/footer6.png" alt="" /></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="row align-items-center mt-90">
				<div className="col-lg-6 col-md-12">
					<div className="copyright-text">
						<p>© 2023 - 2025 | Alrights reserved by <a
								href="https://themeforest.net/user/website_stock/portfolio">website_stock</a></p>
					</div>
				</div>
				<div className="col-lg-6 col-md-12">
					<div className="footer-privacy-menu">
						<ul>
							<li><a href="#">Privacy Policy</a></li>
							<li><a href="#">Terms & Conditions</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Footer