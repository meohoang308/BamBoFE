import React, { Component } from "react";
import 'antd/dist/antd.css';
import { List } from 'antd';
import { Row, Col } from 'antd';
export default class PeopleDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = this.props.location.state.people;
        return <div>
            <Row type="flex" justify="center" style={{marginBottom: '20px' }}>{data.name} </Row>

            <Row>
                <Col span={12}>   <List
                    size="small"
                    header={<div>Films</div>}
                    bordered
                    dataSource={data.films}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                /></Col>
                <Col span={12}>   <List
                    size="small"
                    header={<div>Species</div>}
                    bordered
                    dataSource={data.species}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                /></Col>
            </Row>

            <Row>
                <Col span={12}>   <List
                    size="small"
                    header={<div>Starships</div>}
                    bordered
                    dataSource={data.starships}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                /></Col>
                <Col span={12}>   <List
                    size="small"
                    header={<div>Vehicles</div>}
                    bordered
                    dataSource={data.vehicles}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                /></Col>
            </Row>


        </div>;
    }
}

