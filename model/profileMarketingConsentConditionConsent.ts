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
import { HasEmailMarketingConsent } from './hasEmailMarketingConsent';
import { HasPushMarketingConsent } from './hasPushMarketingConsent';
import { HasSMSMarketingConsent } from './hasSMSMarketingConsent';
import { NoEmailMarketingConsent } from './noEmailMarketingConsent';
import { NoPushMarketing } from './noPushMarketing';
import { NoPushMarketingConsent } from './noPushMarketingConsent';
import { NoSMSMarketingConsent } from './noSMSMarketingConsent';
import { PushEnum } from './pushEnum';
export type ProfileMarketingConsentConditionConsent = HasEmailMarketingConsent | NoEmailMarketingConsent | HasSMSMarketingConsent | NoSMSMarketingConsent | HasPushMarketingConsent | NoPushMarketingConsent;
