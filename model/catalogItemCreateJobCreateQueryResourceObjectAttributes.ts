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
import { CatalogItemCreateJobCreateQueryResourceObjectAttributesItems } from './catalogItemCreateJobCreateQueryResourceObjectAttributesItems';

export class CatalogItemCreateJobCreateQueryResourceObjectAttributes {
    'items': CatalogItemCreateJobCreateQueryResourceObjectAttributesItems;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "items",
            "baseName": "items",
            "type": "CatalogItemCreateJobCreateQueryResourceObjectAttributesItems"
        }    ];

    static getAttributeTypeMap() {
        return CatalogItemCreateJobCreateQueryResourceObjectAttributes.attributeTypeMap;
    }
}

