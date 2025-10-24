import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

import serviceAccountKey from "./serviceAccountKey.json" with { type: "json" };

const app = initializeApp({
    credential: cert(serviceAccountKey),
});

export const auth = getAuth(app);
export const db = getFirestore(app);