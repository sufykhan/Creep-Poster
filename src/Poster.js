import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Poster = () => {
    const dummyData = [
        { name: 'Model A', accuracy: 85 },
        { name: 'Model B', accuracy: 88 },
        { name: 'Our Model', accuracy: 92 },
    ];

    return (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 font-sans max-w-7xl mx-auto shadow-2xl rounded-lg">
            <header className="bg-indigo-700 text-white p-6 rounded-t-lg">
                <h1 className="text-4xl font-bold text-center mb-4">A Deep Learning Approach to Model Coarsening with Cahn-Hilliard Equation</h1>
                <div className="text-center text-lg">
                    <p className="font-semibold">Sufyan Khan<sup>1,2*</sup>, Maya K. Kini<sup>1,3</sup></p>
                    <p className="text-sm mt-2">
                        <sup>1</sup>Materials Engineering, IIT Jammu, India |
                        <sup>2</sup>Vymo, Bengaluru, India |
                        <sup>3</sup>School of Minerals, Metallurgical and Materials Engineering, IIT Bhubaneswar, India
                    </p>
                    <p className="text-sm mt-1">*sufyankhan9678@gmail.com</p>
                </div>
            </header>

            <div className="grid grid-cols-3 gap-6 mt-6">
                <div className="col-span-1 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4 text-indigo-700">Abstract</h2>
                    <p className="text-sm leading-relaxed">
                        We present a novel deep learning approach applied to the Cahn-Hilliard equation for modeling microstructure evolution and coarsening. Our method addresses the high computational complexity of traditional phase field modeling, enabling predictions at larger timescales. This work demonstrates the potential of machine learning in materials science, offering a computationally efficient alternative to conventional techniques.
                    </p>
                </div>

                <div className="col-span-1 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4 text-indigo-700">Introduction</h2>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li>Cahn-Hilliard equation: widely used for simulating microstructure evolution</li>
                        <li>Limitations of traditional phase field modeling: high computational complexity</li>
                        <li>Proposed solution: Deep learning approach to overcome these limitations</li>
                    </ul>
                </div>

                <div className="col-span-1 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4 text-indigo-700">Deep Learning Approach</h2>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li>Combination of Autoencoders and LSTM networks</li>
                        <li>Autoencoders: Extract spatial features from phase field images</li>
                        <li>LSTM: Capture temporal dependencies in image sequences</li>
                        <li>Objective: Predict next time frame of microstructure evolution</li>
                    </ul>
                </div>

                <div className="col-span-2 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4 text-indigo-700">Results: Model Performance</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <ResponsiveContainer width="100%" height={200}>
                                <BarChart data={dummyData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="accuracy" fill="#4F46E5" />
                                </BarChart>
                            </ResponsiveContainer>
                            <p className="text-center text-sm mt-2">Model Accuracy Comparison</p>
                        </div>
                        <div className="bg-gray-200 p-4 flex items-center justify-center">
                            <p className="text-center">[Placeholder for microstructure comparison]</p>
                        </div>
                    </div>
                    <p className="mt-4 text-sm">Figure: Left - Model accuracy comparison. Right - Predicted vs. actual microstructure at different time steps.</p>
                </div>

                <div className="col-span-1 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4 text-indigo-700">Methodology</h2>
                    <ol className="list-decimal pl-5 space-y-2 text-sm">
                        <li>Initial modeling: Fourier transform and Cahn-Hilliard equations</li>
                        <li>Deep learning architecture design (Autoencoder + LSTM)</li>
                        <li>Model training on simulated phase field data</li>
                        <li>Validation on unseen microstructures</li>
                        <li>Comparison with experimental observations and established models</li>
                    </ol>
                </div>

                <div className="col-span-3 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4 text-indigo-700">Conclusions</h2>
                    <ul className="list-disc pl-5 space-y-2 text-sm">
                        <li>Successful application of deep learning to Cahn-Hilliard equation for coarsening modeling</li>
                        <li>Capability to predict microstructure evolution at larger timescales</li>
                        <li>Computationally efficient alternative to conventional modeling techniques</li>
                        <li>Wide potential applicability in materials science problems</li>
                    </ul>
                </div>
            </div>

            <footer className="mt-6 text-center">
                <div className="bg-indigo-700 text-white p-4 rounded-lg">
                    <h2 className="text-xl font-bold mb-2">Acknowledgements & References</h2>
                    <p className="text-sm mb-2">Authors thank Dr. Suman Sarkar for his feedback.</p>
                    <p className="text-xs">
                        1. Cahn JW, Hilliard JE. J. Chem.Phys., 1958, 28:258–67 |
                        2. Cahn JW. Acta Metall., 1961, 9:795–801 |
                        3. Chen LQ. Annu. Rev. Mater. Res., 2002., 32:113–40
                    </p>
                </div>
                <p className="mt-4 text-sm font-semibold">CREEP 2024 | 28th July to 2nd August 2024, Bangalore (India)</p>
            </footer>
        </div>
    );
};

export default Poster;