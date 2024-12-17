import { DELETE_USER, FIND_USER, UPPDATE_USER } from "redux/constants/User";

export const deleteUser = (userId) => ({
  type: DELETE_USER,
  payload: userId,
});

export const findUser = (userId) => ({
  type: FIND_USER,
  payload: userId
})

export const updateUser = (user) => ({
  type: UPPDATE_USER,
  payload: user,
});
