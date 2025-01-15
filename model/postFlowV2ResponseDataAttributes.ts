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
import { FlowDefinition } from './flowDefinition';
export class PostFlowV2ResponseDataAttributes {
    'name'?: string | null;
    'status'?: string | null;
    'archived'?: boolean | null;
    'created'?: Date | null;
    'updated'?: Date | null;
    /**
    * Corresponds to the object which triggered the flow.
    */
    'triggerType'?: PostFlowV2ResponseDataAttributes.TriggerTypeEnum | 'Added to List' | 'Date Based' | 'Low Inventory' | 'Metric' | 'Price Drop' | 'Unconfigured' | null;
    'definition'?: FlowDefinition;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "archived",
            "baseName": "archived",
            "type": "boolean"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date"
        },
        {
            "name": "updated",
            "baseName": "updated",
            "type": "Date"
        },
        {
            "name": "triggerType",
            "baseName": "trigger_type",
            "type": "PostFlowV2ResponseDataAttributes.TriggerTypeEnum"
        },
        {
            "name": "definition",
            "baseName": "definition",
            "type": "FlowDefinition"
        }    ];

    static getAttributeTypeMap() {
        return PostFlowV2ResponseDataAttributes.attributeTypeMap;
    }
}

export namespace PostFlowV2ResponseDataAttributes {
    export enum TriggerTypeEnum {
        AddedToList = <any> 'Added to List',
        DateBased = <any> 'Date Based',
        LowInventory = <any> 'Low Inventory',
        Metric = <any> 'Metric',
        PriceDrop = <any> 'Price Drop',
        Unconfigured = <any> 'Unconfigured'
    }
}
