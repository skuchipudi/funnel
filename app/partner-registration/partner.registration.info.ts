import {EmailAddress} from './partner.registration.emailaddress';
import {Client} from './partner.registration.client';

export class Partner
{
		public partnerId:string;
		public partnerName: string;
		public partnerDescription:string;
		public phoneNumber: string;
	    public emailAddress: EmailAddress;
		private userid1:string;
		private password1:string;
		private serverAddress1:string;
		private filePath1:string;
		public client : Client [];
		public hasPhoneNumberError: boolean;
		public partnerAlreadyExists: boolean;
		

		constructor (

		) {
				this.emailAddress = new EmailAddress();
				//this.client = [ new Client ("c1", "c1 description", "client2@address.com"), new Client("c2", "c2 description", "clientaddress2.com")]
		}

		

		
	
}





