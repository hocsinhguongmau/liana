import React, { useState, useEffect } from "react"

import VanillaSwipe from "vanilla-swipe"

import "./headerMobile.scss"
import logo from "./images/logo.png"

const body = document.body

const HeaderMobileComponent: React.FC = () => {
	//Hide header on scroll down
	const [didScroll, setDidScroll] = useState(false)
	let prevScrollpos = window.pageYOffset
	const scroll = () => {
		let currentScrollPos = window.pageYOffset
		if (prevScrollpos > currentScrollPos) {
			setTimeout(() => {
				setDidScroll(false)
			}, 100)
		} else {
			setTimeout(() => {
				setDidScroll(true)
			}, 100)
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
					<input type='text' placeholder='Search' />
					<button type='submit' className='button-small'>
						<i className='fas fa-search'></i>
					</button>
				</div>
				<div className='menu-nav'>
					<ul>
						<li>
							<a href='/#'>News</a>
						</li>
						<li>
							<a href='/#'>Intranet</a>
						</li>
						<li>
							<a href='/#'>Company</a>
						</li>
						<li>
							<a href='/#'>Products</a>
						</li>
						<li>
							<a href='/#'>About us</a>
						</li>
					</ul>
				</div>
				<div className='select-language'>
					<select>
						<option value=''>In English</option>
						<option value=''>Suomeski</option>
						<option value=''>På Svenska</option>
					</select>
				</div>
			</div>
		</div>
	)
}
export default HeaderMobileComponent
