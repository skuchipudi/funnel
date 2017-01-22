import {EmailAddress} from './partner.registration.emailaddress';
import {Client} from './partner.registration.client';

export class PartnerRegistrationInfo
{
		public partnerName: string;
		public partnerDescription:string;
		public phoneNumber: string;
	    public emailAddress: EmailAddress;
		public clientName: string;
		public clients : Client [];
		public hasPhoneNumberError: boolean;

		constructor (

		) {
				this.emailAddress = new EmailAddress();
		}
}





