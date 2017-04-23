import {EmailAddress} from './partner.registration.emailaddress';

export class Client
{
	  public clientId:string;
	  public clientName: string;
	  public clientDescription: string;
	  public clientAddress: string;
	  public userId:string;
	  public password: string;
	  public filePath: string;
	  public emailAddress: EmailAddress;
	
	 constructor(){
					this.emailAddress = new EmailAddress();
	  }

}