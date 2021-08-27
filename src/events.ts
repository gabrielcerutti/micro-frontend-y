type tEvent = {
  [key: string]: string;
};

export const eventsToListen: tEvent = {
  SOME_HOST_EVENT: 'SOME_HOST_EVENT',
};

export const eventsToDispatch: tEvent = {
  SOME_MICROFRONT_EVENT: 'SOME_MICROFRONT_EVENT',
};

const dispatchEvent = (event: string, data: any) =>
  window.dispatchEvent(new CustomEvent(event, { detail: data }));

export default dispatchEvent;
