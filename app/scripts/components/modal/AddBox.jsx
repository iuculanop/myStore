import React, { PropTypes } from 'react';
import { Button, Modal } from 'antd';
import AddBoxForm from 'components/form/AddBox.jsx';

class AddBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  onOk = () => {
    console.log('clicked ok');
    const form = this.form;
    form.validateFields((err, box) => {
      if (err) {
        console.log('errore!');
        return;
      }
      console.log('saving data to db:', box);
      this.props.onInsertBox(box);
      form.resetFields();
      this.setState({
        isOpen: false,
      });
    });
  }

  onCancel = () => {
    console.log('clicked cancel');
    const form = this.form;
    form.resetFields();
    this.setState({
      isOpen: false,
    });
  }

  setFormRef = (form) => {
    console.log('che ho qua', this);
    this.form = form;
  }

  showModal = () => {
    this.setState({
      isOpen: true,
    });
  }

  hideModal = () => {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    return (
      <div>
        <Button
          title="Aggiungi scatola"
          type="primary"
          shape="circle"
          icon="plus"
          onClick={this.showModal}
        />
        <Modal
          title="Aggiungi scatola"
          visible={this.state.isOpen}
          maskClosable={false}
          onOk={this.onOk}
          onCancel={this.onCancel}
          okText="Salva"
          cancelText="Annulla"
        >
          <AddBoxForm ref={this.setFormRef} />
        </Modal>
      </div>
    );
  }
}

AddBox.propTypes = {
  onInsertBox: PropTypes.func.isRequired,
};

export default AddBox;
