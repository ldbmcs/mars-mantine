export function read(name: string): any {
  if (typeof window === 'undefined') {
    return undefined;
  }

  const result = new RegExp(`(?:^|; )${encodeURIComponent(name)}=([^;]*)`).exec(document.cookie);
  return result ? result[1] : undefined;
}

export function write({
  name,
  value,
  days = 20 * 365,
  path,
}: {
  name: string
  value: string
  days?: number
  path?: string
}): void {
  if (typeof window === 'undefined') {
    return;
  }

  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);

  const expires = `; expires=${date.toUTCString()}`;

  document.cookie = `${name}=${value}${expires}; path=${path || '/'}`;
}

export function remove(name: string, path?: string) {
  write({ name, value: '', days: -1, path });
}

export function readJson(cookieName: string, defaultValue: any): any {
  const cookieValue = read(cookieName);
  return cookieValue ? JSON.parse(cookieValue) : defaultValue;
}

export function readString(cookieName: string): string | undefined {
  return read(cookieName);
}

export function clearAllCookie() {
  const keys = document.cookie.match(/[^ =;]+(?==)/g);
  if (keys) {
    for (let i = 0; i < keys.length; i++) {
      remove(keys[i]);
    }
  }
}
