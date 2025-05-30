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
import { AbTestActionDataCurrentExperiment } from './abTestActionDataCurrentExperiment';
import { AbTestActionDataMainAction } from './abTestActionDataMainAction';
export class AbTestActionData {
    /**
    * Flow action status.
    */
    'status'?: AbTestActionData.StatusEnum | 'disabled' | 'draft' | 'live' | 'manual' = AbTestActionData.StatusEnum.Draft;
    /**
    * The status of the A/B test action experiment.
    */
    'experimentStatus'?: AbTestActionData.ExperimentStatusEnum | 'completed' | 'draft' | 'live' = AbTestActionData.ExperimentStatusEnum.Draft;
    'mainAction': AbTestActionDataMainAction;
    'currentExperiment'?: AbTestActionDataCurrentExperiment | null;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "AbTestActionData.StatusEnum"
        },
        {
            "name": "experimentStatus",
            "baseName": "experiment_status",
            "type": "AbTestActionData.ExperimentStatusEnum"
        },
        {
            "name": "mainAction",
            "baseName": "main_action",
            "type": "AbTestActionDataMainAction"
        },
        {
            "name": "currentExperiment",
            "baseName": "current_experiment",
            "type": "AbTestActionDataCurrentExperiment"
        }    ];

    static getAttributeTypeMap() {
        return AbTestActionData.attributeTypeMap;
    }
}

export namespace AbTestActionData {
    export enum StatusEnum {
        Disabled = <any> 'disabled',
        Draft = <any> 'draft',
        Live = <any> 'live',
        Manual = <any> 'manual'
    }
    export enum ExperimentStatusEnum {
        Completed = <any> 'completed',
        Draft = <any> 'draft',
        Live = <any> 'live'
    }
}
