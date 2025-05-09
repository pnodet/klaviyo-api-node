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
import { CampaignMessageEnum } from './campaignMessageEnum';
export class GetCampaignMessagesRelationshipsResponseCollectionDataInner {
    'type': CampaignMessageEnum | 'campaign-message';
    /**
    * The message ID
    */
    'id': string;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "CampaignMessageEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return GetCampaignMessagesRelationshipsResponseCollectionDataInner.attributeTypeMap;
    }
}

export namespace GetCampaignMessagesRelationshipsResponseCollectionDataInner {
}
