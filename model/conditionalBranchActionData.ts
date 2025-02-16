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
import { UnionFilter } from './unionFilter';
export class ConditionalBranchActionData {
    'profileFilter': UnionFilter;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "profileFilter",
            "baseName": "profile_filter",
            "type": "UnionFilter"
        }    ];

    static getAttributeTypeMap() {
        return ConditionalBranchActionData.attributeTypeMap;
    }
}

