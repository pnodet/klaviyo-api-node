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
import { CollectionLinks } from './collectionLinks';
import { GetSegmentResponseCollectionDataInner } from './getSegmentResponseCollectionDataInner';
export class GetSegmentResponseCollection {
    'data': Array<GetSegmentResponseCollectionDataInner>;
    'links'?: CollectionLinks;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<GetSegmentResponseCollectionDataInner>"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "CollectionLinks"
        }    ];

    static getAttributeTypeMap() {
        return GetSegmentResponseCollection.attributeTypeMap;
    }
}

