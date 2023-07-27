import {Image, View} from 'react-native';
import styled from 'styled-components/native';

type IconImageProps = {
  width: number;
  height: number;
  marginRight: number;
  marginLeft: number;
};

export const IconImage = styled(Image)<IconImageProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  margin-left: ${props => props.marginLeft}px;
  margin-right: ${props => props.marginRight}px;
`;