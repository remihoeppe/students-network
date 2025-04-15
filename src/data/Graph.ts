import { Student, StudentLink } from './Student';

export const generateNetworkData = (studentData: Record<string, string>[]) => {
    const nodes: Student[] = [];
    const links: StudentLink[] = [];
    const nodeIds = new Set<string>();

    for (let i = 0; i < studentData.length; i++) {
        console.log(studentData[i]);
        const current = studentData[i];
        const { fullname, cohort, coach, id, ..._ } = current;

        if (!nodeIds.has(id)) {
            nodes.push({
                id: i + 1,
                fullname,
                cohort,
                coach,
            });
            nodeIds.add(id);
        }
    }

    return { nodes, links };
};
