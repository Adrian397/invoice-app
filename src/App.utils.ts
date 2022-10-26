export const imgBasePath =
  window.location.protocol + "//" + window.location.host + "/assets/";

export type StyledProps = {
  status?: string;
  isVisible?: boolean;
  activeStatuses?: string[];
  bgColor?: string;
  txtColor?: string;
};
