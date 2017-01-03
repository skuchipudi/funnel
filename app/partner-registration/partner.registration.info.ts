import {Token} from './token';

export class PartnerRegistrationInfo
{
        token: Token;
		partnerId: string;
		partnerName:string;
		partnerDescription:string;

		constructor( token:Token){
			this.token = token;
		}
}
