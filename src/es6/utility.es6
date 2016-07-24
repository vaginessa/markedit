export class Utility {
    static capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    static toggleClass(element, className) {
        if (!element || !className) {
            return;
        }
        let classString = element.className;
        let nameIndex = classString.indexOf(className);
        if (nameIndex === -1) {
            classString += ' ' + className;
        }
        else {
            classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length);
        }
        element.className = classString;
    }
}
