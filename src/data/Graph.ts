import { GraphData, Link, LinkType, Node } from './Student';

export const generateNetworkData = (
    studentData: Record<string, string>[],
): GraphData => {
    const nodes: Node[] = [];
    const studentLinks: Link[] = [];
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

        studentLinks.push({
            source: nodeId,
            target: mainCoach,
            value: 3, // Stronger connection weight
            type: LinkType.COACH,
        });
    }
    const cohortLinks = generateLinkByType(nodes, LinkType.COHORT);
    const workLinks = generateLinkByType(nodes, LinkType.WORK);
    const links = { cohortLinks, workLinks, ...studentLinks };

    return { nodes, links };
};

const generateLinkByType = (nodesList: Node[], type: LinkType): Link[] => {
    const cohortGroups = new Map<string, string[]>();
    const links: Link[] = [];
    nodesList
        .filter((node) => node.cohort)
        .forEach((node) => {
            if (!cohortGroups.has(node.cohort)) {
                cohortGroups.set(node.cohort, []);
            }
            cohortGroups.get(node.cohort)?.push(node.id);
            console.log(cohortGroups);
        });

    cohortGroups.forEach((students) => {
        for (let i = 0; i < students.length; i++) {
            for (let j = i + 1; j < students.length; j++) {
                links.push({
                    source: students[i],
                    target: students[j],
                    value: 1, // Weaker connection weight
                    type: type,
                });
            }
        }
    });

    return links;
};
