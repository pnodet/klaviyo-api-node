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
import { ProfileImportJobCreateQueryResourceObjectAttributesProfiles } from './profileImportJobCreateQueryResourceObjectAttributesProfiles';

export class ProfileImportJobCreateQueryResourceObjectAttributes {
    'profiles': ProfileImportJobCreateQueryResourceObjectAttributesProfiles;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "profiles",
            "baseName": "profiles",
            "type": "ProfileImportJobCreateQueryResourceObjectAttributesProfiles"
        }    ];

    static getAttributeTypeMap() {
        return ProfileImportJobCreateQueryResourceObjectAttributes.attributeTypeMap;
    }
}

