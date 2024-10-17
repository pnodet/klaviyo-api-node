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
import { BooleanFilter } from './booleanFilter';
import { ExistenceOperatorFilter } from './existenceOperatorFilter';
import { ListLengthFilter } from './listLengthFilter';
import { ListSetFilter } from './listSetFilter';
import { ListSubstringFilter } from './listSubstringFilter';
import { NumericEnum } from './numericEnum';
import { NumericOperatorFilter } from './numericOperatorFilter';
import { StringArrayOperatorFilter } from './stringArrayOperatorFilter';
import { StringOperatorFilter } from './stringOperatorFilter';
export type ProfileMetricPropertyFilterFilter = StringOperatorFilter | StringArrayOperatorFilter | ExistenceOperatorFilter | ListSetFilter | ListLengthFilter | ListSubstringFilter | BooleanFilter | NumericOperatorFilter;
