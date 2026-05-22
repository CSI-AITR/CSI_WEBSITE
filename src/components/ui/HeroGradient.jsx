import React from 'react';
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';

const HeroGradient = () => {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: '#000' }}>
      {/* 1. The Canvas Layer */}
      <ShaderGradientCanvas
        style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
        pixelDensity={0.8}
        fov={45}
      >
       <ShaderGradient
  animate="on"
  axesHelper="off"
  bgColor1="#000000"
  bgColor2="#000000"
  brightness={1.2}
  cAzimuthAngle={180}
  cDistance={3.6}
  cPolarAngle={90}
  cameraZoom={1}
  color1="#e6f0ff"
  color2="#021e54"
  color3="#d0bce1"
  destination="onCanvas"
  embedMode="off"
  envPreset="city"
  format="gif"
  fov={35}
  frameRate={8}
  gizmoHelper="hide"
  grain="off"
  lightType="3d"
  pixelDensity={0.8}
  positionX={-1.4}
  positionY={0}
  positionZ={0}
  range="disabled"
  rangeEnd={40}
  rangeStart={0}
  reflection={0.1}
  rotationX={0}
  rotationY={10}
  rotationZ={50}
  shader="defaults"
  type="plane"
  uAmplitude={1}
  uDensity={1.3}
  uFrequency={5.5}
  uSpeed={0.4}
  uStrength={4}
  uTime={0}
  wireframe={false}
/>
      </ShaderGradientCanvas>
    </div>
  );
};

export default HeroGradient;