import { SettingBorder } from "../definitions/settings.ts";

function newSettingBorder(): SettingBorder {
  return {
    color: true,
    radius: false,
    style: false,
    width: true,
  };
}

export default newSettingBorder;
