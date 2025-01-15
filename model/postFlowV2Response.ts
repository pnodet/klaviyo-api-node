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
import { PostFlowV2ResponseData } from './postFlowV2ResponseData';
export class PostFlowV2Response {
    'data': PostFlowV2ResponseData;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "PostFlowV2ResponseData"
        }    ];

    static getAttributeTypeMap() {
        return PostFlowV2Response.attributeTypeMap;
    }
}

