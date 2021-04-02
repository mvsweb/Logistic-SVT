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
  const [tableData, setTableData] = useState([]);
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
    
    let response=await api.invoke({endPoint:"http://localhost:8000/api/customers/create",method:"post",data:value});
      form.resetFields();
    console.log("called", response);

  };

  const getTableData = (data) => {
    if (data.length > 0) {
      let calcTotalWeight = 0;
      data.map((list) => {
        calcTotalWeight = calcTotalWeight + parseInt(list.weight);
      });
      setTableData(data);
      form.setFieldsValue({
        total_weight: calcTotalWeight,
      });
      updateFinalRate();
    }
  };
  // useEffect(()=>{
  //   let vehicleData=[...vehicleTableData];
  //   let lastRow=vehicleData.pop();
    
  //   if(lastRow?.gst && lastRow.total_amount){
  //     let updatedRowData={...lastRow,total_amount:5000}
  //     // lastRow.total_amount=43456546;
  //     setVehicleTableData([...vehicleData,updatedRowData])
  //   }
  // },[vehicleTableData])

  const getTableDataForVehicle = (data) => {
    let vehicle_data=[...data];
    let lastRow=vehicle_data.pop();
    if(parseInt(lastRow.rate) && parseInt(lastRow.weight)){
      
      let total_amt=parseInt(lastRow.rate) * parseInt(lastRow.weight);
      lastRow.total_amount=total_amt;
    }
     if(lastRow.gst===true && lastRow.total_amount){
        let calculatedGST=lastRow.total_amount+(lastRow.total_amount*5/100);
        lastRow.total_amount=calculatedGST.toFixed(2);
     }
    console.log('data',vehicle_data,lastRow)
    setVehicleTableData([...vehicle_data,lastRow]);
  };

  const updateFinalRate = () => {
    let value = form.getFieldValue();
    let ratePerKg = parseFloat(value.rate);
    let serviceTax = parseFloat(value.tax);
    let totalWeight = parseFloat(value.total_weight);
    let totalPrice = ratePerKg * totalWeight;
    let taxRate = (totalPrice * serviceTax) / 100;
    let finalPrice = totalPrice + taxRate;
    if (ratePerKg && totalWeight)
      form.setFieldsValue({
        total_amount: parseFloat(finalPrice) ? finalPrice : 0,
      });
  };

 const handleTaxChange=()=>{
  updateFinalRate();
 }
  const handleReset = () => {
    form.resetFields();
    setTableData([]);
  };

  return (
    <div ref={containerRef} style={{ padding: "20px 10px" }}>
      <Row>
        
        {props.location.type==="view"?<Button
          onClick={()=>props.history.goBack()}
          type="primary"
          style={{
            marginBottom: 16,
          }}
        >
          Back
        </Button>:
        <p style={{ fontSize: "calc(10px + 1vmin)", }}>Customer Details</p>}
      </Row>
      <hr />
      <Form style={{ paddingTop: 20,paddingLeft:180 }} form={form} onFinish={handleSubmit}>
        <Row>
          <Col xl={12} md={6}>
            <Row>
              <Col span={11}>
                <label>Name *</label>
              </Col>
              <Col span={11}>
                <Form.Item
                  name="name"
                  rules={[
                    { required: true, message: "Please enter your name!" },
                  ]}
                >
                  <Input placeholder="Name" prefix={<UserOutlined />} />
                </Form.Item>
              </Col>
            </Row>
            
            <Row>
              <Col span={11}>
                <label>Email *</label>
              </Col>
              <Col span={11}>
                <Form.Item
                  name="email"
                  rules={[
                    { type: "email", message: "Please Enter Valid Mail" },
                    { required: true, message: "Please enter your mail!" },
                  ]}
                >
                  <Input placeholder="Email" prefix={<MailOutlined />} />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={11}>
                <label>Mobile Number *</label>
              </Col>
              <Col span={11}>
                <Form.Item
                  name="mobile"
                  rules={[
                    { required: true, message: "Please enter your number!" },
                  ]}
                >
                  <Input
                    placeholder="Mobile Number"
                    maxLength={10}
                    prefix={<MobileOutlined />}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={11}>
                <label>PAN *</label>
              </Col>
              <Col span={11}>
                <Form.Item
                  name="pan_no"
                  rules={[
                    { required: true, message: "Please enter your name!" },
                  ]}
                >
                  <Input placeholder="PAN"  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={11}>
                <label>Aadhaar *</label>
              </Col>
              <Col span={11}>
                <Form.Item
                  name="aadhaar_no"
                  rules={[
                    { required: true, message: "Please enter your name!" },
                  ]}
                >
                  <Input placeholder="Aadhaar"  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={11}>
                <label>Address *</label>
              </Col>
              <Col span={11}>
               
                <Form.Item
                  name="address"
                  rules={[
                    {
                      required: true,
                      message: "Please enter receiver address",
                    },
                  ]}
                >
                  <TextArea placeholder="Receiver Address" />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          </Row>
        {props.location.type==="view"?"":<Row gutter={16}>
          <Col>
            <Form.Item>
              <Button type={"primary"} danger htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
          <Col>
            <Button onClick={handleReset}>Reset</Button>
          </Col>
        </Row>}
        
      </Form>
    </div>
  );
};

export default BookingPage;
