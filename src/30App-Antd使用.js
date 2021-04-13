import React, { Component, PureComponent } from "react";
import { Table } from 'antd';


const columns = [
    {
        title: 'Span名称',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '时间轴',
        dataIndex: 'duration',
        key: 'duration',
    },
    {
        title: '应用名称',
        dataIndex: 'operationName',
        key: 'operationName',
    },
    {
        title: '开始时间',
        dataIndex: 'timestamp',
        key: 'timestamp',
    },
    {
        title: 'IP地址',
        dataIndex: 'serviceIp',
        key: 'serviceIp',
    },
    {
        title: '状态',
        dataIndex: 'state',
        key: 'state',
    },
];

const data = [
    {
        key: 1,
        name: 'John Brown sr.',
        duration: 60,
        operationName:'App1',
        timestamp:'2020-12-15 12:00:00',
        serviceIp:'192.168.0.0.1',
        state:true ,
        children: [
            {
                key: 11,
                name: 'John Brown',
                duration: 42,
                operationName:'App1',
                timestamp:'2020-12-15 12:00:00',
                serviceIp:'192.168.0.0.1',
                state:true ,
            },
            {
                key: 12,
                name: 'John Brown jr.',
                duration: 30,
                operationName:'App1',
                timestamp:'2020-12-15 12:00:00',
                serviceIp:'192.168.0.0.1',
                state:true,
                children: [
                    {
                        key: 121,
                        name: 'Jimmy Brown',
                        duration: 16,
                        operationName:'App1',
                        timestamp:'2020-12-15 12:00:00',
                        serviceIp:'192.168.0.0.1',
                        state:true ,
                    },
                ],
            },
        ],
    },
    {
        key: 2,
        name: 'Joe Black',
        duration: 32,
        operationName:'App1',
        timestamp:'2020-12-15 12:00:00',
        serviceIp:'192.168.0.0.1',
        state:true ,
    },
];

function App() {

    return (
        <div className="container">
            <Table
                columns={columns}
                dataSource={data}
                pagination={{hideOnSinglePage:true}}
            />
        </div>
    );
}

export default App;
