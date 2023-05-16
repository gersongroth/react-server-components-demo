import HTMLReactParser from "html-react-parser";
import React from "react";

const ReactHtmlParser = (html: string) => {
    try {
        if (html) {
            return <>{HTMLReactParser(html)}</>;
        }
    } catch (e) {
        console.error(`Error parsing html: ${html} -> error: ${e}`);
    }

    return <></>;
};

export default ReactHtmlParser;
