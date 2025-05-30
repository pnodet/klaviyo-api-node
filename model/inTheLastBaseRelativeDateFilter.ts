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
import { InTheLastEnum } from './inTheLastEnum';
export class InTheLastBaseRelativeDateFilter {
    'type': DateEnum | 'date';
    'operator': InTheLastEnum | 'in-the-last';
    /**
    * Units for relative date filters.
    */
    'unit': InTheLastBaseRelativeDateFilter.UnitEnum | 'day' | 'hour' | 'week';
    'quantity': number;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "DateEnum"
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "InTheLastEnum"
        },
        {
            "name": "unit",
            "baseName": "unit",
            "type": "InTheLastBaseRelativeDateFilter.UnitEnum"
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return InTheLastBaseRelativeDateFilter.attributeTypeMap;
    }
}

export namespace InTheLastBaseRelativeDateFilter {
    export enum UnitEnum {
        Day = <any> 'day',
        Hour = <any> 'hour',
        Week = <any> 'week'
    }
}
