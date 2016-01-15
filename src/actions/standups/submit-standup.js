export default () => {
  return (dispatch, getState) => {
    const data = getState().currentStandup.inputGatherers.map(input => input());
    console.log(data);

    dispatch({
      type: 'SUBMIT_STANDUP',
      data,
    });
  };
};
