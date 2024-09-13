import { deleteObject, ref } from "firebase/storage";
import { storage } from "../config/firebase.config";

export const filters = [
  { id: 2, name: "Jasp", value: "jasp" },
  { id: 3, name: "Rock", value: "rock" },
  { id: 4, name: "Melody", value: "melody" },
  { id: 5, name: "Kareoke", value: "kareoke" },
  { id: 5, name: "Pop", value: "pop" },
  { id: 5, name: "Traditional", value: "traditional" },

];

export const filterByLanguage = [
  { id: 1, name: "Amharic", value: "amharic" },
  { id: 2, name: "English", value: "english" },
  { id: 3, name: "Tigrigna", value: "Tigrigna" },
  { id: 4, name: "Oromo", value: "oromo" },
  { id: 5, name: "Arabic", value: "arab" },
];

export const deleteAnObject = (referenceUrl) => {
  const deleteRef = ref(storage, referenceUrl);
  deleteObject(deleteRef)
    .then(() => {
      return true;
    })
    .catch((error) => {
      return false;
    });
};
