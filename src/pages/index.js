// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import DataTable from "@/components/DataTable";
import Login from "@/components/Login";
import Image from 'next/image';
import { useState } from "react";

function App({ entity_type, upload_id, page, page_size, sort_field, sort_order, filters }) {
    const [entityType, setEntityType] = useState(entity_type);
    const [selectUploadId, setSelectUploadId] = useState(upload_id);
    const [initialPage, setInitialPage] = useState(page);
    const [pageSize, setPageSize] = useState(page_size);
    const [sortField, setSortField] = useState(sort_field);
    const [sortOrder, setSortOrder] = useState(sort_order);
    const [tableFilters, setTableFilters] = useState(filters);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    if (initialPage === undefined) {
        setInitialPage(1);
    }
    const handleLogin = () => {
  setUserLoggedIn(true);
};

    return (
        <div className="App">
            <div className="Banner">
                <div className="container">
                    <div className="row">
                        <img className="Logo col-2 img-fluid p-3" src="images/hubmap-type-white250.png" alt="HuBMAP Logo"/>
                        <h1 className="Title col-4 offset-2 d-flex justify-content-center align-items-center text-center">
                            Data Ingest Board
                        </h1>
                    </div>
                </div>
            </div>
            {userLoggedIn ? (
                <DataTable className="DataTable"
                    entityType={entityType}
                    setEntityType={setEntityType}
                    selectUploadId={selectUploadId}
                    setSelectUploadId={setSelectUploadId}
                    initialPage={parseInt(initialPage)}
                    setInitialPage={parseInt(setInitialPage)}
                    pageSize={pageSize}
                    setPageSize={setPageSize}
                    sortField={sortField}
                    setSortField={setSortField}
                    sortOrder={sortOrder}
                    setSortOrder={setSortOrder}
                    tableFilters={tableFilters}
                    setTableFilters={setTableFilters}
                />
            ) : (
                <Login onLogin={handleLogin} />
            )}
        </div>
    );
}

App.getInitialProps = ({ query }) => {
  const { entity_type, upload_id, page, page_size, sort_field, sort_order, ...filters } = query;
  return { entity_type, upload_id, page, page_size, sort_field, sort_order, filters};
};

export default App;