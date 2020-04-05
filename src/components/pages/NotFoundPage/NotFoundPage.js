import React from "react";

import NotFoundError from "../../atoms/NotFoundError";
import Page from "../../organisms/Page";

function NotFoundPage() {
    return (
        <Page>
            <NotFoundError />
        </Page>
    );
}

export default NotFoundPage;
