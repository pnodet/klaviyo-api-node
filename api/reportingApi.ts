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


const axios = require('axios');
import {AxiosRequestConfig, AxiosResponse} from "axios";
import FormData from 'form-data'

/* tslint:disable:no-unused-locals */
import { CampaignValuesRequestDTO } from '../model/campaignValuesRequestDTO';
import { FlowSeriesRequestDTO } from '../model/flowSeriesRequestDTO';
import { FlowValuesRequestDTO } from '../model/flowValuesRequestDTO';
import { FormSeriesRequestDTO } from '../model/formSeriesRequestDTO';
import { FormValuesRequestDTO } from '../model/formValuesRequestDTO';
import { GetAccounts4XXResponse } from '../model/getAccounts4XXResponse';
import { PostCampaignValuesResponseDTO } from '../model/postCampaignValuesResponseDTO';
import { PostFlowSeriesResponseDTO } from '../model/postFlowSeriesResponseDTO';
import { PostFlowValuesResponseDTO } from '../model/postFlowValuesResponseDTO';
import { PostFormSeriesResponseDTO } from '../model/postFormSeriesResponseDTO';
import { PostFormValuesResponseDTO } from '../model/postFormValuesResponseDTO';
import { PostSegmentSeriesResponseDTO } from '../model/postSegmentSeriesResponseDTO';
import { PostSegmentValuesResponseDTO } from '../model/postSegmentValuesResponseDTO';
import { SegmentSeriesRequestDTO } from '../model/segmentSeriesRequestDTO';
import { SegmentValuesRequestDTO } from '../model/segmentValuesRequestDTO';

import { ObjectSerializer } from '../model/models';

import {RequestFile, queryParamPreProcessor, RetryWithExponentialBackoff, Session} from './apis';

let defaultBasePath = 'https://a.klaviyo.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================


export class ReportingApi {

    session: Session

    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    constructor(session: Session){
        this.session = session
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    /**
     * Returns the requested campaign analytics values data<br><br>*Rate limits*:<br>Burst: `1/s`<br>Steady: `2/m`<br>Daily: `225/d`  **Scopes:** `campaigns:read`
     * @summary Query Campaign Values
     * @param campaignValuesRequestDTO 
     * @param pageCursor For more information please visit https://developers.klaviyo.com/en/v2025-01-15/reference/api-overview#pagination
     */
    public async queryCampaignValues (campaignValuesRequestDTO: CampaignValuesRequestDTO, options: { pageCursor?: string,  } = {}): Promise<{ response: AxiosResponse; body: PostCampaignValuesResponseDTO;  }> {

        const localVarPath = this.basePath + '/api/campaign-values-reports';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/vnd.api+json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'campaignValuesRequestDTO' is not null or undefined
        if (campaignValuesRequestDTO === null || campaignValuesRequestDTO === undefined) {
            throw new Error('Required parameter campaignValuesRequestDTO was null or undefined when calling queryCampaignValues.');
        }

        if (options.pageCursor !== undefined) {
            localVarQueryParameters['page_cursor'] = ObjectSerializer.serialize(options.pageCursor, "string");
        }

        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'POST',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
            data: ObjectSerializer.serialize(campaignValuesRequestDTO, "CampaignValuesRequestDTO")
        }

        await this.session.applyToRequest(config)

        const request = async (config: AxiosRequestConfig, retried = false): Promise<{ response: AxiosResponse; body: PostCampaignValuesResponseDTO;  }> => {
            try {
                const axiosResponse = await this.session.requestWithRetry(config)
                let body;
                body = ObjectSerializer.deserialize(axiosResponse.data, "PostCampaignValuesResponseDTO");
                return ({response: axiosResponse, body: body});
            } catch (error) {
                if (await this.session.refreshAndRetry(error, retried)) {
                    await this.session.applyToRequest(config)
                    return request(config, true)
                }
                throw error
            }
        }

        return request(config)
    }
    /**
     * Returns the requested flow analytics series data<br><br>*Rate limits*:<br>Burst: `1/s`<br>Steady: `2/m`<br>Daily: `225/d`  **Scopes:** `flows:read`
     * @summary Query Flow Series
     * @param flowSeriesRequestDTO 
     * @param pageCursor For more information please visit https://developers.klaviyo.com/en/v2025-01-15/reference/api-overview#pagination
     */
    public async queryFlowSeries (flowSeriesRequestDTO: FlowSeriesRequestDTO, options: { pageCursor?: string,  } = {}): Promise<{ response: AxiosResponse; body: PostFlowSeriesResponseDTO;  }> {

        const localVarPath = this.basePath + '/api/flow-series-reports';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/vnd.api+json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'flowSeriesRequestDTO' is not null or undefined
        if (flowSeriesRequestDTO === null || flowSeriesRequestDTO === undefined) {
            throw new Error('Required parameter flowSeriesRequestDTO was null or undefined when calling queryFlowSeries.');
        }

        if (options.pageCursor !== undefined) {
            localVarQueryParameters['page_cursor'] = ObjectSerializer.serialize(options.pageCursor, "string");
        }

        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'POST',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
            data: ObjectSerializer.serialize(flowSeriesRequestDTO, "FlowSeriesRequestDTO")
        }

