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
import { ThrottledEnum } from './throttledEnum';
export class ThrottledSendStrategy {
    'method': ThrottledEnum | 'throttled';
    /**
    * The time to send at
    */
    'datetime': Date;
    /**
    * The percentage of recipients per hour to send to.
    */
    'throttlePercentage': ThrottledSendStrategy.ThrottlePercentageEnum | 10 | 11 | 13 | 14 | 17 | 20 | 25 | 33 | 50;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "method",
            "baseName": "method",
            "type": "ThrottledEnum"
        },
        {
            "name": "datetime",
            "baseName": "datetime",
            "type": "Date"
        },
        {
            "name": "throttlePercentage",
            "baseName": "throttle_percentage",
            "type": "ThrottledSendStrategy.ThrottlePercentageEnum"
        }    ];

    static getAttributeTypeMap() {
        return ThrottledSendStrategy.attributeTypeMap;
    }
}

export namespace ThrottledSendStrategy {
    export enum ThrottlePercentageEnum {
        NUMBER_10 = <any> 10,
        NUMBER_11 = <any> 11,
        NUMBER_13 = <any> 13,
        NUMBER_14 = <any> 14,
        NUMBER_17 = <any> 17,
        NUMBER_20 = <any> 20,
        NUMBER_25 = <any> 25,
        NUMBER_33 = <any> 33,
        NUMBER_50 = <any> 50
    }
}
