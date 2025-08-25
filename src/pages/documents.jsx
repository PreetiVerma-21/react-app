import React from "react";
import { FaFolder } from "react-icons/fa";
import GlassFolder from "../components/FolderCard";
import { FaFolderClosed } from "react-icons/fa6";
import { Col, Row } from "antd";
import {FolderOpenFilled} from '@ant-design/icons';
import AnimatedBackground from "./AnimatedBackground";

const Documents =()=> {
  return (
    <>
    <AnimatedBackground/>
    <div className="docs-background">
        <Row gutter={15}>
            <Col  sm={24} md={12} lg={6} xs={24}>
             <GlassFolder icon={<FolderOpenFilled />} />
            </Col>
            <Col sm={24} md={12} lg={6} xs={24}>
             <GlassFolder icon={<FolderOpenFilled />} />
            </Col>
        </Row>
    </div>
    </>
  );
}

export default Documents;
