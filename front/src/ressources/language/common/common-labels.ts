import { iCommonLabels } from './iCommon-labels';

export {commonLabels}

const commonLabels : iCommonLabels = {
    title:{
        message: "messages",
        realtor: "agences"
    },
    realtorSwitchBtn:{
        title: 'Agence',
    },
    display:{
        notDisplayElement: "Aucun élément à afficher"
    },
    // Errors
    errors:{
        realtorNotFound: "Agence avec id {0} introuvable !",
        apiClientError: "Récupération {0} échoué !",
        apiServerError: "Erreur serveur !",
    },
    contact:{
        email: "email",
        phone: "phone"
    },
    messages:{
        notFound: "Aucun messsage sélèctionné",
    }
};
