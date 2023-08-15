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
import { GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfileData } from './getEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfileData';

export class ListMembersDeleteQuery {
    'data': Array<GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfileData>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<GetEventResponseCollectionCompoundDocumentDataInnerAllOfRelationshipsProfileData>"
        }    ];

    static getAttributeTypeMap() {
        return ListMembersDeleteQuery.attributeTypeMap;
    }
}

