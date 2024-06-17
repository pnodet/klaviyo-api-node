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
import { InStringArrayFilter } from './inStringArrayFilter';
import { ManualAddEnum } from './manualAddEnum';
import { MethodEnum } from './methodEnum';
export class ManualAddMethodFilter {
    'field': MethodEnum | 'method';
    'method': ManualAddEnum | 'manual_add';
    'filter'?: InStringArrayFilter;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "field",
            "baseName": "field",
            "type": "MethodEnum"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "ManualAddEnum"
        },
        {
            "name": "filter",
            "baseName": "filter",
            "type": "InStringArrayFilter"
        }    ];

    static getAttributeTypeMap() {
        return ManualAddMethodFilter.attributeTypeMap;
    }
}

export namespace ManualAddMethodFilter {
}
