import React from "react"
import "./header.scss"
import logo from "./images/logo.png"

const HeaderComponent: React.FC = () => {
	return (
		<div className='header'>
			<div className='header-top'>
				<div className='container'>
					<div className='language-select'>
						<select>
							<option value=''>In English</option>
							<option value=''>Suomeksi</option>
							<option value=''>På Svenska</option>
						</select>
					</div>
					<div className='links'>
						<ul>
							<li>
								<a href='/#'>News</a>
							</li>
							<li>
								<a href='/#'>Intranet</a>
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
							<a href='/#'>Company</a>
						</li>
						<li>
							<a href='/#'>Products</a>
						</li>
						<li>
							<a href='/#'>Contact Us</a>
						</li>
					</ul>
					<div className='search-box'>
						<input
							type='text'
							className='input'
							placeholder='Search'
						/>
						<button className='button-small' type='submit'>
							Search
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
export default HeaderComponent
