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
import { CampaignCreateQueryResourceObjectAttributes } from './campaignCreateQueryResourceObjectAttributes';
import { CampaignEnum } from './campaignEnum';

export class CampaignCreateQueryResourceObject {
    'type': CampaignEnum;
    'attributes': CampaignCreateQueryResourceObjectAttributes;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "CampaignEnum"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "CampaignCreateQueryResourceObjectAttributes"
        }    ];

    static getAttributeTypeMap() {
        return CampaignCreateQueryResourceObject.attributeTypeMap;
    }
}

export namespace CampaignCreateQueryResourceObject {
}
