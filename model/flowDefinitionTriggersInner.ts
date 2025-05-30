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
import { ListTrigger } from './listTrigger';
import { LowInventoryConditionFilter } from './lowInventoryConditionFilter';
import { LowInventoryEnum } from './lowInventoryEnum';
import { LowInventoryTrigger } from './lowInventoryTrigger';
import { MetricTrigger } from './metricTrigger';
import { PriceDropTrigger } from './priceDropTrigger';
import { ProfilePropertyDateTrigger } from './profilePropertyDateTrigger';
import { ProfilePropertyEnum } from './profilePropertyEnum';
import { SegmentTrigger } from './segmentTrigger';
export type FlowDefinitionTriggersInner = ListTrigger | SegmentTrigger | MetricTrigger | ProfilePropertyDateTrigger | PriceDropTrigger | LowInventoryTrigger;
