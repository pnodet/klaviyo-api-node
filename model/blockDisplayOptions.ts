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
import { ContentRepeat } from './contentRepeat';
export class BlockDisplayOptions {
    /**
    * Show on.
    */
    'showOn'?: BlockDisplayOptions.ShowOnEnum | 'all' | 'desktop' | 'mobile' | null;
    'visibleCheck'?: string | null;
    'contentRepeat'?: ContentRepeat;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "showOn",
            "baseName": "show_on",
            "type": "BlockDisplayOptions.ShowOnEnum"
        },
        {
            "name": "visibleCheck",
            "baseName": "visible_check",
            "type": "string"
        },
        {
            "name": "contentRepeat",
            "baseName": "content_repeat",
            "type": "ContentRepeat"
        }    ];

    static getAttributeTypeMap() {
        return BlockDisplayOptions.attributeTypeMap;
    }
}

export namespace BlockDisplayOptions {
    export enum ShowOnEnum {
        All = <any> 'all',
        Desktop = <any> 'desktop',
        Mobile = <any> 'mobile'
    }
}
