export interface IMyInvoices {
    "id": number,
    "date": string,
    "cur_value": number,
    "duty": number,
    "prv_value": number,
    "servicerule": {
        "id": number,
        "tax": number
    },
    "typeservice": {
        "id": number,
        "name_service": string
    }
}