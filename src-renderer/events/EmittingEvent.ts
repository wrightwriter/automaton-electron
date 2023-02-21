import { ChanObj } from "../main";

/**
 * An event that will be emitted when the user presses the play button.
 */
export interface EmittingEventPlay {
  type: 'play';
}

/**
 * An event that will be emitted when the user presses the pause button.
 */
export interface EmittingEventPause {
  type: 'pause';
}

/**
 * An event that will be emitted when the user seeks the time by the GUI.
 */
export interface EmittingEventSeek {
  type: 'seek';
  time: number;
}

/**
 * An event that will be emitted when the user saves the data.
 */
export interface EmittingEventSave {
  type: 'save';
  data: string;
}

/**
 * An event that will be emitted when channel data is sent.
 */
export interface EmittingEventChannelsData {
  type: 'data';
  // data: ChanObj[];
  data: ChanObj;
}

export type EmittingEvent =
  | EmittingEventPlay
  | EmittingEventPause
  | EmittingEventSeek
  | EmittingEventSave
  | EmittingEventChannelsData;
