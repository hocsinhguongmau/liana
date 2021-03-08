import React, { useState } from "react"
import { useMediaQuery } from "react-responsive"

import BannerComponent from "../components/banner/BannerComponent"
import CompanyComponent from "../components/company/CompanyComponent"
import FooterComponent from "../components/footer/FooterComponent"
import HeaderComponent from "../components/header/HeaderComponent"
import HeaderMobileComponent from "../components/header/HeaderMobileComponent"
import NewsComponent from "../components/news/NewsComponent"
import ReferencesComponent from "../components/references/ReferencesComponent"
import SubscribeComponent from "../components/subscribe/SubscribeComponent"

const Home: React.FC = () => {
	//close popup on esc
	window.onkeydown = function (event: any) {
		if (event.keyCode === 27 && isOpen) {
			toggleModal()
		}
	}

	const [isOpen, setIsOpen] = useState(false)
	const toggleModal = () => {
		setIsOpen(!isOpen)
		const body = document.body
		if (isOpen === false) {
			body.classList.add("prevent-scroll")
		} else {
			body.classList.remove("prevent-scroll")
		}
	}

	const desktopHeader = useMediaQuery({
		query: "(min-device-width: 768px)"
	})
	const mobileHeader = useMediaQuery({
		query: "(max-device-width: 767px)"
	})

	return (
		<>
			{desktopHeader && <HeaderComponent />}
			{mobileHeader && <HeaderMobileComponent />}
			<BannerComponent />
			<CompanyComponent />
			<NewsComponent />
			<ReferencesComponent />
			<SubscribeComponent isOpen={isOpen} toggleModal={toggleModal} />
			<FooterComponent />
		</>
	)
}

export default Home
