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
import { LowInventoryConditionGroup } from './lowInventoryConditionGroup';
export class LowInventoryConditionFilter {
    'conditionGroups': Array<LowInventoryConditionGroup>;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "conditionGroups",
            "baseName": "condition_groups",
            "type": "Array<LowInventoryConditionGroup>"
        }    ];

    static getAttributeTypeMap() {
        return LowInventoryConditionFilter.attributeTypeMap;
    }
}

