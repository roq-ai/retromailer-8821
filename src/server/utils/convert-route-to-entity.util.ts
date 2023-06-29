const mapping: Record<string, string> = {
  clients: 'client',
  'email-lists': 'email_list',
  templates: 'template',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
