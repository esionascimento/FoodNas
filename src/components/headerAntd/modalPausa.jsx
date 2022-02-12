import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { ACVisibleModalPausa, ACPausaTempo } from '../../store/dashboard/dashboardAction';

export const ModalPausa = () => {
  const dispatch = useDispatch();
  const { modalPausa: { visibleModalPausa } } = useSelector(state => state.storeDashboard);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    setIsModalVisible(visibleModalPausa);
  }, [visibleModalPausa]);

  const handleOk = () => {
    dispatch(ACVisibleModalPausa(false));
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    dispatch(ACVisibleModalPausa(false));
    setIsModalVisible(false);
  };

  function onClick(e) {
    dispatch(ACPausaTempo(e.target.name));
    dispatch(ACVisibleModalPausa(false));
  }

  return (
    <>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <button name="5" onClick={onClick}>5 Minutos</button>
          <button name="10" onClick={onClick}>10 Minutos</button>
          <button name="20" onClick={onClick}>20 Minutos</button>
        </div>
      </Modal>
    </>
  );
};
