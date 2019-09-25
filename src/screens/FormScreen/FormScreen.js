import React from 'react';
import {
    Container,
    Content,
    DatePicker,
    Form,
    Input,
    Item,
    Label,
    Picker
} from 'native-base';
import styles from "./FormScreen.styles";

class FormScreen extends React.Component
{
    render()
    {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item stackedLabel>
                            <Label>First name</Label>
                            <Input/>
                        </Item>
                        <Item stackedLabel>
                            <Label>Last name</Label>
                            <Input/>
                        </Item>
                        <Item>
                            <Picker
                                mode="dropdown"
                                placeholder="Select an item"
                                selectedValue={undefined}>
                                <Picker.Item label="Select an item" value={undefined}/>
                                <Picker.Item label="Item 0" value="0"/>
                                <Picker.Item label="Item 1" value="1"/>
                                <Picker.Item label="Item 2" value="2"/>
                            </Picker>
                        </Item>
                        <Item last>
                            <DatePicker
                                locale={"en"}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Birthdate"/>
                        </Item>
                    </Form>
                </Content>
            </Container>
        );
    }
}

export default FormScreen;