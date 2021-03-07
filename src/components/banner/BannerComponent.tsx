import React from "react"
import "./banner.scss"
import { useTranslation } from "react-i18next"
import "../../i18n"

const BannerComponent: React.FC = () => {
	const { t } = useTranslation()

	return (
		<>
			<div className='banner'>
				<div className='banner-content'>
					<h2 className='banner-title'>{t("banner")}</h2>
					<button className='button-medium'>{t("learn")}</button>
				</div>
			</div>
		</>
	)
}

export default BannerComponent
