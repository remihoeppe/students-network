export type Student = {
    id: string;
    name: string;
    cohort: string;
    coach: string;
    url?: string;
};

export type Coach = {
    id: string;
    name: string;
    cohort: string;
    coach?: string;
    url?: string;
};

export type Node = Student | Coach;
export type Link = {
    source: string;
    target: string;
    value: number;
    type: LinkType;
};

export type StudentLink = {
    source: string;
    target: string;
    value: number;
};

export enum LinkType {
    COACH = 'coach',
    COHORT = 'classmate',
    WORK = 'colleague',
}

export type GraphData = {
    nodes: Node[];
    links: Link[];
};
