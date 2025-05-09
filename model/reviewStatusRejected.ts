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
import { RejectedEnum } from './rejectedEnum';
import { ReviewStatusRejectedRejectionReason } from './reviewStatusRejectedRejectionReason';
export class ReviewStatusRejected {
    'value': RejectedEnum | 'rejected';
    'rejectionReason': ReviewStatusRejectedRejectionReason;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "value",
            "baseName": "value",
            "type": "RejectedEnum"
        },
        {
            "name": "rejectionReason",
            "baseName": "rejection_reason",
            "type": "ReviewStatusRejectedRejectionReason"
        }    ];

    static getAttributeTypeMap() {
        return ReviewStatusRejected.attributeTypeMap;
    }
}

export namespace ReviewStatusRejected {
}
