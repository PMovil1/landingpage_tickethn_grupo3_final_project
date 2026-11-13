export const contactEmail = 'josegaldamez1991@gmail.com';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const path = (route: string) => base + '/' + route.replace(/^\//, '');
export const art = (name: string) => path('tickethn/' + name);

export const googlePlayUrl =
  'https://play.google.com/store/apps/details?id=dev.josegaldamez.app_tickethn_grupo3_final_project';
export const deletionEmail = 'mailto:' + contactEmail + '?subject=' +
  encodeURIComponent('Solicitud de eliminación de cuenta de TicketHN') + '&body=' +
  encodeURIComponent('Solicito eliminar mi cuenta de TicketHN y los datos asociados.\n\nCorreo registrado: ');
