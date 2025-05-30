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
import { TrackingSettingEnum } from './trackingSettingEnum';
import { TrackingSettingPartialUpdateQueryResourceObjectAttributes } from './trackingSettingPartialUpdateQueryResourceObjectAttributes';
export class TrackingSettingPartialUpdateQueryResourceObject {
    'type': TrackingSettingEnum | 'tracking-setting';
    /**
    * The id of the tracking setting (account ID).
    */
    'id': string;
    'attributes': TrackingSettingPartialUpdateQueryResourceObjectAttributes;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "TrackingSettingEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "TrackingSettingPartialUpdateQueryResourceObjectAttributes"
        }    ];

    static getAttributeTypeMap() {
        return TrackingSettingPartialUpdateQueryResourceObject.attributeTypeMap;
    }
}

export namespace TrackingSettingPartialUpdateQueryResourceObject {
}
