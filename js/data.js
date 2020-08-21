import API from './api.js';
// import { beginRequest, endRequest } from './notifications.js';
const endpoints = {
    SHOES: 'data/shoes',
    SHOE_BY_ID: 'data/shoes/'
};

const api = new API(
    'BC58990B-CE8B-2809-FFBF-30D3971F5300',
    '09C8F75B-3A71-4232-8631-47E4E07AAC5F',
    // beginRequest,
    // endRequest
);

export const login = api.login.bind(api)
export const register = api.register.bind(api)
export const logout = api.logout.bind(api)


// export async function getAll() {
//     return api.get(endpoints.SHOES);
// }

// export async function createShoe(shoe) {
//     return api.post(endpoints.SHOES, shoe);
// }

// export async function getShoeById(id) {
//     return api.get(endpoints.SHOE_BY_ID + id);
// }

// export async function editShoe(id, shoe) {
//     return api.put(endpoints.SHOE_BY_ID + id, shoe);
// }

// export async function deleteShoe(id) {
//     return api.delete(endpoints.SHOE_BY_ID + id);
// }

// export function checkResult(result) {
//     if (result.hasOwnProperty('errorData')) {
//         const error = new Error();
//         Object.assign(error, result)
//         throw error;
//     }
// }

// export async function buyShoe(shoe) {
//     const newShoe = shoe.buyers + 1;
//     const shoeId = shoe.objectId;

//     return editShoe(shoeId, { buyers: newShoe });

// }

