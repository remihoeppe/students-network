import { useEffect, useState } from 'react';
import { convertCSVToObjects } from './data/csvUtils';
import './styles/App.scss';
import { generateNetworkData } from './data/Graph';
import { GraphData } from './data/Student';

const App = () => {
    const CSV_FILE = './students-data.csv';
    const [data, setData] = useState<Record<string, string>[]>([]);
    const [graphData, setGraphData] = useState<GraphData | null>(null);

    const loadData = async () => {
        try {
            setData(await convertCSVToObjects(CSV_FILE));
        } catch (err) {
            console.error('Error loading network data:', err);
        }
    };

    useEffect(() => {
        setGraphData(generateNetworkData(data));
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
