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
import { CampaignMessageCreateQueryResourceObjectRelationships } from './campaignMessageCreateQueryResourceObjectRelationships';
import { CampaignMessageEnum } from './campaignMessageEnum';
import { CampaignMessagePartialUpdateQueryResourceObjectAttributes } from './campaignMessagePartialUpdateQueryResourceObjectAttributes';
export class CampaignMessagePartialUpdateQueryResourceObject {
    'type': CampaignMessageEnum | 'campaign-message';
    /**
    * The message ID to be retrieved
    */
    'id': string;
    'attributes': CampaignMessagePartialUpdateQueryResourceObjectAttributes;
    'relationships'?: CampaignMessageCreateQueryResourceObjectRelationships;


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
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "CampaignMessagePartialUpdateQueryResourceObjectAttributes"
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "CampaignMessageCreateQueryResourceObjectRelationships"
        }    ];

    static getAttributeTypeMap() {
        return CampaignMessagePartialUpdateQueryResourceObject.attributeTypeMap;
    }
}

export namespace CampaignMessagePartialUpdateQueryResourceObject {
}
