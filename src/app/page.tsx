'use client';

import { ShaderGradient, ShaderGradientCanvas } from 'shadergradient';

import * as drei from '@react-three/drei';
import * as fiber from '@react-three/fiber';

export default function Home() {
  return (
    <main className=''>
      <ShaderGradientCanvas
        importedfiber={{ ...fiber, ...drei }}
        style={{
          position: 'absolute',
          top: 0,
          pointerEvents: 'none',
        }}
      >
        <ShaderGradient
          control='query'
          urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=0.8&cAzimuthAngle=270&cDistance=0.5&cPolarAngle=180&cameraZoom=15.1&color1=%23c4528d&color2=%23ff9a42&color3=%23ce3e75&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=env&pixelDensity=1&positionX=-0.1&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.4&rotationX=0&rotationY=130&rotationZ=70&shader=defaults&type=sphere&uAmplitude=3.2&uDensity=0.8&uFrequency=5.5&uSpeed=0.3&uStrength=0.3&uTime=0&wireframe=false'
        />
      </ShaderGradientCanvas>
    </main>
  );
}
