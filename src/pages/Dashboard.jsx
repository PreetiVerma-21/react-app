import React, { useState } from "react";
import { Layout, Menu, theme, Input, Row, Col, Breadcrumb } from "antd";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  FiUser,
  FiBarChart2,
  FiSettings,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { motion } from "framer-motion"; 
import AnimatedBackground from "./AnimatedBackground";


const { Header, Sider, Content } = Layout;

const menuItems = [
  {
    key: "sub1",
    icon: <FiUser />,
    label: "Users",
    children: [
      { key: "11", label: "All Users" },
      { key: "12", label: "Add User" },
      { key: "13", label: "User Roles" },
    ],
  },
  { key: "2", icon: <FiBarChart2 />, label: "Analytics" },
  { key: "3", icon: <FiSettings />, label: "Settings" },
];

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  // Collapse sidebar automatically on small screens
  const handleBreakpoint = (broken) => {
    setCollapsed(broken);
  };
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // Sample data for charts
  const barData = [
    { name: "Jan", uv: 4000, pv: 2400 },
    { name: "Feb", uv: 3000, pv: 1398 },
    { name: "Mar", uv: 2000, pv: 9800 },
    { name: "Apr", uv: 2780, pv: 3908 },
    { name: "May", uv: 1890, pv: 4800 },
    { name: "Jun", uv: 2390, pv: 3800 },
    { name: "Jul", uv: 3490, pv: 4300 },
  ];
  const lineData = [
    { name: "Mon", uv: 1200, pv: 1100 },
    { name: "Tue", uv: 2100, pv: 1800 },
    { name: "Wed", uv: 800, pv: 1700 },
    { name: "Thu", uv: 1600, pv: 900 },
    { name: "Fri", uv: 900, pv: 1200 },
    { name: "Sat", uv: 1700, pv: 1500 },
    { name: "Sun", uv: 2000, pv: 1700 },
  ];

  return (
    <div className="dashboard-page">
      <AnimatedBackground/>
  <Layout style={{ minHeight: "100vh", background: "transparent", height: '100vh', overflow: 'hidden' }}>
        <motion.div
          animate={{ width: collapsed ? 80 : 200 }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
          style={{
            color: "#fff",
            height: '100vh',
          }}
        >
          <Sider
            collapsed={collapsed}
            breakpoint="md"
            collapsedWidth={80}
            onBreakpoint={handleBreakpoint}
            className="dashboard-sider"
            style={{
              background: "transparent",
              color: "#fff",
              border: "none",
              boxShadow: "none",
              height: "100vh",
              position: 'sticky',
              top: 0,
              left: 0,
              overflow: 'auto',
            }}
          >
            <div className="logo">
              {collapsed ? (
                <FaReact style={{ fontSize: "2rem", color: "#43cea2" }} />
              ) : (
                "Dashboard"
              )}
            </div>
                <Menu
                  theme="dark"
                  mode="vertical"
                  defaultSelectedKeys={["1"]}
                  items={menuItems}
                  popupClassName="glass-submenu"
                />
            <div
              style={{
                position: "absolute",
                bottom: 24,
                left: 0,
                width: "100%",
                textAlign: "center",
              }}
            >
              <span
                className="sidebar-toggle-icon"
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  //   background: 'rgba(67, 206, 162, 0.18)',
                  borderRadius: "50%",
                  color: "#43cea2",
                  width: "40px",
                  height: "40px",
                  fontSize: "1.7rem",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(67, 206, 162, 0.10)",
                  transition: "all 0.2s",
                }}
                title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
              >
                {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
              </span>
            </div>
          </Sider>
        </motion.div>
  <Layout style={{ height: '100vh', overflow: 'hidden' }}>
          <Header
            style={{
              padding: "0 2rem",
              background: colorBgContainer,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              minHeight: 64,
              boxShadow: "0 4px 24px rgba(24,90,157,0.15)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                width: "100%",
              }}
            >
              <Input.Search
                placeholder="Search..."
                style={{ maxWidth: 300, borderRadius: 20 }}
                allowClear
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <FaUserCircle style={{ fontSize: "2rem", color: "#43cea2" }} />
            </div>
          </Header>
          <Content style={{ height: '100vh', overflowY: 'auto', paddingBottom: 0 }}>
            <motion.div
              className="dashboard-container"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <h1>Dashboard Overview</h1>
              <p>Welcome back! Here is a quick summary of your activity.</p>

              {/* Four smaller cards in one row */}
              <div
                className="dashboard-small-cards"
                style={{
                  margin: "2rem 0",
                  background: "rgba(255,255,255,0.12)",
                  borderRadius: "18px",
                  padding: "2rem",
                  boxShadow: "rgba(0,0,0,0.10) 0px 4px 24px",
                  border: "1px solid #dac6e5",
                }}
              >
                <Row gutter={[20, 20]}>
                  {[
                    { title: "Sales", value: "$2,100", color: "#dac6e5" },
                    { title: "Visitors", value: "8,400", color: "#dac6e5" },
                    { title: "Conversion", value: "4.2%", color: "#dac6e5" },
                    { title: "Feedback", value: "98%", color: "#dac6e5" },
                  ].map((card, idx) => (
                    <Col key={card.title} xs={24} sm={12} md={8} lg={6} xl={6}>
                      <motion.div
                        className="dashboard-small-card"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + idx * 0.1, duration: 0.4 }}
                        whileHover={{
                          scale: 1.08,
                          boxShadow: "0 6px 24px rgba(67,206,162,0.18)",
                        }}
                        style={{
                          background: card.color,
                          border: "1px solid #6e2097",
                          borderRadius: "14px",
                          boxShadow:
                            "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
                          padding: "1rem",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          textAlign: "center",
                          height: "5rem",
                          justifyContent: "center",
                          color: "#6e2097",
                          backdropFilter: "blur(8px)",
                        }}
                      >
                        <div
                          style={{
                            fontWeight: 700,
                            fontSize: "1.1rem",
                            marginBottom: "0.2rem",
                          }}
                        >
                          {card.title}
                        </div>
                        <div style={{ fontSize: "1.3rem", fontWeight: 700 }}>
                          {card.value}
                        </div>
                      </motion.div>
                    </Col>
                  ))}
                </Row>
              </div>

              {/* Charts and Graphs Section */}
              <div
                className="dashboard-charts"
                style={{
                  margin: "2rem 0",
                  background: "rgba(255,255,255,0.12)",
                  borderRadius: "18px",
                  padding: "2rem",
                  boxShadow: "rgba(0,0,0,0.10) 0px 4px 24px",
                  border: "1px solid #dac6e5",
                }}
              >
                <h2
                  style={{
                    color: "#430d5f",
                    fontWeight: 700,
                    marginBottom: "1.5rem",
                  }}
                >
                  Analytics
                </h2>
                <Row gutter={[32, 32]}>
                  <Col xs={24} md={12}>
                    <div style={{ width: "100%", height: 300 }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={barData}
                          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Bar
                            dataKey="uv"
                            fill="#6e2097"
                            radius={[8, 8, 0, 0]}
                          />
                          <Bar
                            dataKey="pv"
                            fill="#43cea2"
                            radius={[8, 8, 0, 0]}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </Col>
                  <Col xs={24} md={12}>
                    <div style={{ width: "100%", height: 300 }}>
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={lineData}
                          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line
                            type="monotone"
                            dataKey="uv"
                            stroke="#6e2097"
                            strokeWidth={3}
                            dot={{ r: 5 }}
                            activeDot={{ r: 8 }}
                          />
                          <Line
                            type="monotone"
                            dataKey="pv"
                            stroke="#43cea2"
                            strokeWidth={3}
                            dot={{ r: 5 }}
                            activeDot={{ r: 8 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </Col>
                </Row>
              </div>
            </motion.div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Dashboard;
