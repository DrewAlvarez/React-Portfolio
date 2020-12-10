import React from "react";

const ProjectContext = React.createContext({
  appName: "",
  imgName: "",
  appUrl: "",
  appRepo: "",
  description: ""
});

export default ProjectContext;