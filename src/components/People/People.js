import React, { Component } from "react";
import "./People.css";
import { Container } from "flux/utils";
import PeopleStore from "../../stores/PeopleStore";
import PeopleActions from "../../actions/PeopleActions";
import 'antd/dist/antd.css';
import { Table ,Divider } from 'antd';
import { Link } from "react-router-dom";
import moment from 'moment';
class _People extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   loading: false,
    // }
  }

  static getStores() {
    return [PeopleStore];
  }

  static calculateState(prevState) {
    const pState = PeopleStore.getState();
    return {
      listPeople: pState.listPeople || [],
      pagination: { total: pState.listPeople.count, current: pState.activePage, pageSize: 10, showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items` }
    }
  }
  componentDidMount() {  
    PeopleActions.getAllPeople({ page: JSON.parse(localStorage.getItem('page')) || 1 });
   
  }

  handleTableChange = (pagination, filters, sorter) => {
    localStorage.setItem('page', JSON.stringify(pagination.current));       
      PeopleActions.getAllPeople({ page: pagination.current }); 
  }

  render() {
    const loading = typeof this.state.listPeople.results === 'undefined'? true: false;
    // this.setState({
    //   loading: typeof this.state.listPeople.results === 'undefined'? true: false
    // })
    const listPeople = typeof this.state.listPeople.results !== 'undefined' ? this.state.listPeople.results.map((ele, index) => ({
      key: index, gender: ele.gender,
      name:
        <Link to={{
          pathname: `${this.props.match.url}${ele['url'].substring(ele['url'].indexOf('/api') + 5, ele['url'].lenght)}`,
          state: { people: ele }
        }}>
          {ele['name']}</Link>,
      hair_color: ele.hair_color, height: ele.height, mass: ele.mass, skin_color: ele.skin_color, edited: moment(ele.edited).format('YYYY-MM-DD h:mm:ss'), eye_color: ele.eye_color, created: moment(ele.created).format('YYYY-MM-DD h:mm:ss'), birth_year: ele.birth_year
    })) : [];
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      width: '12%',
    }, {
      title: 'Height',
      dataIndex: 'height',
      width: '8%',
    }, {
      title: 'Mass',
      dataIndex: 'mass',
      width: '8%',
    }, {
      title: 'Hair Color',
      dataIndex: 'hair_color',
      width: '8%',
    }, {
      title: 'Skin Color',
      dataIndex: 'skin_color',
      width: '8%',
    }, {
      title: 'Eye Color',
      dataIndex: 'eye_color',
      width: '8%',
    }, {
      title: 'Birth Year',
      dataIndex: 'birth_year',
      width: '8%',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      width: '6%',
    }, {
      title: 'Created',
      dataIndex: 'created',
      width: '15%',
    }, {
      title: 'Edited',
      dataIndex: 'edited',
      width: '15%',
    }];

    return (
      <div >
       <Divider>Star Wars universe</Divider>
        <Table columns={columns}
          dataSource={listPeople}
          pagination={this.state.pagination}
          onChange={this.handleTableChange}
          loading={loading}
          bordered={true}
          size="small"
          align="right"
        />
      </div>
    );
  }
}

const People = Container.create(_People);
export default People;