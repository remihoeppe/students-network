# Nology Students Network

## Project outline

### 📘 Project Overview

This project visualizes the network of students I’ve taught since 2022 (130+ and growing) using a node-link diagram. Each student is represented as a node, and connections between them represent shared experiences — initially based on being part of the same cohort.

The goal is to create a meaningful and interactive map of this community that evolves over time.

🎯 Purpose
To track and visualize the network of students across cohorts.

To explore how shared learning environments foster connections.

To provide an evolving tool that highlights career paths and professional overlaps as students progress into the workforce.

### Features

#### V.1.0

🧑‍🎓 Cohort-Based Connections: Each student is linked to others in their cohort, making it easy to see groups that learned together.

🔍 Interactive Diagram: Hover, drag, and explore the network dynamically.

🧩 Scalable Design: As new students are added, the diagram updates to reflect the evolving network.

#### V.2.0

🏢 Future Enhancements:

-   Workplace Connections: In a future iteration, the diagram will also show links between students who go on to work at the same company, allowing users to trace career paths and emerging clusters in the tech industry.
-   Integrate a simple admin panel to add/update students and metadata

### 🛠️ Tech Stack

-   Frontend: React TS, leveraging react-force-graph-3d (which Uses ThreeJS/WebGL for 3D rendering and either d3-force-3d or ngraph for the underlying physics engine.)

-   Data: JSON/CSV for student records (initially static)

-   Hosting: [e.g. GitHub Pages, Vercel, Netlify, etc.] TBC

## What's a Linked Node Diagram?

A linked node diagram (also called a node-link diagram) is a type of visual representation used to show relationships or connections between entities, often referred to as nodes. The nodes are typically connected by lines or arrows called links or edges.

Key Elements:

-   Nodes: Represent entities like people, devices, data points, or abstract concepts.

-   Links/Edges: Represent the relationships or interactions between the nodes.

### Use Cases

-   Network diagrams (e.g., computer networks, social networks)
-   Graph theory visualization
-   Mind maps
-   Family trees
-   Organization charts
-   Data flow diagrams
