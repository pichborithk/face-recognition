import React, { useCallback, useMemo } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const ParticlesContainer = () => {
  const options = useMemo(() => {
    return {
      fullScreen: {
        zIndex: 0,
      },
      interactivity: {
        events: {
          onClick: { enable: true, mode: 'push' },
          onHover: { enable: true, mode: 'repulse' },
        },
        modes: { repulse: { distance: 100 }, push: { quantity: 10 } },
      },
      particles: {
        links: { enable: true, distance: 120 },
        move: { enable: true, speed: { min: 1, max: 5 } },
        size: { value: { min: 1, max: 3 } },
        opacity: { value: { min: 0.1, max: 0.7 } },
      },
    };
  }, []);
  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
  }, []);

  return <Particles init={particlesInit} options={options} />;
};

export default ParticlesContainer;
