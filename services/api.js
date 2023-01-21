export async function loginUser(user) {
  const bodyContent = JSON.stringify(user);
  const response = await fetch(
    'https://ts-api-kqij.onrender.com/api/store/login',
    {
      method: 'POST',
      body: bodyContent,
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  console.log(data);
}
