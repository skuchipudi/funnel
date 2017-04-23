import {Client} from '../partner-registration/partner.registration.client';

export class ClientRegistrationModel
{
		public partnerId:string;
		public client: Client;
		constructor() {
			this.client = new Client ();
		}


}








