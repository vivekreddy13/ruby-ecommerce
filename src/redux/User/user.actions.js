import userTypes from './user.types';

export const setCurrentUser = user => ({
    type: userTypes.Set_CURRENT_USER,
    payload: user
});