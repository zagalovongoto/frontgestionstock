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
import { AdresseDto } from './adresseDto';


export interface FournisseurDto { 
    id?: number;
    nom: string;
    prenom: string;
    adresse: AdresseDto;
    photo?: string;
    mail: string;
    numTel: string;
    idEntreprise?: number;
}

