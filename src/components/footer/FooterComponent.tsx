import React from "react"
import "./footer.scss"

const FooterComponent: React.FC = () => {
	return (
		<div className='footer'>
			<div className='container'>
				<div className='footer-wrap'>
					<div className='footer-left'>
						<p className='footer-title'>Liana Technologies</p>
						<div className='footer-info'>
							<div className='footer-text'>
								<p>Sales and inquiries</p>
								<p>Email: sales@lianatech.com</p>
								<p>Phone: +358 10 387 7053</p>
							</div>
							<div className='footer-button'>
								<button className='button-small'>
									Contact us
								</button>
							</div>
						</div>
					</div>
					<div className='footer-right'>
						<div className='footer-nav'>
							<ul>
								<li>
									<a href='/#'>Company</a>
								</li>
								<li>
									<a href='/#'>Products</a>
								</li>
								<li>
									<a href='/#'>Contact us</a>
								</li>
								<li>
									<a href='/#'>News</a>
								</li>
								<li>
									<a href='/#'>Intranet</a>
								</li>
							</ul>
						</div>
						<div className='footer-social'>
							<ul>
								<li>
									<a href='/#'>
										<i className='fab fa-facebook-f'></i>
									</a>
								</li>
								<li>
									<a href='/#'>
										<i className='fab fa-twitter'></i>
									</a>
								</li>
								<li>
									<a href='/#'>
										<i className='fab fa-linkedin-in'></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default FooterComponent
