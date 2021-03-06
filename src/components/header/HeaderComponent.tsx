import React from "react"

import { useTranslation } from "react-i18next"
import "../../i18n"
import "./header.scss"

import logo from "./images/logo.png"

const HeaderComponent: React.FC = () => {
	const { t, i18n } = useTranslation()
	return (
		<div className='header'>
			<div className='header-top'>
				<div className='container'>
					<div className='language-select'>
						<select>
							<option value=''>{t("lang.en")}</option>
							<option value=''>{t("lang.fi")}</option>
							<option value=''>{t("lang.sw")}</option>
						</select>
					</div>
					<div className='links'>
						<ul>
							<li>
								<a href='/#'>{t("header.news")}</a>
							</li>
							<li>
								<a href='/#'>{t("header.intranet")}</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='header-bottom'>
				<div className='container'>
					<h1 className='logo'>
						<a href='/#'>
							<img src={logo} alt='Logo' />
						</a>
					</h1>
					<ul className='navigation'>
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
					<div className='search-box'>
						<input
							type='text'
							className='input'
							placeholder={t("search")}
						/>
						<button className='button-small' type='submit'>
							{t("search")}
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
export default HeaderComponent
