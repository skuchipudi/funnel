import {EmailAddress} from './partner.registration.emailaddress';
import {Client} from './partner.registration.client';

export class Partner
{
		public partnerName: string;
		public partnerDescription:string;
		public phoneNumber: string;
	    public emailAddress: EmailAddress;
		private userid:string;
		private password:string;
		private serverAddress:string;
		private filePath:string;
		public client : Client [];
		public hasPhoneNumberError: boolean;
		
		constructor (

		) {
				this.emailAddress = new EmailAddress();
				//this.client = [ new Client ("c1", "c1 description", "client2@address.com"), new Client("c2", "c2 description", "clientaddress2.com")]
		}
}





