import React, { PropTypes } from 'react';
import { Button, Modal } from 'antd';

class AddBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  onOk = () => {
    console.log('clicked ok');
    this.setState({
      isOpen: false,
    });
  }

  onCancel = () => {
    console.log('clicked cancel');
    this.setState({
      isOpen: false,
    });
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
          type="primary"
          shape="circle"
          icon="plus"
          onClick={this.showModal}
        />
        <Modal
          title="Aggiungi scatola"
          visible={this.state.isOpen}
          onOk={this.onOk}
          onCancel={this.onCancel}
        >
          <p> Form di inserimento scatola qui </p>
        </Modal>
      </div>
    );
  }
}

AddBox.propTypes = {
  onInsertBox: PropTypes.func.isRequired,
};

export default AddBox;
