import React, { Suspense, lazy } from 'react';

// Lazy load ShaderGradient with error boundary
const ShaderGradient = lazy(() => 
  import('@shadergradient/react').then(module => ({
    default: module.ShaderGradient
  })).catch(err => {
    console.warn('ShaderGradient failed to load, using fallback:', err);
    return { default: () => <div className="w-full h-full bg-gradient-to-br from-black via-slate-900 to-purple-900" /> };
  })
);

const ShaderBackground = () => {
  return (
    <Suspense fallback={<div className="w-full h-full bg-black" />}>
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <ShaderGradient
          animate="on"
          axesHelper="off"
          brightness={2.5}
          cAzimuthAngle={192}
          cDistance={5}
          cPolarAngle={120}
          cameraZoom={1.2}
          color1="#0a0e27"
          color2="#1a1a2e"
          color3="#d0bce1"
          destination="onCanvas"
          embedMode="off"
          envPreset="city"
          format="gif"
          fov={45}
          frameRate={10}
          gizmoHelper="hide"
          grain="off"
          lightType="3d"
          pixelDensity={1}
          positionX={0}
          positionY={0}
          positionZ={0}
          range="disabled"
          rangeEnd={40}
          rangeStart={0}
          reflection={0.3}
          rotationX={0.2}
          rotationY={0.5}
          rotationZ={0}
          shader="defaults"
          type="plane"
          uAmplitude={1.5}
          uDensity={1.3}
          uFrequency={5.5}
          uSpeed={0.15}
          uStrength={6}
          uTime={0}
          wireframe={false}
        />
      </div>
    </Suspense>
  );
};

export default ShaderBackground;
