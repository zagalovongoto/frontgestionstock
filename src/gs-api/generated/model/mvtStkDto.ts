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
import { ArticleDto } from './articleDto';


export interface MvtStkDto { 
    id?: number;
    dateMvt: string;
    quantite: number;
    article: ArticleDto;
    typeMvt?: MvtStkDto.TypeMvtEnum;
    sourceMvt?: MvtStkDto.SourceMvtEnum;
    idEntreprise?: number;
}
export namespace MvtStkDto {
    export type TypeMvtEnum = 'ENTREE' | 'SORTIE' | 'CORRECTION_POS' | 'CORRECTION_NEG';
    export const TypeMvtEnum = {
        Entree: 'ENTREE' as TypeMvtEnum,
        Sortie: 'SORTIE' as TypeMvtEnum,
        CorrectionPos: 'CORRECTION_POS' as TypeMvtEnum,
        CorrectionNeg: 'CORRECTION_NEG' as TypeMvtEnum
    };
    export type SourceMvtEnum = 'COMMANDE_CLIENT' | 'COMMANDE_FOURNISSEUR' | 'VENTE';
    export const SourceMvtEnum = {
        CommandeClient: 'COMMANDE_CLIENT' as SourceMvtEnum,
        CommandeFournisseur: 'COMMANDE_FOURNISSEUR' as SourceMvtEnum,
        Vente: 'VENTE' as SourceMvtEnum
    };
}


