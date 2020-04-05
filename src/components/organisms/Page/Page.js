import React from "react";

import useStyles from "./styles";

const Page = props => {
    const classes = useStyles(props);
    return (
        <main id="main" className={classes.main}>
            {props.children}
        </main>
    );
};

export default Page;
