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
import { SendSmsActionData } from './sendSmsActionData';
import { SendSmsEnum } from './sendSmsEnum';
export class SendSmsAction {
    /**
    * The real ID of an action.
    */
    'id'?: string | null;
    /**
    * A temporary ID to use only during a create operation. Existing actions should use the id field.
    */
    'temporaryId'?: string | null;
    'type': SendSmsEnum | 'send-sms';
    'links'?: Link;
    'data'?: SendSmsActionData;


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
            "type": "SendSmsEnum"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Link"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "SendSmsActionData"
        }    ];

    static getAttributeTypeMap() {
        return SendSmsAction.attributeTypeMap;
    }
}

export namespace SendSmsAction {
}
