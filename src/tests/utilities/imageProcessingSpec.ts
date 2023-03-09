import imageProcessing from '../../utilities/imageProcessing';
import path from 'path';

it('should check image exist', async () => {
    const imagePath = path.resolve('src/tests/mocks/image/fjord.jpg');
    const isExist = await imageProcessing.checkImageExist(imagePath);
    expect(isExist).toBeTrue();
});

it('should check image not exist', async () => {
    const imagePath = path.resolve('src/tests/mocks/image/demo.jpg');
    const isExist = await imageProcessing.checkImageExist(imagePath);
    expect(isExist).toBeFalse();
});

it('should check resize image by path', async () => {
    const imagePath = path.resolve('src/tests/mocks/image/fjord.jpg');
    const imagePathThumb = path.resolve('src/tests/mocks/image/fjord_thumb_100x100.jpg');
    await imageProcessing.resizeImageByPath(imagePath, imagePathThumb, 100, 100);
    const isExist = await imageProcessing.checkImageExist(imagePathThumb);
    expect(isExist).toBeTrue();
});
