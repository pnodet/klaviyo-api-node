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
import { SegmentDefinition } from './segmentDefinition';
export class SegmentListResponseObjectResourceAttributes {
    /**
    * A helpful name to label the segment
    */
    'name'?: string | null;
    'definition'?: SegmentDefinition;
    /**
    * Date and time when the segment was created, in ISO 8601 format (YYYY-MM-DDTHH:MM:SS.mmmmmm)
    */
    'created'?: Date | null;
    /**
    * Date and time when the segment was last updated, in ISO 8601 format (YYYY-MM-DDTHH:MM:SS.mmmmmm)
    */
    'updated'?: Date | null;
    'isActive': boolean;
    'isProcessing': boolean;
    'isStarred': boolean;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "definition",
            "baseName": "definition",
            "type": "SegmentDefinition"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date"
        },
        {
            "name": "updated",
            "baseName": "updated",
            "type": "Date"
        },
        {
            "name": "isActive",
            "baseName": "is_active",
            "type": "boolean"
        },
        {
            "name": "isProcessing",
            "baseName": "is_processing",
            "type": "boolean"
        },
        {
            "name": "isStarred",
            "baseName": "is_starred",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return SegmentListResponseObjectResourceAttributes.attributeTypeMap;
    }
}

