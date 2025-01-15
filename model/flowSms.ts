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
import { UnionFilter } from './unionFilter';
import { UtmParam } from './utmParam';
export class FlowSms {
    'body': string;
    /**
    * The id of an ImageAsset. If provided, this will take precedence over a dynamic_image.
    */
    'imageId'?: string | null;
    /**
    * A dynamic image asset to include in the SMS message.
    */
    'dynamicImage'?: string | null;
    'shortenLinks'?: boolean = true;
    'includeContactCard'?: boolean = false;
    'addOrgPrefix'?: boolean = true;
    'addInfoLink'?: boolean = true;
    'addOptOutLanguage'?: boolean = false;
    'smartSendingEnabled'?: boolean = true;
    'smsQuietHoursEnabled'?: boolean = true;
    'transactional'?: boolean = false;
    'addTrackingParams'?: boolean = false;
    'customTrackingParams'?: Array<UtmParam> | null;
    'additionalFilters'?: UnionFilter;
    'name'?: string | null;
    'id'?: string | null;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "body",
            "baseName": "body",
            "type": "string"
        },
        {
            "name": "imageId",
            "baseName": "image_id",
            "type": "string"
        },
        {
            "name": "dynamicImage",
            "baseName": "dynamic_image",
            "type": "string"
        },
        {
            "name": "shortenLinks",
            "baseName": "shorten_links",
            "type": "boolean"
        },
        {
            "name": "includeContactCard",
            "baseName": "include_contact_card",
            "type": "boolean"
        },
        {
            "name": "addOrgPrefix",
            "baseName": "add_org_prefix",
            "type": "boolean"
        },
        {
            "name": "addInfoLink",
            "baseName": "add_info_link",
            "type": "boolean"
        },
        {
            "name": "addOptOutLanguage",
            "baseName": "add_opt_out_language",
            "type": "boolean"
        },
        {
            "name": "smartSendingEnabled",
            "baseName": "smart_sending_enabled",
            "type": "boolean"
        },
        {
            "name": "smsQuietHoursEnabled",
            "baseName": "sms_quiet_hours_enabled",
            "type": "boolean"
        },
        {
            "name": "transactional",
            "baseName": "transactional",
            "type": "boolean"
        },
        {
            "name": "addTrackingParams",
            "baseName": "add_tracking_params",
            "type": "boolean"
        },
        {
            "name": "customTrackingParams",
            "baseName": "custom_tracking_params",
            "type": "Array<UtmParam>"
        },
        {
            "name": "additionalFilters",
            "baseName": "additional_filters",
            "type": "UnionFilter"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return FlowSms.attributeTypeMap;
    }
}

