import { Router, Request, Response } from 'express';
import path from 'path';
import imageProcessing from '../../utilities/imageProcessing';

type QueryParams = {
  filename: string;
  width: string;
  height: string;
};

const resizeImage: Router = Router();

resizeImage.get('/', async (req: Request, res: Response) => {
  const param: QueryParams = req.query as unknown as QueryParams;
  if (param.filename) {
    const imagePath = path.resolve('assets/full/' + `${param.filename}.jpg`);
    const width = parseInt(param.width);
    const height = parseInt(param.height);
    const imagePathThumb = path.resolve(
      'assets/thumb/' + `${param.filename}_thumb_${width}x${height}.jpg`
    );
    if (!(await imageProcessing.checkImageExist(imagePath))) {
      res.status(200).send('Change correct filename');
      return;
    }
    if (await imageProcessing.checkImageExist(imagePathThumb)) {
      res.status(200).sendFile(imagePathThumb);
      return;
    }
    await imageProcessing.resizeImageByPath(
      imagePath,
      imagePathThumb,
      width,
      height
    );
    res.status(200).sendFile(imagePathThumb);
  } else {
    res.status(200).send('Please add file name param!');
  }
});

export default resizeImage;
