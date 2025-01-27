/**
 * An event that requests to update the time.
 */
export interface ReceivingEventUpdate {
  type: 'update';
  time: number;
}

export interface ReceivingEventPlay {
  type: 'play';
}

export interface ReceivingEventPause {
  type: 'pause';
}

/**
 * An event that requests to invoke `auto`, means the client uses the channel.
 */
export interface ReceivingEventAuto {
  type: 'auto';
  name: string;
}

export type ReceivingEvent =
  | ReceivingEventUpdate
  | ReceivingEventAuto
  | ReceivingEventPause
  | ReceivingEventPlay;
