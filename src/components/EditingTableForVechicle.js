import React, { useContext, useState, useEffect, useRef } from "react";
import { Table, Input, Button, Popconfirm, Form, Select } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import "./styles.css";
import Checkbox from "antd/lib/checkbox/Checkbox";
import useApi from "src/core/useApi";
const EditableContext = React.createContext(null);
const { Option } = Select;
const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  let api=useApi();
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);
  const [customerData, setCustomerData] = useState([]);
  useEffect(() => {
    getAllCustomer();
  }, []);
  const getAllCustomer=async ()=>{
    let response=await api.invoke({endPoint:"http://localhost:8000/api/customers",method:"get"}); 
    setCustomerData(response);
    console.log('response',response);
  }

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };
  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };

  const handleUpload=async (event)=>{

// console.log("attachments",event.target.files)
    // handleSave({...record,images:formData});
  }
  let childNode = children;


  if (editable) {
  if(editing){

    switch (dataIndex) {
      // case "images":
      //   childNode=
      //   <Form.Item
      //   style={{
      //     margin: 0,
      //   }}
      //   name={dataIndex}
      //   rules={[
      //     {
      //       required: false,
      //       message: `${title} is required.`,
      //     },
      //   ]}
      // ><div className="mb-3">
      // <input ref={inputRef} type="file" class="form-control-file border"  name="fileInput" onChange={(event)=>handleUpload(event)} multiple="true" />
      // </div>
      // </Form.Item>
      //   break;
      case "party_name":
        childNode=  <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
      <Select ref={inputRef}  onChange={save}>
      {customerData.map(data=>
        <option value={`${data.name}`}>{data.name}</option>
        )} 
      </Select>
      </Form.Item>;
        break;
      case "gst":
      childNode=  <Form.Item
      style={{
        margin: 0,
      }}
      name={dataIndex}
      rules={[
        {
          required: true,
          message: `${title} is required.`,
        },
      ]}
    >
    <Select ref={inputRef}  onChange={save}> 
    <Option value="yes">YES</Option>
    <Option value="no">NO</Option>
    </Select>
    </Form.Item>;
      break;
      default:
        childNode=
        <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
        break;
    }
  }else{
    childNode=(<div
    className={"editable-cell-value-wrap"}
    style={{
      paddingRight: 24,
    }}
    onClick={toggleEdit}
  >
    {children}
  </div>)
  }


    // childNode = editing ? (
    
      // <Form.Item
      //   style={{
      //     margin: 0,
      //   }}
      //   name={dataIndex}
      //   rules={[
      //     {
      //       required: true,
      //       message: `${title} is required.`,
      //     },
      //   ]}
      // >
        
      
      //   {dataIndex==="party_name"?<Select ref={inputRef} onPressEnter={save} onBlur={save}> <Option value="jack">Jack</Option>
      // <Option value="lucy">Lucy</Option>
      // <Option value="disabled" disabled>
      //   Disabled
      // </Option>
      // <Option value="Yiminghe">yiminghe</Option></Select> :<Input ref={inputRef} onPressEnter={save} onBlur={save} />}
        
      // </Form.Item>
    // ) : (
      // <div
      //   className="editable-cell-value-wrap"
      //   style={{
      //     paddingRight: 24,
      //   }}
      //   onClick={toggleEdit}
      // >
      //   {children}
      // </div>
      
    // );
  }

  return <td {...restProps}>{childNode}</td>;
};

