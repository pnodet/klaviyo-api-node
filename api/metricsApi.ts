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


import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import http from 'http';
import { backOff, BackoffOptions } from 'exponential-backoff';

/* tslint:disable:no-unused-locals */
import { GetAccounts4XXResponse } from '../model/getAccounts4XXResponse';
import { GetMetricResponse } from '../model/getMetricResponse';
import { GetMetricResponseCollection } from '../model/getMetricResponseCollection';
import { MetricAggregateQuery } from '../model/metricAggregateQuery';
import { PostMetricAggregateResponse } from '../model/postMetricAggregateResponse';

import { ObjectSerializer, Authentication } from '../model/models';
import { ApiKeyAuth } from '../model/models';

import {ApiClient, KlaviyoApiKey, queryParamPreProcessor, RetryOptions} from './apis';

let defaultBasePath = 'https://a.klaviyo.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================


export class MetricsApi {

    protected backoffOptions: BackoffOptions = new RetryOptions().options

    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {
        revision: "2023-08-15",
        "User-Agent": "klaviyo-api-node/5.1.0-beta.1"
    };
    protected _useQuerystring : boolean = false;

    protected _keyPrefix = "Klaviyo-API-Key"

    protected authentications = {
        'Klaviyo-API-Key': new ApiKeyAuth('header', 'Authorization'),
    }

