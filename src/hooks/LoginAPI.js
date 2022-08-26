export const signin = async ({ email, password }) => {
  try {
    const res = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY_DASHBOARD}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      }
    );

    if (res.ok) {
      const data = await res.json();

      const expTime = new Date(
        new Date().getTime() + +data.expiresIn * 1000
      );

      //   login(data.idToken, expTime.toISOString());

      console.log(`Logged!`);

      return { data, expTime };
    }
  } catch (error) {
    console.log(error);
  }
};

export const signup = async ({
  username,
  email,
  password,
}) => {
  try {
    const res = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_API_KEY_DASHBOARD}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          returnSecureToken: true,
        }),
      }
    );

    if (res.ok) {
      const data = await res.json();

      const expTime = new Date(
        new Date().getTime() + +data.expiresIn * 1000
      );

      return { data, expTime };
    }
  } catch (error) {
    console.log(error);
  }
};
