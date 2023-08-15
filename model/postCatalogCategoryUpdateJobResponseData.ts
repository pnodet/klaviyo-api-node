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
import { CatalogCategoryBulkUpdateJobEnum } from './catalogCategoryBulkUpdateJobEnum';
import { CatalogItemCreateJobResponseObjectResourceAttributes } from './catalogItemCreateJobResponseObjectResourceAttributes';
import { GetCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships } from './getCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships';
import { ObjectLinks } from './objectLinks';

export class PostCatalogCategoryUpdateJobResponseData {
    'type': CatalogCategoryBulkUpdateJobEnum;
    'attributes': CatalogItemCreateJobResponseObjectResourceAttributes;
    'relationships'?: GetCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships;
    'links': ObjectLinks;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "CatalogCategoryBulkUpdateJobEnum"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "CatalogItemCreateJobResponseObjectResourceAttributes"
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "GetCatalogCategoryCreateJobResponseCollectionCompoundDocumentDataInnerAllOfRelationships"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "ObjectLinks"
        }    ];

    static getAttributeTypeMap() {
        return PostCatalogCategoryUpdateJobResponseData.attributeTypeMap;
    }
}

export namespace PostCatalogCategoryUpdateJobResponseData {
}
