import React from 'react';
import {ImageProps} from 'react-native';
import * as S from './styles';

interface Props extends ImageProps {
  width?: number;
  height?: number;
  marginRight?: number;
  marginLeft?: number;
}

function IconImage({
  width = 20,
  height = 20,
  marginLeft = 0,
  marginRight = 0,
  ...props
}: Props) {
  return (
    <S.IconImage
      resizeMode="contain"
      width={width}
      height={height}
      marginLeft={marginLeft}
      marginRight={marginRight}
      {...props}
    />
  );
}

export default IconImage;
