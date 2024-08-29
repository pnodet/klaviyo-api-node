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
import { ObjectLinks } from './objectLinks';
import { TrackingSettingEnum } from './trackingSettingEnum';
import { TrackingSettingResponseObjectResourceAttributes } from './trackingSettingResponseObjectResourceAttributes';
export class TrackingSettingResponseObjectResource {
    'type': TrackingSettingEnum | 'tracking-setting';
    /**
    * The id of the tracking setting
    */
    'id': string;
    'attributes': TrackingSettingResponseObjectResourceAttributes;
    'links': ObjectLinks;


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
            "type": "TrackingSettingResponseObjectResourceAttributes"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ObjectLinks"
        }    ];

    static getAttributeTypeMap() {
        return TrackingSettingResponseObjectResource.attributeTypeMap;
    }
}

export namespace TrackingSettingResponseObjectResource {
}
