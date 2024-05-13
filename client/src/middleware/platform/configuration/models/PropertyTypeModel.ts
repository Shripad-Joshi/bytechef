/* tslint:disable */
/* eslint-disable */
/**
 * The Platform Configuration API
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
 * A type of property.
 * @export
 */
export const PropertyTypeModel = {
    Any: 'ANY',
    Array: 'ARRAY',
    Boolean: 'BOOLEAN',
    Date: 'DATE',
    DateTime: 'DATE_TIME',
    DynamicProperties: 'DYNAMIC_PROPERTIES',
    FileEntry: 'FILE_ENTRY',
    Integer: 'INTEGER',
    Null: 'NULL',
    Number: 'NUMBER',
    String: 'STRING',
    Object: 'OBJECT',
    Task: 'TASK',
    Time: 'TIME'
} as const;
export type PropertyTypeModel = typeof PropertyTypeModel[keyof typeof PropertyTypeModel];


export function instanceOfPropertyTypeModel(value: any): boolean {
    return Object.values(PropertyTypeModel).includes(value);
}

export function PropertyTypeModelFromJSON(json: any): PropertyTypeModel {
    return PropertyTypeModelFromJSONTyped(json, false);
}

export function PropertyTypeModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): PropertyTypeModel {
    return json as PropertyTypeModel;
}

export function PropertyTypeModelToJSON(value?: PropertyTypeModel | null): any {
    return value as any;
}

