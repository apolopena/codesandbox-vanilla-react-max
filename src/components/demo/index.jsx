import React from "react";

import "antd-mobile/lib/button/style/css";

import { Button } from "antd-mobile";

export const DemoChoices = () => (
  <div className="demo-list">
    <Button type="ghost" size="small" style={{ cursor: "pointer" }}>
      a choice
    </Button>
  </div>
);
