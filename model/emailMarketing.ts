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
import { EmailMarketingListSuppression } from './emailMarketingListSuppression';
import { EmailMarketingSuppression } from './emailMarketingSuppression';

export class EmailMarketing {
    /**
    * The consent status for email marketing.
    */
    'consent': string;
    /**
    * The timestamp when consent record or updated for email marketing, in ISO 8601 format (YYYY-MM-DDTHH:MM:SS.mmmmmm).
    */
    'timestamp'?: Date;
    /**
    * The method by which the profile was subscribed to email marketing.
    */
    'method': string;
    /**
    * Additional details about the method by which the profile was subscribed to SMS marketing. This may be empty if no details were provided.
    */
    'methodDetail'?: string;
    /**
    * Additional detail provided by the caller when the profile was subscribed. This may be empty if no details were provided.
    */
    'customMethodDetail'?: string;
    /**
    * Whether the profile was subscribed to email marketing using a double opt-in.
    */
    'doubleOptin'?: boolean;
    /**
    * The global email marketing suppressions for this profile.
    */
    'suppressions'?: Array<EmailMarketingSuppression>;
    /**
    * The list suppressions for this profile.
    */
    'listSuppressions'?: Array<EmailMarketingListSuppression>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "consent",
            "baseName": "consent",
            "type": "string"
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "Date"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "string"
        },
        {
            "name": "methodDetail",
            "baseName": "method_detail",
            "type": "string"
        },
        {
            "name": "customMethodDetail",
            "baseName": "custom_method_detail",
            "type": "string"
        },
        {
            "name": "doubleOptin",
            "baseName": "double_optin",
            "type": "boolean"
        },
        {
            "name": "suppressions",
            "baseName": "suppressions",
            "type": "Array<EmailMarketingSuppression>"
        },
        {
            "name": "listSuppressions",
            "baseName": "list_suppressions",
            "type": "Array<EmailMarketingListSuppression>"
        }    ];

    static getAttributeTypeMap() {
        return EmailMarketing.attributeTypeMap;
    }
}

