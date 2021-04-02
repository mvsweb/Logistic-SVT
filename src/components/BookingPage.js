import React, { useEffect, useRef, useState } from "react";
import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";
import {
  MailOutlined,
  MobileOutlined,
  UserOutlined,
  PercentageOutlined,
} from "@ant-design/icons";
import moment from "moment";
import EditingTableInBooking from "./EditingTableInBooking";
import EditingTableForVechicle from "./EditingTableForVechicle";
import useApi from "src/core/useApi";
import TextArea from "antd/lib/input/TextArea";

const { Option } = Select;

const BookingPage = (props) => {
  const [form] = Form.useForm();
  let containerRef = useRef();
  let api=useApi();
  
  const [tableData,setTableData]=useState([]);
  const [vehicleTableData, setVehicleTableData] = useState([]);
  useEffect(() => {
    
    let lgScreen = window.matchMedia("(min-width: 768px)").matches;
    if (lgScreen) {
      containerRef.current.style.padding = "20px 60px";
    }
    
  }, []);
  
  useEffect(() => {
    if(props?.location?.type === "view"){
      form.setFieldsValue(props.location.record);
      setTableData(JSON.parse(props.location.record.items));
      setVehicleTableData(props.location.record.vehicle_details);
      // console.log(JSON.parse(props.location.record.vehicle_details))
    }
  }, [props?.location?.type]);

  const handleSubmit =async (value) => {
    let bookingDetails={vehicle_details:vehicleTableData}
    console.log('upload',bookingDetails);
    let response=await api.invoke({endPoint:"http://localhost:8000/api/addBooking",method:"post",data:bookingDetails});
    if(response.status===1){
      form.resetFields();
      setVehicleTableData([]);
    }else{
      alert('Something Went Wroung You Booking Couldn`t able to create!');
    }

    console.log("called", response);

  };

  
  

  const getTableDataForVehicle = (data) => {
    let vehicle_data=[...data];
    let lastRow=vehicle_data.pop();
    if(parseInt(lastRow.rate) && parseInt(lastRow.weight)){
      
      let total_amt=parseInt(lastRow.rate) * parseInt(lastRow.weight);
      lastRow.total_amount=total_amt;
    }
     if(lastRow.gst==="yes" && lastRow.total_amount){
        let calculatedGST=lastRow.total_amount+(lastRow.total_amount*5/100);
        lastRow.total_amount=calculatedGST.toFixed(2);
     }
    console.log('data',vehicle_data,lastRow)
    setVehicleTableData([...vehicle_data,lastRow]);
  };

  


  const handleReset = () => {
    form.resetFields();
    setTableData([]);
  };

  const handleUpload=(res)=>{
    let images=document.getElementById("images").files;
    let name=document.getElementById("name").value;
    let data = new FormData()
    data.append('images',images)
    data.append('name', name);

  //   let settings = { headers: { 'content-type': 'multipart/form-data' },method: "POST" }

  //   fetch('http://localhost:8000/api/uploadFile', data, settings)
  //  .then(response => {
  //   console.log(response)
  //  }).catch(response => {
  //   console.log(response)
  //  })

  // }
  fetch('http://localhost:8000/api/uploadFile', {
  // headers: {
  //   'content-type': 'multipart/form-data',
  // },
  method: "POST",
  body: data,
})
.then(response => response.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));
}

  return (
    <div ref={containerRef} style={{ padding: "20px 10px" }}>
      <div className="file_upload">
      <Form style={{ paddingTop: 20,paddingLeft:180 }}  >
        <Row>
              <Col span={5}>
                <label>Name *</label>
              </Col>
              <Col span={11}>
                <Form.Item
                  name="name"
                  rules={[
                    { required: true, message: "Please enter your name!" },
                  ]}
                >
                  <Input placeholder="Name" prefix={<UserOutlined />} id="name" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={5}>
                <label>Images *</label>
              </Col>
              <Col span={11}>
              <input type="file" multiple="true" class="form-control-file border" id="images"/>
              </Col>
            </Row>
        
            <Col span={11} >
            <Form.Item>
              <Button style={{marginLeft:"80%",marginTop:"5px"}} type={"primary"} danger htmlType="submit" onClick={handleUpload}>
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Form>
      </div>
      <Row>
        <EditingTableForVechicle
          getTableData={getTableDataForVehicle}
          rowData={vehicleTableData}
          view={props.location.type==="view"}
        />
        <hr />
        {props.location.type==="view"?"":<Row gutter={16}>
          <Col>
            <Form.Item>
              <Button onClick={handleSubmit} type={"primary"} danger htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
          <Col>
            <Button onClick={handleReset}>Reset</Button>
          </Col>
        </Row>}
        </Row>
    </div>
  );
};

export default BookingPage;
