import React from 'react';
import Juan from '../../../img/About/Juan.jpg';
import Mike from '../../../img/About/Mike.jpg';
import Gary from '../../../img/About/garyb.jpg';
import Vinh from '../../../img/About/Vinh.jpg';

const About = () => {
	return (
		<div className='wrapper'>
			<div className='content'>
				<div className='container'>
					<div className='row mb-5'>
						<div className='col-sm-12 col-lg-12 d-flex justify-content-center'>
							<div class='display-1'>About the A-Team</div>
						</div>
					</div>
					<div className='row pb-3'>
						<div className='col-sm-12 col-lg-12 d-flex justify-content-start'>
							<h1 className='font-weight-bold underline'>
								<u>Front End Design</u>
							</h1>
						</div>
					</div>
					<div className='row pb-3'>
						<div className='col-sm-4 col-lg-4 d-flex justify-content-center'>
							<div className='image-cropper'>
								<img className='profile' src={Juan} alt='Juan' />
							</div>
						</div>
						<div className='col-sm-8 col-lg-8'>
							<div className='row'>
								<div className='col-sm-12 col-lg-12 d-flex justify-content-end'>
									<h3 className='font-weight-bold'>Juan Sanchez</h3>
								</div>
							</div>
							<div className='row'>
								<div className='col-sm-12 col-lg-12 px-2 d-flex justify-content-end'>
									I've worked for over 13 years at the City of Philadelphia
									doing Network Support for the Health Department. I'm currently
									attending the Upenn Coding Bootcamp so that I can transition
									into web development. I've spent many years helping people
									with their computer issues and was given an opportunity to try
									something different so thought I'd give web development a try
									since there are so many things abot the web that have always
									interested me. I hope to eventually be able to help others in
									this new direction I've taken and make some things of my own.
								</div>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-sm-8 col-lg-8'>
							<div className='row'>
								<div className='col-sm-12 col-lg-12 d-flex justify-content-start'>
									<h3 className='font-weight-bold'>Mike Marino</h3>
								</div>
							</div>
							<div className='row'>
								<div className='col-sm-12 col-lg-12 px-2 d-flex justify-content-start'>
									I'm a full-stack web developer (in training) specialized in
									frontend and backend development for complex, scalable web
									apps. I enjoy web development, spending time with my wife, and
									3d Printing. I have a facination for technology and computers
								</div>
							</div>
						</div>
						<div className='col-sm-4 col-lg-4 d-flex justify-content-center'>
							<div className='image-cropper'>
								<img className='profile' src={Mike} alt='Mike' />
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-sm-12 col-lg-12 d-flex justify-content-start'>
							<h1 className='font-weight-bold'>
								<u>Back End Design</u>
							</h1>
						</div>
					</div>
					<div className='row pb-3'>
						<div className='col-sm-4 col-lg-4 d-flex justify-content-center'>
							<div className='image-cropper'>
								<img className='profile' src={Gary} alt='Gary' />
							</div>
						</div>
						<div className='col-sm-8 col-lg-8'>
							<div className='row'>
								<div className='col-sm-12 col-lg-12 d-flex justify-content-end'>
									<h3 className='font-weight-bold'>Guntaas (Gary) Basra</h3>
								</div>
							</div>
							<div className='row'>
								<div className='col-sm-12 col-lg-12 px-2 d-flex justify-content-end'>
									A visionary and goal oriented technologist embracing chaos
									engineering with demonstrated experience in global planning,
									developing, and implementing cutting edge solutions to address
									business opportunities. Contributing in actionable plans for
									executives, sales, contact centers, marketing, product
									development, support and training by representing the IT
									organization. Serving as both a client and service provider
									throughout the years while leading teams of programmers
									globally in software development with both waterfall and agile
									work environments. Carrying with him a personal passion in
									cloud applications and data analytics to maximize business
									productivity, motivating data-driven decision makers to
									produce increased profits proven through the programs
									developed for multi-million dollar companies to manage their
									businesses. Not afraid to be industry agnostic and overcome
									older technologies to charting out strategic plans for system
									migrations to improve end user experience, expedite problem
									solving and cost reduction for the bottom line.
								</div>
							</div>
						</div>
					</div>
					<div className='row '>
						<div className='col-sm-8 col-lg-8'>
							<div className='row'>
								<div className='col-sm-12 col-lg-12 d-flex justify-content-start'>
									<h3 className='font-weight-bold'>Vinh Huynh</h3>
								</div>
							</div>
							<div className='row'>
								<div className='col-sm-12 col-lg-12 px-2 d-flex justify-content-start'>
									My name is Vinh Huynh and I enjoy meeting new people and
									finding ways to help them have an uplifting experience. I was
									born in Vietnam and moved to the US when I was twelve. I'm
									currently working at Verizon as a Sales Representative and
									going to school part time for full stack web development. I
									have had a variety of customer service opportunities, through
									which I was able to have fewer returned products and increased
									repeat customers, when compared with co-workers. I am
									dedicated, outgoing, and a team player. I'm looking forward to
									finish this boot camp and find a new career for myself.
								</div>
							</div>
						</div>
						<div className='col-sm-4 col-lg-4 d-flex justify-content-center'>
							<div className='image-cropper'>
								<img className='profile' src={Vinh} alt='Vinh' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
