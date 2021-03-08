import React, { useState, useEffect } from "react"

import VanillaSwipe from "vanilla-swipe"
import { useTranslation } from "react-i18next"
import "../../i18n"

import "./headerMobile.scss"
import logo from "./images/logo.png"

const body = document.body

const HeaderMobileComponent: React.FC = () => {
	//multi language
	const { t, i18n } = useTranslation()
	const changeLanguage = (event: any) => {
		i18n.changeLanguage(event.target.value)
	}

	//Hide header on scroll down
	const [didScroll, setDidScroll] = useState(false)
	let prevScrollpos = window.pageYOffset
	const scroll = () => {
		let currentScrollPos = window.pageYOffset
		if (prevScrollpos > currentScrollPos) {
			setDidScroll(false)
		} else {
			setDidScroll(true)
		}
		prevScrollpos = currentScrollPos
	}
	//Toggle side panel
	const [navOpen, setNavOpen] = useState(false)
	function navControl() {
		const navButton = document.querySelector(".nav-button") as HTMLElement

		if (navOpen === false) {
			setTimeout(() => {
				navButton.classList.add("opened")
				body.classList.add("prevent-scroll")
				setNavOpen(true)
			}, 100)
		} else {
			setTimeout(() => {
				navButton.classList.remove("opened")
				body.classList.remove("prevent-scroll")
				setNavOpen(false)
			}, 100)
		}
	}
	const toggleNav = () => {
		navControl()
	}
	const element = document.querySelector(".menu-mobile") as HTMLElement

	const VS = new VanillaSwipe({
		element: element,
		// onSwiping: handler,
		onSwiped: handler,
		mouseTrackingEnabled: true
	})

	VS.init()

	function handler() {
		const directionX = arguments[1].directionX
		if (directionX === "LEFT") {
			navControl()
		}
	}

	useEffect(() => {
		function watchScroll() {
			window.onscroll = function () {
				scroll()
			}
		}
		watchScroll()
		return () => {
			window.removeEventListener("scroll", scroll)
		}
	}, [])

	return (
		<div className={`header-mobile ${didScroll ? "nav-up" : ""}`}>
			<a href='/#' className='logo'>
				<img src={logo} alt='Logo' />
			</a>
			<a href='/#!' className='nav-button' onClick={() => toggleNav()}>
				<span></span>
				<span></span>
				<span></span>
			</a>
			<div className={`menu-mobile ${navOpen ? "opened" : ""}`}>
				<div className='search-box'>
					<input type='text' placeholder={t("search")} />
					<button type='submit' className='button-small'>
						<i className='fas fa-search'></i>
					</button>
				</div>
				<div className='menu-nav'>
					<ul>
						<li>
							<a href='/#'>{t("header.news")}</a>
						</li>
						<li>
							<a href='/#'>{t("header.intranet")}</a>
						</li>
						<li>
							<a href='/#'>{t("header.company")}</a>
						</li>
						<li>
							<a href='/#'>{t("header.products")}</a>
						</li>
						<li>
							<a href='/#'>{t("header.contact")}</a>
						</li>
					</ul>
				</div>
				<div className='select-language'>
					<select onChange={changeLanguage}>
						<option value='en'>{t("lang.en")}</option>
						<option value='fi'>{t("lang.fi")}</option>
						<option value='sw'>{t("lang.sw")}</option>
					</select>
				</div>
			</div>
		</div>
	)
}
export default HeaderMobileComponent
