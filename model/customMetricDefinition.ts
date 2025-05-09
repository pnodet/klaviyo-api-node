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
import { CustomMetricGroup } from './customMetricGroup';
export class CustomMetricDefinition {
    /**
    * Method of aggregation for custom metric measurements. If a metric has a `value` aggregation method, it will be treated as a revenue metric, such as a Placed Order metric. If a metric has a `count` aggregation method, it will only be able to report on conversions like an Active on Site metric. 
    */
    'aggregationMethod': CustomMetricDefinition.AggregationMethodEnum | 'count' | 'value';
    'metricGroups': Array<CustomMetricGroup>;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "aggregationMethod",
            "baseName": "aggregation_method",
            "type": "CustomMetricDefinition.AggregationMethodEnum"
        },
        {
            "name": "metricGroups",
            "baseName": "metric_groups",
            "type": "Array<CustomMetricGroup>"
        }    ];

    static getAttributeTypeMap() {
        return CustomMetricDefinition.attributeTypeMap;
    }
}

export namespace CustomMetricDefinition {
    export enum AggregationMethodEnum {
        Count = <any> 'count',
        Value = <any> 'value'
    }
}
