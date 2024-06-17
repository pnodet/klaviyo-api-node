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
import { DateEnum } from './dateEnum';
export class AnniversaryDateFilter {
    'type': DateEnum | 'date';
    /**
    * Operators for anniversary date filters.
    */
    'operator': AnniversaryDateFilter.OperatorEnum | 'anniversary' | 'anniversary-month';


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "DateEnum"
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "AnniversaryDateFilter.OperatorEnum"
        }    ];

    static getAttributeTypeMap() {
        return AnniversaryDateFilter.attributeTypeMap;
    }
}

export namespace AnniversaryDateFilter {
    export enum OperatorEnum {
        Anniversary = <any> 'anniversary',
        AnniversaryMonth = <any> 'anniversary-month'
    }
}
