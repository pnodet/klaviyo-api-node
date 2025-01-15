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
import { ProfanityOrInappropriateEnum } from './profanityOrInappropriateEnum';
export class RejectReasonProfanity {
    'reason': ProfanityOrInappropriateEnum | 'profanity_or_inappropriate';


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "reason",
            "baseName": "reason",
            "type": "ProfanityOrInappropriateEnum"
        }    ];

    static getAttributeTypeMap() {
        return RejectReasonProfanity.attributeTypeMap;
    }
}

export namespace RejectReasonProfanity {
}
