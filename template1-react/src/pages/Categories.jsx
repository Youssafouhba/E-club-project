import React from 'react'

function Categories() {
  return (
<div class="catagories-area">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="section-title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s">
						<div class="section-title-shape">
							<img src="assets/images/resource/section-shape.png" alt="" />
						</div>
						<div class="section-sub-title">
							<h4>Browse Categories</h4>
						</div>
						<div class="section-main-title">
							<h2>Top Courses Caterories</h2>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="catagories_list owl-carousel owl-loaded owl-drag">
          <div className='owl-stage-outer'>
            <div className='owl-stage' >
              <div className='owl-item' style={{width: `234px`,}}>
                <div class="col-lg-12">
                    <div class="catagories-single-box wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s">
                      <div class="catagories-thumb">
                        <img src="assets/images/catagories/catagories1.png" alt="" />
                        <div class="catagories-text">
                          <h4>Visit</h4>
                        </div>
                      </div>
                      <div class="catagories-title">
                        <h4><a href="#">Online Course</a></h4>
                      </div>
                    </div>
                </div>
              </div>
              <div className='owl-item' style={{width: `234px`,}}>
                <div class="col-lg-12">
                  <div class="catagories-single-box wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1s">
                    <div class="catagories-thumb">
                      <img src="assets/images/catagories/catagories2.png" alt="" />
                      <div class="catagories-text">
                        <h4>Visit</h4>
                      </div>
                    </div>
                    <div class="catagories-title">
                      <h4><a href="#">Web Design</a></h4>
                    </div>
                  </div>
					      </div>
              </div>
              <div className='owl-item'style={{width: `234px`,}}>
                <div class="col-lg-12">
                  <div class="catagories-single-box wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="1s">
                    <div class="catagories-thumb">
                      <img src="assets/images/catagories/catagories3.png" alt="" />
                      <div class="catagories-text">
                        <h4>Visit</h4>
                      </div>
                    </div>
                    <div class="catagories-title">
                      <h4><a href="#">Graphic Design</a></h4>
                    </div>
                  </div>
					      </div>
              </div>
              <div className='owl-item' style={{width: `234px`,}}>
                <div class="col-lg-12">
                  <div class="catagories-single-box wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="1s">
                    <div class="catagories-thumb">
                      <img src="assets/images/catagories/catagories4.png" alt="" />
                      <div class="catagories-text">
                        <h4>Visit</h4>
                      </div>
                    </div>
                    <div class="catagories-title">
                      <h4><a href="#">Art & Humanities</a></h4>
                    </div>
                  </div>
					      </div>
              </div>
              <div className='owl-item' style={{width: `234px`,}}>
                <div class="col-lg-12">
                  <div class="catagories-single-box wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s">
                    <div class="catagories-thumb">
                      <img src="assets/images/catagories/catagories5.png" alt="" />
                      <div class="catagories-text">
                        <h4>Visit</h4>
                      </div>
                    </div>
                    <div class="catagories-title">
                      <h4><a href="#">Mobile Application</a></h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className='owl-item' style={{width: `234px`,}}>
                <div class="col-lg-12">
                  <div class="catagories-single-box wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="1s">
                    <div class="catagories-thumb">
                      <img src="assets/images/catagories/catagories6.png" alt="" />
                      <div class="catagories-text">
                        <h4>Visit</h4>
                      </div>
                    </div>
                    <div class="catagories-title">
                      <h4><a href="#">Development</a></h4>
                    </div>
                  </div>
					      </div>
              </div>
            </div>
          </div>
          <div className='owl-nav'>
            <div className='owl-prev'>
              <i className='bi bi-chevron-left' >
              
              </i>
            </div>
            <div className='owl-next'>
              <i className='bi bi-chevron-right'>
              
              </i>
            </div>
          </div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Categories