import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import { MdPieChartOutlined } from "react-icons/md";

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <motion.div
        initial={{ x: -250, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -250, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          className="glass-sider"
        >
          <div className="logo">Design Sparx</div>
          <Menu
            theme="light"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={[
              // { key: "1", icon: <TiHomeOutline />, label: "Home" },
              { key: "2", icon: <MdPieChartOutlined />, label: "Dashboard" },
              { key: "3", icon: <UserOutlined />, label: "Profile" },
            ]}
          />
        </Sider>
      </motion.div>
  );
};

export default Sidebar;
