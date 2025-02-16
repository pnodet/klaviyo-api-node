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
import { Link } from './link';
import { SendEmailActionData } from './sendEmailActionData';
import { SendEmailEnum } from './sendEmailEnum';
export class SendEmailAction {
    /**
    * The real ID of an action.
    */
    'id'?: string | null;
    /**
    * A temporary ID to use only during a create operation. Existing actions should use the id field.
    */
    'temporaryId'?: string | null;
    'type': SendEmailEnum | 'send-email';
    'links'?: Link;
    'data'?: SendEmailActionData;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "temporaryId",
            "baseName": "temporary_id",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "SendEmailEnum"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Link"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "SendEmailActionData"
        }    ];

    static getAttributeTypeMap() {
        return SendEmailAction.attributeTypeMap;
    }
}

export namespace SendEmailAction {
}
