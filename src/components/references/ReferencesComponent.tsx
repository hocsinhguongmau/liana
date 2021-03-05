import React from "react";
import "./references.scss";

import ref1 from "./images/reference-1.png";
import ref2 from "./images/reference-2.png";
import ref3 from "./images/reference-3.png";
import ref4 from "./images/reference-4.png";

const ReferencesComponent: React.FC = () => {
	return (
		<div className='reference'>
			<div className='container'>
				<h3 className='section-title'>References</h3>
				<div className='reference-items'>
					<div className='col'>
						<div className='reference-item'>
							<div className='reference-img'>
								<img src={ref1} alt='Bosch' />
							</div>
							<div className='reference-text'>
								<p className='reference-text-title'>
									Robert Bosch
								</p>
								<p className='reference-text-description'>
									Bosch is a multinational engineering and
									electronics company.
								</p>
							</div>
						</div>
					</div>
					<div className='col'>
						<div className='reference-item'>
							<div className='reference-img'>
								<img src={ref2} alt='The Body Shop' />
							</div>
							<div className='reference-text'>
								<p className='reference-text-title'>
									The Body Shop
								</p>
								<p className='reference-text-description'>
									The Body Shop is a global beauty brand and
									it has more than 3,000 stores in more than
									60 countries.
								</p>
							</div>
						</div>
					</div>
					<div className='col'>
						<div className='reference-item'>
							<div className='reference-img'>
								<img src={ref3} alt='Lapland Hotels' />
							</div>
							<div className='reference-text'>
								<p className='reference-text-title'>
									Lapland Hotels
								</p>
								<p className='reference-text-description'>
									Lapland Hotels is the largest and the most
									diverse hotel chain in Lapland.
								</p>
							</div>
						</div>
					</div>
					<div className='col'>
						<div className='reference-item'>
							<div className='reference-img'>
								<img src={ref4} alt='IKEA' />
							</div>
							<div className='reference-text'>
								<p className='reference-text-title'>IKEA</p>
								<p className='reference-text-description'>
									IKEA is a multinational furniture store.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default ReferencesComponent;
