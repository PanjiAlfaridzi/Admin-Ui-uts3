import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link,useLocation } from "react-router-dom";

const Datatable = (columns) => {
  const location = useLocation();
  const type = location.pathname.split('/')[1];

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to={"/"+ type + "/test"} style={{ textDecoration: "none" }}>
              <span className="viewButton">View</span>
            </Link>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        {type.toUpperCase()}
        <Link to={"/"+ type + "/new"} className="link">
          Add New
        </Link>
      </div>
      <DataGrid className="datagrid"
        rows={rows}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
