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
import { EventCreateQueryV2 } from '../model/eventCreateQueryV2';
import { EventsBulkCreateJob } from '../model/eventsBulkCreateJob';
import { GetAccounts4XXResponse } from '../model/getAccounts4XXResponse';
import { GetEventMetricRelationshipResponse } from '../model/getEventMetricRelationshipResponse';
import { GetEventProfileRelationshipResponse } from '../model/getEventProfileRelationshipResponse';
import { GetEventResponseCollectionCompoundDocument } from '../model/getEventResponseCollectionCompoundDocument';
import { GetEventResponseCompoundDocument } from '../model/getEventResponseCompoundDocument';
import { GetMetricResponse } from '../model/getMetricResponse';
import { GetProfileResponse } from '../model/getProfileResponse';

import { ObjectSerializer } from '../model/models';

import {RequestFile, queryParamPreProcessor, RetryWithExponentialBackoff, Session} from './apis';

let defaultBasePath = 'https://a.klaviyo.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================


export class EventsApi {

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
     * Create a batch of events for one or more profiles.  Note that this endpoint allows you to create new profiles or update existing profile properties.  At a minimum, profile and metric objects should include at least one profile identifier (e.g., `id`, `email`, or `phone_number`) and the metric `name`, respectively.  Accepts up to 1,000 events per request. The maximum allowed payload size is 5MB.<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `events:write`
     * @summary Bulk Create Events
     * @param eventsBulkCreateJob 
     
     */
    public async bulkCreateEvents (eventsBulkCreateJob: EventsBulkCreateJob, ): Promise<{ response: AxiosResponse; body?: any;  }> {

        const localVarPath = this.basePath + '/api/event-bulk-create-jobs';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/vnd.api+json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'eventsBulkCreateJob' is not null or undefined
        if (eventsBulkCreateJob === null || eventsBulkCreateJob === undefined) {
            throw new Error('Required parameter eventsBulkCreateJob was null or undefined when calling bulkCreateEvents.');
        }

        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'POST',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
            data: ObjectSerializer.serialize(eventsBulkCreateJob, "EventsBulkCreateJob")
        }

        await this.session.applyToRequest(config)

