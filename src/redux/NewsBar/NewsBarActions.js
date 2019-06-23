export const Type = {
  CHANGE_TAG: 'CHANGE_TAG',
};

export const changeTag = tag => ({
  type: Type.CHANGE_TAG,
  payload: { tag },
});
