import { useContext, useEffect, useState } from 'react';

import { CustomerContext } from '../../../contexts/customerContext';

import SecondaryButton from '../../buttons/SecondaryButton';

const UpiPayment = ({ createPaymentDetails, radioSelector }) => {
	const [upiId, setUpiId] = useState('');
	const [isUpiVerified, setIsUpiVerified] = useState(false);

	const { selectedPayment, selectPaymentMode } = useContext(CustomerContext);

	useEffect(() => {
		if (selectedPayment.paymentMode === 'UPI')
			selectPaymentMode({
				paymentMode: 'UPI',
				paymentPayload: { upiId, isUpiVerified }
			});
	}, [upiId, isUpiVerified]);

	const setUpiVerification = () => {
		if (upiId === 'avdhesh7394vn@ok') {
			setIsUpiVerified(true);
		} else {
			setIsUpiVerified(false);
		}
	};

	return (
		<label htmlFor="payment-radio-upi" className="payment-option payment-option--upi">
			<input
				type="radio"
				id="payment-radio-upi"
				name="payment-radio"
				value="UPI"
				onChange={(e) => {
					selectPaymentMode({
						paymentMode: e.target.value,
						paymentPayload: { upiId, isUpiVerified }
					});
					radioSelector.paintSelectedStyle(e.target.name);
				}}
			/>
			<div className="icon-radio" />
			<div className="payment-option__details">
				<div className="payment-option__heading tertiary-heading">UPI Apps</div>
				<div className="payment-option__instruction payment-option__instruction--upi-id">
					<div>Please enter your UPI ID</div>
					<input type="text" value={upiId} onChange={(e) => setUpiId(e.target.value)} />
					<SecondaryButton name="Verify" action={setUpiVerification} actionPayload={{}} />
				</div>
			</div>
		</label>
	);
};

export default UpiPayment;
