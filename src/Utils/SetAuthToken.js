export default async function SetAuthToken(user, logout) {
  try {
    const currentUser = {
      email: user.email,
    };

    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(currentUser),
    };

    const res = await fetch(
      "https://photography-server-eight.vercel.app/jwt",
      config
    );
    const data = await res.json();

    localStorage.setItem("photography-token", data.token);

    if (res.status === 401 || res.status === 403) {
      localStorage.removeItem("photography-token");
      return logout();
    }
    return data;
  } catch (err) {
    console.log(err);
  }
}
