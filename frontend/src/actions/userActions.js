const loginUser = (dispatch, username) => {
   localStorage.setItem("username", username);

   dispatch({
      type: "LOGIN",
      payload: {
         username,
      },
   });
};

export { loginUser };
