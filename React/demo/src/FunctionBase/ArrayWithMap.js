import React from 'react';
import { Table } from 'react-bootstrap';

export default function ArrayWithMap() {
    // const student = ["umesh", "dishant", "arpit", "dhaval"]
    const emp = [
        {
            name: 'umesh',
            email: 'umesh@gmail.com',
            Address: [
                { hno: '01', city: 'ahmedabad', state: 'gujarat' },
                { hno: '02', city: 'rejkot', state: 'gujarat' },
                { hno: '03', city: 'surat', state: 'gujarat' },
            ],
        },
        {
            name: 'dishant',
            email: 'dishant@gmail.com',
            Address: [
                { hno: '01', city: 'ahmedabad', state: 'gujarat' },
                { hno: '02', city: 'rejkot', state: 'gujarat' },
                { hno: '03', city: 'surat', state: 'gujarat' }  
            ],
        },
        {
            name: 'arpit',
            email: 'arpit@gmail.com',
            Address: [
                { hno: '01', city: 'ahmedabad', state: 'gujarat' },
                { hno: '02', city: 'rejkot', state: 'gujarat' },
                { hno: '03', city: 'surat', state: 'gujarat' },
            ],
        },
    ];
    return (
        <div>
            <h1>Name</h1>
            {/* {
                student.map((item) =>
                    <h1>{item}</h1>
                )
            } */}
            <Table>
                <thead>
                    <tr>
                        <th>index</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {emp.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>
                                <Table>
                                    <tbody>
                                        {item.Address.map((data, i) => (
                                            <tr key={i}>
                                                <td>{i + 1}</td>
                                                <td>{data.hno}</td>
                                                <td>{data.city}</td>
                                                <td>{data.state}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
