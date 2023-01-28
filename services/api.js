const path = 'http://localhost:3001/api/store';

export async function getProducts() {
  const res = await fetch(`${path}/products`, {
    next: { revalidate: 120 },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const products = await res.json();
  return products;
}

export async function loginUser(user) {
  const bodyContent = JSON.stringify(user);
  const res = await fetch(`${path}/login`, {
    method: 'POST',
    body: bodyContent,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message);
  }
  console.log(data);
}
