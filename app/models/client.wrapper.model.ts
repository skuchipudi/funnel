import {Client} from '../models/client.model';

export class ClientWrapperModel
{
		public partnerId:string;
		public client: Client;
		constructor() {
			this.client = new Client ();
		}
}