class EditingTableForVechicle extends React.Component {
  constructor(props) {
    super(props);
    
    this.columns = [
      {
        title: "* Vehicle No",
        dataIndex: "vehicle_no",
        editable: true,
        width: "200",
      },
      {
        title: "* DC.NO",
        dataIndex: "dc_no",
        editable: true,
        width: "200",
      },
      {
        title: "* From",
        dataIndex: "from_loc",
        editable: true,
        width: "200",
      },
      {
        title: "* To",
        dataIndex: "to_loc",
        editable: true,
        width: "200",
      },
      {
        title: "* Material",
        dataIndex: "material",
        editable: true,
        width: "200",
      },
      {
        title: "* Party Name",
        dataIndex: "party_name",
        editable: true,
        width: "200",
      },
      {
        title: "* Rate",
        dataIndex: "rate",
        editable: true,
        width: "200",
      },
      {
        title: "* Weight",
        dataIndex: "weight",
        editable: true,
        width: "200",
      },
      {
        title: "* GST",
        dataIndex: "gst",
        editable: true,
        width: "200",
      },
      {
        title: "* Payment Type",
        dataIndex: "payment_type",
        editable: true,
        width: "200",
      },
      {
        title: "* Diseal Rate",
        dataIndex: "diesel_rt",
        editable: true,
        width: "200",
      },
      {
        title: "* Diseal Qty",
        dataIndex: "diesel_qty",
        editable: true,
        width: "200",
      },
      {
        title: "* Loading Quantity",
        dataIndex: "loading_quantity",
        editable: true,
        width: "200",
      },
      {
        title: "* Accepted Quantity",
        dataIndex: "accepted_quantity",
        editable: true,
        width: "200",
      },
      {
        title: "* Logistic Rent",
        dataIndex: "logistic_rent",
        editable: true,
        width: "200",
      },
      {
        title: "* Lead",
        dataIndex: "lead",
        editable: true,
        width: "200",
      },
      {
        title: "* Date",
        dataIndex: "date",
        editable: true,
        width: "200",
      },
      {
        title: "* PUC",
        dataIndex: "puc",
        editable: true,
        width: "200",
      },
      {
        title: "* Expences",
        dataIndex: "expences",
        editable: true,
        width: "200",
      },
      {
        title: "* Driver Name",
        dataIndex: "driver_name",
        editable: true,
        width: "200",
      },
      {
        title: "* Profit",
        dataIndex: "profit",
        editable: true,
        width: "200",
      },
      {
        title: "* Tot Amt",
        dataIndex: "total_amount",
        editable: true,
        width: "200",
      },
      
      
      {
        title: "",
        dataIndex: "operation",
        render: (_, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm
              title="Sure to delete?"
              onConfirm={() => this.handleDelete(record.key)}
            >
              <DeleteOutlined style={{color:"black"}} />
            </Popconfirm>
          ) : null,
      },
    ];
    this.state = {
      dataSource: [],
      count: 2,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      JSON.stringify(prevProps.rowData) !== JSON.stringify(this.props.rowData)
    ) {
      this.setState({
        dataSource: this.props.rowData,
      });
    }
  }

  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter((item) => item.key !== key),
    });
  };

  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      vehicle_no: "",
      dc_no: "",
      from_loc: "",
      to_loc: "",
      material: "",
      party_name: "",
      rate: "",
      scale: "",
      weight:"",
      gst:"",
      payment_type:"",
      diesel_rt:"",
      diesel_qty:"",
      loading_quantity:"",
      accepted_quantity:"",
      logistic_rent:"",
      lead:"",
      date:"",
      puc:"",
      total_amount: "",
      expences: "",
      driver_name: "",
      profit: "",
      
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };

  handleSave = (row) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState(
      {
        dataSource: newData,
      },
      () => this.props.getTableData(this.state.dataSource)
    );
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
          width:col.width
        }),
      };
    });
  
    return (
      <div style={{ width: "100%" }}>
         {this.props.view?"":<Button
          onClick={this.handleAdd}
          type="primary"
          style={{
            marginBottom: 16,
          }}
        >
          Add a row
        </Button>}
        <Table
          components={components}
          
          className="editingTable"
          rowClassName={() => "editable-row"}
          bordered
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          scroll={{ x: 4200 }}
        />
      </div>
    );
  }
}

export default EditingTableForVechicle;
