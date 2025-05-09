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
import { BulkProfileSuppressionsCreateJobResponseObjectResourceAttributes } from './bulkProfileSuppressionsCreateJobResponseObjectResourceAttributes';
import { ObjectLinks } from './objectLinks';
import { ProfileSuppressionBulkDeleteJobEnum } from './profileSuppressionBulkDeleteJobEnum';
export class BulkProfileSuppressionsRemoveJobResponseObjectResource {
    'type': ProfileSuppressionBulkDeleteJobEnum | 'profile-suppression-bulk-delete-job';
    /**
    * Unique identifier for retrieving the job. Generated by Klaviyo.
    */
    'id': string;
    'attributes': BulkProfileSuppressionsCreateJobResponseObjectResourceAttributes;
    'links': ObjectLinks;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "ProfileSuppressionBulkDeleteJobEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "BulkProfileSuppressionsCreateJobResponseObjectResourceAttributes"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ObjectLinks"
        }    ];

    static getAttributeTypeMap() {
        return BulkProfileSuppressionsRemoveJobResponseObjectResource.attributeTypeMap;
    }
}

export namespace BulkProfileSuppressionsRemoveJobResponseObjectResource {
}
