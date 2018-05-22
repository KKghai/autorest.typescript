/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as msRest from "ms-rest-js";
import * as msRestAzure from "ms-rest-azure-js";
const WebResource = msRest.WebResource;

const packageName = "";
const packageVersion = "";

class AutoRestReportServiceForAzure extends msRestAzure.AzureServiceClient {

  credentials: msRest.ServiceClientCredentials;

  acceptLanguage: string;

  longRunningOperationRetryTimeout: number;

  generateClientRequestId: boolean;
  baseUri: string;
  serializer: msRest.Serializer;

  /**
   * @class
   * Initializes a new instance of the AutoRestReportServiceForAzure class.
   * @constructor
   *
   * @param {msRest.ServiceClientCredentials} credentials - Credentials needed for the client to connect to Azure.
   *
   * @param {string} [baseUri] - The base URI of the service.
   *
   * @param {object} [options] - The parameter options
   *
   * @param {Array} [options.filters] - Filters to be added to the request pipeline
   *
   * @param {object} [options.requestOptions] - The request options. Detailed info can be found at
   * {@link https://github.github.io/fetch/#Request Options doc}
   *
   * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
   *
   * @param {string} [options.acceptLanguage] - The preferred language for the response.
   *
   * @param {number} [options.longRunningOperationRetryTimeout] - The retry timeout in seconds for Long Running Operations. Default value is 30.
   *
   * @param {boolean} [options.generateClientRequestId] - Whether a unique x-ms-client-request-id should be generated. When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
   *
   */
  constructor(credentials: msRest.ServiceClientCredentials, baseUri?: string, options?: msRestAzure.AzureServiceClientOptions) {
    if (credentials === null || credentials === undefined) {
      throw new Error('\'credentials\' cannot be null.');
    }

    if (!options) {
      options = {};
    }
    if (!options.serializer) {
      options = {
        ...options,
        serializer: new msRest.Serializer(Mappers, false)
      };
    }

    super(credentials, options);

    this.acceptLanguage = 'en-US';
    this.longRunningOperationRetryTimeout = 30;
    this.generateClientRequestId = true;
    this.baseUri = baseUri as string;
    if (!this.baseUri) {
      this.baseUri = 'http://localhost:3000';
    }
    this.credentials = credentials;

    this.addUserAgentInfo(`${packageName}/${packageVersion}`);
    if(options.acceptLanguage !== null && options.acceptLanguage !== undefined) {
      this.acceptLanguage = options.acceptLanguage;
    }
    if(options.longRunningOperationRetryTimeout !== null && options.longRunningOperationRetryTimeout !== undefined) {
      this.longRunningOperationRetryTimeout = options.longRunningOperationRetryTimeout;
    }
    if(options.generateClientRequestId !== null && options.generateClientRequestId !== undefined) {
      this.generateClientRequestId = options.generateClientRequestId;
    }
    this.serializer = new msRest.Serializer(Mappers);
  }
  // methods on the client.

  /**
   * Get test coverage report
   *
   * @param {AutoRestReportServiceForAzureGetReportOptionalParams} [options]
   * Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async getReportWithHttpOperationResponse(options?: Models.AutoRestReportServiceForAzureGetReportOptionalParams): Promise<msRest.HttpOperationResponse> {
    let client = this;
    let qualifier = (options && options.qualifier !== undefined) ? options.qualifier : undefined;
    // Validate
    try {
      if (qualifier !== null && qualifier !== undefined && typeof qualifier.valueOf() !== 'string') {
        throw new Error('qualifier must be of type string.');
      }
      if (this.acceptLanguage !== null && this.acceptLanguage !== undefined && typeof this.acceptLanguage.valueOf() !== 'string') {
        throw new Error('this.acceptLanguage must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Construct URL
    const requestUrl: msRest.URLBuilder = msRest.URLBuilder.parse(this.baseUri);
    requestUrl.setPath("/report/azure");
    if (qualifier != undefined) {
      requestUrl.setQueryParameter("qualifier", encodeURIComponent(qualifier));
    }

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    httpRequest.url = requestUrl.toString();
    httpRequest.headers = {};
    // Set Headers
    httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
    if (this.generateClientRequestId) {
        httpRequest.headers['x-ms-client-request-id'] = msRest.generateUuid();
    }
    // Send Request
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.sendOperationRequest(
        httpRequest,
        {
          arguments: {
            "this.acceptLanguage": this.acceptLanguage,
          },
          customHeaders: new msRest.HttpHeaders(options && options.customHeaders)
        },
        {
          httpMethod: "GET",
          headerParameters: [
            {
              parameterName: "this.acceptLanguage",
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
      // Deserialize Response
      if (statusCode === 200) {
        let parsedResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedResponse !== null && parsedResponse !== undefined) {
            let resultMapper = {
              required: false,
              serializedName: 'parsedResponse',
              type: {
                name: 'Dictionary',
                value: {
                    required: false,
                    serializedName: 'numberElementType',
                    type: {
                      name: 'Number'
                    }
                }
              }
            };
            operationRes.parsedBody = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.parsedBody');
          }
        } catch (error) {
          let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
          deserializationError.request = msRest.stripRequest(httpRequest);
          deserializationError.response = msRest.stripResponse(operationRes);
          return Promise.reject(deserializationError);
        }
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * Get test coverage report
   *
   * @param {AutoRestReportServiceForAzureGetReportOptionalParams} [options]
   * Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {{ [propertyName: string]: number }} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getReport(): Promise<{ [propertyName: string]: number }>;
  getReport(options: Models.AutoRestReportServiceForAzureGetReportOptionalParams): Promise<{ [propertyName: string]: number }>;
  getReport(callback: msRest.ServiceCallback<{ [propertyName: string]: number }>): void;
  getReport(options: Models.AutoRestReportServiceForAzureGetReportOptionalParams, callback: msRest.ServiceCallback<{ [propertyName: string]: number }>): void;
  getReport(options?: Models.AutoRestReportServiceForAzureGetReportOptionalParams, callback?: msRest.ServiceCallback<{ [propertyName: string]: number }>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<{ [propertyName: string]: number }>;
    if (!callback) {
      return this.getReportWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as { [propertyName: string]: number });
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getReportWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as { [propertyName: string]: number };
        return cb(err, result, data.request, data);
      });
    }
  }
}

export { AutoRestReportServiceForAzure, Models as AutoRestReportServiceForAzureModels, Mappers as AutoRestReportServiceForAzureMappers };
