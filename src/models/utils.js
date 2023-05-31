export function getFileNameFromPath(filePath) {
    let indx = filePath.lastIndexOf("/");
    // if (indx === -1) {
    //     return "unknown";
    // }

    let result = filePath.substring(indx + 1);
    let dotIdx = result.lastIndexOf(".");
    // if (dotIdx === -1) {
    //     return "unknown";
    // }

    let fileName = result.substring(0, dotIdx);
    return fileName;
}