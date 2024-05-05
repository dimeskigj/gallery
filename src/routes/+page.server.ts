import fs from 'fs';
import sizeOf from 'image-size';

type Image = {
    src: string;
    width: number;
    height: number;
    thumbSrc: string;
    thumbWidth: number;
    thumbHeight: number;
    alt?: string;
    orientation: number;
}

export function load(): { images: Image[] } {
    const thumbnailSourcePath = 'static/images/thumbnails';
    const fullSourcePath = 'static/images/full';
    const filePaths = fs.readdirSync(thumbnailSourcePath);

    const images = filePaths.map(filePath => {
        const thumbnailPath = `${thumbnailSourcePath}/${filePath}`;
        const fullPath = `${fullSourcePath}/${filePath}`;
        const dimensions = sizeOf(fullPath);
        const thumbDimensions = sizeOf(thumbnailPath);
        const altText = filePath.replaceAll('-', '').split('.')[0];

        // https://exiftool.org/TagNames/EXIF.html#:~:text=0x0112,8%20=%20Rotate%20270%20CW
        const isRotated = (dimensions.orientation ?? 0) >= 5;

        return {
            src: fullPath.replace('static/', ''),
            thumbSrc: thumbnailPath.replace('static/', ''),
            width: !isRotated ? dimensions.width! : dimensions.height!,
            thumbWidth: !isRotated ? thumbDimensions.width! : thumbDimensions.height!,
            height: !isRotated ? dimensions.height! : dimensions.width!,
            thumbHeight: !isRotated ? thumbDimensions.height! : thumbDimensions.width!,
            orientation: dimensions.orientation ?? 1,
            alt: altText
        };
    })

    return { images: images };
}