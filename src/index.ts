export const GET = async <T>(url: string, params: Record<string, string> = {}) => {
  const response = await fetch(url + '?' + new URLSearchParams(params));
  return response.json();
}

export const POST = async <T>(url: string, body: Record<string, string> = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.json();
}

export const PUT = async <T>(url: string, body: Record<string, string>) => {
  const response = await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.json();
}

export const DELETE = async <T>(url: string) => {
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.json();
}
