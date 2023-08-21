interface Fetcher {
  url: string;
  method: string;
  body: any;
  json?: boolean;
}

export const fetcher = async ({ url, method, body, json = true }: Fetcher) => {
  const res = await fetch(url, {
    method,
    ...body(
      body && { body: JSON.stringify(body) }
    ) /*if body is there, then spread body*/,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("API Error");
  }

  if (json) {
    //if expecting json data from api
    const data = await res.json();
    return data.data;
  }
};

export const register = async (user: Object) => {
  return fetcher({ url: "/api/register", method: "POST", body: user });
};

export const signin = async (user: Object) => {
  return fetcher({ url: "/api/signin", method: "POST", body: user });
};
