import { promises as fs } from 'fs';
import sharp from 'sharp';

async function checkImageExist(path: string): Promise<boolean> {
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
): Promise<void> {
  await sharp(path)
    .resize(width, height, {
      fit: sharp.fit.inside,
      withoutEnlargement: true,
    })
    .toFile(pathThumb);
}

export default { checkImageExist, resizeImageByPath };
