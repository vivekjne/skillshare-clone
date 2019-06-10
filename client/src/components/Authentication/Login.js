import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter ,Row,Col} from 'reactstrap';
import styles from "./login.module.css"

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
      const {modal,toggleLogin} = this.props
    return (
      <div>
        
        <Modal size="lg"  centered isOpen={modal} toggle={toggleLogin} className={this.props.className}>
          <Row>
              <Col sm="5">
                  <div className={styles['login-content-left']}>
                     
                  </div>
              </Col>
              <Col sm="7"></Col>

          </Row>
        </Modal>
      </div>
    );
  }
}

export default Login;