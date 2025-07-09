import React from 'react';
import './Examples.css';

const Examples = () => {
    // Data for different time complexities
    const constantData = [
        { n: 1, operations: 1 },
        { n: 10, operations: 1 },
        { n: 100, operations: 1 },
        { n: 1000, operations: 1 },
        { n: 10000, operations: 1 }
    ];

    const linearData = [
        { n: 1, operations: 1 },
        { n: 10, operations: 10 },
        { n: 100, operations: 100 },
        { n: 1000, operations: 1000 },
        { n: 10000, operations: 10000 }
    ];

    const logarithmicData = [
        { n: 1, operations: 0 },
        { n: 10, operations: 3.32 },
        { n: 100, operations: 6.64 },
        { n: 1000, operations: 9.97 },
        { n: 10000, operations: 13.29 }
    ];

    const quadraticData = [
        { n: 1, operations: 1 },
        { n: 10, operations: 100 },
        { n: 100, operations: 10000 },
        { n: 1000, operations: 1000000 },
        { n: 10000, operations: 100000000 }
    ];

    const createBarChart = (data, title, color) => {
        const maxOperations = Math.max(...data.map(d => d.operations));
        const maxN = Math.max(...data.map(d => d.n));
        
        return (
            <div className="chart-container">
                <h3>{title}</h3>
                <div className="chart">
                    {data.map((item, index) => (
                        <div key={index} className="bar-group">
                            <div 
                                className="bar" 
                                style={{
                                    height: `${(item.operations / maxOperations) * 200}px`,
                                    backgroundColor: color
                                }}
                            >
                                <span className="bar-value">{item.operations.toFixed(2)}</span>
                            </div>
                            <div className="bar-label">n={item.n}</div>
                        </div>
                    ))}
                </div>
                <div className="chart-axis">
                    <span>0</span>
                    <span>{maxOperations.toLocaleString()}</span>
                </div>
            </div>
        );
    };

    return (
        <div className="examples-container">
            <h1 style={{ color: "#fff" }}>Complejidad Temporal - Ejemplos Visuales</h1>
            
            <div className="complexity-grid">
                {/* O(1) - Constante */}
                <div className="complexity-card">
                    <h2>O(1) - Complejidad Constante</h2>
                    {createBarChart(constantData, "Acceso directo a array", "#4CAF50")}
                    <div className="example-code">
                        <h4>Ejemplo:</h4>
                        <pre>
{`// Acceso directo a un elemento del array
const array = [1, 2, 3, 4, 5];
const element = array[2]; // O(1)

// Acceso a propiedad de objeto
const user = { name: "Juan", age: 25 };
const name = user.name; // O(1)`}
                        </pre>
                        <p><strong>Característica:</strong> El tiempo de ejecución no depende del tamaño de entrada.</p>
                    </div>
                </div>

                {/* O(n) - Lineal */}
                <div className="complexity-card">
                    <h2>O(n) - Complejidad Lineal</h2>
                    {createBarChart(linearData, "Búsqueda lineal", "#2196F3")}
                    <div className="example-code">
                        <h4>Ejemplo:</h4>
                        <pre>
{`// Búsqueda lineal en array
function findElement(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
} // O(n)

// Recorrer array completo
arr.forEach(item => console.log(item)); // O(n)`}
                        </pre>
                        <p><strong>Característica:</strong> El tiempo crece proporcionalmente al tamaño de entrada.</p>
                    </div>
                </div>

                {/* O(log n) - Logarítmica */}
                <div className="complexity-card">
                    <h2>O(log n) - Complejidad Logarítmica</h2>
                    {createBarChart(logarithmicData, "Búsqueda binaria", "#FF9800")}
                    <div className="example-code">
                        <h4>Ejemplo:</h4>
                        <pre>
{`// Búsqueda binaria
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
} // O(log n)`}
                        </pre>
                        <p><strong>Característica:</strong> El tiempo crece logarítmicamente, muy eficiente para grandes datasets.</p>
                    </div>
                </div>

                {/* O(n²) - Cuadrática */}
                <div className="complexity-card">
                    <h2>O(n²) - Complejidad Cuadrática</h2>
                    {createBarChart(quadraticData, "Bubble Sort", "#F44336")}
                    <div className="example-code">
                        <h4>Ejemplo:</h4>
                        <pre>
{`// Bubble Sort
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
} // O(n²)

// Comparaciones anidadas
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        // operación
    }
} // O(n²)`}
                        </pre>
                        <p><strong>Característica:</strong> El tiempo crece cuadráticamente, ineficiente para grandes datasets.</p>
                    </div>
                </div>
            </div>

            <div className="comparison-table">
                <h2>Comparación de Complejidades</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Complejidad</th>
                            <th>n=10</th>
                            <th>n=100</th>
                            <th>n=1000</th>
                            <th>n=10000</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>O(1)</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>O(log n)</td>
                            <td>3.32</td>
                            <td>6.64</td>
                            <td>9.97</td>
                            <td>13.29</td>
                        </tr>
                        <tr>
                            <td>O(n)</td>
                            <td>10</td>
                            <td>100</td>
                            <td>1000</td>
                            <td>10000</td>
                        </tr>
                        <tr>
                            <td>O(n²)</td>
                            <td>100</td>
                            <td>10000</td>
                            <td>1000000</td>
                            <td>100000000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Examples;