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
import { MethodEnum } from './methodEnum';
import { ProvidedNoAgeEnum } from './providedNoAgeEnum';
export class ProvidedNoAgeMethodFilter {
    'field': MethodEnum | 'method';
    'method': ProvidedNoAgeEnum | 'provided_no_age';


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "field",
            "baseName": "field",
            "type": "MethodEnum"
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "ProvidedNoAgeEnum"
        }    ];

    static getAttributeTypeMap() {
        return ProvidedNoAgeMethodFilter.attributeTypeMap;
    }
}

export namespace ProvidedNoAgeMethodFilter {
}
