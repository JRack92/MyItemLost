import crypto from "crypto";

export function generateUniqueHexString(byteLegnth = 16) {
  return crypto.randomBytes(byteLegnth).toString("hex");
}
