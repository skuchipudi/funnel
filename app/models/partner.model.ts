/*
 *  Copyright 2019  Sunil S. Kuchipudi	
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License. See accompanying LICENSE file.
 */

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






