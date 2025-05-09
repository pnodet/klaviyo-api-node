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
import { DynamicEnum } from './dynamicEnum';
export class DynamicTrackingParam {
    'type': DynamicEnum | 'dynamic';
    /**
    * The value of the tracking parameter
    */
    'value': DynamicTrackingParam.ValueEnum | 'campaign_id' | 'campaign_name' | 'campaign_name_id' | 'campaign_name_send_day' | 'email_subject' | 'group_id' | 'group_name' | 'group_name_id' | 'link_alt_text' | 'message_type' | 'profile_external_id' | 'profile_id';
    /**
    * Name of the tracking param
    */
    'name': string;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "DynamicEnum"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "DynamicTrackingParam.ValueEnum"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return DynamicTrackingParam.attributeTypeMap;
    }
}

export namespace DynamicTrackingParam {
    export enum ValueEnum {
        CampaignId = <any> 'campaign_id',
        CampaignName = <any> 'campaign_name',
        CampaignNameId = <any> 'campaign_name_id',
        CampaignNameSendDay = <any> 'campaign_name_send_day',
        EmailSubject = <any> 'email_subject',
        GroupId = <any> 'group_id',
        GroupName = <any> 'group_name',
        GroupNameId = <any> 'group_name_id',
        LinkAltText = <any> 'link_alt_text',
        MessageType = <any> 'message_type',
        ProfileExternalId = <any> 'profile_external_id',
        ProfileId = <any> 'profile_id'
    }
}
