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
import { InEnum } from './inEnum';
import { StringEnum } from './stringEnum';
export class StringInArrayFilter {
    'operator': InEnum | 'in';
    'value': Array<string>;
    'type': StringEnum | 'string';


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "operator",
            "baseName": "operator",
            "type": "InEnum"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "Array<string>"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "StringEnum"
        }    ];

    static getAttributeTypeMap() {
        return StringInArrayFilter.attributeTypeMap;
    }
}

export namespace StringInArrayFilter {
}
