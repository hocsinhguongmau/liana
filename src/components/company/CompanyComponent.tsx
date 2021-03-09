import React, { useState, useEffect } from "react"
import { CountUp } from "use-count-up"
import Slider from "react-slick"
import { useTranslation } from "react-i18next"
import "../../i18n"
import "./company.scss"

import company from "./images/company.jpg"
import products from "./images/products.jpg"
import contact from "./images/contact.jpg"

const CompanyComponent: React.FC = () => {
	const { t } = useTranslation()

	const [isCounting, setIsCounting] = useState(false)
	let scrollY: number = 0
	function scroll() {
		const statisticSection = document.querySelector(
			".statistics"
		) as HTMLElement
		const companySection = document.querySelector(".company") as HTMLElement

		scrollY = window.pageYOffset
		if (
			window.screen.height > statisticSection.offsetTop ||
			scrollY > statisticSection.getBoundingClientRect().top
		) {
			setIsCounting(true)
		}
	}

	const settings = {
		dots: false,
		infinite: true,
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

	useEffect(() => {
		setTimeout(() => {
			scroll()
		}, 1000)
		function watchScroll() {
			window.addEventListener("scroll", scroll)
		}
		watchScroll()
		return () => {
			window.removeEventListener("scroll", scroll)
		}
	}, [])
	return (
		<div className='company'>
			<div className='container company-top'>
				<Slider {...settings}>
					<div className='col'>
						<a href='/#' className='item'>
							<img src={company} alt='Company' />
							<div className='text'>
								<span>{t("company.company")}</span>
							</div>
						</a>
					</div>
					<div className='col'>
						<a href='/#' className='item'>
							<img src={products} alt='Products' />
							<div className='text'>
								<span>{t("company.products")}</span>
							</div>
						</a>
					</div>
					<div className='col'>
						<a href='/#' className='item'>
							<img src={contact} alt='Contact' />
							<div className='text'>
								<span>{t("company.contact")}</span>
							</div>
						</a>
					</div>
				</Slider>
			</div>
			<div className='statistics'>
				<div className='container'>
					<div className='stats-item'>
						<div className='stats-info'>
							<i className='fas fa-briefcase'></i>
							<p className='number'>
								<span className='count-effect'>
									<CountUp
										isCounting={isCounting}
										end={3000}
										easing='easeOutCubic'
									/>
								</span>
								<span className='placeholder'>3000</span>
							</p>
							<p className='title'>{t("clients")}</p>
						</div>
					</div>
					<div className='stats-item'>
						<div className='stats-info'>
							<i className='far fa-smile'></i>
							<p className='number'>
								<span className='count-effect'>
									<CountUp
										isCounting={isCounting}
										end={180}
									/>
								</span>
								<span className='placeholder'>180</span>
							</p>
							<p className='title'>{t("employees")}</p>
						</div>
					</div>
					<div className='stats-item'>
						<div className='stats-info'>
							<i className='fas fa-globe-americas'></i>
							<p className='number'>
								<span className='count-effect'>
									<CountUp
										isCounting={isCounting}
										end={10000}
									/>
								</span>
								<span className='placeholder'>10000</span>
							</p>
							<p className='title'>{t("users")}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default CompanyComponent
