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

export class ProfileImportJobResponseObjectResourceAttributes {
    /**
    * Status of the asynchronous job.
    */
    'status': ProfileImportJobResponseObjectResourceAttributes.StatusEnum | 'cancelled' | 'complete' | 'processing' | 'queued';
    /**
    * The date and time the job was created in ISO 8601 format (YYYY-MM-DDTHH:MM:SS.mmmmmm).
    */
    'createdAt': Date;
    /**
    * The total number of operations to be processed by the job. See `completed_count` for the job\'s current progress.
    */
    'totalCount': number;
    /**
    * The total number of operations that have been completed by the job.
    */
    'completedCount'?: number = 0;
    /**
    * The total number of operations that have failed as part of the job.
    */
    'failedCount'?: number = 0;
    /**
    * Date and time the job was completed in ISO 8601 format (YYYY-MM-DDTHH:MM:SS.mmmmmm).
    */
    'completedAt'?: Date;
    /**
    * Date and time the job expires in ISO 8601 format (YYYY-MM-DDTHH:MM:SS.mmmmmm).
    */
    'expiresAt'?: Date;
    /**
    * Date and time the job started processing in ISO 8601 format (YYYY-MM-DDTHH:MM:SS.mmmmmm).
    */
    'startedAt'?: Date;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "ProfileImportJobResponseObjectResourceAttributes.StatusEnum"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "totalCount",
            "baseName": "total_count",
            "type": "number"
        },
        {
            "name": "completedCount",
            "baseName": "completed_count",
            "type": "number"
        },
        {
            "name": "failedCount",
            "baseName": "failed_count",
            "type": "number"
        },
        {
            "name": "completedAt",
            "baseName": "completed_at",
            "type": "Date"
        },
        {
            "name": "expiresAt",
            "baseName": "expires_at",
            "type": "Date"
        },
        {
            "name": "startedAt",
            "baseName": "started_at",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return ProfileImportJobResponseObjectResourceAttributes.attributeTypeMap;
    }
}

export namespace ProfileImportJobResponseObjectResourceAttributes {
    export enum StatusEnum {
        Cancelled = <any> 'cancelled',
        Complete = <any> 'complete',
        Processing = <any> 'processing',
        Queued = <any> 'queued'
    }
}
