import React from "react"
import rssEnhancer, { InjectionRSSProps } from "react-rss"

import "./news.scss"

const NewsComponent: React.FC<InjectionRSSProps> = (props) => (
	<div className='news'>
		<div className='container'>
			<h3 className='section-title'>Latest news</h3>
			<div className='news-items'>
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
			</div>
		</div>
	</div>
)

export default rssEnhancer(
	NewsComponent,
	"http://localhost:8080/https://www.lianatech.com/blog.rss"
)
