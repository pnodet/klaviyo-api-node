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
import { PostCampaignMessageResponseDataAttributesContent } from './postCampaignMessageResponseDataAttributesContent';
import { RenderOptionsSubObject } from './renderOptionsSubObject';
import { SendTimeSubObject } from './sendTimeSubObject';
export class PostCampaignMessageResponseDataAttributes {
    /**
    * The label or name on the message
    */
    'label': string;
    /**
    * The channel the message is to be sent on
    */
    'channel': string;
    'content': PostCampaignMessageResponseDataAttributesContent;
    /**
    * The list of appropriate Send Time Sub-objects associated with the message
    */
    'sendTimes'?: Array<SendTimeSubObject> | null;
    'renderOptions'?: RenderOptionsSubObject;
    /**
    * The datetime when the message was created
    */
    'createdAt'?: Date | null;
    /**
    * The datetime when the message was last updated
    */
    'updatedAt'?: Date | null;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "channel",
            "baseName": "channel",
            "type": "string"
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "PostCampaignMessageResponseDataAttributesContent"
        },
        {
            "name": "sendTimes",
            "baseName": "send_times",
            "type": "Array<SendTimeSubObject>"
        },
        {
            "name": "renderOptions",
            "baseName": "render_options",
            "type": "RenderOptionsSubObject"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return PostCampaignMessageResponseDataAttributes.attributeTypeMap;
    }
}

