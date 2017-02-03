import React, { PropTypes } from 'react';
import { Button, Modal } from 'antd';
import AddItemForm from 'components/form/AddItem.jsx';

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  onOk = () => {
    console.log('clicked ok');
    const form = this.form;
    form.validateFields((err, item) => {
      if (err) {
        console.log('errore!');
        return;
      }
      console.log('saving data to db:', item);
      this.props.onInsertItem(item);
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
          title="Aggiungi Oggetto"
          type="primary"
          shape="circle"
          icon="plus"
          onClick={this.showModal}
        />
        <Modal
          title="Aggiungi Oggetto"
          visible={this.state.isOpen}
          maskClosable={false}
          onOk={this.onOk}
          onCancel={this.onCancel}
          okText="Salva"
          cancelText="Annulla"
        >
          <AddItemForm ref={this.setFormRef} boxId={this.props.box.id} />
        </Modal>
      </div>
    );
  }
}

AddItem.propTypes = {
  box: PropTypes.object,
  onInsertItem: PropTypes.func.isRequired,
};

export default AddItem;
