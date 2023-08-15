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

export class FlowResponseObjectResourceAttributes {
    'name'?: string;
    'status'?: string;
    'archived'?: boolean;
    'created'?: Date;
    'updated'?: Date;
    /**
    * Corresponds to the object which triggered the flow.
    */
    'triggerType'?: FlowResponseObjectResourceAttributes.TriggerTypeEnum;

    static discriminator: string | undefined = undefined;

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
            "type": "FlowResponseObjectResourceAttributes.TriggerTypeEnum"
        }    ];

    static getAttributeTypeMap() {
        return FlowResponseObjectResourceAttributes.attributeTypeMap;
    }
}

export namespace FlowResponseObjectResourceAttributes {
    export enum TriggerTypeEnum {
        AddedToList = <any> 'Added to List',
        DateBased = <any> 'Date Based',
        Metric = <any> 'Metric',
        PriceDrop = <any> 'Price Drop',
        Unconfigured = <any> 'Unconfigured'
    }
}
