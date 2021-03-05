import React from "react";
import "./banner.scss";

const BannerComponent: React.FC = () => {
	return (
		<div className='banner'>
			<div className='banner-content'>
				<h2 className='banner-title'>
					Software fueling digital marketing
				</h2>
				<button className='button-medium'>Learn more</button>
			</div>
		</div>
	);
};

export default BannerComponent;
