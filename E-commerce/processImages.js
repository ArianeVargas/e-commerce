import Jimp from 'jimp';
import fs from 'fs';
import path from 'path';

// Lista de imágenes a procesar
const images = [
    './src/assets/pro1.jpg',
    './src/assets/pro2.jpg',
    './src/assets/pro3.jpg',
    './src/assets/pro4.jpg',
    './src/assets/pro5.jpg',
    './src/assets/pro6.jpg',
    './src/assets/pro7.jpg',
    './src/assets/pro8.jpg',
    './src/assets/pro9.jpg',
    './src/assets/pro10.jpg',
    './src/assets/pro11.jpg',
    './src/assets/pro12.jpg'
];

// Directorio de salida
const outputDir = './compressed-images';

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

images.forEach(imagePath => {
    Jimp.read(imagePath)
        .then(image => {
            const outputFilePath = path.join(outputDir, path.basename(imagePath));
            return image
                .quality(60) 
                .writeAsync(outputFilePath);
        })
        .then(() => {
            console.log(`Imagen procesada: ${imagePath}`);
        })
        .catch(err => {
            console.error('Error al procesar la imagen:', err);
        });
});
