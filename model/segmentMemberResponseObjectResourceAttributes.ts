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
import { ProfileLocation } from './profileLocation';
export class SegmentMemberResponseObjectResourceAttributes {
    /**
    * Individual\'s email address
    */
    'email'?: string | null;
    /**
    * Individual\'s phone number in E.164 format
    */
    'phoneNumber'?: string | null;
    /**
    * A unique identifier used by customers to associate Klaviyo profiles with profiles in an external system, such as a point-of-sale system. Format varies based on the external system.
    */
    'externalId'?: string | null;
    /**
    * Individual\'s first name
    */
    'firstName'?: string | null;
    /**
    * Individual\'s last name
    */
    'lastName'?: string | null;
    /**
    * Name of the company or organization within the company for whom the individual works
    */
    'organization'?: string | null;
    /**
    * The locale of the profile, in the IETF BCP 47 language tag format (language-extlang-script-region-variant-extension-privateuse)
    */
    'locale'?: string | null;
    /**
    * Individual\'s job title
    */
    'title'?: string | null;
    /**
    * URL pointing to the location of a profile image
    */
    'image'?: string | null;
    /**
    * Date and time when the profile was created, in ISO 8601 format (YYYY-MM-DDTHH:MM:SS.mmmmmm)
    */
    'created'?: Date | null;
    /**
    * Date and time when the profile was last updated, in ISO 8601 format (YYYY-MM-DDTHH:MM:SS.mmmmmm)
    */
    'updated'?: Date | null;
    /**
    * Date and time of the most recent event the triggered an update to the profile, in ISO 8601 format (YYYY-MM-DDTHH:MM:SS.mmmmmm)
    */
    'lastEventDate'?: Date | null;
    'location'?: ProfileLocation;
    /**
    * An object containing key/value pairs for any custom properties assigned to this profile
    */
    'properties'?: object | null;
    /**
    * The datetime when this profile most recently joined the segment.
    */
    'joinedGroupAt': Date;


    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "phoneNumber",
            "baseName": "phone_number",
            "type": "string"
        },
        {
            "name": "externalId",
            "baseName": "external_id",
            "type": "string"
        },
        {
            "name": "firstName",
            "baseName": "first_name",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "last_name",
            "type": "string"
        },
        {
            "name": "organization",
            "baseName": "organization",
            "type": "string"
        },
        {
            "name": "locale",
            "baseName": "locale",
            "type": "string"
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "image",
            "baseName": "image",
            "type": "string"
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
            "name": "lastEventDate",
            "baseName": "last_event_date",
            "type": "Date"
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "ProfileLocation"
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "object"
        },
        {
            "name": "joinedGroupAt",
            "baseName": "joined_group_at",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return SegmentMemberResponseObjectResourceAttributes.attributeTypeMap;
    }
}

