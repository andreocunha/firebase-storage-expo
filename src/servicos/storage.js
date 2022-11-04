import { getDownloadURL, ref, uploadBytes, deleteObject } from "firebase/storage";
import { storage } from "../config/firebase";

export async function salvarImagem(imageUri, postId){
    if (!imageUri) return;
    
    const response = await fetch(imageUri);
    const blob = await response.blob();
    const refStorage = ref(storage, `posts/${postId}.png`);
    
    try {
        await uploadBytes(refStorage, blob);
        const url = await getDownloadURL(refStorage);
        return url;
    }
    catch (error) {
        console.log(error);
        return null;
    }
}

export async function deletarImagem(postId){
    const refStorage = ref(storage, `posts/${postId}.png`);
    try {
        await deleteObject(refStorage);
        return true;
    }
    catch (error) {
        console.log(e);
        return false;
    }
}