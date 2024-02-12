/**
 * Frontend entrypoint:
 * This module provides a default export that defines the UI that is created on the frontend
 * when a page is visited
 */

import { UIX } from "uix";

UIX.Theme.useTheme("uix-light-plain");

export default {
  // show frontend-rendered page on /frontend
  "/login": import("frontend/pages/login/login.tsx"),
  "/ai-helper": import("frontend/pages/ai-helper/ai.tsx"),
  "/profil": import("./pages/profile/profile_template.tsx"),
};
