import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { RouterLink } from '@angular/router';
import { ContactDetails } from './contact-details';

export class User {
    id:number;
    name:String;
    firstName: String;
    lastName: String;
    email: String;
    staff: boolean;
    admin: boolean;
    active: boolean;
    password: String;
    contactDetailsId: number;
    contactDetails: ContactDetails;
}
