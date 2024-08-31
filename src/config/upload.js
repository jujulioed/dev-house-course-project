import multer from "multer";

export default {
    storage: multer.diskStorage({
        destination: path.resolve(__dirnam, '..', '..', 'uploads'),
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);

            cb(null, `${name}-${Date.now()}${ext}`)
        },
    })
}