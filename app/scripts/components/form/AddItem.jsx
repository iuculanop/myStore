import React, { PropTypes } from 'react';
import { Row, Col, Form, Input, InputNumber, Select } from 'antd';
import { validateSize } from 'util/Validators.jsx';

function onChange(value) {
  console.log('changed', value);
}

const FormItem = Form.Item;
const Option = Select.Option;

const AddItemForm = Form.create()(
  (props) => {
    const { getFieldDecorator } = props.form;
    console.log('props della form aggiungi oggetto', props);
    return (
      <Form vertical>
        <Row>
          <Col span={10}>
            <FormItem label="Nome Oggetto">
              {getFieldDecorator('name', {
                rules: [{ required: true,
                           message: 'Si prega di dare un nome all\'oggetto!',
                 }],
              })(
                <Input />
               )}
            </FormItem>
          </Col>
          <Col span={10} offset={4}>
            <FormItem label="Locazione">
              {getFieldDecorator('location', {
                rules: [{ required: true,
                           message: 'Si prega di inserire la locazione della scatola!',
                 }],
              })(
                <Input />
               )}
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={4} offset={2}>
            <FormItem label="Altezza">
              {getFieldDecorator('height', {
                rules: [{ required: true, validator: validateSize }],
                initialValue: '0',
              })(
                <InputNumber min={0} step={0.5} onChange={onChange} />
               )}
            </FormItem>
          </Col>
          <Col span={4} offset={4}>
            <FormItem label="Larghezza">
              {getFieldDecorator('width', {
                rules: [{ required: true, validator: validateSize }],
                initialValue: '0',
              })(
                <InputNumber min={0} step={0.5} onChange={onChange} />
               )}
            </FormItem>
          </Col>
          <Col span={4} offset={4}>
            <FormItem label="Profondità">
              {getFieldDecorator('depth', {
                rules: [{ required: true, validator: validateSize }],
                initialValue: '0',
              })(
                <InputNumber min={0} step={0.5} onChange={onChange} />
               )}
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={10}>
            <FormItem label="Pesantezza">
              {getFieldDecorator('weightStatus', {
                rules: [{ required: true,
                           message: 'Si prega di indicare la pesantezza!',
                }],
              })(
                <Select placeholder="Seleziona lo stato">
                  <Option value="1">Leggera</Option>
                  <Option value="2">Pesante</Option>
                </Select>
               )}
            </FormItem>
          </Col>
          <Col span={10} offset={4}>
            <FormItem label="Capacità">
              {getFieldDecorator('spaceStatus', {
                rules: [{ required: true,
                           message: 'Si prega di indicare la capacità disponibile!',
                }],
              })(
                <Select placeholder="Seleziona lo stato">
                  <Option value="1">Vuota</Option>
                  <Option value="2">Spazio disponibile</Option>
                  <Option value="3">Piena</Option>
                </Select>
               )}
            </FormItem>
          </Col>
        </Row>
        <FormItem label="Description">
          {getFieldDecorator('description')(<Input type="textarea" />)}
        </FormItem>
      </Form>
    );
  }
);

AddItemForm.propTypes = {
  boxId: PropTypes.number,
};

export default AddItemForm;
