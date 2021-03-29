const fs = require('fs');

class Files {

    writeFile(fileContent) {
        return new Promise((resolve, reject) => {
            fs.writeFile('./dist/index.html', fileContent, err => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve({
                    ok: true,
                    message: 'The file was created!!'
                })
            })
        })
    };

    copyFile() {
        return new Promise((resolve, reject) => {
            fs.copyFile('./src/style.css', './dist/style.css', err => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve({
                    ok: true,
                    message: 'The file was copied!'
                })
            })
        })
    }
};

module.exports = Files;