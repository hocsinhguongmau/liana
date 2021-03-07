import React from "react"
import { useTranslation } from "react-i18next"
import "../../i18n"
import "./footer.scss"

const FooterComponent: React.FC = () => {
	const { t } = useTranslation()

	return (
		<div className='footer'>
			<div className='container'>
				<div className='footer-wrap'>
					<div className='footer-left'>
						<p className='footer-title'>{t("footer.liana")}</p>
						<div className='footer-info'>
							<div className='footer-text'>
								<p>{t("footer.sales")}</p>
								<p>{t("footer.email")}</p>
								<p>{t("footer.phone")}</p>
							</div>
							<div className='footer-button'>
								<button className='button-small'>
									{t("header.contact")}
								</button>
							</div>
						</div>
					</div>
					<div className='footer-right'>
						<div className='footer-nav'>
							<ul>
								<li>
									<a href='/#'>{t("header.company")}</a>
								</li>
								<li>
									<a href='/#'>{t("header.products")}</a>
								</li>
								<li>
									<a href='/#'>{t("header.contact")}</a>
								</li>
								<li>
									<a href='/#'>{t("header.news")}</a>
								</li>
								<li>
									<a href='/#'>{t("header.intranet")}</a>
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
