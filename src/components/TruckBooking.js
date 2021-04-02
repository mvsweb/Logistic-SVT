import React, { useEffect, useRef } from "react";
import { Button, Col, DatePicker, Form, Input, Row, Select } from "antd";
import {
  MailOutlined,
  MobileOutlined,
  UserOutlined,
  CarOutlined,
} from "@ant-design/icons";
import moment from "moment";
import useApi from "src/core/useApi";

const { Option } = Select;
const { TextArea } = Input;

const TruckBooking = (props) => {
  const [form] = Form.useForm();
  let containerRef = useRef();
  let api = useApi();

  useEffect(() => {
    if(props?.location?.type === "view"){
      console.log(props.location.record);
      let obj={...props.location.record};
      delete obj.permit_expiry_date;
      form.setFieldsValue(obj);
    }
  }, [props?.location?.type]);
  const handleSubmit = async (value) => {
    let vehicleDetails={...value,permit_expiry_date:new Date(value.permit_expiry_date).toLocaleDateString()}
    let response=await api.invoke({endPoint:"http://localhost:8000/api/updateVehicle",method:"post",data:vehicleDetails});
    if(response.status===1){
      form.resetFields();
    }else{
      alert('Something Went Wroung You Record Couldn`t able to create!');
    }
    console.log("called", response);
  };

  const handleReset = () => {
    form.resetFields();
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
        <p style={{ fontSize: "calc(10px + 1vmin)" }}>Vehicle</p>}
      </Row>
      <Row>
        <p style={{ fontSize: "calc(10px + 1vmin)" }}>Add New Truck Details</p>
      </Row>
      <hr />
      <Form style={{ paddingTop: 20 }} form={form} onFinish={handleSubmit}>
        <Row>
          <Col xl={12}>
            <Row>
              <Col span={11}>
                <label>Vechicle Provider *</label>
              </Col>
              <Col span={11}>
                <Form.Item
                  name="vehicle_provider"
                  rules={[
                    {
                      required: true,
                      message: "Please select vechicle provider!",
                    },
                  ]}
                >
                  <Select placeholder="Select">
                    <Option value="Owned By Company">Owned By Company</Option>
                    <Option value="Third Party Carrier">
                      Third Party Carrier
                    </Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={11}>
                <label>Work Service Location *</label>
              </Col>
              <Col span={11}>
                <Form.Item
                  name="service_loc"
                  rules={[
                    {
                      required: true,
                      message: "Please enter work service location!",
                    },
                  ]}
                >
                  <Input placeholder="Work Service Location" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={11}>
                <label>Vehicle Number *</label>
              </Col>
              <Col span={11}>
                <Form.Item
                  name="vehicle_no"
                  rules={[
                    { required: true, message: "Please enter vehicle number!" },
                  ]}
                >
                  <Input
                    placeholder="Vehicle Number"
                    maxLength={10}
                    prefix={<CarOutlined />}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={11}>
                <label>Transportation Type *</label>
              </Col>
              <Col span={11}>
                <Form.Item
                  name="transport_type"
                  rules={[
                    {
                      required: true,
                      message: "Please select transportation type!",
                    },
                  ]}
                >
                  <Select placeholder="Select">
                    <Option value="In-Bound">In-Bound</Option>
                    <Option value="Out-Bound">Out-Bound</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={11}>
                <label>Vehicle Details *</label>
              </Col>
              <Col span={11}>
                <Form.Item
                  name="vehicle_details"
                  rules={[
                    {
                      required: true,
                      message: "Please enter vehicle details!",
                    },
                  ]}
                >
                  <TextArea placeholder="Vehicle Details" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={11}>
                <label>Permit of States *</label>
              </Col>
              <Col span={11}>
                <Form.Item
                  name="permit"
                  rules={[
                    {
                      required: true,
                      message: "Please enter permit of states!",
                    },
                  ]}
                >
                  <Input placeholder="Permit of States" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={11}>
                <label>Permit Expiry Date *</label>
              </Col>
              <Col span={11}>
                <Form.Item
                  name="permit_expiry_date"
                  rules={[
                    {
                      required: true,
                      message: "Please select permit expiry date!",
                    },
                  ]}
                >
                  <DatePicker
                    style={{ width: "100%" }}
                    format="DD/MM/YYYY"
                    disabledDate={(current) => {
                      return (
                        current &&
                        current < new Date(Date.now() - 24 * 60 * 60 * 1000)
                      );
                    }}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />
        <Row gutter={16}>
          <Col>
            <Form.Item>
              
              {props.location.type==="view"?"":<Button type={"primary"} danger htmlType="submit">
                Submit
              </Button>}
            </Form.Item>
          </Col>
          
          <Col>
          {props.location.type==="view"?"":<Button onClick={handleReset}>Reset</Button>}
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default TruckBooking;
