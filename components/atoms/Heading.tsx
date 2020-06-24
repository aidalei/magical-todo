import React from 'react';
import { css } from "emotion";

interface Props {
    children: string
}

const headingStyle = css`
    color: hotpink;
`

const Heading = (props: Props) => {
    const {children} = props;
return <h1 className={headingStyle}>{children}</h1>
}

export default Heading;