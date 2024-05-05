import fs from 'fs';
import sizeOf from 'image-size';

type Image = {
    src: string;
    width: number;
    height: number;
    alt?: string;
    orientation: number;
}

export function load(): { images: Image[] } {
    const thumnbailSourcePath = 'static/images/thumbnails';
    const filePaths = fs.readdirSync(thumnbailSourcePath);

    const images = filePaths.map(filePath => {
        const dimensions = sizeOf(`${thumnbailSourcePath}/${filePath}`);

        // https://exiftool.org/TagNames/EXIF.html#:~:text=0x0112,8%20=%20Rotate%20270%20CW
        const isRotated = (dimensions.orientation ?? 0) >= 5;

        return {
            src: filePath,
            width: !isRotated ? dimensions.width! : dimensions.height!,
            height: !isRotated ? dimensions.height! : dimensions.width!,
            orientation: dimensions.orientation ?? 1
        };
    })

    return { images: images };
}