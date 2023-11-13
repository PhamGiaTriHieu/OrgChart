import React, {useState, useEffect} from 'react';

// import {OrgChartComponent} from './OrgChart';
import * as d3 from 'd3';
import {OrgChartComponent} from './OrgChartComponent';
import dataMock from '../data/dataMock';

const OrgChartPortal = (props) => {
  const [data, setData] = useState(null);
  let addNodeChildFunc = null;

  function convertData(employees) {
    var result = [];

    // Tạo đối tượng cha (General Director)
    var generalDirector = employees.filter(function (employee) {
      return employee.line_manager === null;
    });
    for (let i of generalDirector) {
      if (i) {
        var generalDirectorObject = {
          employee_no: i.employee_no,
          title: i.title,
          full_name: i.full_name,
          id: 'director',

          children: [],
        };
        result.push(generalDirectorObject);

        // Đệ quy để tạo các đối tượng con
        // createSubordinates(generalDirectorObject, i.employee_no, employees);
      }
    }
    return result;
  }

  function createSubordinates(parent, managerEmployeeNo, employees) {
    var subordinates = employees.filter(function (employee) {
      return (
        employee.line_manager &&
        employee.line_manager.employee_no === managerEmployeeNo
      );
    });

    subordinates.forEach(function (subordinate) {
      var subordinateObject = {
        employee_no: subordinate.employee_no,
        title: subordinate.title,
        full_name: subordinate.full_name,

        children: [],
      };

      parent.children.push(subordinateObject);

      createSubordinates(subordinateObject, subordinate.employee_no, employees);
    });
  }

  const testData = convertData(dataMock);
  console.log(dataMock);

  function addNode() {
    const node = {
      nodeId: 'new Node',
      parentNodeId: 'O-6066',
    };

    addNodeChildFunc(node);
  }

  //   console.log('data: ', data);

  function onNodeClick(nodeId) {
    // console.log('d3', d3.event);
    alert('clicked ' + nodeId);
  }

  useEffect(() => {
    d3.csv(
      'https://raw.githubusercontent.com/bumbeishvili/sample-data/main/org.csv'
    ).then((data) => {
      setData(data);
    });
  }, [true]);
  return (
    <div>
      Click node to trigger action in parent or &nbsp;
      <button onClick={() => addNode()}>add node as root's child</button>
      <OrgChartComponent
        setClick={(click) => (addNodeChildFunc = click)}
        onNodeClick={onNodeClick}
        data={data}
      />
    </div>
  );
};

export default OrgChartPortal;
