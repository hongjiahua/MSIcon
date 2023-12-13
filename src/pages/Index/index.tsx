import React, {useEffect, useState} from "react";
import {Layout, Space} from "antd";
import {ProCard} from "@ant-design/pro-components";
import IconService from "@/services/IconService";

const Index: React.FC = () => {
  const iconService = new IconService();
  const [iconList, setIconList] = useState([]);
  const init = async () => {
  //  const res = await iconService.list({});

  }
  useEffect(() => {
    init();
  }, []);
// 读取当前目录下的所有文件名
  return (
    <Layout>
      <Space>
        <ProCard
          colSpan={{xs: 2, sm: 4, md: 6, lg: 8, xl: 10}}
          layout="center"
          bordered
        >
          Col
        </ProCard>
      </Space>
    </Layout>
  )
}
export default Index;
