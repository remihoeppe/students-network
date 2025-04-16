import { useEffect, useState } from 'react';
import { convertCSVToObjects } from './data/csvUtils';
import './styles/App.scss';
import { generateNetworkData } from './data/Graph';

const App = () => {
    const [data, setData] = useState<Record<string, string>[]>([]);
    const [graphData, setGraphData] = useState<GraphData | null>(null);

    async function loadData() {
        try {
            // src/data/students-data.csv

            setData(await convertCSVToObjects('./students-data.csv'));
        } catch (err) {
            console.error('Error loading network data:', err);
        }
    }

    useEffect(() => {
        console.log(generateNetworkData(data));
        console.log(data);
    }, [data]);

    useEffect(() => {
        loadData();
    }, []);
    return (
        <div>
            <h1>App HI</h1>
        </div>
    );
};

export default App;
