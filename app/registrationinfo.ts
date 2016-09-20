import {Token} from './token';

export class RegistrationInfo
{
        //private Token token;
		token: Token;
		serverAddress: string;
		userId: string
		password: string;
		remoteFilePath: string;
		localFilePath: string;
		filename: string;
		partnerId: string;

		constructor( token:Token){
			this.token = token;
		}

}
