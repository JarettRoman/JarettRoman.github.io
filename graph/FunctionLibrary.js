import * as THREE from "https://cdn.skypack.dev/three";
// import { Vector3 } from '../../src/math/Vector3.js';
// import { smoothstep } from '../../src/math/MathUtils.js';

export const functions = [
  Wave,
  MultiWave,
  Ripple,
  Tube,
  Onion,
  Garlic,
  Torus,
  Donut,
  RotatingStar,
];

function GetFunction(func) {
  return functions[functions.indexOf(func)];
}

function GetFunctionByIndex(index) {
  return functions[index];
}

function GetNextFunction(func) {
  const index = functions.indexOf(func);
  return index < functions.length - 1 ? functions[index + 1] : functions[0];
}

function Morph(u, v, t, from, to, progress) {
  const p = new THREE.Vector3();
  p.lerpVectors(
    from(u, v, t),
    to(u, v, t),
    THREE.MathUtils.smoothstep(progress, 0, 1)
  );
  return p;
}

function Wave(u, v, t) {
  return new THREE.Vector3(u, Math.sin(Math.PI * (u * v + t)), v);
}

function MultiWave(u, v, t) {
  let y = Math.sin(Math.PI * (u + 0.5 * t));
  y += 0.5 * Math.sin(2 * Math.PI * (v + t));
  y += Math.sin(Math.PI * (u + v + 0.25 * t));
  y *= 1 / 2.5;
  return new THREE.Vector3(u, y, v);
}

function Ripple(u, v, t) {
  const d = Math.sqrt(u * u + v * v);
  let y = Math.sin(Math.PI * (4 * d - t));
  y /= 1 + 10 * d;
  return new THREE.Vector3(u, y, v);
}

function Tube(u, v, t) {
  const x = Math.sin(Math.PI * u);
  const y = v;
  const z = Math.cos(Math.PI * u);
  return new THREE.Vector3(x, y, z);
}

function Sphere(u, v, t) {
  const r = 0.5 + 0.5 * Math.sin(0.5 * Math.PI * t);
  const s = r * Math.cos(0.5 * Math.PI * v);
  const x = s * Math.sin(Math.PI * u);
  const y = r * Math.sin(Math.PI * 0.5 * v);
  const z = s * Math.cos(Math.PI * u);
  return new THREE.Vector3(x, y, z);
}

function Onion(u, v, t) {
  const r = Math.cos(0.5 * Math.PI * v);
  const x = r * Math.sin(Math.PI * u);
  const y = v;
  const z = r * Math.cos(Math.PI * u);
  return new THREE.Vector3(x, y, z);
}

function Garlic(u, v, t) {
  const r = 0.9 + 0.1 * Math.sin(Math.PI * (6 * u + 4 * v + t));
  const s = r * Math.cos(0.5 * Math.PI * v);
  const x = s * Math.sin(Math.PI * u);
  const y = r * Math.sin(Math.PI * 0.5 * v);
  const z = s * Math.cos(Math.PI * u);
  return new THREE.Vector3(x, y, z);
}

function Torus(u, v, t) {
  const r1 = 0.75;
  const r2 = 0.25;
  const s = r1 + r2 * Math.cos(Math.PI * v);
  const x = s * Math.sin(Math.PI * u);
  const y = r2 * Math.sin(Math.PI * v);
  const z = s * Math.cos(Math.PI * u);
  return new THREE.Vector3(x, y, z);
}

function Donut(u, v, t) {
  const r1 = 0.75;
  const r2 = 0.4;
  const s = r1 + r2 * Math.cos(Math.PI * v);
  const x = s * Math.sin(Math.PI * u);
  const y = r2 * Math.sin(Math.PI * v);
  const z = s * Math.cos(Math.PI * u);
  return new THREE.Vector3(x, y, z);
}

function RotatingStar(u, v, t) {
  const r1 = 0.7 + 0.1 * Math.sin(Math.PI * (6 * u + 0.5 * t));
  const r2 = 0.15 + 0.05 * Math.sin(Math.PI * (8 * u + 4 * v + 2 * t));
  const s = r1 + r2 * Math.cos(Math.PI * v);
  const x = s * Math.sin(Math.PI * u);
  const y = r2 * Math.sin(Math.PI * v);
  const z = s * Math.cos(Math.PI * u);
  return new THREE.Vector3(x, y, z);
}

export {
  GetFunction,
  GetNextFunction,
  Morph,
  Wave,
  MultiWave,
  Ripple,
  Tube,
  Sphere,
  Onion,
  Garlic,
  Torus,
  Donut,
  RotatingStar,
  GetFunctionByIndex,
};
