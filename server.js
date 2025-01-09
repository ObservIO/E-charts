import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Serve static files with correct MIME types
app.use(express.static('.', {
    setHeaders: (res, filePath) => {
        if (filePath.endsWith('.js')) {
            res.set('Content-Type', 'application/javascript');
        }
    }
}));

// Handle all routes
app.get('*', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
