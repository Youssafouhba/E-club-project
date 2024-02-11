import React from 'react'

function Subscribe() {
  return (
    <div className="subscribe-area d-flex align-items-center">
		<div className="container-fluid">
			<div className="row align-items-center">
				<div className="col-lg-4 col-md-12">
					<div className="subscribe-title wow fadeInUp animated" data-wow-delay="200ms">
						<h4>Subscribe Our Newslatter</h4>
					</div>
				</div>
				<div className="col-lg-8 col-md-12">
					<div className="row">
						<form action="https://formspree.io/f/myyleorq" method="POST">
							<div className="row">
								<div className="col-lg-6 col-md-6">
									<div className="subscribe-box wow fadeInUp animated" data-wow-delay="400ms">
										<input type="text" name="Email" placeholder="Email Address" />
									</div>
								</div>
								<div className="col-lg-6 col-md-12">
									<div className="subscribe-button wow fadeInUp animated" data-wow-delay="600ms">
										<button type="Submit">Subscribe <i className="bi bi-arrow-right"></i></button>
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

export default Subscribe