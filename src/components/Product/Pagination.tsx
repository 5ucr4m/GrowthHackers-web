import React, { useContext } from "react";
import { Pagination as PaginationAntd } from "antd";
import { ProductContext } from "../../hooks/products.context";

export const Pagination: React.FC = () => {
  const { total, page, pageSize, setPage, setPageSize } =
    useContext(ProductContext);

  const setParams = (page: number, pageSize: number | undefined) => {
    setPage(page);
    setPageSize(pageSize || 50);
  };

  return (
    <PaginationAntd
      total={total}
      showTotal={(total: number) => `Total ${total} items`}
      defaultPageSize={pageSize}
      defaultCurrent={page}
      pageSizeOptions={["10", "20", "35", "50"]}
      onChange={(page, pageSize) => setParams(page, pageSize)}
      style={{ marginTop: 20, textAlign: "end" }}
    />
  );
};
