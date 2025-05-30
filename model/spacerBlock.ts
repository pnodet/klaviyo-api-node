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
import { BlockEnum } from './blockEnum';
import { SpacerEnum } from './spacerEnum';
export class SpacerBlock {
    'contentType': BlockEnum | 'block';
    'type': SpacerEnum | 'spacer';
    'data': any | null;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "contentType",
            "baseName": "content_type",
            "type": "BlockEnum"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "SpacerEnum"
        },
        {
            "name": "data",
            "baseName": "data",
            "type": "any"
        }    ];

    static getAttributeTypeMap() {
        return SpacerBlock.attributeTypeMap;
    }
}

export namespace SpacerBlock {
}