        await this.session.applyToRequest(config)

        const request = async (config: AxiosRequestConfig, retried = false): Promise<{ response: AxiosResponse; body: PostFlowSeriesResponseDTO;  }> => {
            try {
                const axiosResponse = await this.session.requestWithRetry(config)
                let body;
                body = ObjectSerializer.deserialize(axiosResponse.data, "PostFlowSeriesResponseDTO");
                return ({response: axiosResponse, body: body});
            } catch (error) {
                if (await this.session.refreshAndRetry(error, retried)) {
                    await this.session.applyToRequest(config)
                    return request(config, true)
                }
                throw error
            }
        }

        return request(config)
    }
    /**
     * Returns the requested flow analytics values data<br><br>*Rate limits*:<br>Burst: `1/s`<br>Steady: `2/m`<br>Daily: `225/d`  **Scopes:** `flows:read`
     * @summary Query Flow Values
     * @param flowValuesRequestDTO 
     * @param pageCursor For more information please visit https://developers.klaviyo.com/en/v2025-01-15/reference/api-overview#pagination
     */
    public async queryFlowValues (flowValuesRequestDTO: FlowValuesRequestDTO, options: { pageCursor?: string,  } = {}): Promise<{ response: AxiosResponse; body: PostFlowValuesResponseDTO;  }> {

        const localVarPath = this.basePath + '/api/flow-values-reports';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/vnd.api+json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'flowValuesRequestDTO' is not null or undefined
        if (flowValuesRequestDTO === null || flowValuesRequestDTO === undefined) {
            throw new Error('Required parameter flowValuesRequestDTO was null or undefined when calling queryFlowValues.');
        }

        if (options.pageCursor !== undefined) {
            localVarQueryParameters['page_cursor'] = ObjectSerializer.serialize(options.pageCursor, "string");
        }

        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'POST',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
            data: ObjectSerializer.serialize(flowValuesRequestDTO, "FlowValuesRequestDTO")
        }

        await this.session.applyToRequest(config)

        const request = async (config: AxiosRequestConfig, retried = false): Promise<{ response: AxiosResponse; body: PostFlowValuesResponseDTO;  }> => {
            try {
                const axiosResponse = await this.session.requestWithRetry(config)
                let body;
                body = ObjectSerializer.deserialize(axiosResponse.data, "PostFlowValuesResponseDTO");
                return ({response: axiosResponse, body: body});
            } catch (error) {
                if (await this.session.refreshAndRetry(error, retried)) {
                    await this.session.applyToRequest(config)
                    return request(config, true)
                }
                throw error
            }
        }

        return request(config)
    }
    /**
     * Returns the requested form analytics series data.<br><br>*Rate limits*:<br>Burst: `1/s`<br>Steady: `2/m`<br>Daily: `225/d`  **Scopes:** `forms:read`
     * @summary Query Form Series
     * @param formSeriesRequestDTO 
     
     */
    public async queryFormSeries (formSeriesRequestDTO: FormSeriesRequestDTO, ): Promise<{ response: AxiosResponse; body: PostFormSeriesResponseDTO;  }> {

        const localVarPath = this.basePath + '/api/form-series-reports';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/vnd.api+json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'formSeriesRequestDTO' is not null or undefined
        if (formSeriesRequestDTO === null || formSeriesRequestDTO === undefined) {
            throw new Error('Required parameter formSeriesRequestDTO was null or undefined when calling queryFormSeries.');
        }

        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'POST',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
            data: ObjectSerializer.serialize(formSeriesRequestDTO, "FormSeriesRequestDTO")
        }

        await this.session.applyToRequest(config)

        const request = async (config: AxiosRequestConfig, retried = false): Promise<{ response: AxiosResponse; body: PostFormSeriesResponseDTO;  }> => {
            try {
                const axiosResponse = await this.session.requestWithRetry(config)
                let body;
                body = ObjectSerializer.deserialize(axiosResponse.data, "PostFormSeriesResponseDTO");
                return ({response: axiosResponse, body: body});
            } catch (error) {
                if (await this.session.refreshAndRetry(error, retried)) {
                    await this.session.applyToRequest(config)
                    return request(config, true)
                }
                throw error
            }
        }

        return request(config)
    }
    /**
     * Returns the requested form analytics values data.<br><br>*Rate limits*:<br>Burst: `1/s`<br>Steady: `2/m`<br>Daily: `225/d`  **Scopes:** `forms:read`
     * @summary Query Form Values
     * @param formValuesRequestDTO 
     
     */
    public async queryFormValues (formValuesRequestDTO: FormValuesRequestDTO, ): Promise<{ response: AxiosResponse; body: PostFormValuesResponseDTO;  }> {

        const localVarPath = this.basePath + '/api/form-values-reports';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/vnd.api+json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'formValuesRequestDTO' is not null or undefined
        if (formValuesRequestDTO === null || formValuesRequestDTO === undefined) {
            throw new Error('Required parameter formValuesRequestDTO was null or undefined when calling queryFormValues.');
        }

        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'POST',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
            data: ObjectSerializer.serialize(formValuesRequestDTO, "FormValuesRequestDTO")
        }

        await this.session.applyToRequest(config)

        const request = async (config: AxiosRequestConfig, retried = false): Promise<{ response: AxiosResponse; body: PostFormValuesResponseDTO;  }> => {
            try {
                const axiosResponse = await this.session.requestWithRetry(config)
                let body;
                body = ObjectSerializer.deserialize(axiosResponse.data, "PostFormValuesResponseDTO");
                return ({response: axiosResponse, body: body});
            } catch (error) {
                if (await this.session.refreshAndRetry(error, retried)) {
                    await this.session.applyToRequest(config)
                    return request(config, true)
                }
                throw error
            }
        }

        return request(config)
    }
    /**
     * Returns the requested segment analytics series data.<br><br>*Rate limits*:<br>Burst: `1/s`<br>Steady: `2/m`<br>Daily: `225/d`  **Scopes:** `segments:read`
     * @summary Query Segment Series
     * @param segmentSeriesRequestDTO 
     
     */
    public async querySegmentSeries (segmentSeriesRequestDTO: SegmentSeriesRequestDTO, ): Promise<{ response: AxiosResponse; body: PostSegmentSeriesResponseDTO;  }> {

        const localVarPath = this.basePath + '/api/segment-series-reports';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/vnd.api+json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'segmentSeriesRequestDTO' is not null or undefined
        if (segmentSeriesRequestDTO === null || segmentSeriesRequestDTO === undefined) {
            throw new Error('Required parameter segmentSeriesRequestDTO was null or undefined when calling querySegmentSeries.');
        }

        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'POST',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
            data: ObjectSerializer.serialize(segmentSeriesRequestDTO, "SegmentSeriesRequestDTO")
        }

        await this.session.applyToRequest(config)

        const request = async (config: AxiosRequestConfig, retried = false): Promise<{ response: AxiosResponse; body: PostSegmentSeriesResponseDTO;  }> => {
            try {
                const axiosResponse = await this.session.requestWithRetry(config)
                let body;
                body = ObjectSerializer.deserialize(axiosResponse.data, "PostSegmentSeriesResponseDTO");
                return ({response: axiosResponse, body: body});
            } catch (error) {
                if (await this.session.refreshAndRetry(error, retried)) {
                    await this.session.applyToRequest(config)
                    return request(config, true)
                }
                throw error
            }
        }

        return request(config)
    }
    /**
     * Returns the requested segment analytics values data.<br><br>*Rate limits*:<br>Burst: `1/s`<br>Steady: `2/m`<br>Daily: `225/d`  **Scopes:** `segments:read`
     * @summary Query Segment Values
     * @param segmentValuesRequestDTO 
     
     */
    public async querySegmentValues (segmentValuesRequestDTO: SegmentValuesRequestDTO, ): Promise<{ response: AxiosResponse; body: PostSegmentValuesResponseDTO;  }> {

        const localVarPath = this.basePath + '/api/segment-values-reports';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/vnd.api+json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'segmentValuesRequestDTO' is not null or undefined
        if (segmentValuesRequestDTO === null || segmentValuesRequestDTO === undefined) {
            throw new Error('Required parameter segmentValuesRequestDTO was null or undefined when calling querySegmentValues.');
        }

        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'POST',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
            data: ObjectSerializer.serialize(segmentValuesRequestDTO, "SegmentValuesRequestDTO")
        }

        await this.session.applyToRequest(config)

        const request = async (config: AxiosRequestConfig, retried = false): Promise<{ response: AxiosResponse; body: PostSegmentValuesResponseDTO;  }> => {
            try {
                const axiosResponse = await this.session.requestWithRetry(config)
                let body;
                body = ObjectSerializer.deserialize(axiosResponse.data, "PostSegmentValuesResponseDTO");
                return ({response: axiosResponse, body: body});
            } catch (error) {
                if (await this.session.refreshAndRetry(error, retried)) {
                    await this.session.applyToRequest(config)
                    return request(config, true)
                }
                throw error
            }
        }

        return request(config)
    }
}

