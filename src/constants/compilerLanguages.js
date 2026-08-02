export const COMPILER_LANGUAGES = {
    cpp: {
        name: "C++",
        pistonLanguage: "c++",
        version: "*",
        monacoLanguage: "cpp",
        extension: "cpp",

        defaultCode: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello from NITKeChhore!" << endl;
    return 0;
}
        `
    },

    c: {
        name: "C",
        pistonLanguage: "c",
        version: "*",
        monacoLanguage: "c",
        extension: "c",

        defaultCode: `#include <stdio.h>
int main() {
    printf("Hello from NITKeChhore!\\n");
    return 0;
}
        `
    },

    python: {
        name: "Python",
        pistonLanguage: "python",
        version: "*",
        monacoLanguage: "python",
        extension: "py",

        defaultCode: `print("Hello from NITKeChhore!")`
    }
};