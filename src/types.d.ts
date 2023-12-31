export interface SvgElementType {
  onClick?: () => void;
}

export interface SettingsType {
  pomodoro: number;
  longBreak: number;
  shortBreak: number;
  font: "kumbh" | "roboto" | "mono";
  color: "semi-red" | "sky" | "violet";
}

export type SettingsTypeKey = keyof SettingsType;

export type SessionType = "pomodoro" | "longBreak" | "shortBreak";

export type TimeState = {
  pomodoro: number;
  longBreak: number;
  shortBreak: number;
};
