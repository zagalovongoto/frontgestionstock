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
import { LigneVenteDto } from './ligneVenteDto';


export interface VentesDto { 
    id?: number;
    code: string;
    dateVente: string;
    commentaire?: string;
    idEntreprise?: number;
    ligneVentes: Array<LigneVenteDto>;
}

