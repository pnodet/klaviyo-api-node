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
import { GetMetricResponseData } from './getMetricResponseData';
export class GetMetricResponseCollection {
    'data': Array<GetMetricResponseData>;
    'links'?: CollectionLinks;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<GetMetricResponseData>"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "CollectionLinks"
        }    ];

    static getAttributeTypeMap() {
        return GetMetricResponseCollection.attributeTypeMap;
    }
}