export interface ReportingApi {
    /**
     * Alias of {@link ReportingApi.queryCampaignValues}
     *
     * @deprecated Use {@link ReportingApi.queryCampaignValues} instead
     */
    createCampaignValueReport: typeof ReportingApi.prototype.queryCampaignValues;
}
ReportingApi.prototype.createCampaignValueReport = ReportingApi.prototype.queryCampaignValues

export interface ReportingApi {
    /**
     * Alias of {@link ReportingApi.queryCampaignValues}
     *
     * @deprecated Use {@link ReportingApi.queryCampaignValues} instead
     */
    createCampaignValuesReport: typeof ReportingApi.prototype.queryCampaignValues;
}
ReportingApi.prototype.createCampaignValuesReport = ReportingApi.prototype.queryCampaignValues

export interface ReportingApi {
    /**
     * Alias of {@link ReportingApi.queryFlowSeries}
     *
     * @deprecated Use {@link ReportingApi.queryFlowSeries} instead
     */
    createFlowSeryReport: typeof ReportingApi.prototype.queryFlowSeries;
}
ReportingApi.prototype.createFlowSeryReport = ReportingApi.prototype.queryFlowSeries

export interface ReportingApi {
    /**
     * Alias of {@link ReportingApi.queryFlowSeries}
     *
     * @deprecated Use {@link ReportingApi.queryFlowSeries} instead
     */
    createFlowSeriesReport: typeof ReportingApi.prototype.queryFlowSeries;
}
ReportingApi.prototype.createFlowSeriesReport = ReportingApi.prototype.queryFlowSeries

