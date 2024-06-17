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
import { AnyEnum } from './anyEnum';
export class NoSMSMarketing {
    'subscription': AnyEnum | 'any';


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "subscription",
            "baseName": "subscription",
            "type": "AnyEnum"
        }    ];

    static getAttributeTypeMap() {
        return NoSMSMarketing.attributeTypeMap;
    }
}

export namespace NoSMSMarketing {
}
