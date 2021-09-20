import { IconButton, Menu, MenuItem } from '@material-ui/core'
import React, { useState } from 'react'
import { FaTags } from 'react-icons/fa'
import { Button, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './style.css';

export default function DataSearch2(props) {
  const options = ['Stop', 'Delete'];
  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const {
    buttonLabel,
    className
  } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <>
      <Row >
            <p><b>{props.dateSearch}</b></p>
            <Row className=" border pt-2 pb-2 ms-3 me-3 pe-4 ps-4">
              <Col className="align-items-center border-bottom pb-2 pt-2 justify-content-lg-between col-12 list__item item__today">
                <Row>
                  <Col className="col-lg-6 col-xs-12">
                    {props.description}
                  </Col>
                  <Col className="col-lg-6 col-xs-12 d-flex justify-content-end align-items-center">
                    <FaTags></FaTags>
                    <span className="ms-2 me-2 text-center">
                      {
                        props.tags.map((item) => {
                          return props.tags.map((e) => {
                            if (item === e.id) {
                              return (<b>{e.name + ", "}</b>)
                            }
                          })
                        })
                      }
                    </span>
                    <span className="ms-2 me-2 text-center">{props.start_time.split(" ")[0]} - {props.end_time === null ? "  ...  " : props.end_time.split(" ")[0]}</span>
                    <span className="ms-2 me-2 text-center">{props.time_spent === null ? "  ...  " : props.time_spent}</span>
                    <span>
                      <IconButton
                        aria-label="more"
                        aria-controls="long-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                      >
                        <MoreVertIcon />
                      </IconButton>
                      {props.statusLockUp ? <Menu
                        id="long-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                          style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: '20ch',
                          },
                        }}
                      >
                        <MenuItem selected={options[0] === 'Pyxis'} onClick={() => {
                          handleClose()
                        }}>
                          start
                        </MenuItem>
                        <MenuItem selected={options[1] === 'Pyxis'} onClick={() => {
                          handleClose()
                          toggle()

                        }}>
                          delete
                        </MenuItem>
                      </Menu> : <></>}
                      <Modal isOpen={modal} className={className}>
                        <ModalHeader toggle={toggle}>cảnh báo</ModalHeader>
                        <ModalBody>
                          bạn có thật sự muốn xóa ?
                        </ModalBody>
                        <ModalFooter>
                          <Button color="primary" onClick={() => {
                            toggle()
                            props.deleteTaskToday(props.id)
                          }}>ok</Button>{' '}
                          <Button color="secondary" onClick={toggle}>Cancel</Button>
                        </ModalFooter>
                      </Modal>
                    </span>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Row>
    </>
  )
}
