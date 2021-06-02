import React from 'react';
import {Modal} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const ModalView = ({uri, visible, onSwipeDown}) => {
  return (
    <Modal visible={visible}>
      <ImageViewer
        imageUrls={[{url: uri}]}
        renderIndicator={() => null}
        onSwipeDown={onSwipeDown}
        enableSwipeDown
        swipeDownThreshold={50}
      />
    </Modal>
  );
};

export default ModalView;
