// Path: utils/index.js

import { getDoc } from "firebase/firestore";

export const parsearFecha = (fecha) => {
    const fechaUnix = fecha.seconds * 1000 + fecha.nanoseconds / 1000000;
    return new Date(fechaUnix);
}

export const extraerReferencia = (referencia) => {
    if (referencia && referencia.path) {
        const segments = referencia.path.split('/');
        return segments[segments.length - 1];
    }
    return null;
};

export const generatePhotoURL = (displayName) => {
    const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=${randomColor()}&color=fff&size=200`;
    return avatarUrl;
};

export const getUserDataFromRef = async (userRef) => {
    const userDoc = await getDoc(userRef);
    const userData = userDoc.data();
    const { id, displayName, email, photoURL } = userData;
    return { id, displayName, email, photoURL };
};
