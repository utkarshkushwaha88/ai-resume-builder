import multer from 'multer';


// Multer helps process files sent in multipart/form-data requests (e.g., image uploads).

// diskStorage() tells Multer how and where to store uploaded files.

const storage=multer.diskStorage({});

const upload=multer({storage});

export default upload