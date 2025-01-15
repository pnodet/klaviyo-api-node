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
import { GetImageResponse } from '../model/getImageResponse';
import { GetImageResponseCollection } from '../model/getImageResponseCollection';
import { ImageCreateQuery } from '../model/imageCreateQuery';
import { ImagePartialUpdateQuery } from '../model/imagePartialUpdateQuery';
import { PatchImageResponse } from '../model/patchImageResponse';
import { PostImageResponse } from '../model/postImageResponse';

import { ObjectSerializer } from '../model/models';

import {RequestFile, queryParamPreProcessor, RetryWithExponentialBackoff, Session} from './apis';

let defaultBasePath = 'https://a.klaviyo.com';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================


export class ImagesApi {

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
     * Get the image with the given image ID.<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `images:read`
     * @summary Get Image
     * @param id The ID of the image
     * @param fieldsImage For more information please visit https://developers.klaviyo.com/en/v2025-01-15/reference/api-overview#sparse-fieldsets
     */
    public async getImage (id: string, options: { fieldsImage?: Array<'name' | 'image_url' | 'format' | 'size' | 'hidden' | 'updated_at'>,  } = {}): Promise<{ response: AxiosResponse; body: GetImageResponse;  }> {

        const localVarPath = this.basePath + '/api/images/{id}'
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
            throw new Error('Required parameter id was null or undefined when calling getImage.');
        }