export interface ReportingApi {
    /**
     * Alias of {@link ReportingApi.queryFlowValues}
     *
     * @deprecated Use {@link ReportingApi.queryFlowValues} instead
     */
    createFlowValueReport: typeof ReportingApi.prototype.queryFlowValues;
}
ReportingApi.prototype.createFlowValueReport = ReportingApi.prototype.queryFlowValues

export interface ReportingApi {
    /**
     * Alias of {@link ReportingApi.queryFlowValues}
     *
     * @deprecated Use {@link ReportingApi.queryFlowValues} instead
     */
    createFlowValuesReport: typeof ReportingApi.prototype.queryFlowValues;
}
ReportingApi.prototype.createFlowValuesReport = ReportingApi.prototype.queryFlowValues

export interface ReportingApi {
    /**
     * Alias of {@link ReportingApi.queryFormSeries}
     *
     * @deprecated Use {@link ReportingApi.queryFormSeries} instead
     */
    createFormSeryReport: typeof ReportingApi.prototype.queryFormSeries;
}
ReportingApi.prototype.createFormSeryReport = ReportingApi.prototype.queryFormSeries

export interface ReportingApi {
    /**
     * Alias of {@link ReportingApi.queryFormSeries}
     *
     * @deprecated Use {@link ReportingApi.queryFormSeries} instead
     */
    createFormSeriesReport: typeof ReportingApi.prototype.queryFormSeries;
}
ReportingApi.prototype.createFormSeriesReport = ReportingApi.prototype.queryFormSeries

