import {Client} from '../models/client.model';

export class ClientRegistrationModel
{
		public partnerId:string;
		public client: Client;
		constructor() {
			this.client = new Client ();
		}
}








