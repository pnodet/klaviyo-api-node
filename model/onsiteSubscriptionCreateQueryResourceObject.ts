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
import { OnsiteSubscriptionCreateQueryResourceObjectAttributes } from './onsiteSubscriptionCreateQueryResourceObjectAttributes';
import { OnsiteSubscriptionCreateQueryResourceObjectRelationships } from './onsiteSubscriptionCreateQueryResourceObjectRelationships';
import { SubscriptionEnum } from './subscriptionEnum';
export class OnsiteSubscriptionCreateQueryResourceObject {
    'type': SubscriptionEnum | 'subscription';
    'attributes': OnsiteSubscriptionCreateQueryResourceObjectAttributes;
    'relationships'?: OnsiteSubscriptionCreateQueryResourceObjectRelationships;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "SubscriptionEnum"
        },
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "OnsiteSubscriptionCreateQueryResourceObjectAttributes"
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "OnsiteSubscriptionCreateQueryResourceObjectRelationships"
        }    ];

    static getAttributeTypeMap() {
        return OnsiteSubscriptionCreateQueryResourceObject.attributeTypeMap;
    }
}

export namespace OnsiteSubscriptionCreateQueryResourceObject {
}
