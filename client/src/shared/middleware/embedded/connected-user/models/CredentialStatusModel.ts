/* tslint:disable */
/* eslint-disable */
/**
 * The Embedded Connected User API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 */
export const CredentialStatusModel = {
    Valid: 'VALID',
    Invalid: 'INVALID'
} as const;
export type CredentialStatusModel = typeof CredentialStatusModel[keyof typeof CredentialStatusModel];


export function instanceOfCredentialStatusModel(value: any): boolean {
    return Object.values(CredentialStatusModel).includes(value);
}

export function CredentialStatusModelFromJSON(json: any): CredentialStatusModel {
    return CredentialStatusModelFromJSONTyped(json, false);
}

export function CredentialStatusModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): CredentialStatusModel {
    return json as CredentialStatusModel;
}

export function CredentialStatusModelToJSON(value?: CredentialStatusModel | null): any {
    return value as any;
}

