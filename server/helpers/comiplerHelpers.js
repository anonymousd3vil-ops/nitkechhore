export const decodeBase64 = (text) => {
    if (!text) {
        return "";
    }
    return Buffer.from(text, "base64").toString("utf8");
};

export const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

export const LANGUAGE_IDS = { 
    c: 50,
    cpp: 54,
    python: 71
};

export const encodeBase64 = (text = "") => {
    return Buffer.from(text, "utf8").toString("base64");
};

export const JUDGE0_API_URL = process.env.JUDGE0_API_URL || "https://ce.judge0.com";