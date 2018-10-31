import fetch from "node-fetch";

export const request = async (method: string, url: string, body: any, token: string) => {
  const result = await fetch(url, {
    method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  });

  if (result.ok) {
    return {
      result: await result.json(),
      status: result.status
    }
  } else {
    let error;
    try {
        error = await result.json();
    } catch (e) {
      error = await result.text();
    }
    throw error;
  }
};