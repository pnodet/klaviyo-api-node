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
import { GetAccounts4XXResponse } from '../model/getAccounts4XXResponse';
import { GetTrackingSettingResponse } from '../model/getTrackingSettingResponse';
import { GetTrackingSettingResponseCollection } from '../model/getTrackingSettingResponseCollection';
import { PatchTrackingSettingResponse } from '../model/patchTrackingSettingResponse';
import { TrackingSettingPartialUpdateQuery } from '../model/trackingSettingPartialUpdateQuery';

import { ObjectSerializer } from '../model/models';

import {RequestFile, queryParamPreProcessor, RetryWithExponentialBackoff, Session} from './apis';

let defaultBasePath = 'https://a.klaviyo.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================


export class TrackingSettingsApi {

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
     * Get the tracking setting with the given account ID.<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `tracking-settings:read`
     * @summary Get Tracking Setting
     * @param id The id of the tracking setting (account ID).
     * @param fieldsTrackingSetting For more information please visit https://developers.klaviyo.com/en/v2025-01-15/reference/api-overview#sparse-fieldsets
     */
    public async getTrackingSetting (id: string, options: { fieldsTrackingSetting?: Array<'auto_add_parameters' | 'utm_source' | 'utm_source.flow' | 'utm_source.flow.type' | 'utm_source.flow.value' | 'utm_source.campaign' | 'utm_source.campaign.type' | 'utm_source.campaign.value' | 'utm_medium' | 'utm_medium.flow' | 'utm_medium.flow.type' | 'utm_medium.flow.value' | 'utm_medium.campaign' | 'utm_medium.campaign.type' | 'utm_medium.campaign.value' | 'utm_campaign' | 'utm_campaign.flow' | 'utm_campaign.flow.type' | 'utm_campaign.flow.value' | 'utm_campaign.campaign' | 'utm_campaign.campaign.type' | 'utm_campaign.campaign.value' | 'utm_id' | 'utm_id.flow' | 'utm_id.flow.type' | 'utm_id.flow.value' | 'utm_id.campaign' | 'utm_id.campaign.type' | 'utm_id.campaign.value' | 'utm_term' | 'utm_term.flow' | 'utm_term.flow.type' | 'utm_term.flow.value' | 'utm_term.campaign' | 'utm_term.campaign.type' | 'utm_term.campaign.value' | 'custom_parameters'>,  } = {}): Promise<{ response: AxiosResponse; body: GetTrackingSettingResponse;  }> {

        const localVarPath = this.basePath + '/api/tracking-settings/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/vnd.api+json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getTrackingSetting.');
        }

        if (options.fieldsTrackingSetting !== undefined) {
            localVarQueryParameters['fields[tracking-setting]'] = ObjectSerializer.serialize(options.fieldsTrackingSetting, "Array<'auto_add_parameters' | 'utm_source' | 'utm_source.flow' | 'utm_source.flow.type' | 'utm_source.flow.value' | 'utm_source.campaign' | 'utm_source.campaign.type' | 'utm_source.campaign.value' | 'utm_medium' | 'utm_medium.flow' | 'utm_medium.flow.type' | 'utm_medium.flow.value' | 'utm_medium.campaign' | 'utm_medium.campaign.type' | 'utm_medium.campaign.value' | 'utm_campaign' | 'utm_campaign.flow' | 'utm_campaign.flow.type' | 'utm_campaign.flow.value' | 'utm_campaign.campaign' | 'utm_campaign.campaign.type' | 'utm_campaign.campaign.value' | 'utm_id' | 'utm_id.flow' | 'utm_id.flow.type' | 'utm_id.flow.value' | 'utm_id.campaign' | 'utm_id.campaign.type' | 'utm_id.campaign.value' | 'utm_term' | 'utm_term.flow' | 'utm_term.flow.type' | 'utm_term.flow.value' | 'utm_term.campaign' | 'utm_term.campaign.type' | 'utm_term.campaign.value' | 'custom_parameters'>");
        }

        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'GET',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
        }

        await this.session.applyToRequest(config)

        const request = async (config: AxiosRequestConfig, retried = false): Promise<{ response: AxiosResponse; body: GetTrackingSettingResponse;  }> => {
            try {
                const axiosResponse = await this.session.requestWithRetry(config)
                let body;
                body = ObjectSerializer.deserialize(axiosResponse.data, "GetTrackingSettingResponse");
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
     * Get all tracking settings in an account. Returns an array with a single tracking setting.<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `tracking-settings:read`
     * @summary Get Tracking Settings
     
     * @param fieldsTrackingSetting For more information please visit https://developers.klaviyo.com/en/v2025-01-15/reference/api-overview#sparse-fieldsets* @param pageCursor For more information please visit https://developers.klaviyo.com/en/v2025-01-15/reference/api-overview#pagination* @param pageSize Default: 1. Min: 1. Max: 1.
     */
    public async getTrackingSettings (options: { fieldsTrackingSetting?: Array<'auto_add_parameters' | 'utm_source' | 'utm_source.flow' | 'utm_source.flow.type' | 'utm_source.flow.value' | 'utm_source.campaign' | 'utm_source.campaign.type' | 'utm_source.campaign.value' | 'utm_medium' | 'utm_medium.flow' | 'utm_medium.flow.type' | 'utm_medium.flow.value' | 'utm_medium.campaign' | 'utm_medium.campaign.type' | 'utm_medium.campaign.value' | 'utm_campaign' | 'utm_campaign.flow' | 'utm_campaign.flow.type' | 'utm_campaign.flow.value' | 'utm_campaign.campaign' | 'utm_campaign.campaign.type' | 'utm_campaign.campaign.value' | 'utm_id' | 'utm_id.flow' | 'utm_id.flow.type' | 'utm_id.flow.value' | 'utm_id.campaign' | 'utm_id.campaign.type' | 'utm_id.campaign.value' | 'utm_term' | 'utm_term.flow' | 'utm_term.flow.type' | 'utm_term.flow.value' | 'utm_term.campaign' | 'utm_term.campaign.type' | 'utm_term.campaign.value' | 'custom_parameters'>, pageCursor?: string, pageSize?: number,  } = {}): Promise<{ response: AxiosResponse; body: GetTrackingSettingResponseCollection;  }> {

        const localVarPath = this.basePath + '/api/tracking-settings';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/vnd.api+json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        if (options.fieldsTrackingSetting !== undefined) {
            localVarQueryParameters['fields[tracking-setting]'] = ObjectSerializer.serialize(options.fieldsTrackingSetting, "Array<'auto_add_parameters' | 'utm_source' | 'utm_source.flow' | 'utm_source.flow.type' | 'utm_source.flow.value' | 'utm_source.campaign' | 'utm_source.campaign.type' | 'utm_source.campaign.value' | 'utm_medium' | 'utm_medium.flow' | 'utm_medium.flow.type' | 'utm_medium.flow.value' | 'utm_medium.campaign' | 'utm_medium.campaign.type' | 'utm_medium.campaign.value' | 'utm_campaign' | 'utm_campaign.flow' | 'utm_campaign.flow.type' | 'utm_campaign.flow.value' | 'utm_campaign.campaign' | 'utm_campaign.campaign.type' | 'utm_campaign.campaign.value' | 'utm_id' | 'utm_id.flow' | 'utm_id.flow.type' | 'utm_id.flow.value' | 'utm_id.campaign' | 'utm_id.campaign.type' | 'utm_id.campaign.value' | 'utm_term' | 'utm_term.flow' | 'utm_term.flow.type' | 'utm_term.flow.value' | 'utm_term.campaign' | 'utm_term.campaign.type' | 'utm_term.campaign.value' | 'custom_parameters'>");
        }

        if (options.pageCursor !== undefined) {
            localVarQueryParameters['page[cursor]'] = ObjectSerializer.serialize(options.pageCursor, "string");
        }

        if (options.pageSize !== undefined) {
            localVarQueryParameters['page[size]'] = ObjectSerializer.serialize(options.pageSize, "number");
        }

        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'GET',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
        }

        await this.session.applyToRequest(config)

        const request = async (config: AxiosRequestConfig, retried = false): Promise<{ response: AxiosResponse; body: GetTrackingSettingResponseCollection;  }> => {
            try {
                const axiosResponse = await this.session.requestWithRetry(config)
                let body;
                body = ObjectSerializer.deserialize(axiosResponse.data, "GetTrackingSettingResponseCollection");
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
     * Update the tracking setting with the given account ID.<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `tracking-settings:write`
     * @summary Update Tracking Setting
     * @param id The id of the tracking setting (account ID).* @param trackingSettingPartialUpdateQuery DTO for updating tracking settings
     
     */
    public async updateTrackingSetting (id: string, trackingSettingPartialUpdateQuery: TrackingSettingPartialUpdateQuery, ): Promise<{ response: AxiosResponse; body: PatchTrackingSettingResponse;  }> {

        const localVarPath = this.basePath + '/api/tracking-settings/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/vnd.api+json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateTrackingSetting.');
        }

        // verify required parameter 'trackingSettingPartialUpdateQuery' is not null or undefined
        if (trackingSettingPartialUpdateQuery === null || trackingSettingPartialUpdateQuery === undefined) {
            throw new Error('Required parameter trackingSettingPartialUpdateQuery was null or undefined when calling updateTrackingSetting.');
        }

        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'PATCH',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
            data: ObjectSerializer.serialize(trackingSettingPartialUpdateQuery, "TrackingSettingPartialUpdateQuery")
        }

        await this.session.applyToRequest(config)

        const request = async (config: AxiosRequestConfig, retried = false): Promise<{ response: AxiosResponse; body: PatchTrackingSettingResponse;  }> => {
            try {
                const axiosResponse = await this.session.requestWithRetry(config)
                let body;
                body = ObjectSerializer.deserialize(axiosResponse.data, "PatchTrackingSettingResponse");
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
