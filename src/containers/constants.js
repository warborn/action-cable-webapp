import { Activity, AlertTriangle, Download, Mail } from "react-feather";

export const DEFAULT_NOTIFICATION_TYPE = "alert";
export const NOTIFICATION_TYPES = ["alert", "activity", "download"];
export const NOTIFICATION_TYPES_ICONS = {
  alert: AlertTriangle,
  activity: Activity,
  download: Download,
  summary: Mail,
};
