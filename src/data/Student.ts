export type Student = {
    id: number;
    fullname: string;
    cohort: string;
    coach: string;
    url?: string;
};

export type StudentLink = {
    source: string;
    target: string;
    value: number;
    type: 'coach' | 'cohort';
};

export enum LinkType {
    COACH = 'coach',
    COHORT = 'classmate',
    WORK = 'colleague',
}

export const convertCSVToText = async (
    filePath: string,
): Promise<string[] | void> => {
    return fetch(filePath)
        .then((res) => res.text())
        .then((text) => text.split('\n').filter((row) => row.trim()));
};

export const convertCSVToObjects = async (
    filePath: string,
): Promise<Record<string, string>[]> => {
    const res = await fetch(filePath)
        .then((res) => res.text())
        .then((text) =>
            text
                .split('\n')
                .map((line) => line.trim())
                .filter((line) => line.length > 0),
        );

    // remove empty headers
    const headers = res[0]
        .split(',')
        .map((h) => h.trim())
        .filter((header) => header);

    return res.slice(1).map((line) => {
        const values = line.split(',').map((v) => v.trim());
        const obj: Record<string, string> = {};
        headers.forEach((header, index) => {
            obj[header] = values[index] || '';
        });
        return obj;
    });
};