export interface ReportingApi {
    /**
     * Alias of {@link ReportingApi.queryFormValues}
     *
     * @deprecated Use {@link ReportingApi.queryFormValues} instead
     */
    createFormValueReport: typeof ReportingApi.prototype.queryFormValues;
}
ReportingApi.prototype.createFormValueReport = ReportingApi.prototype.queryFormValues

export interface ReportingApi {
    /**
     * Alias of {@link ReportingApi.queryFormValues}
     *
     * @deprecated Use {@link ReportingApi.queryFormValues} instead
     */
    createFormValuesReport: typeof ReportingApi.prototype.queryFormValues;
}
ReportingApi.prototype.createFormValuesReport = ReportingApi.prototype.queryFormValues

export interface ReportingApi {
    /**
     * Alias of {@link ReportingApi.querySegmentSeries}
     *
     * @deprecated Use {@link ReportingApi.querySegmentSeries} instead
     */
    createSegmentSeryReport: typeof ReportingApi.prototype.querySegmentSeries;
}
ReportingApi.prototype.createSegmentSeryReport = ReportingApi.prototype.querySegmentSeries

export interface ReportingApi {
    /**
     * Alias of {@link ReportingApi.querySegmentSeries}
     *
     * @deprecated Use {@link ReportingApi.querySegmentSeries} instead
     */
    createSegmentSeriesReport: typeof ReportingApi.prototype.querySegmentSeries;
}
ReportingApi.prototype.createSegmentSeriesReport = ReportingApi.prototype.querySegmentSeries

export interface ReportingApi {
    /**
     * Alias of {@link ReportingApi.querySegmentValues}
     *
     * @deprecated Use {@link ReportingApi.querySegmentValues} instead
     */
    createSegmentValueReport: typeof ReportingApi.prototype.querySegmentValues;
}
ReportingApi.prototype.createSegmentValueReport = ReportingApi.prototype.querySegmentValues

export interface ReportingApi {
    /**
     * Alias of {@link ReportingApi.querySegmentValues}
     *
     * @deprecated Use {@link ReportingApi.querySegmentValues} instead
     */
    createSegmentValuesReport: typeof ReportingApi.prototype.querySegmentValues;
}
ReportingApi.prototype.createSegmentValuesReport = ReportingApi.prototype.querySegmentValues
