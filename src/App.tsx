import { useEffect, useState } from 'react';
import { convertCSVToObjects, convertCSVToText } from './data/Student';
import './styles/App.scss';
import { generateNetworkData } from './data/Graph';

const App = () => {
    const [data, setData] = useState<Record<string, string>[] | void>([]);

    async function loadData() {
        try {
            // src/data/students-data.csv
            const data = await convertCSVToObjects('./students-data.csv');
            setData(data);
        } catch (err) {
            console.error('Error loading network data:', err);
        }
    }

    useEffect(() => {
        console.log(data);
        generateNetworkData(data || []);
    }, [data]);

    useEffect(() => {
        loadData();
    }, []);
    return (
        <div>
            <h1>App</h1>
        </div>
    );
};

export default App;
