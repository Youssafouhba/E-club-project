import React from 'react'

function Gallery() {
  return (
    <div className="video-gallery-area">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="section-title text-center wow fadeInUp animated" data-wow-delay="100ms">
						<div className="section-title-shape">
							<img src="assets/images/resource/section-shape.png" alt="" />
						</div>
						<div className="section-sub-title">
							<h4>LATEST VIDEO GALLERY</h4>
						</div>
						<div className="section-main-title video">
							<h2>We Provide Life Changing</h2>
							<h2>Video Tutorials</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-3 col-md-6">
					<div className="video-single-box wow fadeInUp animated" data-wow-delay="200ms">
						<div className="video-thumb">
							<img src="assets/images/resource/video1.png" alt="" />
							<div className="video-price">
								<h4>$155</h4>
							</div>
							<div className="video-content">
								<div className="video-icon">
									<a className="video-vemo-icon venobox vbox-item" data-vbtype="youtube"
										data-autoplay="true" href="https://youtu.be/BS4TUd7FJSg"><i
											className="bi bi-play"></i></a>
								</div>
								<div className
                                ="video-title">
									<h4>Online Education</h4>
									<span>By Aiden Markram</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="video-single-box wow fadeInUp animated" data-wow-delay="400ms">
						<div className="video-thumb">
							<img src="assets/images/resource/video2.png" alt="" />
							<div className="video-price">
								<h4>$125</h4>
							</div>
							<div className="video-content">
								<div className="video-icon">
									<a className="video-vemo-icon venobox vbox-item" data-vbtype="youtube"
										data-autoplay="true" href="https://youtu.be/BS4TUd7FJSg"><i
											className="bi bi-play"></i></a>
								</div>
								<div className="video-title">
									<h4>Investment Planning</h4>
									<span>By Joseph Anderson</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="video-single-box wow fadeInUp animated" data-wow-delay="600ms">
						<div className="video-thumb">
							<img src="assets/images/resource/video3.png" alt="" />
							<div className="video-price">
								<h4>$227</h4>
							</div>
							<div className="video-content">
								<div className="video-icon">
									<a className="video-vemo-icon venobox vbox-item" data-vbtype="youtube"
										data-autoplay="true" href="https://youtu.be/BS4TUd7FJSg"><i
											className="bi bi-play"></i></a>
								</div>
								<div className="video-title">
									<h4>Busines Consulting</h4>
									<span>By Stewart Burgess</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-3 col-md-6">
					<div className="video-single-box wow fadeInUp animated" data-wow-delay="800ms">
						<div className="video-thumb">
							<img src="assets/images/resource/video4.png" alt="" />
							<div className="video-price">
								<h4>$222</h4>
							</div>
							<div className="video-content">
								<div className="video-icon">
									<a className="video-vemo-icon venobox vbox-item" data-vbtype="youtube"
										data-autoplay="true" href="https://youtu.be/BS4TUd7FJSg"><i
											className="bi bi-play"></i></a>
								</div>
								<div className="video-title">
									<h4>How To Fit Your Health</h4>
									<span>By Aiden Markram</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Gallery