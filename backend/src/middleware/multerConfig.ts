import multer from "multer";
const storage = multer.diskStorage({
  destination: (req, file, calback) => {
    calback(null, "storages");
  },
  filename: (req, file, calback) => {
    const extension = file.mimetype.split("/")[1]; //on récupère l'extension du fichier et on le traduit suivant le dictionnaire construit
    calback(
      null,
      file.originalname.split(".")[0] + Date.now() + "." + extension
    ); // on modifie enfin le nom du fichier final (c'est le nom du fichier qui sera utilisé sur le serveur)
  },
});

export default multer({ storage });
