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
import { NoPushMarketing } from './noPushMarketing';
import { PushEnum } from './pushEnum';
export class NoPushMarketingConsent {
    'channel': PushEnum | 'push';
    'canReceiveMarketing': NoPushMarketingConsent.CanReceiveMarketingEnum | false;
    'consentStatus': NoPushMarketing;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "channel",
            "baseName": "channel",
            "type": "PushEnum"
        },
        {
            "name": "canReceiveMarketing",
            "baseName": "can_receive_marketing",
            "type": "NoPushMarketingConsent.CanReceiveMarketingEnum"
        },
        {
            "name": "consentStatus",
            "baseName": "consent_status",
            "type": "NoPushMarketing"
        }    ];

    static getAttributeTypeMap() {
        return NoPushMarketingConsent.attributeTypeMap;
    }
}

export namespace NoPushMarketingConsent {
    export enum CanReceiveMarketingEnum {
        False = <any> false
    }
}
