import React from 'react';
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';

const HeroGradient = () => {
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: '#000' }}>
      {/* 1. The Canvas Layer */}
      <ShaderGradientCanvas
        style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
        pixelDensity={1}
        fov={45}
      >
        <ShaderGradient
          animate="on"
          axesHelper="off"
          brightness={1.2}
          cAzimuthAngle={224}
          cDistance={8.57}
          cPolarAngle={123}
          cameraZoom={1}
          color1="#000000"
          color2="#000000"
          color3="#d0bce1"
          destination="onCanvas"
          embedMode="off"
          envPreset="city"
          gizmoHelper="hide"
          grain="off"
          lightType="3d"
          positionX={-1.4}
          positionY={0}
          positionZ={0}
          reflection={0.1}
          rotationX={0}
          rotationY={10}
          rotationZ={50}
          shader="defaults"
          type="plane"
          uAmplitude={1}
          uDensity={1.3}
          uFrequency={5.5}
          uSpeed={0.2}
          uStrength={4}
          uTime={0}
          wireframe={false}
        />
      </ShaderGradientCanvas>
    </div>
  );
};

export default HeroGradient;