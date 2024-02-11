import React from 'react'

function Registration() {
  return (
    <div className="registration-area">
		<div className="container">
			<div className="row">
				<div className="col-lg-6 col-md-12">
					<div className="section-title wow fadeInUp animated" data-wow-delay="100ms">
						<div className="section-sub-title registration">
							<h4>Get Free Registration</h4>
						</div>
						<div className="section-main-title registration">
							<h2>Register Your Account Get Free Access To 78,540 Online Courses</h2>
						</div>
						<div className="registration-discription">
							<p>Learning from an online event involves several key steps. Firstly, it’s important to
								research and choose an event that aligns with your learning objectives and interests.
								Once you’ve registered for the event, make sure</p>
						</div>
					</div>
				</div>
				<div className="col-lg-6 col-md-12">
					<div className="registration-items-box wow fadeInUp animated" data-wow-delay="300ms">
						<div className="registration-items-title">
							<h4>Interested Discussing</h4>
						</div>
						<div className="registration-shape bounce-animate">
							<img src="assets/images/resource/registration-shape.png" alt="" />
						</div>
						<form action="https://formspree.io/f/myyleorq" method="POST">
							<div className="row">
								<div className="col-lg-12">
									<div className="registration-form">
										<input type="text" name="name" placeholder="Your Name" />
									</div>
								</div>
								<div className="col-lg-12">
									<div className="registration-form">
										<input type="text" name="email" placeholder="Email Address" />
									</div>
								</div>
								<div className="col-lg-12">
									<div className="registration-form">
										<input type="text" name="phone" placeholder="Phone Number" />
									</div>
								</div>
								<div className="col-lg-12 col-md-12">
									<div className="registration-form">
										<textarea name="massage" id="massage" cols="30" rows="10"
											placeholder="Write Message"></textarea>
									</div>
								</div>
								<div className="col-lg-12 col-md-12">
									<div className="registration-button">
										<button type="Submit">Apply for it <i className="bi bi-arrow-right"></i></button>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Registration