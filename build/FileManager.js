"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileManager = void 0;
const fs = require("fs");
class FileManager {
    constructor(filePath) {
        this.filePath = filePath;
    }
    setFilePath(path) {
        this.filePath = path;
    }
    writeFile(data) {
        fs.writeFileSync(this.filePath, JSON.stringify(data));
    }
    readFile() {
        const data = fs.readFileSync(this.filePath);
        return JSON.parse(data.toString());
    }
}
exports.FileManager = FileManager;
//# sourceMappingURL=FileManager.js.map