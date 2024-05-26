import {attachRoutes} from "./attach-routes.js";

/**
 * 
 * @param {import("express").Application} app
 */
export function configureServer(app) {
  attachRoutes(app);
}
