/**
 * Klaviyo API
 * The Klaviyo REST API. Please visit https://developers.klaviyo.com for more details.
 *
 * Contact: developers@klaviyo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { SubscriptionChannels } from './subscriptionChannels';
export class ProfileSubscriptionCreateQueryResourceObjectAttributes {
    /**
    * The email address to subscribe or to set on the profile if `channels` is specified and the email channel is omitted.
    */
    'email'?: string | null;
    /**
    * The phone number to subscribe or to set on the profile if `channels` is specified and the SMS channel is omitted. This must be in E.164 format.
    */
    'phoneNumber'?: string | null;
    'subscriptions'?: SubscriptionChannels;
    /**
    * The profile\'s date of birth. This field is required to update SMS consent for accounts using age-gating: https://help.klaviyo.com/hc/en-us/articles/17252552814875
    */
    'ageGatedDateOfBirth'?: string | null;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "phoneNumber",
            "baseName": "phone_number",
            "type": "string"
        },
        {
            "name": "subscriptions",
            "baseName": "subscriptions",
            "type": "SubscriptionChannels"
        },
        {
            "name": "ageGatedDateOfBirth",
            "baseName": "age_gated_date_of_birth",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ProfileSubscriptionCreateQueryResourceObjectAttributes.attributeTypeMap;
    }
}

