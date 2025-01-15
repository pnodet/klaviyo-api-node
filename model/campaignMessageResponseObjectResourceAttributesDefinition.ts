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
import { EmailMessageDefinition } from './emailMessageDefinition';
import { MobilePushContent } from './mobilePushContent';
import { MobilePushEnum } from './mobilePushEnum';
import { MobilePushMessageStandardDefinition } from './mobilePushMessageStandardDefinition';
import { MobilePushOptions } from './mobilePushOptions';
import { RenderOptions } from './renderOptions';
import { SMSMessageDefinition } from './sMSMessageDefinition';
import { StandardEnum } from './standardEnum';
export type CampaignMessageResponseObjectResourceAttributesDefinition = EmailMessageDefinition | SMSMessageDefinition | MobilePushMessageStandardDefinition;
