import React from 'react';
import { Row, Col, Form, Input, InputNumber, Select } from 'antd';

function onChange(value) {
  console.log('changed', value);
}

const FormItem = Form.Item;
const Option = Select.Option;

const AddBoxForm = Form.create()(
  (props) => {
    const { getFieldDecorator } = props.form;
    return (
      <Form vertical>
        <Row>
          <Col span={10}>
            <FormItem label="Nome Scatola">
              {getFieldDecorator('name', {
                rules: [{ required: true,
                           message: 'Si prega di dare un nome alla scatola!',
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
                rules: [{ required: true,
                           message: 'Si prega di inserire l\'altezza!',
                }],
                initialValue: '0',
              })(
                <InputNumber min={0} step={0.5} onChange={onChange} />
               )}
            </FormItem>
          </Col>
          <Col span={4} offset={4}>
            <FormItem label="Larghezza">
              {getFieldDecorator('width', {
                rules: [{ required: true,
                           message: 'Si prega di inserire la larghezza!',
                }],
                initialValue: '0',
              })(
                <InputNumber min={0} step={0.5} onChange={onChange} />
               )}
            </FormItem>
          </Col>
          <Col span={4} offset={4}>
            <FormItem label="Profondità">
              {getFieldDecorator('depth', {
                rules: [{ required: true,
                           message: 'Si prega di inserire la profondità!',
                }],
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
                initialValue: '0',
              })(
                <Select>
                  <Option value="0">Seleziona</Option>
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
                initialValue: '0',
              })(
                <Select>
                  <Option value="0">Seleziona</Option>
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

export default AddBoxForm;
