import React, { useState } from "react"
import BannerComponent from "../components/banner/BannerComponent"
import CompanyComponent from "../components/company/CompanyComponent"
import FooterComponent from "../components/footer/FooterComponent"
import HeaderComponent from "../components/header/HeaderComponent"
import NewsComponent from "../components/news/NewsComponent"
import ReferencesComponent from "../components/references/ReferencesComponent"
import SubscribeComponent from "../components/subscribe/SubscribeComponent"

const Home: React.FC = () => {
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
	return (
		<>
			<HeaderComponent />
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
