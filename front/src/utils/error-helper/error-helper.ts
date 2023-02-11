import { errorLabels } from "src/ressources/language/common/error-labels";
import { iCommonError } from "./iCommon-errors";

export function GetError(response: Response) : string {                
    if (response.status === 409 && response.statusText) {        
        const commonError = JSON.parse(response.statusText) as iCommonError;
        const errorMessage = errorLabels.get(commonError.code);
        if (errorMessage)
            return errorMessage;            
    }
    return "";
}