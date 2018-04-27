import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react'




import './Footer.css';


class Footer extends Component {
    constructor(props) {
		super(props);
		this.state = {
			
		columns:[
			{name: 'About'},
			{name: 'FAQ'},
			{name: 'Terms of Users'},
			{name: 'Careers'},
			{name: 'Referrals'},
			{name: 'Contact us'}
		],
			
			
		spotPhotopUpload: require('./Facebook.png'),
		spotPhotopUpload2: require('./twitter.jpg'),
		spotPhotopUpload3: require('./instagram.png'),
		spotPhotopUpload4: require('./linkedin.png')
		}
	}
	
	render() {
		var text = "About\nFAQ\nTerms of User\nCareers\nReferrals\nContact us ";
		var text1= "AirGarage, Inc. 2018\nLeave us feedback"
		const{columns} = this.state;
		
        return (
            <div className = 'Footer'>
				<h1> </h1>
				<ref>
					{text.split("\n").map(i => {
						return <div>{i}</div>;
					})}
				</ref>
				
				
				
				<a onClick={this.handleClick} style={{cursor: 'https://www.google.com/'}}>click me!</a>

				
				<facebook>
					<a href="https://www.facebook.com/AirGarageInc/">
					<img src={this.state.spotPhotopUpload}/>
					</a>
					
				</facebook>
				
				<twitter>
					<a href="https://twitter.com/airgarageinc">
					<img src={this.state.spotPhotopUpload2}/>
					</a>
				</twitter>
				
				<instagram>
					<a href="https://www.instagram.com/airgarageinc/">
					<img src={this.state.spotPhotopUpload3}/>
					</a>
				</instagram>
				
				<instagram>
					<a href="https://www.linkedin.com/company/airgarage/">
					<img src={this.state.spotPhotopUpload4}/>
					</a>
				</instagram>
				
				<ref1>
					{text1.split("\n").map(i => {
						return <div>{i}</div>;
					})}
				</ref1>
			
				
			</div>
        )
    }
}


export default Footer;