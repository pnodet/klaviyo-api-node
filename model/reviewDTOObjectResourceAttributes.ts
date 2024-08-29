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
import { ReviewProductDTO } from './reviewProductDTO';
import { ReviewPublicReply } from './reviewPublicReply';
export class ReviewDTOObjectResourceAttributes {
    /**
    * The email of the author of this review
    */
    'email': string;
    /**
    * The status of this review
    */
    'status'?: ReviewDTOObjectResourceAttributes.StatusEnum | 'featured' | 'pending' | 'published' | 'rejected' | 'unpublished' | null;
    /**
    * The verification status of this review (aka whether or not we have confirmation that the customer bought the product)
    */
    'verified': boolean;
    /**
    * The type of this review — either a review, question, or rating
    */
    'reviewType': ReviewDTOObjectResourceAttributes.ReviewTypeEnum | 'question' | 'rating' | 'review';
    /**
    * The datetime when this review was created
    */
    'created': Date;
    /**
    * The datetime when this review was updated
    */
    'updated': Date;
    /**
    * The list of images submitted with this review (represented as a list of urls). If there are no images, this field will be an empty list.
    */
    'images': Array<string>;
    'product': ReviewProductDTO;
    /**
    * The rating of this review on a scale from 1-5. If the review type is \"question\", this field will be null.
    */
    'rating'?: number | null;
    /**
    * The author of this review
    */
    'author'?: string | null;
    /**
    * The content of this review
    */
    'content'?: string | null;
    /**
    * The title of this review
    */
    'title'?: string | null;
    /**
    * A quote from this review that summarizes the content
    */
    'smartQuote'?: string | null;
    'publicReply'?: ReviewPublicReply;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "ReviewDTOObjectResourceAttributes.StatusEnum"
        },
        {
            "name": "verified",
            "baseName": "verified",
            "type": "boolean"
        },
        {
            "name": "reviewType",
            "baseName": "review_type",
            "type": "ReviewDTOObjectResourceAttributes.ReviewTypeEnum"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "Date"
        },
        {
            "name": "updated",
            "baseName": "updated",
            "type": "Date"
        },
        {
            "name": "images",
            "baseName": "images",
            "type": "Array<string>"
        },
        {
            "name": "product",
            "baseName": "product",
            "type": "ReviewProductDTO"
        },
        {
            "name": "rating",
            "baseName": "rating",
            "type": "number"
        },
        {
            "name": "author",
            "baseName": "author",
            "type": "string"
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "string"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "smartQuote",
            "baseName": "smart_quote",
            "type": "string"
        },
        {
            "name": "publicReply",
            "baseName": "public_reply",
            "type": "ReviewPublicReply"
        }    ];

    static getAttributeTypeMap() {
        return ReviewDTOObjectResourceAttributes.attributeTypeMap;
    }
}

export namespace ReviewDTOObjectResourceAttributes {
    export enum StatusEnum {
        Featured = <any> 'featured',
        Pending = <any> 'pending',
        Published = <any> 'published',
        Rejected = <any> 'rejected',
        Unpublished = <any> 'unpublished'
    }
    export enum ReviewTypeEnum {
        Question = <any> 'question',
        Rating = <any> 'rating',
        Review = <any> 'review'
    }
}
