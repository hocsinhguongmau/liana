import React, { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"

import "./subscribe.scss"

interface PageProps {
	isOpen: Boolean
	toggleModal: Function
}
type Inputs = {
	subscribe: string
}

const SubscribeComponent: React.FC<PageProps> = ({ isOpen, toggleModal }) => {
	const [email, setEmail] = useState("")
	const { register, handleSubmit, errors } = useForm<Inputs>()
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		setEmail(data.subscribe)
		toggleModal()
	}
	return (
		<>
			<div className='subscribe'>
				<div className='container'>
					<h3 className='section-title'>
						Subscribe to our newsletter
					</h3>
					<div className='subscribe-description'>
						Follow our story and get the latest promotonial news
						about our products and events.
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
								Subscribe
							</button>
							{errors.subscribe && (
								<>
									<span className='error-message'>
										This field is required
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
							Hi {email}! <br />
							Thank you for signing up. You will be the first to
							know about our new releases. <br />
							Stay tuned.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
export default SubscribeComponent
