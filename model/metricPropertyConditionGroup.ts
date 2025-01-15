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
import { MetricPropertyCondition } from './metricPropertyCondition';
export class MetricPropertyConditionGroup {
    'conditions': Array<MetricPropertyCondition>;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<MetricPropertyCondition>"
        }    ];

    static getAttributeTypeMap() {
        return MetricPropertyConditionGroup.attributeTypeMap;
    }
}

