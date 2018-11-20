import React from 'react';
import './ImageLinkForm.css';

 
const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
	return (
		<div>
			<p className='f3'>
				{'Picture address can not start with "data:"'}
			</p>
			<p className='f3'>
				{'"Data:" addresses are given normally when using Google images'}
			</p>
			<p className='f3'>
				{'Try using the address from the actual site if no facial recognition box appears'}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange} />
					<button className='w-30 grow f4 link ph3 pv dib white bg-light-purple' onClick={onButtonSubmit}>Detect</button>
				</div>
			</div>
		</div>
		);
}

export default ImageLinkForm;