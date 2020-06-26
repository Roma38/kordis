export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";

export function changeLanguage(lang) {
    return { type: CHANGE_LANGUAGE, payload: lang };
}