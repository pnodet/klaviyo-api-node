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
import { GetReviewResponseDTO20240715CollectionCompoundDocumentDataInnerAllOfRelationships } from './getReviewResponseDTO20240715CollectionCompoundDocumentDataInnerAllOfRelationships';
import { ObjectLinks } from './objectLinks';
import { ReviewEnum } from './reviewEnum';
import { ReviewResponseDTO20240715ObjectResource } from './reviewResponseDTO20240715ObjectResource';
import { ReviewResponseDTO20240715ObjectResourceAttributes } from './reviewResponseDTO20240715ObjectResourceAttributes';
export class GetReviewResponseDTO20240715CollectionCompoundDocumentDataInner extends ReviewResponseDTO20240715ObjectResource {
    'relationships'?: GetReviewResponseDTO20240715CollectionCompoundDocumentDataInnerAllOfRelationships;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "GetReviewResponseDTO20240715CollectionCompoundDocumentDataInnerAllOfRelationships"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(GetReviewResponseDTO20240715CollectionCompoundDocumentDataInner.attributeTypeMap);
    }
}

export namespace GetReviewResponseDTO20240715CollectionCompoundDocumentDataInner {
}
