/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Mappers from "../models/mappers";
import { AutoRestParameterizedHostTestClient } from "../autoRestParameterizedHostTestClient";

const WebResource = msRest.WebResource;

/** Class representing a Paths. */
export class Paths {
  private readonly client: AutoRestParameterizedHostTestClient;
  /**
   * Create a Paths.
   * @param {AutoRestParameterizedHostTestClient} client Reference to the service client.
   */
  constructor(client: AutoRestParameterizedHostTestClient) {
    this.client = client;
  }

  /**
   * Get a 200 to test a valid base uri
   *
   * @param {string} accountName Account Name
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async getEmptyWithHttpOperationResponse(accountName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse> {
    let client = this.client;
    // Validate
    try {
      if (accountName === null || accountName === undefined || typeof accountName.valueOf() !== 'string') {
        throw new Error('accountName cannot be null or undefined and it must be of type string.');
      }
      if (this.client.host === null || this.client.host === undefined || typeof this.client.host.valueOf() !== 'string') {
        throw new Error('this.client.host cannot be null or undefined and it must be of type string.');
      }
      if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
        throw new Error('this.client.acceptLanguage must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Construct URL
    const requestUrl: msRest.URLBuilder = msRest.URLBuilder.parse(this.client.baseUri);
    requestUrl.setPath("/customuri");
    requestUrl.replaceAll("{accountName}", accountName);
    requestUrl.replaceAll("{host}", this.client.host);

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    httpRequest.url = requestUrl.toString();
    httpRequest.headers = {};
    // Set Headers
    httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
    if (this.client.generateClientRequestId) {
        httpRequest.headers['x-ms-client-request-id'] = msRest.generateUuid();
    }
    // Send Request
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.sendOperationRequest(
        httpRequest,
        {
          arguments: {
            "this.client.acceptLanguage": this.client.acceptLanguage,
          },
          customHeaders: new msRest.HttpHeaders(options && options.customHeaders)
        },
        {
          httpMethod: "GET",
          headerParameters: [
            {
              parameterName: "this.client.acceptLanguage",
              headerName: "accept-language",
              type: msRest.OperationParameterType.String,
            },
          ],
        });
      let statusCode = operationRes.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = operationRes.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(operationRes);
        let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            let resultMapper = Mappers.ErrorModel;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * Get a 200 to test a valid base uri
   *
   * @param {string} accountName Account Name
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {void} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getEmpty(accountName: string): Promise<void>;
  getEmpty(accountName: string, options: msRest.RequestOptionsBase): Promise<void>;
  getEmpty(accountName: string, callback: msRest.ServiceCallback<void>): void;
  getEmpty(accountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getEmpty(accountName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<void>;
    if (!callback) {
      return this.getEmptyWithHttpOperationResponse(accountName, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as void);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getEmptyWithHttpOperationResponse(accountName, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as void;
        return cb(err, result, data.request, data);
      });
    }
  }

}
