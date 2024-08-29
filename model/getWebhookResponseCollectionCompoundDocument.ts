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
import { GetWebhookResponseCollectionCompoundDocumentDataInner } from './getWebhookResponseCollectionCompoundDocumentDataInner';
import { WebhookTopicResponseObjectResource } from './webhookTopicResponseObjectResource';
export class GetWebhookResponseCollectionCompoundDocument {
    'data': Array<GetWebhookResponseCollectionCompoundDocumentDataInner>;
    'links'?: CollectionLinks;
    'included'?: Array<WebhookTopicResponseObjectResource>;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<GetWebhookResponseCollectionCompoundDocumentDataInner>"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "CollectionLinks"
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "Array<WebhookTopicResponseObjectResource>"
        }    ];

    static getAttributeTypeMap() {
        return GetWebhookResponseCollectionCompoundDocument.attributeTypeMap;
    }
}

