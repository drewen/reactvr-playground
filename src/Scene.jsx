import 'aframe';
import { Scene, Entity } from 'aframe-react';
import Status from './views/Status'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

import React from 'react';

class VRScene extends React.Component {
  render () {
    return (
      <QueryClientProvider client={queryClient}>
        <Scene cursor="rayOrigin: mouse; fuse: false" raycaster="objects: .interactable">
          <Entity id="leftHand" laser-controls="hand: left" raycaster="objects: .interactable" />
          <Entity id="rightHand" laser-controls="hand: right" raycaster="objects: .interactable" />
          <Entity primitive="a-sky" color="#6EBAA7" />
          <Entity primitive="a-plane" rotation="-90 0 0" color="black" height="30" width="30" />
          <Entity position={{x: 0, y: 1.5, z: -3}}>
            <Status />
          </Entity>
        </Scene>
      </QueryClientProvider>
    );
  }
}

export default VRScene;
