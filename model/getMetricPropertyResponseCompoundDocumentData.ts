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
import { GetMetricPropertyResponseCompoundDocumentDataAllOfRelationships } from './getMetricPropertyResponseCompoundDocumentDataAllOfRelationships';
import { MetricPropertyEnum } from './metricPropertyEnum';
import { MetricPropertyResponseObjectResourceExtended } from './metricPropertyResponseObjectResourceExtended';
import { MetricPropertyResponseObjectResourceExtendedAttributes } from './metricPropertyResponseObjectResourceExtendedAttributes';
import { ObjectLinks } from './objectLinks';
export class GetMetricPropertyResponseCompoundDocumentData extends MetricPropertyResponseObjectResourceExtended {
    'relationships'?: GetMetricPropertyResponseCompoundDocumentDataAllOfRelationships;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "GetMetricPropertyResponseCompoundDocumentDataAllOfRelationships"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(GetMetricPropertyResponseCompoundDocumentData.attributeTypeMap);
    }
}

export namespace GetMetricPropertyResponseCompoundDocumentData {
}
