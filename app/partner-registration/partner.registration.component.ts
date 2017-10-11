import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {PartnerRegistrationService} from './partner.registration.service';
import {Partner} from '../models/partner.model';
import {Token} from './token';
import {Client} from '../models/client.model';
import {NgForm} from  '@angular/forms';
import {PartnerDetailServices} from '../partner-detail/partner.detail.services'


@Component({
    templateUrl: '/app/partner-registration/partner.registration.component.html',
    providers: [PartnerRegistrationService, PartnerDetailServices]
})

export class PartnerRegistrationComponent {
    private _partnerRegistrationInfo: Partner;
    private _partnerAlreadyExists = false;
    
   constructor (private _router: Router,  
                private _registrationService: PartnerRegistrationService,
                private _partnerDetailService: PartnerDetailServices)
   {
      this._partnerRegistrationInfo = new Partner();
      this._partnerRegistrationInfo.partnerDescription = "";
    }

    validatePhoneNumber(phonenumber)
    {
        console.log("validatePhoneNumber called");
        // TODO write the function to validate
        //console.log('phonenumber.value=>' + phonenumber.value.length);
        // TODO add additional validations
        //if(phonenumber.value.length != 14){
        //    console.log("value true");
        this._partnerRegistrationInfo.hasPhoneNumberError = false;
     //} else
    }

    validatePartnerId(partnerId:any)
    {
       console.log("partnerId.trim.length()==>" + partnerId.value.trim().length);
       if (partnerId.value.trim().length==0) 
                return false;
       else {
            console.log("length is not zero");
            partnerId = partnerId.value.trim();
            //trim the partner id and re-assign or you
            // will end up create a partner_id with spaces which is not good
            // and difficult to retreive and maintain
            this._partnerRegistrationInfo.partnerId=partnerId;
            //console.log('partnerId ==>' + partnerId);
            // this._partnerDetailService.getPartnerDetailsByPartnerId(partnerId).subscribe(partnerInfo =>  {
            //            this._partnerRegistrationInfo = partnerInfo; 
            //            this._partnerAlreadyExists  = true;
            //});
       }
    }
    //  this._partnerDetailService.getPartnerDetailsByPartnerId(partnerId.value).subscribe(partnerInfo =>  {
    //            this._partnerRegistrationInfo = partnerInfo; 
    //            this._partnerAlreadyExists  = true;
    //     });
    //     //console.log(this._partnerRegistrationInfo.partnerId.trim());
        //this._partnerRegistrationInfo.partnerId=partnerId.value.trim();
        //this._partnerAlreadyExists = false;



    onSubmit(partnerForm: NgForm) {

       // console.log('PartnerRegistration.onSubmit() - ENTER');
       // clean up spaces before submitting.
       //    this._partnerRegistrationInfo.partnerId.trim();
       //    this._partnerRegistrationInfo.partnerName.trim();
       //    this._partnerRegistrationInfo.partnerDescription.trim();
       //    this._partnerRegistrationInfo.phoneNumber.trim();
       //    this._partnerRegistrationInfo.serverAddress.trim();
       //    this._partnerRegistrationInfo.emailAddress.emailAddress.trim();
       //    this._partnerRegistrationInfo.userid.trim();
       //    this._partnerRegistrationInfo.password.trim();
       //    this._partnerRegistrationInfo.filePath.trim();
       
        this._registrationService.createRegistration(this._partnerRegistrationInfo).
                        subscribe(registrationInfo => {
                                this._partnerRegistrationInfo = registrationInfo;
                                this._router.navigate(['/partners']);
                            });
       //console.log('PartnerRegistration.onSubmit() - EXIT');
    }


}