        if (options.fieldsImage !== undefined) {
            localVarQueryParameters['fields[image]'] = ObjectSerializer.serialize(options.fieldsImage, "Array<'name' | 'image_url' | 'format' | 'size' | 'hidden' | 'updated_at'>");
        }

        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'GET',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
        }

        await this.session.applyToRequest(config)

        const request = async (config: AxiosRequestConfig, retried = false): Promise<{ response: AxiosResponse; body: GetImageResponse;  }> => {
            try {
                const axiosResponse = await this.session.requestWithRetry(config)
                let body;
                body = ObjectSerializer.deserialize(axiosResponse.data, "GetImageResponse");
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
     * Get all images in an account.<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `images:read`
     * @summary Get Images
     
     * @param fieldsImage For more information please visit https://developers.klaviyo.com/en/v2025-01-15/reference/api-overview#sparse-fieldsets* @param filter For more information please visit https://developers.klaviyo.com/en/v2025-01-15/reference/api-overview#filtering&lt;br&gt;Allowed field(s)/operator(s):&lt;br&gt;&#x60;id&#x60;: &#x60;any&#x60;, &#x60;equals&#x60;&lt;br&gt;&#x60;updated_at&#x60;: &#x60;greater-or-equal&#x60;, &#x60;greater-than&#x60;, &#x60;less-or-equal&#x60;, &#x60;less-than&#x60;&lt;br&gt;&#x60;format&#x60;: &#x60;any&#x60;, &#x60;equals&#x60;&lt;br&gt;&#x60;name&#x60;: &#x60;any&#x60;, &#x60;contains&#x60;, &#x60;ends-with&#x60;, &#x60;equals&#x60;, &#x60;starts-with&#x60;&lt;br&gt;&#x60;size&#x60;: &#x60;greater-or-equal&#x60;, &#x60;greater-than&#x60;, &#x60;less-or-equal&#x60;, &#x60;less-than&#x60;&lt;br&gt;&#x60;hidden&#x60;: &#x60;any&#x60;, &#x60;equals&#x60;* @param pageCursor For more information please visit https://developers.klaviyo.com/en/v2025-01-15/reference/api-overview#pagination* @param pageSize Default: 20. Min: 1. Max: 100.* @param sort For more information please visit https://developers.klaviyo.com/en/v2025-01-15/reference/api-overview#sorting
     */
    public async getImages (options: { fieldsImage?: Array<'name' | 'image_url' | 'format' | 'size' | 'hidden' | 'updated_at'>, filter?: string, pageCursor?: string, pageSize?: number, sort?: 'format' | '-format' | 'id' | '-id' | 'name' | '-name' | 'size' | '-size' | 'updated_at' | '-updated_at',  } = {}): Promise<{ response: AxiosResponse; body: GetImageResponseCollection;  }> {

        const localVarPath = this.basePath + '/api/images';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/vnd.api+json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        if (options.fieldsImage !== undefined) {
            localVarQueryParameters['fields[image]'] = ObjectSerializer.serialize(options.fieldsImage, "Array<'name' | 'image_url' | 'format' | 'size' | 'hidden' | 'updated_at'>");
        }

        if (options.filter !== undefined) {
            localVarQueryParameters['filter'] = ObjectSerializer.serialize(options.filter, "string");
        }

        if (options.pageCursor !== undefined) {
            localVarQueryParameters['page[cursor]'] = ObjectSerializer.serialize(options.pageCursor, "string");
        }

        if (options.pageSize !== undefined) {
            localVarQueryParameters['page[size]'] = ObjectSerializer.serialize(options.pageSize, "number");
        }

        if (options.sort !== undefined) {
            localVarQueryParameters['sort'] = ObjectSerializer.serialize(options.sort, "'format' | '-format' | 'id' | '-id' | 'name' | '-name' | 'size' | '-size' | 'updated_at' | '-updated_at'");
        }

        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'GET',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
        }

        await this.session.applyToRequest(config)

        const request = async (config: AxiosRequestConfig, retried = false): Promise<{ response: AxiosResponse; body: GetImageResponseCollection;  }> => {
            try {
                const axiosResponse = await this.session.requestWithRetry(config)
                let body;
                body = ObjectSerializer.deserialize(axiosResponse.data, "GetImageResponseCollection");
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
     * Update the image with the given image ID.<br><br>*Rate limits*:<br>Burst: `10/s`<br>Steady: `150/m`  **Scopes:** `images:write`
     * @summary Update Image
     * @param id The ID of the image* @param imagePartialUpdateQuery 
     
     */
    public async updateImage (id: string, imagePartialUpdateQuery: ImagePartialUpdateQuery, ): Promise<{ response: AxiosResponse; body: PatchImageResponse;  }> {

        const localVarPath = this.basePath + '/api/images/{id}'
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
            throw new Error('Required parameter id was null or undefined when calling updateImage.');
        }

        // verify required parameter 'imagePartialUpdateQuery' is not null or undefined
        if (imagePartialUpdateQuery === null || imagePartialUpdateQuery === undefined) {
            throw new Error('Required parameter imagePartialUpdateQuery was null or undefined when calling updateImage.');
        }

        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'PATCH',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
            data: ObjectSerializer.serialize(imagePartialUpdateQuery, "ImagePartialUpdateQuery")
        }

        await this.session.applyToRequest(config)

        const request = async (config: AxiosRequestConfig, retried = false): Promise<{ response: AxiosResponse; body: PatchImageResponse;  }> => {
            try {
                const axiosResponse = await this.session.requestWithRetry(config)
                let body;
                body = ObjectSerializer.deserialize(axiosResponse.data, "PatchImageResponse");
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
     * Upload an image from a file.  If you want to import an image from an existing url or a data uri, use the Upload Image From URL endpoint instead.<br><br>*Rate limits*:<br>Burst: `3/s`<br>Steady: `100/m`<br>Daily: `100/d`  **Scopes:** `images:write`
     * @summary Upload Image From File
     * @param file The image file to upload. Supported image formats: jpeg,png,gif. Maximum image size: 5MB.
     * @param name A name for the image.  Defaults to the filename if not provided.  If the name matches an existing image, a suffix will be added.* @param hidden If true, this image is not shown in the asset library.
     */
    public async uploadImageFromFile (file: RequestFile, name?: string, hidden?: boolean, ): Promise<{ response: AxiosResponse; body: PostImageResponse;  }> {

        const localVarPath = this.basePath + '/api/image-upload';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/vnd.api+json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        const form = new FormData();

        // verify required parameter 'file' is not null or undefined
        if (file === null || file === undefined) {
            throw new Error('Required parameter file was null or undefined when calling uploadImageFromFile.');
        }

        if (file !== undefined) {
            form.append('file', file);
        }
        if (name !== undefined) {
            form.append('name', name.toString());
        }
        if (hidden !== undefined) {
            form.append('hidden', hidden.toString());
        }
        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'POST',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
            data: form,
        }

        await this.session.applyToRequest(config)

        const request = async (config: AxiosRequestConfig, retried = false): Promise<{ response: AxiosResponse; body: PostImageResponse;  }> => {
            try {
                const axiosResponse = await this.session.requestWithRetry(config)
                let body;
                body = ObjectSerializer.deserialize(axiosResponse.data, "PostImageResponse");
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
     * Import an image from a url or data uri.  If you want to upload an image from a file, use the Upload Image From File endpoint instead.<br><br>*Rate limits*:<br>Burst: `3/s`<br>Steady: `100/m`<br>Daily: `100/d`  **Scopes:** `images:write`
     * @summary Upload Image From URL
     * @param imageCreateQuery 
     
     */
    public async uploadImageFromUrl (imageCreateQuery: ImageCreateQuery, ): Promise<{ response: AxiosResponse; body: PostImageResponse;  }> {

        const localVarPath = this.basePath + '/api/images';
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/vnd.api+json'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }

        // verify required parameter 'imageCreateQuery' is not null or undefined
        if (imageCreateQuery === null || imageCreateQuery === undefined) {
            throw new Error('Required parameter imageCreateQuery was null or undefined when calling uploadImageFromUrl.');
        }

        queryParamPreProcessor(localVarQueryParameters)

        let config: AxiosRequestConfig = {
            method: 'POST',
            url: localVarPath,
            headers: localVarHeaderParams,
            params: localVarQueryParameters,
            data: ObjectSerializer.serialize(imageCreateQuery, "ImageCreateQuery")
        }

        await this.session.applyToRequest(config)

        const request = async (config: AxiosRequestConfig, retried = false): Promise<{ response: AxiosResponse; body: PostImageResponse;  }> => {
            try {
                const axiosResponse = await this.session.requestWithRetry(config)
                let body;
                body = ObjectSerializer.deserialize(axiosResponse.data, "PostImageResponse");
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

export interface ImagesApi {
    /**
     * Alias of {@link ImagesApi.uploadImageFromFile}
     *
     * @deprecated Use {@link ImagesApi.uploadImageFromFile} instead
     */
    createImageUpload: typeof ImagesApi.prototype.uploadImageFromFile;
}
ImagesApi.prototype.createImageUpload = ImagesApi.prototype.uploadImageFromFile

export interface ImagesApi {
    /**
     * Alias of {@link ImagesApi.uploadImageFromUrl}
     *
     * @deprecated Use {@link ImagesApi.uploadImageFromUrl} instead
     */
    createImage: typeof ImagesApi.prototype.uploadImageFromUrl;
}
ImagesApi.prototype.createImage = ImagesApi.prototype.uploadImageFromUrl
