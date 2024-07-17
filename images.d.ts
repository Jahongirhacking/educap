declare module "*.jpg" {
  const value: import("next/dist/client/image").StaticImageData;
  export default value;
}

declare module "*.png" {
  const value: import("next/dist/client/image").StaticImageData;
  export default value;
}
