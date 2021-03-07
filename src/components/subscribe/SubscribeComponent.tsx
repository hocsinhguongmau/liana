import React, { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { useTranslation } from "react-i18next"
import "../../i18n"
import "./subscribe.scss"

interface PageProps {
	isOpen: Boolean
	toggleModal: Function
}
type Inputs = {
	subscribe: string
}

const SubscribeComponent: React.FC<PageProps> = ({ isOpen, toggleModal }) => {
	const { t } = useTranslation()

	const [email, setEmail] = useState("")
	const { register, handleSubmit, errors } = useForm<Inputs>()
	const onSubmit: SubmitHandler<Inputs> = (data, e: any) => {
		setEmail(data.subscribe)
		toggleModal()
		e.target.reset()
	}
	return (
		<>
			<div className='subscribe'>
				<div className='container'>
					<h3 className='section-title'>{t("title.subscribe")}</h3>
					<div className='subscribe-description'>
						{t("subscribe.text")}
					</div>
					<div className='subscribe-input'>
						<form onSubmit={handleSubmit(onSubmit)}>
							<input
								type='email'
								name='subscribe'
								ref={register({ required: true })}
								className={`${
									errors.subscribe ? "error" : null
								}`}
							/>

							<button className='button-medium' type='submit'>
								{t("subscribe")}
							</button>
							{errors.subscribe && (
								<>
									<span className='error-message'>
										{t("error.message")}
									</span>
								</>
							)}
						</form>
					</div>
				</div>
			</div>
			<div className={`modal ${isOpen ? "show" : "hide"}`}>
				<div className='backdrop' onClick={() => toggleModal()}></div>
				<div className='subscribe-notification modal-content '>
					<div className='subscribe-text'>
						<a
							href='/#!'
							onClick={() => toggleModal()}
							className='close-modal'>
							<i className='far fa-times-circle'></i>
						</a>
						<p>
							<i className='fas fa-envelope-open-text'></i>
							<br />
							{t("popup.hi")} {email}! <br />
							{t("popup.thankyou")}
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
export default SubscribeComponent
