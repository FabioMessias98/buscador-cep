import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
    background-color: #FCFCFC;
`;

export const HeaderWrapper = styled(View)`
    height: 80px;
    margin-bottom: 16px;
    justify-content: center;
    align-items: center;
    background-color: #4C00FF;
`;

export const HeaderTitle = styled(Text)`
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    color: #FFF;
`;

export const ButtonWrapper = styled(View)`
    flex: 1;
    padding-top: 38px;
    padding-left: 2px;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-end;
`;

type ButtonProps = {
    backgroundColor?: string;
}

export const ButtonPattern = styled(TouchableOpacity)<ButtonProps>`
    flex: 1;
    height: 60px;
    margin-right: 2px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.backgroundColor};
`;

export const FormRow = styled(View)`
    margin-bottom: 16px;
    padding-left: 16px;
    padding-right: 16px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

type FieldItemProps = {
    width?: number;
};

export const FieldItem = styled(View)<FieldItemProps>`
    width: ${props => props.width ?? 100}%;
    margin-bottom: 16px;   
`;

export const Label = styled(Text)`
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
    color: #0A0A0A;
`;

export const FieldPattern = styled(TextInput)`
    height: 60px;
    padding-left: 16px;
    padding-right: 16px;
    border-width: 1px;
    border-color: #707070;
    border-radius: 10px;
    font-weight: medium;
    color: #0A0A0A;
`;