import React from "react"
import "./banner.scss"
import { useTranslation } from "react-i18next"
import "../../i18n"

const BannerComponent: React.FC = () => {
	const { t, i18n } = useTranslation()

	const changeLanguage = (event: any) => {
		i18n.changeLanguage(event.target.value)
	}
	return (
		<>
			<div className='banner'>
				<div className='banner-content'>
					<h2 className='banner-title'>{t("banner")}</h2>
					<button className='button-medium'>{t("learn")}</button>
				</div>
			</div>
			<div onChange={changeLanguage}>
				<input type='radio' value='en' name='language' defaultChecked />
				English
				<input type='radio' value='fi' name='language' /> Finnish
				<input type='radio' value='sw' name='language' /> Swedish
			</div>
		</>
	)
}

export default BannerComponent
