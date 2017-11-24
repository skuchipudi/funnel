import {Client} from './client.model';

export class Partner
{
		public partnerId:string;
		public partnerName: string;
		public partnerDescription:string;
		public phoneNumber: string;
		public emailAddress: string;
		public walletPassword:string;
		public walletFilePath:string;
		public userid:string;
		public password:string;
		public serverAddress:string;
		public filePath:string;
		public client : Client [];
		public hasPhoneNumberError: boolean;
		public partnerAlreadyExists: boolean;
		constructor ()
		 {
		//		this.emailAddress = new EmailAddress();
		//		//this.client = [ new Client ("c1", "c1 description", "client2@address.com"), new Client("c2", "c2 description", "clientaddress2.com")]
		}
}