    constructor(apiKeyInfo: string | ApiClient, retryOptions?: RetryOptions){
        if(apiKeyInfo){
            if (typeof apiKeyInfo == 'string') {
                this.setApiKey(KlaviyoApiKey.KeyName, apiKeyInfo)
            } else {
                this.setApiKey(KlaviyoApiKey.KeyName, apiKeyInfo.apiKey)
                this.backoffOptions = apiKeyInfo.retryOptions.options
            }
        }
        if (retryOptions){
            this.backoffOptions = retryOptions.options
        }
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

    public setApiKey(key: KlaviyoApiKey, value: string) {
        this.authentications[key].apiKey = `${this._keyPrefix} ${value}`;
    }

    /**
     * Get a metric with the given metric ID.<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `metrics:read`
     * @summary Get Metric
     * @param id Metric ID
     * @param options Contains any of the following optional parameters: fieldsMetric, 
     */
    public async getMetric (id: string, options: { fieldsMetric?: Array<'name' | 'created' | 'updated' | 'integration'>,  } = {}): Promise<{ response: AxiosResponse; body: GetMetricResponse;  }> {

        const localVarPath = this.basePath + '/api/metrics/{id}/'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getMetric.');
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

        if (this.authentications["Klaviyo-API-Key"].apiKey) {
            this.authentications["Klaviyo-API-Key"].applyToRequest(config);
        } else {
            if (ApiClient.instance.apiKey && config.headers) {
                config.headers['Authorization'] = `${this._keyPrefix} ${ApiClient.instance.apiKey}`
                this.backoffOptions = ApiClient.instance.retryOptions.options
            } else {
                throw Error ("No API Key set")
            }
        }

        return backOff<{ response: AxiosResponse; body: GetMetricResponse;  }>( () => {
            return new Promise<{ response: AxiosResponse; body: GetMetricResponse;  }>((resolve, reject) => {
                axios(config)
                    .then(axiosResponse => {
                        let body;
                        body = ObjectSerializer.deserialize(axiosResponse.data, "GetMetricResponse");
                        resolve({ response: axiosResponse, body: body });
                    })
                    .catch(error => {
                        reject(error);
                    })
            });
        }, this.backoffOptions);
    }
    /**
     * Get all metrics in an account.  Requests can be filtered by the following fields: integration `name`, integration `category`  Returns a maximum of 200 results per page.<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `metrics:read`
     * @summary Get Metrics
     
     * @param options Contains any of the following optional parameters: fieldsMetric, filter, pageCursor, 
     */
    public async getMetrics (options: { fieldsMetric?: Array<'name' | 'created' | 'updated' | 'integration'>, filter?: string, pageCursor?: string,  } = {}): Promise<{ response: AxiosResponse; body: GetMetricResponseCollection;  }> {

        const localVarPath = this.basePath + '/api/metrics/';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        if (options.fieldsMetric !== undefined) {
            localVarQueryParameters['fields[metric]'] = ObjectSerializer.serialize(options.fieldsMetric, "Array<'name' | 'created' | 'updated' | 'integration'>");
        }

        if (options.filter !== undefined) {
            localVarQueryParameters['filter'] = ObjectSerializer.serialize(options.filter, "string");
        }

        if (options.pageCursor !== undefined) {
            localVarQueryParameters['page[cursor]'] = ObjectSerializer.serialize(options.pageCursor, "string");
        }


        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'GET',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
        }

        if (this.authentications["Klaviyo-API-Key"].apiKey) {
            this.authentications["Klaviyo-API-Key"].applyToRequest(config);
        } else {
            if (ApiClient.instance.apiKey && config.headers) {
                config.headers['Authorization'] = `${this._keyPrefix} ${ApiClient.instance.apiKey}`
                this.backoffOptions = ApiClient.instance.retryOptions.options
            } else {
                throw Error ("No API Key set")
            }
        }

        return backOff<{ response: AxiosResponse; body: GetMetricResponseCollection;  }>( () => {
            return new Promise<{ response: AxiosResponse; body: GetMetricResponseCollection;  }>((resolve, reject) => {
                axios(config)
                    .then(axiosResponse => {
                        let body;
                        body = ObjectSerializer.deserialize(axiosResponse.data, "GetMetricResponseCollection");
                        resolve({ response: axiosResponse, body: body });
                    })
                    .catch(error => {
                        reject(error);
                    })
            });
        }, this.backoffOptions);
    }
    /**
     * Query and aggregate event data associated with a metric, including native Klaviyo metrics, integration-specific metrics, and custom events. Queries must be passed in the JSON body of your `POST` request.  Results can be filtered and grouped by time, event, or profile dimensions.  To learn more about how to use this endpoint, check out our new [Using the Query Metric Aggregates Endpoint guide](https://developers.klaviyo.com/en/docs/using-the-query-metric-aggregates-endpoint).  **Request body parameters** (nested under `attributes`):  * `return_fields`: request specific fields using [sparse fieldsets](https://developers.klaviyo.com/en/reference/api_overview#sparse-fieldsets) * `sort`: sort results by a specified field, such as `\"-timestamp\"` * `page_cursor`: results can be paginated with [cursor-based pagination](https://developers.klaviyo.com/en/reference/api_overview#pagination) * `page_size`: limit the number of returned results per page * `by`: optional attributes used to group by the aggregation function     * When using `by` attributes, an empty `dimensions` response is expected when the counts for the events do not have the associated dimension requested by the set `by` attribute. For example, a query including `\"by\": [\"$flow\"]` will return an empty dimensions response for counts of metrics not associated with a `$flow` * `measurement`: the measurement key supports the following values:     * `\"sum_value\"`: perform a summation of the `_Event Value_`, optionally partitioned over any dimension provided in the `by` field     * `\"count\"`: counts the number of events associated to a metric, optionally partitioned over any dimension provided in the `by` field     * `\"unique\"` counts the number of unique customers associated to a metric, optionally partitioned over any dimension provided in the `by` field * `interval`: aggregation interval, such as `\"hour\"`,`\"day\"`,`\"week\"`, and `\"month\"` * `metric_id`: the metric ID used in the aggregation * `filter`: list of filters for specific fields, must include time range using ISO 8601 format (`\"YYYY-MM-DDTHH:MM:SS.mmmmmm\"`)     * The time range can be filtered by providing a `greater-or-equal` filter on the datetime field, such as `\"greater-or-equal(datetime,2021-07-01T00:00:00)\"` and a `less-than` filter on the same datetime field, such as `\"less-than(datetime,2022-07-01T00:00:00)\"`     * The time range may span a maximum of one year. Time range dates may be set to a maximum of 5 years prior to the current date     * Filter the list of supported aggregate dimensions using the common filter syntax, such as `\"equals(URL,\\\"https://www.klaviyo.com/\\\")\"` * `timezone`: the timezone used when processing the query. Case sensitive. This field is validated against a list of common timezones from the [IANA Time Zone Database](https://www.iana.org/time-zones)     * While the payload accepts a timezone, the response datetimes returned will be in UTC.  For a comprehensive list of native Klaviyo metrics and their associated attributes for grouping and filtering, please refer to the [metrics attributes guide](https://developers.klaviyo.com/en/docs/supported_metrics_and_attributes).<br><br>*Rate limits*:<br>Burst: `3/s`<br>Steady: `60/m`  **Scopes:** `metrics:read`
     * @summary Query Metric Aggregates
     * @param metricAggregateQuery Retrieve Metric Aggregations
     
     */
    public async queryMetricAggregates (metricAggregateQuery: MetricAggregateQuery, ): Promise<{ response: AxiosResponse; body: PostMetricAggregateResponse;  }> {

        const localVarPath = this.basePath + '/api/metric-aggregates/';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'metricAggregateQuery' is not null or undefined
        if (metricAggregateQuery === null || metricAggregateQuery === undefined) {
            throw new Error('Required parameter metricAggregateQuery was null or undefined when calling queryMetricAggregates.');
        }


        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'POST',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
            data: ObjectSerializer.serialize(metricAggregateQuery, "MetricAggregateQuery")
        }

        if (this.authentications["Klaviyo-API-Key"].apiKey) {
            this.authentications["Klaviyo-API-Key"].applyToRequest(config);
        } else {
            if (ApiClient.instance.apiKey && config.headers) {
                config.headers['Authorization'] = `${this._keyPrefix} ${ApiClient.instance.apiKey}`
                this.backoffOptions = ApiClient.instance.retryOptions.options
            } else {
                throw Error ("No API Key set")
            }
        }

        return backOff<{ response: AxiosResponse; body: PostMetricAggregateResponse;  }>( () => {
            return new Promise<{ response: AxiosResponse; body: PostMetricAggregateResponse;  }>((resolve, reject) => {
                axios(config)
                    .then(axiosResponse => {
                        let body;
                        body = ObjectSerializer.deserialize(axiosResponse.data, "PostMetricAggregateResponse");
                        resolve({ response: axiosResponse, body: body });
                    })
                    .catch(error => {
                        reject(error);
                    })
            });
        }, this.backoffOptions);
    }
}
