import React from "react"
import Slider from "react-slick"
import { useTranslation } from "react-i18next"
import "../../i18n"

import "./references.scss"

import ref1 from "./images/reference-1.png"
import ref2 from "./images/reference-2.png"
import ref3 from "./images/reference-3.png"
import ref4 from "./images/reference-4.png"

const ReferencesComponent: React.FC = () => {
	const { t, i18n } = useTranslation()

	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	}
	return (
		<div className='reference'>
			<div className='container'>
				<h3 className='section-title'>{t("title.references")}</h3>
				<div className='reference-items'>
					<Slider {...settings}>
						<div className='col'>
							<div className='reference-item'>
								<div className='reference-img'>
									<img src={ref1} alt='Bosch' />
								</div>
								<div className='reference-text'>
									<p className='reference-text-title'>
										Robert Bosch
									</p>
									<p className='reference-text-description'>
										{t("reference.bosch")}
									</p>
								</div>
							</div>
						</div>
						<div className='col'>
							<div className='reference-item'>
								<div className='reference-img'>
									<img src={ref2} alt='The Body Shop' />
								</div>
								<div className='reference-text'>
									<p className='reference-text-title'>
										The Body Shop
									</p>
									<p className='reference-text-description'>
										{t("reference.body")}
									</p>
								</div>
							</div>
						</div>
						<div className='col'>
							<div className='reference-item'>
								<div className='reference-img'>
									<img src={ref3} alt='Lapland Hotels' />
								</div>
								<div className='reference-text'>
									<p className='reference-text-title'>
										Lapland Hotels
									</p>
									<p className='reference-text-description'>
										{t("reference.lapland")}
									</p>
								</div>
							</div>
						</div>
						<div className='col'>
							<div className='reference-item'>
								<div className='reference-img'>
									<img src={ref4} alt='IKEA' />
								</div>
								<div className='reference-text'>
									<p className='reference-text-title'>IKEA</p>
									<p className='reference-text-description'>
										{t("reference.ikea")}
									</p>
								</div>
							</div>
						</div>
					</Slider>
				</div>
			</div>
		</div>
	)
}
export default ReferencesComponent
