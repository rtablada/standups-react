export default () => {
  return (dispatch, getState) => {
    dispatch({
      type: 'RANDOMIZE_TEAM',
      teamMembers: getState().teamMembers,
    });
  };
};
