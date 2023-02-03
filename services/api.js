const PATH = 'http://localhost:3001/api/store';

export async function getProducts() {
  const res = await fetch(`${PATH}/products`, {
    next: { revalidate: 120 },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const products = await res.json();
  return products;
}

export async function getCategories() {
  const res = await fetch(`${PATH}/categories`, {
    next: { revalidate: 120 },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const categories = await res.json();
  return categories;
}

export async function loginUser(user) {
  const bodyContent = JSON.stringify(user);
  const res = await fetch(`${PATH}/login`, {
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
