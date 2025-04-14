type Student = {
    id: string;
    name: string;
    cohort: string;
    coach: string;
    url: string;
};

type StudentLink = {
    source: string;
    target: string;
    value: number;
    type: 'coach' | 'cohort';
};

enum LinkType {
    COACH = 'coach',
    COHORT = 'classmate',
    WORK = 'colleage',
}
