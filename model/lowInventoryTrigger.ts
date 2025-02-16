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
import { LowInventoryConditionFilter } from './lowInventoryConditionFilter';
import { LowInventoryEnum } from './lowInventoryEnum';
export class LowInventoryTrigger {
    'type': LowInventoryEnum | 'low-inventory';
    /**
    * Low inventory product level.
    */
    'productLevel': LowInventoryTrigger.ProductLevelEnum | 'product' | 'variant';
    'triggerFilter': LowInventoryConditionFilter;
    'inventoryCount': number;
    'audience': Array<LowInventoryTrigger.AudienceEnum> | Array<'added-to-cart' | 'checkout-started' | 'viewed'>;
    'timeframeDays'?: number = 30;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "LowInventoryEnum"
        },
        {
            "name": "productLevel",
            "baseName": "product_level",
            "type": "LowInventoryTrigger.ProductLevelEnum"
        },
        {
            "name": "triggerFilter",
            "baseName": "trigger_filter",
            "type": "LowInventoryConditionFilter"
        },
        {
            "name": "inventoryCount",
            "baseName": "inventory_count",
            "type": "number"
        },
        {
            "name": "audience",
            "baseName": "audience",
            "type": "Array<LowInventoryTrigger.AudienceEnum>"
        },
        {
            "name": "timeframeDays",
            "baseName": "timeframe_days",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return LowInventoryTrigger.attributeTypeMap;
    }
}

export namespace LowInventoryTrigger {
    export enum ProductLevelEnum {
        Product = <any> 'product',
        Variant = <any> 'variant'
    }
    export enum AudienceEnum {
        AddedToCart = <any> 'added-to-cart',
        CheckoutStarted = <any> 'checkout-started',
        Viewed = <any> 'viewed'
    }
}
