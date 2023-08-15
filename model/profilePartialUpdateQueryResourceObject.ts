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
import { OnsiteProfileCreateQueryResourceObjectAttributes } from './onsiteProfileCreateQueryResourceObjectAttributes';
import { ProfileEnum } from './profileEnum';
import { ProfileMeta } from './profileMeta';

export class ProfilePartialUpdateQueryResourceObject {
    'type': ProfileEnum;
    /**
    * Primary key that uniquely identifies this profile. Generated by Klaviyo.
    */
    'id': string;
    'attributes': OnsiteProfileCreateQueryResourceObjectAttributes;
    'meta'?: ProfileMeta;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "ProfileEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "OnsiteProfileCreateQueryResourceObjectAttributes"
        },
        {
            "name": "meta",
            "baseName": "meta",
            "type": "ProfileMeta"
        }    ];

    static getAttributeTypeMap() {
        return ProfilePartialUpdateQueryResourceObject.attributeTypeMap;
    }
}

export namespace ProfilePartialUpdateQueryResourceObject {
}
