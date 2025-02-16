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
import { AbTestCampaignEnum } from './abTestCampaignEnum';
export class ABTestSendStrategy {
    'method': AbTestCampaignEnum | 'ab_test_campaign';


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "method",
            "baseName": "method",
            "type": "AbTestCampaignEnum"
        }    ];

    static getAttributeTypeMap() {
        return ABTestSendStrategy.attributeTypeMap;
    }
}

export namespace ABTestSendStrategy {
}
