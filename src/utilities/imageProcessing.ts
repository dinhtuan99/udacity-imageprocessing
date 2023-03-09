import { promises as fs } from 'fs';
import sharp from 'sharp';

async function checkImageExist(path: string) {
  try {
    await fs.access(path);
    return true;
  } catch {
    return false;
  }
}

async function resizeImageByPath(
  path: string,
  pathThumb: string,
  width: number,
  height: number
) {
  await sharp(path)
    .resize(width, height, {
      fit: sharp.fit.inside,
      withoutEnlargement: true,
    })
    .toFile(pathThumb);
}

export default { checkImageExist, resizeImageByPath };
