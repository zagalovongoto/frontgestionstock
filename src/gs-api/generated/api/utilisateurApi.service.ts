/**
 * API REST Gestion de stock
 * Cette API expose des points de terminaison pour gérer les stocks
 *
 * The version of the OpenAPI document: 1.0
 * Contact: mambosag@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec, HttpContext 
        }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

// @ts-ignore
import { ErrorDto } from '../model/errorDto';
// @ts-ignore
import { SaveVente400Response } from '../model/saveVente400Response';
// @ts-ignore
import { UtilisateurDto } from '../model/utilisateurDto';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class UtilisateurApiService {

    protected basePath = 'http://localhost:8881';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string|string[], @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (Array.isArray(basePath) && basePath.length > 0) {
                basePath = basePath[0];
            }

            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }


    // @ts-ignore
    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, (value as Date).toISOString().substring(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * @param idUtilisateur 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteUtilisateur(idUtilisateur: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | '*/*', context?: HttpContext}): Observable<object>;
    public deleteUtilisateur(idUtilisateur: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | '*/*', context?: HttpContext}): Observable<HttpResponse<object>>;
    public deleteUtilisateur(idUtilisateur: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | '*/*', context?: HttpContext}): Observable<HttpEvent<object>>;
    public deleteUtilisateur(idUtilisateur: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | '*/*', context?: HttpContext}): Observable<any> {
        if (idUtilisateur === null || idUtilisateur === undefined) {
            throw new Error('Required parameter idUtilisateur was null or undefined when calling deleteUtilisateur.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (bearerAuth) required
        localVarCredential = this.configuration.lookupCredential('bearerAuth');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json',
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/gestiondestock/v1/utilisateurs/delete/${this.configuration.encodeParam({name: "idUtilisateur", value: idUtilisateur, in: "path", style: "simple", explode: false, dataType: "number", dataFormat: "int32"})}`;
        return this.httpClient.request<object>('delete', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findAllUtilisateur(observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | '*/*', context?: HttpContext}): Observable<Array<UtilisateurDto>>;
    public findAllUtilisateur(observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | '*/*', context?: HttpContext}): Observable<HttpResponse<Array<UtilisateurDto>>>;
    public findAllUtilisateur(observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | '*/*', context?: HttpContext}): Observable<HttpEvent<Array<UtilisateurDto>>>;
    public findAllUtilisateur(observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | '*/*', context?: HttpContext}): Observable<any> {

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (bearerAuth) required
        localVarCredential = this.configuration.lookupCredential('bearerAuth');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json',
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/gestiondestock/v1/utilisateurs/all`;
        return this.httpClient.request<Array<UtilisateurDto>>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param emailUtilisateur 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findUtilisateurByEmail(emailUtilisateur: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | '*/*', context?: HttpContext}): Observable<UtilisateurDto>;
    public findUtilisateurByEmail(emailUtilisateur: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | '*/*', context?: HttpContext}): Observable<HttpResponse<UtilisateurDto>>;
    public findUtilisateurByEmail(emailUtilisateur: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | '*/*', context?: HttpContext}): Observable<HttpEvent<UtilisateurDto>>;
    public findUtilisateurByEmail(emailUtilisateur: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | '*/*', context?: HttpContext}): Observable<any> {
        if (emailUtilisateur === null || emailUtilisateur === undefined) {
            throw new Error('Required parameter emailUtilisateur was null or undefined when calling findUtilisateurByEmail.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (bearerAuth) required
        localVarCredential = this.configuration.lookupCredential('bearerAuth');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json',
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/gestiondestock/v1/utilisateurs/find/${this.configuration.encodeParam({name: "emailUtilisateur", value: emailUtilisateur, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}`;
        return this.httpClient.request<UtilisateurDto>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param idUtilisateur 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findUtilisateurById(idUtilisateur: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | '*/*', context?: HttpContext}): Observable<UtilisateurDto>;
    public findUtilisateurById(idUtilisateur: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | '*/*', context?: HttpContext}): Observable<HttpResponse<UtilisateurDto>>;
    public findUtilisateurById(idUtilisateur: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | '*/*', context?: HttpContext}): Observable<HttpEvent<UtilisateurDto>>;
    public findUtilisateurById(idUtilisateur: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | '*/*', context?: HttpContext}): Observable<any> {
        if (idUtilisateur === null || idUtilisateur === undefined) {
            throw new Error('Required parameter idUtilisateur was null or undefined when calling findUtilisateurById.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (bearerAuth) required
        localVarCredential = this.configuration.lookupCredential('bearerAuth');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json',
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/gestiondestock/v1/utilisateurs/${this.configuration.encodeParam({name: "idUtilisateur", value: idUtilisateur, in: "path", style: "simple", explode: false, dataType: "number", dataFormat: "int32"})}`;
        return this.httpClient.request<UtilisateurDto>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param utilisateurDto 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public saveUtilisateur(utilisateurDto: UtilisateurDto, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | '*/*', context?: HttpContext}): Observable<UtilisateurDto>;
    public saveUtilisateur(utilisateurDto: UtilisateurDto, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | '*/*', context?: HttpContext}): Observable<HttpResponse<UtilisateurDto>>;
    public saveUtilisateur(utilisateurDto: UtilisateurDto, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json' | '*/*', context?: HttpContext}): Observable<HttpEvent<UtilisateurDto>>;
    public saveUtilisateur(utilisateurDto: UtilisateurDto, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json' | '*/*', context?: HttpContext}): Observable<any> {
        if (utilisateurDto === null || utilisateurDto === undefined) {
            throw new Error('Required parameter utilisateurDto was null or undefined when calling saveUtilisateur.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (bearerAuth) required
        localVarCredential = this.configuration.lookupCredential('bearerAuth');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('Authorization', 'Bearer ' + localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json',
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/gestiondestock/v1/utilisateurs/create`;
        return this.httpClient.request<UtilisateurDto>('post', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: utilisateurDto,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
