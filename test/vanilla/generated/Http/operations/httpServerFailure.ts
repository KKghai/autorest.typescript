/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/httpServerFailureMappers";
import { AutoRestHttpInfrastructureTestServiceContext } from "../autoRestHttpInfrastructureTestServiceContext";

/** Class representing a HttpServerFailure. */
export class HttpServerFailure {
  private readonly client: AutoRestHttpInfrastructureTestServiceContext;

  /**
   * Create a HttpServerFailure.
   * @param {AutoRestHttpInfrastructureTestServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestHttpInfrastructureTestServiceContext) {
    this.client = client;
  }

  /**
   * Return 501 status code - should be represented in the client as an error
   * @param [options] The optional parameters
   * @returns Promise<Models.HttpServerFailureHead501Response>
   */
  head501(options?: msRest.RequestOptionsBase): Promise<Models.HttpServerFailureHead501Response>;
  /**
   * @param callback The callback
   */
  head501(callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  head501(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  head501(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ErrorModel>, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.HttpServerFailureHead501Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      head501OperationSpec,
      callback) as Promise<Models.HttpServerFailureHead501Response>;
  }

  /**
   * Return 501 status code - should be represented in the client as an error
   * @param [options] The optional parameters
   * @returns Promise<Models.HttpServerFailureGet501Response>
   */
  get501(options?: msRest.RequestOptionsBase): Promise<Models.HttpServerFailureGet501Response>;
  /**
   * @param callback The callback
   */
  get501(callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  get501(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  get501(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ErrorModel>, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.HttpServerFailureGet501Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      get501OperationSpec,
      callback) as Promise<Models.HttpServerFailureGet501Response>;
  }

  /**
   * Return 505 status code - should be represented in the client as an error
   * @param [options] The optional parameters
   * @returns Promise<Models.HttpServerFailurePost505Response>
   */
  post505(options?: Models.HttpServerFailurePost505OptionalParams): Promise<Models.HttpServerFailurePost505Response>;
  /**
   * @param callback The callback
   */
  post505(callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  post505(options: Models.HttpServerFailurePost505OptionalParams, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  post505(options?: Models.HttpServerFailurePost505OptionalParams | msRest.ServiceCallback<Models.ErrorModel>, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.HttpServerFailurePost505Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      post505OperationSpec,
      callback) as Promise<Models.HttpServerFailurePost505Response>;
  }

  /**
   * Return 505 status code - should be represented in the client as an error
   * @param [options] The optional parameters
   * @returns Promise<Models.HttpServerFailureDelete505Response>
   */
  delete505(options?: Models.HttpServerFailureDelete505OptionalParams): Promise<Models.HttpServerFailureDelete505Response>;
  /**
   * @param callback The callback
   */
  delete505(callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  delete505(options: Models.HttpServerFailureDelete505OptionalParams, callback: msRest.ServiceCallback<Models.ErrorModel>): void;
  delete505(options?: Models.HttpServerFailureDelete505OptionalParams | msRest.ServiceCallback<Models.ErrorModel>, callback?: msRest.ServiceCallback<Models.ErrorModel>): Promise<Models.HttpServerFailureDelete505Response> {
    return this.client.sendOperationRequest(
      {
        options
      },
      delete505OperationSpec,
      callback) as Promise<Models.HttpServerFailureDelete505Response>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const head501OperationSpec: msRest.OperationSpec = {
  httpMethod: "HEAD",
  path: "http/failure/server/501",
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const get501OperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "http/failure/server/501",
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const post505OperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "http/failure/server/505",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
    }
  },
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const delete505OperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "http/failure/server/505",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
    }
  },
  responses: {
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
