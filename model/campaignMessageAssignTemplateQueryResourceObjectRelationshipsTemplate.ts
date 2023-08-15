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
import { CampaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplateData } from './campaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplateData';

export class CampaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplate {
    'data': CampaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplateData;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "CampaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplateData"
        }    ];

    static getAttributeTypeMap() {
        return CampaignMessageAssignTemplateQueryResourceObjectRelationshipsTemplate.attributeTypeMap;
    }
}

