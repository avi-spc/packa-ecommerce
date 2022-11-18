import { useContext, useEffect, useState } from 'react';

import { CustomerContext } from '../../../contexts/customerContext';

const NetbankingPayment = ({ createPaymentDetails, radioSelector }) => {
	const [bankName, setBankName] = useState('');

	const { selectedPayment, selectPaymentMode } = useContext(CustomerContext);

	useEffect(() => {
		if (selectedPayment.paymentMode === 'Netbanking')
			selectPaymentMode({
				paymentMode: 'Netbanking',
				paymentPayload: { bankName }
			});
	}, [bankName]);

	return (
		<label
			htmlFor="payment-radio-netbanking"
			className="payment-option payment-option--netbanking"
		>
			<input
				type="radio"
				id="payment-radio-netbanking"
				name="payment-radio"
				value="Netbanking"
				onChange={(e) => {
					selectPaymentMode({
						paymentMode: e.target.value,
						paymentPayload: { bankName }
					});
					radioSelector.paintSelectedStyle(e.target.name);
				}}
			/>
			<div className="icon-radio" />
			<div className="payment-option__details">
				<div className="payment-option__heading tertiary-heading">Netbanking</div>
				<div className="payment-option__instruction payment-option__instruction--bank-name">
					<select value={bankName} onChange={(e) => setBankName(e.target.value)}>
						<option value="">Choose an option</option>
						<option value="SBI">SBI</option>
						<option value="HDFC">HDFC</option>
						<option value="ICICI">ICICI</option>
					</select>
				</div>
			</div>
		</label>
	);
};

export default NetbankingPayment;
