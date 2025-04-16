import { LinkType, Node, StudentLink } from './Student';

export const generateNetworkData = (
    studentData: Record<string, string>[],
): {} => {
    const nodes: Node[] = [];
    const links: StudentLink[] = [];
    const nodeIds = new Set<string>();

    for (let i = 0; i < studentData.length; i++) {
        const current = studentData[i];
        const { name, cohort, mainCoach, ..._ } = current;
        const nodeId = name.toLowerCase().split(' ').join('-');

        // Add student node if it doesn't exist
        if (!nodeIds.has(name)) {
            nodes.push({
                id: nodeId,
                name,
                cohort,
                coach: mainCoach,
            });
            nodeIds.add(nodeId);
        }

        links.push({
            source: nodeId,
            target: mainCoach,
            value: 3, // Stronger connection weight
            type: LinkType.COACH,
        });
    }

    return { nodes, links };
};
