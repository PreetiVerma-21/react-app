import React from "react";
import { FaFolder } from "react-icons/fa";
import GlassFolder from "../components/FolderCard";
import { FaFolderClosed } from "react-icons/fa6";
import { Col, Row } from "antd";

const Documents =()=> {
  return (
    <div style={{ padding: "50px",  background: "#eeeeeede", marginTop: '7rem'}}>
        <Row>
            <Col>
             <GlassFolder icon={<FaFolder />} />
            </Col>
            <Col>
             <GlassFolder icon={<FaFolder />} />
            </Col>
        </Row>
    </div>
  );
}

export default Documents;
