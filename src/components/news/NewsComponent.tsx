import React from "react"
import rssEnhancer, { InjectionRSSProps } from "react-rss"
import Slider from "react-slick"
import { useTranslation } from "react-i18next"
import "../../i18n"

import "./news.scss"

const NewsComponent: React.FC<InjectionRSSProps> = (props) => {
	const { t } = useTranslation()

	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	}
	return (
		<div className='news'>
			<div className='container'>
				<h3 className='section-title'>{t("title.news")}</h3>
				<div className='news-items'>
					<Slider {...settings}>
						{props.rss.items.slice(0, 3).map((item) => {
							return (
								<div className='col' key={item.title}>
									<div className='news-item'>
										<p className='news-date'>
											{item.pubDate.substring(0, 16)}
										</p>
										<p className='news-text'>
											<a
												href={item.link}
												target='_blank'
												rel='noreferrer'>
												{item.title}
											</a>
										</p>
									</div>
								</div>
							)
						})}
					</Slider>
				</div>
			</div>
		</div>
	)
}

export default rssEnhancer(
	NewsComponent,
	"http://thingproxy.freeboard.io/https://www.lianatech.com/blog.rss"
)