        const request = async (config: AxiosRequestConfig, retried = false): Promise<{ response: AxiosResponse; body?: any;  }> => {
            try {
                const axiosResponse = await this.session.requestWithRetry(config)
                let body;
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
     * Create a new event to track a profile\'s activity.  Note that this endpoint allows you to create a new profile or update an existing profile\'s properties.  At a minimum, profile and metric objects should include at least one profile identifier (e.g., `id`, `email`, or `phone_number`) and the metric `name`, respectively.  Successful response indicates that the event was validated and submitted for processing, but does not guarantee that processing is complete.<br><br>*Rate limits*:<br>Burst: `350/s`<br>Steady: `3500/m`  **Scopes:** `events:write`
     * @summary Create Event
     * @param eventCreateQueryV2 
     
     */
    public async createEvent (eventCreateQueryV2: EventCreateQueryV2, ): Promise<{ response: AxiosResponse; body?: any;  }> {

        const localVarPath = this.basePath + '/api/events';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/vnd.api+json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'eventCreateQueryV2' is not null or undefined
        if (eventCreateQueryV2 === null || eventCreateQueryV2 === undefined) {
            throw new Error('Required parameter eventCreateQueryV2 was null or undefined when calling createEvent.');
        }

        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'POST',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
            data: ObjectSerializer.serialize(eventCreateQueryV2, "EventCreateQueryV2")
        }

        await this.session.applyToRequest(config)

        const request = async (config: AxiosRequestConfig, retried = false): Promise<{ response: AxiosResponse; body?: any;  }> => {
            try {
                const axiosResponse = await this.session.requestWithRetry(config)
                let body;
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
     * Get an event with the given event ID.<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `events:read`
     * @summary Get Event
     * @param id ID of the event
     * @param fieldsEvent For more information please visit https://developers.klaviyo.com/en/v2024-10-15/reference/api-overview#sparse-fieldsets* @param fieldsMetric For more information please visit https://developers.klaviyo.com/en/v2024-10-15/reference/api-overview#sparse-fieldsets* @param fieldsProfile For more information please visit https://developers.klaviyo.com/en/v2024-10-15/reference/api-overview#sparse-fieldsets* @param include For more information please visit https://developers.klaviyo.com/en/v2024-10-15/reference/api-overview#relationships
     */
    public async getEvent (id: string, options: { fieldsEvent?: Array<'timestamp' | 'event_properties' | 'datetime' | 'uuid'>, fieldsMetric?: Array<'name' | 'created' | 'updated' | 'integration'>, fieldsProfile?: Array<'email' | 'phone_number' | 'external_id' | 'first_name' | 'last_name' | 'organization' | 'locale' | 'title' | 'image' | 'created' | 'updated' | 'last_event_date' | 'location' | 'location.address1' | 'location.address2' | 'location.city' | 'location.country' | 'location.latitude' | 'location.longitude' | 'location.region' | 'location.zip' | 'location.timezone' | 'location.ip' | 'properties'>, include?: Array<'attributions' | 'metric' | 'profile'>,  } = {}): Promise<{ response: AxiosResponse; body: GetEventResponseCompoundDocument;  }> {

        const localVarPath = this.basePath + '/api/events/{id}'
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
            throw new Error('Required parameter id was null or undefined when calling getEvent.');
        }

        if (options.fieldsEvent !== undefined) {
            localVarQueryParameters['fields[event]'] = ObjectSerializer.serialize(options.fieldsEvent, "Array<'timestamp' | 'event_properties' | 'datetime' | 'uuid'>");
        }

        if (options.fieldsMetric !== undefined) {
            localVarQueryParameters['fields[metric]'] = ObjectSerializer.serialize(options.fieldsMetric, "Array<'name' | 'created' | 'updated' | 'integration'>");
        }

        if (options.fieldsProfile !== undefined) {
            localVarQueryParameters['fields[profile]'] = ObjectSerializer.serialize(options.fieldsProfile, "Array<'email' | 'phone_number' | 'external_id' | 'first_name' | 'last_name' | 'organization' | 'locale' | 'title' | 'image' | 'created' | 'updated' | 'last_event_date' | 'location' | 'location.address1' | 'location.address2' | 'location.city' | 'location.country' | 'location.latitude' | 'location.longitude' | 'location.region' | 'location.zip' | 'location.timezone' | 'location.ip' | 'properties'>");
        }

        if (options.include !== undefined) {
            localVarQueryParameters['include'] = ObjectSerializer.serialize(options.include, "Array<'attributions' | 'metric' | 'profile'>");
        }

        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'GET',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
        }

        await this.session.applyToRequest(config)

        const request = async (config: AxiosRequestConfig, retried = false): Promise<{ response: AxiosResponse; body: GetEventResponseCompoundDocument;  }> => {
            try {
                const axiosResponse = await this.session.requestWithRetry(config)
                let body;
                body = ObjectSerializer.deserialize(axiosResponse.data, "GetEventResponseCompoundDocument");
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
     * Get all events in an account  Requests can be sorted by the following fields: `datetime`, `timestamp`  Returns a maximum of 200 events per page.<br><br>*Rate limits*:<br>Burst: `350/s`<br>Steady: `3500/m`  **Scopes:** `events:read`
     * @summary Get Events
     
     * @param fieldsEvent For more information please visit https://developers.klaviyo.com/en/v2024-10-15/reference/api-overview#sparse-fieldsets* @param fieldsMetric For more information please visit https://developers.klaviyo.com/en/v2024-10-15/reference/api-overview#sparse-fieldsets* @param fieldsProfile For more information please visit https://developers.klaviyo.com/en/v2024-10-15/reference/api-overview#sparse-fieldsets* @param filter For more information please visit https://developers.klaviyo.com/en/v2024-10-15/reference/api-overview#filtering&lt;br&gt;Allowed field(s)/operator(s):&lt;br&gt;&#x60;metric_id&#x60;: &#x60;equals&#x60;&lt;br&gt;&#x60;profile_id&#x60;: &#x60;equals&#x60;&lt;br&gt;&#x60;profile&#x60;: &#x60;has&#x60;&lt;br&gt;&#x60;datetime&#x60;: &#x60;greater-or-equal&#x60;, &#x60;greater-than&#x60;, &#x60;less-or-equal&#x60;, &#x60;less-than&#x60;&lt;br&gt;&#x60;timestamp&#x60;: &#x60;greater-or-equal&#x60;, &#x60;greater-than&#x60;, &#x60;less-or-equal&#x60;, &#x60;less-than&#x60;* @param include For more information please visit https://developers.klaviyo.com/en/v2024-10-15/reference/api-overview#relationships* @param pageCursor For more information please visit https://developers.klaviyo.com/en/v2024-10-15/reference/api-overview#pagination* @param sort For more information please visit https://developers.klaviyo.com/en/v2024-10-15/reference/api-overview#sorting
     */
    public async getEvents (options: { fieldsEvent?: Array<'timestamp' | 'event_properties' | 'datetime' | 'uuid'>, fieldsMetric?: Array<'name' | 'created' | 'updated' | 'integration'>, fieldsProfile?: Array<'email' | 'phone_number' | 'external_id' | 'first_name' | 'last_name' | 'organization' | 'locale' | 'title' | 'image' | 'created' | 'updated' | 'last_event_date' | 'location' | 'location.address1' | 'location.address2' | 'location.city' | 'location.country' | 'location.latitude' | 'location.longitude' | 'location.region' | 'location.zip' | 'location.timezone' | 'location.ip' | 'properties'>, filter?: string, include?: Array<'attributions' | 'metric' | 'profile'>, pageCursor?: string, sort?: 'datetime' | '-datetime' | 'timestamp' | '-timestamp',  } = {}): Promise<{ response: AxiosResponse; body: GetEventResponseCollectionCompoundDocument;  }> {

        const localVarPath = this.basePath + '/api/events';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/vnd.api+json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        if (options.fieldsEvent !== undefined) {
            localVarQueryParameters['fields[event]'] = ObjectSerializer.serialize(options.fieldsEvent, "Array<'timestamp' | 'event_properties' | 'datetime' | 'uuid'>");
        }

        if (options.fieldsMetric !== undefined) {
            localVarQueryParameters['fields[metric]'] = ObjectSerializer.serialize(options.fieldsMetric, "Array<'name' | 'created' | 'updated' | 'integration'>");
        }

        if (options.fieldsProfile !== undefined) {
            localVarQueryParameters['fields[profile]'] = ObjectSerializer.serialize(options.fieldsProfile, "Array<'email' | 'phone_number' | 'external_id' | 'first_name' | 'last_name' | 'organization' | 'locale' | 'title' | 'image' | 'created' | 'updated' | 'last_event_date' | 'location' | 'location.address1' | 'location.address2' | 'location.city' | 'location.country' | 'location.latitude' | 'location.longitude' | 'location.region' | 'location.zip' | 'location.timezone' | 'location.ip' | 'properties'>");
        }

        if (options.filter !== undefined) {
            localVarQueryParameters['filter'] = ObjectSerializer.serialize(options.filter, "string");
        }

        if (options.include !== undefined) {
            localVarQueryParameters['include'] = ObjectSerializer.serialize(options.include, "Array<'attributions' | 'metric' | 'profile'>");
        }

        if (options.pageCursor !== undefined) {
            localVarQueryParameters['page[cursor]'] = ObjectSerializer.serialize(options.pageCursor, "string");
        }

        if (options.sort !== undefined) {
            localVarQueryParameters['sort'] = ObjectSerializer.serialize(options.sort, "'datetime' | '-datetime' | 'timestamp' | '-timestamp'");
        }

        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'GET',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
        }

        await this.session.applyToRequest(config)

        const request = async (config: AxiosRequestConfig, retried = false): Promise<{ response: AxiosResponse; body: GetEventResponseCollectionCompoundDocument;  }> => {
            try {
                const axiosResponse = await this.session.requestWithRetry(config)
                let body;
                body = ObjectSerializer.deserialize(axiosResponse.data, "GetEventResponseCollectionCompoundDocument");
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
     * Get the metric for an event with the given event ID.<br><br>*Rate limits*:<br>Burst: `350/s`<br>Steady: `3500/m`  **Scopes:** `events:read` `metrics:read`
     * @summary Get Metric for Event
     * @param id ID of the event
     * @param fieldsMetric For more information please visit https://developers.klaviyo.com/en/v2024-10-15/reference/api-overview#sparse-fieldsets
     */
    public async getMetricForEvent (id: string, options: { fieldsMetric?: Array<'name' | 'created' | 'updated' | 'integration'>,  } = {}): Promise<{ response: AxiosResponse; body: GetMetricResponse;  }> {

        const localVarPath = this.basePath + '/api/events/{id}/metric'
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
            throw new Error('Required parameter id was null or undefined when calling getMetricForEvent.');
        }

        if (options.fieldsMetric !== undefined) {
            localVarQueryParameters['fields[metric]'] = ObjectSerializer.serialize(options.fieldsMetric, "Array<'name' | 'created' | 'updated' | 'integration'>");
        }

        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'GET',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
        }

        await this.session.applyToRequest(config)

        const request = async (config: AxiosRequestConfig, retried = false): Promise<{ response: AxiosResponse; body: GetMetricResponse;  }> => {
            try {
                const axiosResponse = await this.session.requestWithRetry(config)
                let body;
                body = ObjectSerializer.deserialize(axiosResponse.data, "GetMetricResponse");
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
     * Get a list of related Metrics for an Event<br><br>*Rate limits*:<br>Burst: `350/s`<br>Steady: `3500/m`  **Scopes:** `events:read` `metrics:read`
     * @summary Get Metric ID for Event
     * @param id ID of the event
     
     */
    public async getMetricIdForEvent (id: string, ): Promise<{ response: AxiosResponse; body: GetEventMetricRelationshipResponse;  }> {

        const localVarPath = this.basePath + '/api/events/{id}/relationships/metric'
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
            throw new Error('Required parameter id was null or undefined when calling getMetricIdForEvent.');
        }

        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'GET',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
        }

        await this.session.applyToRequest(config)

        const request = async (config: AxiosRequestConfig, retried = false): Promise<{ response: AxiosResponse; body: GetEventMetricRelationshipResponse;  }> => {
            try {
                const axiosResponse = await this.session.requestWithRetry(config)
                let body;
                body = ObjectSerializer.deserialize(axiosResponse.data, "GetEventMetricRelationshipResponse");
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
     * Get the profile associated with an event with the given event ID.<br><br>*Rate limits*:<br>Burst: `350/s`<br>Steady: `3500/m`  **Scopes:** `events:read` `profiles:read`
     * @summary Get Profile for Event
     * @param id ID of the event
     * @param additionalFieldsProfile Request additional fields not included by default in the response. Supported values: \&#39;subscriptions\&#39;, \&#39;predictive_analytics\&#39;* @param fieldsProfile For more information please visit https://developers.klaviyo.com/en/v2024-10-15/reference/api-overview#sparse-fieldsets
     */
    public async getProfileForEvent (id: string, options: { additionalFieldsProfile?: Array<'subscriptions' | 'predictive_analytics'>, fieldsProfile?: Array<'email' | 'phone_number' | 'external_id' | 'first_name' | 'last_name' | 'organization' | 'locale' | 'title' | 'image' | 'created' | 'updated' | 'last_event_date' | 'location' | 'location.address1' | 'location.address2' | 'location.city' | 'location.country' | 'location.latitude' | 'location.longitude' | 'location.region' | 'location.zip' | 'location.timezone' | 'location.ip' | 'properties' | 'subscriptions' | 'subscriptions.email' | 'subscriptions.email.marketing' | 'subscriptions.email.marketing.can_receive_email_marketing' | 'subscriptions.email.marketing.consent' | 'subscriptions.email.marketing.consent_timestamp' | 'subscriptions.email.marketing.last_updated' | 'subscriptions.email.marketing.method' | 'subscriptions.email.marketing.method_detail' | 'subscriptions.email.marketing.custom_method_detail' | 'subscriptions.email.marketing.double_optin' | 'subscriptions.email.marketing.suppression' | 'subscriptions.email.marketing.list_suppressions' | 'subscriptions.sms' | 'subscriptions.sms.marketing' | 'subscriptions.sms.marketing.can_receive_sms_marketing' | 'subscriptions.sms.marketing.consent' | 'subscriptions.sms.marketing.consent_timestamp' | 'subscriptions.sms.marketing.method' | 'subscriptions.sms.marketing.method_detail' | 'subscriptions.sms.marketing.last_updated' | 'subscriptions.sms.transactional' | 'subscriptions.sms.transactional.can_receive_sms_transactional' | 'subscriptions.sms.transactional.consent' | 'subscriptions.sms.transactional.consent_timestamp' | 'subscriptions.sms.transactional.method' | 'subscriptions.sms.transactional.method_detail' | 'subscriptions.sms.transactional.last_updated' | 'subscriptions.mobile_push' | 'subscriptions.mobile_push.marketing' | 'subscriptions.mobile_push.marketing.can_receive_push_marketing' | 'subscriptions.mobile_push.marketing.consent' | 'subscriptions.mobile_push.marketing.consent_timestamp' | 'predictive_analytics' | 'predictive_analytics.historic_clv' | 'predictive_analytics.predicted_clv' | 'predictive_analytics.total_clv' | 'predictive_analytics.historic_number_of_orders' | 'predictive_analytics.predicted_number_of_orders' | 'predictive_analytics.average_days_between_orders' | 'predictive_analytics.average_order_value' | 'predictive_analytics.churn_probability' | 'predictive_analytics.expected_date_of_next_order'>,  } = {}): Promise<{ response: AxiosResponse; body: GetProfileResponse;  }> {

        const localVarPath = this.basePath + '/api/events/{id}/profile'
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
            throw new Error('Required parameter id was null or undefined when calling getProfileForEvent.');
        }

        if (options.additionalFieldsProfile !== undefined) {
            localVarQueryParameters['additional-fields[profile]'] = ObjectSerializer.serialize(options.additionalFieldsProfile, "Array<'subscriptions' | 'predictive_analytics'>");
        }

        if (options.fieldsProfile !== undefined) {
            localVarQueryParameters['fields[profile]'] = ObjectSerializer.serialize(options.fieldsProfile, "Array<'email' | 'phone_number' | 'external_id' | 'first_name' | 'last_name' | 'organization' | 'locale' | 'title' | 'image' | 'created' | 'updated' | 'last_event_date' | 'location' | 'location.address1' | 'location.address2' | 'location.city' | 'location.country' | 'location.latitude' | 'location.longitude' | 'location.region' | 'location.zip' | 'location.timezone' | 'location.ip' | 'properties' | 'subscriptions' | 'subscriptions.email' | 'subscriptions.email.marketing' | 'subscriptions.email.marketing.can_receive_email_marketing' | 'subscriptions.email.marketing.consent' | 'subscriptions.email.marketing.consent_timestamp' | 'subscriptions.email.marketing.last_updated' | 'subscriptions.email.marketing.method' | 'subscriptions.email.marketing.method_detail' | 'subscriptions.email.marketing.custom_method_detail' | 'subscriptions.email.marketing.double_optin' | 'subscriptions.email.marketing.suppression' | 'subscriptions.email.marketing.list_suppressions' | 'subscriptions.sms' | 'subscriptions.sms.marketing' | 'subscriptions.sms.marketing.can_receive_sms_marketing' | 'subscriptions.sms.marketing.consent' | 'subscriptions.sms.marketing.consent_timestamp' | 'subscriptions.sms.marketing.method' | 'subscriptions.sms.marketing.method_detail' | 'subscriptions.sms.marketing.last_updated' | 'subscriptions.sms.transactional' | 'subscriptions.sms.transactional.can_receive_sms_transactional' | 'subscriptions.sms.transactional.consent' | 'subscriptions.sms.transactional.consent_timestamp' | 'subscriptions.sms.transactional.method' | 'subscriptions.sms.transactional.method_detail' | 'subscriptions.sms.transactional.last_updated' | 'subscriptions.mobile_push' | 'subscriptions.mobile_push.marketing' | 'subscriptions.mobile_push.marketing.can_receive_push_marketing' | 'subscriptions.mobile_push.marketing.consent' | 'subscriptions.mobile_push.marketing.consent_timestamp' | 'predictive_analytics' | 'predictive_analytics.historic_clv' | 'predictive_analytics.predicted_clv' | 'predictive_analytics.total_clv' | 'predictive_analytics.historic_number_of_orders' | 'predictive_analytics.predicted_number_of_orders' | 'predictive_analytics.average_days_between_orders' | 'predictive_analytics.average_order_value' | 'predictive_analytics.churn_probability' | 'predictive_analytics.expected_date_of_next_order'>");
        }

        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'GET',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
        }

        await this.session.applyToRequest(config)

        const request = async (config: AxiosRequestConfig, retried = false): Promise<{ response: AxiosResponse; body: GetProfileResponse;  }> => {
            try {
                const axiosResponse = await this.session.requestWithRetry(config)
                let body;
                body = ObjectSerializer.deserialize(axiosResponse.data, "GetProfileResponse");
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
     * Get profile [relationships](https://developers.klaviyo.com/en/reference/api_overview#relationships) for an event with the given event ID.<br><br>*Rate limits*:<br>Burst: `350/s`<br>Steady: `3500/m`  **Scopes:** `events:read` `profiles:read`
     * @summary Get Profile ID for Event
     * @param id ID of the event
     
     */
    public async getProfileIdForEvent (id: string, ): Promise<{ response: AxiosResponse; body: GetEventProfileRelationshipResponse;  }> {

        const localVarPath = this.basePath + '/api/events/{id}/relationships/profile'
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
            throw new Error('Required parameter id was null or undefined when calling getProfileIdForEvent.');
        }

        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'GET',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
        }

        await this.session.applyToRequest(config)

        const request = async (config: AxiosRequestConfig, retried = false): Promise<{ response: AxiosResponse; body: GetEventProfileRelationshipResponse;  }> => {
            try {
                const axiosResponse = await this.session.requestWithRetry(config)
                let body;
                body = ObjectSerializer.deserialize(axiosResponse.data, "GetEventProfileRelationshipResponse");
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

export interface EventsApi {
    /**
     * Alias of {@link EventsApi.bulkCreateEvents}
     *
     * @deprecated Use {@link EventsApi.bulkCreateEvents} instead
     */
    createEventBulkCreateJob: typeof EventsApi.prototype.bulkCreateEvents;
}
EventsApi.prototype.createEventBulkCreateJob = EventsApi.prototype.bulkCreateEvents

export interface EventsApi {
    /**
     * Alias of {@link EventsApi.getMetricForEvent}
     *
     * @deprecated Use {@link EventsApi.getMetricForEvent} instead
     */
    getEventMetric: typeof EventsApi.prototype.getMetricForEvent;
}
EventsApi.prototype.getEventMetric = EventsApi.prototype.getMetricForEvent

export interface EventsApi {
    /**
     * Alias of {@link EventsApi.getMetricIdForEvent}
     *
     * @deprecated Use {@link EventsApi.getMetricIdForEvent} instead
     */
    getEventRelationshipsMetric: typeof EventsApi.prototype.getMetricIdForEvent;
}
EventsApi.prototype.getEventRelationshipsMetric = EventsApi.prototype.getMetricIdForEvent

export interface EventsApi {
    /**
     * Alias of {@link EventsApi.getProfileForEvent}
     *
     * @deprecated Use {@link EventsApi.getProfileForEvent} instead
     */
    getEventProfile: typeof EventsApi.prototype.getProfileForEvent;
}
EventsApi.prototype.getEventProfile = EventsApi.prototype.getProfileForEvent

export interface EventsApi {
    /**
     * Alias of {@link EventsApi.getProfileIdForEvent}
     *
     * @deprecated Use {@link EventsApi.getProfileIdForEvent} instead
     */
    getEventRelationshipsProfile: typeof EventsApi.prototype.getProfileIdForEvent;
}
EventsApi.prototype.getEventRelationshipsProfile = EventsApi.prototype.getProfileIdForEvent
