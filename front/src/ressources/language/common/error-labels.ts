import { CommonErrorCode } from "src/app/entities";

export { errorLabels };

const errorLabels: Map<number, string> =  new Map([
    [ CommonErrorCode.Realtor_reatrieveFailed, "Récupération des realtors échoué !" ]
]);