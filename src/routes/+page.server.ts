import fs from 'fs';

export function load(): { filePaths: string[] } {
    const files = fs.readdirSync('static/images/thumbnails');

    return { filePaths: files };
}