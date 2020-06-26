import { CHANGE_LANGUAGE } from '../actions/language'

const initialState = { lang: 'cz' };

export const languageReducer = (state = initialState, { type, payload }) => {

	switch (type) {
		case CHANGE_LANGUAGE:
			return { lang: payload };

		default:
			return state;
	}
};