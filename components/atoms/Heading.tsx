import React from 'react';
import { Text } from 'react-native';
import styled from '@emotion/native';

interface Props {
    children: string
}

const HeadingStyle = styled.Text`
    color: hotpink;
    font-size: 32px;
    border-bottom: 2px solid hotpink;
`

const Heading = (props: Props) => {
    const {children} = props;
return <HeadingStyle>{children}</HeadingStyle>
}

export default Heading;