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
import type { EnvironmentModel } from './EnvironmentModel';
import {
    EnvironmentModelFromJSON,
    EnvironmentModelFromJSONTyped,
    EnvironmentModelToJSON,
} from './EnvironmentModel';
import type { ProjectInstanceProjectModel } from './ProjectInstanceProjectModel';
import {
    ProjectInstanceProjectModelFromJSON,
    ProjectInstanceProjectModelFromJSONTyped,
    ProjectInstanceProjectModelToJSON,
} from './ProjectInstanceProjectModel';
import type { ProjectInstanceWorkflowModel } from './ProjectInstanceWorkflowModel';
import {
    ProjectInstanceWorkflowModelFromJSON,
    ProjectInstanceWorkflowModelFromJSONTyped,
    ProjectInstanceWorkflowModelToJSON,
} from './ProjectInstanceWorkflowModel';
import type { TagModel } from './TagModel';
import {
    TagModelFromJSON,
    TagModelFromJSONTyped,
    TagModelToJSON,
} from './TagModel';

/**
 * Contains configurations and connections required for the execution of project workflows.
 * @export
 * @interface ProjectInstanceModel
 */
export interface ProjectInstanceModel {
    /**
     * The description of a project instance.
     * @type {string}
     * @memberof ProjectInstanceModel
     */
    description?: string;
    /**
     * The created by.
     * @type {string}
     * @memberof ProjectInstanceModel
     */
    readonly createdBy?: string;
    /**
     * The created date.
     * @type {Date}
     * @memberof ProjectInstanceModel
     */
    readonly createdDate?: Date;
    /**
     * If a project instance is enabled or not.
     * @type {boolean}
     * @memberof ProjectInstanceModel
     */
    enabled?: boolean;
    /**
     * 
     * @type {EnvironmentModel}
     * @memberof ProjectInstanceModel
     */
    environment?: EnvironmentModel;
    /**
     * The id of a project instance.
     * @type {number}
     * @memberof ProjectInstanceModel
     */
    readonly id?: number;
    /**
     * The last execution date.
     * @type {Date}
     * @memberof ProjectInstanceModel
     */
    readonly lastExecutionDate?: Date;
    /**
     * The last modified by.
     * @type {string}
     * @memberof ProjectInstanceModel
     */
    readonly lastModifiedBy?: string;
    /**
     * The last modified date.
     * @type {Date}
     * @memberof ProjectInstanceModel
     */
    readonly lastModifiedDate?: Date;
    /**
     * The name of a project instance.
     * @type {string}
     * @memberof ProjectInstanceModel
     */
    name: string;
    /**
     * 
     * @type {ProjectInstanceProjectModel}
     * @memberof ProjectInstanceModel
     */
    project?: ProjectInstanceProjectModel;
    /**
     * The id of a project.
     * @type {number}
     * @memberof ProjectInstanceModel
     */
    projectId?: number;
    /**
     * 
     * @type {Array<ProjectInstanceWorkflowModel>}
     * @memberof ProjectInstanceModel
     */
    projectInstanceWorkflows?: Array<ProjectInstanceWorkflowModel>;
    /**
     * The version of a project.
     * @type {number}
     * @memberof ProjectInstanceModel
     */
    projectVersion?: number;
    /**
     * 
     * @type {Array<TagModel>}
     * @memberof ProjectInstanceModel
     */
    tags?: Array<TagModel>;
    /**
     * 
     * @type {number}
     * @memberof ProjectInstanceModel
     */
    version?: number;
}

/**
 * Check if a given object implements the ProjectInstanceModel interface.
 */
export function instanceOfProjectInstanceModel(value: object): boolean {
    if (!('name' in value)) return false;
    return true;
}

export function ProjectInstanceModelFromJSON(json: any): ProjectInstanceModel {
    return ProjectInstanceModelFromJSONTyped(json, false);
}

export function ProjectInstanceModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectInstanceModel {
    if (json == null) {
        return json;
    }
    return {
        
        'description': json['description'] == null ? undefined : json['description'],
        'createdBy': json['createdBy'] == null ? undefined : json['createdBy'],
        'createdDate': json['createdDate'] == null ? undefined : (new Date(json['createdDate'])),
        'enabled': json['enabled'] == null ? undefined : json['enabled'],
        'environment': json['environment'] == null ? undefined : EnvironmentModelFromJSON(json['environment']),
        'id': json['id'] == null ? undefined : json['id'],
        'lastExecutionDate': json['lastExecutionDate'] == null ? undefined : (new Date(json['lastExecutionDate'])),
        'lastModifiedBy': json['lastModifiedBy'] == null ? undefined : json['lastModifiedBy'],
        'lastModifiedDate': json['lastModifiedDate'] == null ? undefined : (new Date(json['lastModifiedDate'])),
        'name': json['name'],
        'project': json['project'] == null ? undefined : ProjectInstanceProjectModelFromJSON(json['project']),
        'projectId': json['projectId'] == null ? undefined : json['projectId'],
        'projectInstanceWorkflows': json['projectInstanceWorkflows'] == null ? undefined : ((json['projectInstanceWorkflows'] as Array<any>).map(ProjectInstanceWorkflowModelFromJSON)),
        'projectVersion': json['projectVersion'] == null ? undefined : json['projectVersion'],
        'tags': json['tags'] == null ? undefined : ((json['tags'] as Array<any>).map(TagModelFromJSON)),
        'version': json['__version'] == null ? undefined : json['__version'],
    };
}

export function ProjectInstanceModelToJSON(value?: Omit<ProjectInstanceModel, 'createdBy'|'createdDate'|'id'|'lastExecutionDate'|'lastModifiedBy'|'lastModifiedDate'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'description': value['description'],
        'enabled': value['enabled'],
        'environment': EnvironmentModelToJSON(value['environment']),
        'name': value['name'],
        'project': ProjectInstanceProjectModelToJSON(value['project']),
        'projectId': value['projectId'],
        'projectInstanceWorkflows': value['projectInstanceWorkflows'] == null ? undefined : ((value['projectInstanceWorkflows'] as Array<any>).map(ProjectInstanceWorkflowModelToJSON)),
        'projectVersion': value['projectVersion'],
        'tags': value['tags'] == null ? undefined : ((value['tags'] as Array<any>).map(TagModelToJSON)),
        '__version': value['version'],
    };
}

