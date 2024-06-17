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
import { AnniversaryDateFilter } from './anniversaryDateFilter';
import { CalendarDateFilter } from './calendarDateFilter';
import { ExistenceEnum } from './existenceEnum';
import { IsSetEnum } from './isSetEnum';
import { IsSetExistenceFilter } from './isSetExistenceFilter';
import { RelativeAnniversaryDateFilter } from './relativeAnniversaryDateFilter';
import { RelativeDateFilter } from './relativeDateFilter';
import { RelativeDateRangeFilter } from './relativeDateRangeFilter';
import { StaticDateFilter } from './staticDateFilter';
import { StaticDateRangeFilter } from './staticDateRangeFilter';
export type BounceDateFilterFilter = StaticDateFilter | StaticDateRangeFilter | RelativeDateFilter | RelativeAnniversaryDateFilter | RelativeDateRangeFilter | CalendarDateFilter | AnniversaryDateFilter | IsSetExistenceFilter;
