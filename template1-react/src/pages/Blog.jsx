import React from 'react'

function Blog() {
  return (
    <div className="blog-area">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="section-title text-center wow fadeInUp animated" data-wow-delay="100ms">
						<div className="section-title-shape">
							<img src="assets/images/resource/section-shape.png" alt="" />
						</div>
						<div className="section-sub-title">
							<h4>News & Blogs</h4>
						</div>
						<div className="section-main-title">
							<h2>Leatest News & Blog</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-6 col-md-12">
					<div className="blog-single-box wow fadeInUp animated" data-wow-delay="200ms">
						<div className="blog-thumb">
							<img src="assets/images/blog/blog1.png" alt="" />
						</div>
						<div className="blog-content">
							<div className="blog-top">
								<div className="blog-shape">
									<img src="assets/images/blog/shape1.png" alt="" />
								</div>
								<div className="blog-shape-title">
									<h6>By-</h6>
									<h6>Website_Stock</h6>
								</div>
							</div>
							<div className="blog-text">
								<h4><a href="blog-details.html">Useful VS Code Esions Front-End Develop</a></h4>
								<p>Lorem ipsum dolor sit amet, atomorum ds sosidon ium est as Id vim rrem princi pes
									suas molesti interpretaris</p>
							</div>
							<div className="blog-bottom">
								<div className="blog-comment">
									<h4><i className="bi bi-chat-right"></i> Comment (5)</h4>
								</div>
								<div className="blog-btn">
									<a href="blog-details.html">More <i className="bi bi-caret-right-fill"></i></a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-6 col-md-12">
					<div className="blog-single-box wow fadeInUp animated" data-wow-delay="400ms">
						<div className="blog-thumb">
							<img src="assets/images/blog/blog2.png" alt="" />
						</div>
						<div className="blog-content">
							<div className="blog-top">
								<div className="blog-shape">
									<img src="assets/images/blog/shape2.png" alt="" />
								</div>
								<div className="blog-shape-title">
									<h6>By-</h6>
									<h6>Website_Stock</h6>
								</div>
							</div>
							<div className="blog-text">
								<h4><a href="blog-details.html">Designing Better Linke Website And Email</a></h4>
								<p>Lorem ipsum dolor sit amet, atomorum ds sosidon ium est as Id vim rrem princi pes
									suas molesti interpretaris</p>
							</div>
							<div className="blog-bottom">
								<div className="blog-comment">
									<h4><i className="bi bi-chat-right"></i> Comment (5)</h4>
								</div>
								<div className="blog-btn">
									<a href="blog-details.html">More <i className="bi bi-caret-right-fill"></i></a>
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

export default Blog