import React from "react";

const videoContext = React.createContext({
    video: '',
    title: '',
    addVideo: (item) => {},
    removeItem: (id) => {},
});

export default videoContext;