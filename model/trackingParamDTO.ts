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
import { TrackingParamDTOCampaign } from './trackingParamDTOCampaign';
import { TrackingParamDTOFlow } from './trackingParamDTOFlow';
export class TrackingParamDTO {
    'flow'?: TrackingParamDTOFlow | null;
    'campaign'?: TrackingParamDTOCampaign | null;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "flow",
            "baseName": "flow",
            "type": "TrackingParamDTOFlow"
        },
        {
            "name": "campaign",
            "baseName": "campaign",
            "type": "TrackingParamDTOCampaign"
        }    ];

    static getAttributeTypeMap() {
        return TrackingParamDTO.attributeTypeMap;
    }
}

