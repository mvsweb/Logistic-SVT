import React, {
  useContext,
  useState,
  useEffect,
  useRef,
  createRef,
} from "react";
import { Table, Input, Button, Popconfirm, Form, Space, Col } from "antd";
import {
  EyeOutlined,
  FileTextOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import useApi from "src/core/useApi";
const EditableContext = React.createContext(null);

const ListBooking = (props) => {
  const [dataSource, setDataSource] = useState([]);
  const [searchedColumn, setSearchedColumn] = useState("");
  const [searchText, setSearchText] = useState("");
  const [selectedRow,setSelectedRow]=useState([]);
  const searchInput = createRef();
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current.select(), 100);
      }
    },
    render: (text) => (searchedColumn === dataIndex ? text : text),
  });

  let handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  let handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const columns = [
    {
      title: "* Customer Name",
      dataIndex: "party_name",
      editable: false,
      width: "200",
      ...getColumnSearchProps("customer_name"),
    },
    {
      title: "* Vehicle No",
      dataIndex: "vehicle_no",
      editable: false,
      width: "200",
      ...getColumnSearchProps("vehicle_no"),
    },
    {
      title: "* DC.NO",
      dataIndex: "dc_no",
      editable: false,
      width: "200",
    },
    {
      title: "* From",
      dataIndex: "from_loc",
      editable: false,
      width: "200",
    },
    {
      title: "* To",
      dataIndex: "to_loc",
      editable: false,
      width: "200",
    },
    {
      title: "* Material",
      dataIndex: "material",
      editable: false,
      width: "200",
    },
    {
      title: "* Party Name",
      dataIndex: "party_name",
      editable: false,
      width: "200",
      ...getColumnSearchProps("party_name"),
    },
    {
      title: "* Rate",
      dataIndex: "rate",
      editable: false,
      width: "200",
    },
    {
      title: "* Weight",
      dataIndex: "weight",
      editable: false,
      width: "200",
    },
    {
      title: "* GST",
      dataIndex: "gst",
      editable: false,
      width: "200",
      ...getColumnSearchProps("gst"),
    },
    {
      title: "* Payment Type",
      dataIndex: "payment_type",
      editable: false,
      width: "200",
    },
    {
      title: "* Diseal Rate",
      dataIndex: "diesel_rt",
      editable: false,
      width: "200",
    },
    {
      title: "* Diseal Qty",
      dataIndex: "diesel_qty",
      editable: false,
      width: "200",
    },
    {
      title: "* Loading Quantity",
      dataIndex: "loading_quantity",
      editable: false,
      width: "200",
    },
    {
      title: "* Accepted Quantity",
      dataIndex: "accepted_quantity",
      editable: false,
      width: "200",
    },
    {
      title: "* Logistic Rent",
      dataIndex: "logistic_rent",
      editable: false,
      width: "200",
    },
    {
      title: "* Lead",
      dataIndex: "lead",
      editable: false,
      width: "200",
    },
    {
      title: "* Date",
      dataIndex: "date",
      editable: false,
      width: "200",
    },
    {
      title: "* PUC",
      dataIndex: "puc",
      editable: false,
      width: "200",
    },
    {
      title: "* Expences",
      dataIndex: "expences",
      editable: false,
      width: "200",
    },
    {
      title: "* Driver Name",
      dataIndex: "driver_name",
      editable: false,
      width: "200",
    },
    {
      title: "* Tot Amt",
      dataIndex: "total_amount",
      editable: false,
      width: "200",
    },
    {
      title: "* Profit",
      dataIndex: "profit",
      editable: false,
      width: "200",
    },
  ];

  let api = useApi();

  useEffect(() => {
    getBooking();
  }, []);
  const handleView = (record) => {
    props.history.push({
      pathname: "addBooking",
      record: record,
      type: "view",
    });
  };
  const handleInvoice = (record) => {
    
    props.history.push({ pathname: "invoice", record: selectedRow, type: "view" });
  };

  const getBooking = async () => {
    let response = await api.invoke({
      endPoint: "http://localhost:8000/api/getVehicleBooking",
      method: "get",
    });
    let res=[];
    response.data?.map((data,index)=>{
      res.push({"key":index,...data});
    });
    setDataSource(res);
    console.log("called", res);
  };  let rowSelection= {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      setSelectedRow(selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  }

  return (
    <div style={{ width: "100%" }}>
      <Table
        className="listTable" 
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        loading={api.inProgress}
        bordered
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        scroll={{ x: 5000,y:900 }}
      />
       <Col>
            <Form.Item>
              <Button disabled={selectedRow.length===0} onClick={handleInvoice} type={"primary"} danger htmlType="submit">
                get Invoice
              </Button>
            </Form.Item>
          </Col>
    </div>
  );
};

export default ListBooking;
