import React from 'react'
import 'antd/dist/antd.css';
import { Table} from 'antd';

function Tabledis(props){
  console.log(props)
    
    const columns = [
      {
        title: 'Country',
        dataIndex:'Country',
        key: 'Country',
        sorter: (a, b) => a.Country.length - b.Country.length,
      },
      {
        title: 'Date',
        dataIndex: 'Date',
        key: 'Date',
      },
      {
        title: 'Confirmed',
        dataIndex: 'NewConfirmed',
        key: 'NewConfirmed',
        sorter: (a, b) => a.NewConfirmed - b.NewConfirmed,
      },
      {
        title: 'Recovered',
        dataIndex: 'NewRecovered',
        key: 'NewRecovered',
        sorter: (a, b) => a.NewRecovered - b.NewRecovered,
      },
      {
        title: 'Deaths',
        dataIndex: 'NewDeaths',
        key: 'NewDeaths',
        sorter: (a, b) => a.NewDeaths - b.NewDeaths,
      },
    ];
    
    const data = props.datafromApi
    return(
        <div >
    <Table  rowKey={"ID"} columns={columns} dataSource={data} /></div>
    )
}
export default Tabledis