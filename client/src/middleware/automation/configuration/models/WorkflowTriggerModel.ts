/* tslint:disable */
/* eslint-disable */
/**
 * The Automation Configuration API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { WorkflowConnectionModel } from './WorkflowConnectionModel';
import {
    WorkflowConnectionModelFromJSON,
    WorkflowConnectionModelFromJSONTyped,
    WorkflowConnectionModelToJSON,
} from './WorkflowConnectionModel';

/**
 * Represents a definition of a workflow trigger.
 * @export
 * @interface WorkflowTriggerModel
 */
export interface WorkflowTriggerModel {
    /**
     * 
     * @type {Array<WorkflowConnectionModel>}
     * @memberof WorkflowTriggerModel
     */
    readonly connections?: Array<WorkflowConnectionModel>;
    /**
     * The description of the task.
     * @type {string}
     * @memberof WorkflowTriggerModel
     */
    description?: string;
    /**
     * The human-readable description of the task.
     * @type {string}
     * @memberof WorkflowTriggerModel
     */
    label?: string;
    /**
     * The identifier name of the task. Task names are used for assigning the output of one task so it can be later used by subsequent tasks.
     * @type {string}
     * @memberof WorkflowTriggerModel
     */
    name: string;
    /**
     * Key-value map of task parameters.
     * @type {{ [key: string]: any; }}
     * @memberof WorkflowTriggerModel
     */
    parameters?: { [key: string]: any; };
    /**
     * The timeout expression which describes when a trigger should be deemed as timed-out.
     * @type {string}
     * @memberof WorkflowTriggerModel
     */
    timeout?: string;
    /**
     * The type of the trigger.
     * @type {string}
     * @memberof WorkflowTriggerModel
     */
    type: string;
}

/**
 * Check if a given object implements the WorkflowTriggerModel interface.
 */
export function instanceOfWorkflowTriggerModel(value: object): boolean {
    if (!('name' in value)) return false;
    if (!('type' in value)) return false;
    return true;
}

export function WorkflowTriggerModelFromJSON(json: any): WorkflowTriggerModel {
    return WorkflowTriggerModelFromJSONTyped(json, false);
}

export function WorkflowTriggerModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkflowTriggerModel {
    if (json == null) {
        return json;
    }
    return {
        
        'connections': json['connections'] == null ? undefined : ((json['connections'] as Array<any>).map(WorkflowConnectionModelFromJSON)),
        'description': json['description'] == null ? undefined : json['description'],
        'label': json['label'] == null ? undefined : json['label'],
        'name': json['name'],
        'parameters': json['parameters'] == null ? undefined : json['parameters'],
        'timeout': json['timeout'] == null ? undefined : json['timeout'],
        'type': json['type'],
    };
}

export function WorkflowTriggerModelToJSON(value?: Omit<WorkflowTriggerModel, 'connections'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'description': value['description'],
        'label': value['label'],
        'name': value['name'],
        'parameters': value['parameters'],
        'timeout': value['timeout'],
        'type': value['type'],
    };
}

