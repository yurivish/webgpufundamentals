/*eslint-env node*/

const globalObjects = [
  'Array',
  'ArrayBuffer',
  'TypedArray',
  'Int8Array',
  'Uint8Array',
  'Int16Array',
  'Uint16Array',
  'Int32Array',
  'Uint32Array',
  'Float32Array',
  'Float64Array',
  'BigInt64Array',
  'BigUint64Array',
  'DataView',
];

const gpuDict = [
  'GPUObjectDescriptorBase',
  'GPUBufferDescriptor',
  'GPUTextureDescriptor',
  'GPUTextureViewDescriptor',
  'GPUExternalTextureDescriptor',
  'GPUSamplerDescriptor',
  'GPUBindGroupLayoutDescriptor',
  'GPUBindGroupLayoutEntry',
  'GPUBufferBindingLayout',
  'GPUSamplerBindingLayout',
  'GPUTextureBindingLayout',
  'GPUStorageTextureBindingLayout',
  'GPUExternalTextureBindingLayout',
  'GPUBindGroupDescriptor',
  'GPUBindGroupEntry',
  'GPUBufferBinding',
  'GPUPipelineLayoutDescriptor',
  'GPUShaderModuleDescriptor',
  'GPUShaderModuleCompilationHint',
  'GPUPipelineErrorInit',
  'GPUPipelineDescriptorBase',
  'GPUComputePipelineDescriptor',
  'GPURenderPipelineDescriptor',
  'GPUPrimitiveState',
  'GPUMultisampleState',
  'GPUFragmentState',
  'GPUColorTargetState',
  'GPUBlendState',
  'GPUBlendComponent',
  'GPUDepthStencilState',
  'GPUStencilFaceState',
  'GPUVertexState',
  'GPUVertexBufferLayout',
  'GPUVertexAttribute',
  'GPUCommandBufferDescriptor',
  'GPUCommandEncoderDescriptor',
  'GPUComputePassTimestampWrite',
  'GPUComputePassDescriptor',
  'GPURenderPassTimestampWrite',
  'GPURenderPassDescriptor',
  'GPURenderPassColorAttachment',
  'GPURenderPassDepthStencilAttachment',
  'GPURenderPassLayout',
  'GPURenderBundleDescriptor',
  'GPURenderBundleEncoderDescriptor',
  'GPUQuerySetDescriptor',
  'GPUCanvasConfiguration',
  'GPUUncapturedErrorEventInit',
  'GPUColorDict',
  'GPUOrigin2DDict',
  'GPUOrigin3DDict',
];

const apis = [
  'Blob',
  'createImageBitmap',
  'fetch',

  'GPUAdapter',
  'GPUAdapterInfo',
  'GPUBindGroup',
  'GPUBindGroupLayout',
  'GPUBuffer',
  'GPUCanvasContext',
  'GPUCommandBuffer',
  'GPUCommandEncoder',
  'GPUCompilationInfo',
  'GPUCompilationMessage',
  'GPUComputePassEncoder',
  'GPUComputePipeline',
  'GPUDevice',
  'GPUDeviceLostInfo',
  'GPUError',
  'GPUExternalTexture',
  'GPUInternalError',
  'GPUOutOfMemoryError',
  'GPUPipelineError',
  'GPUPipelineLayout',
  'GPUQuerySet',
  'GPUQueue',
  'GPURenderBundle',
  'GPURenderBundleEncoder',
  'GPURenderPassEncoder',
  'GPURenderPipeline',
  'GPUSampler',
  'GPUShaderModule',
  'GPUSupportedFeatures',
  'GPUSupportedLimits',
  'GPUTexture',
  'GPUTextureView',
  'GPUUncapturedErrorEvent',
  'GPUValidationError',

  'HTMLCanvasElement',
  'HTMLVideoElement',
  'Image',
  'ImageBitmap',
  'ImageData',
  'Response',
];

const others = {
  'getBoundingClientRect': 'https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect',
  'devicePixelRatio': 'https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio',
  'GPUBufferUsage': 'https://developer.mozilla.org/en-US/docs/Web/API/GPUBuffer/usage',
  'GPUMapMode': 'https://developer.mozilla.org/en-US/docs/Web/API/GPUBuffer/mapAsync#mode',
  'GPUShaderStage': 'https://developer.mozilla.org/en-US/docs/Web/API/GPUDevice/createBindGroupLayout#visibility',
  'GPUTextureUsage': 'https://developer.mozilla.org/en-US/docs/Web/API/GPUTexture/usage',
  'GPUColorWrite': 'https://developer.mozilla.org/en-US/docs/Web/API/GPUDevice/createRenderPipeline#writemask',
  'Video': 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement',
};

// check with removing the last 's'?
const refs = {
  ...others,
  ...Object.fromEntries(globalObjects.map(k => [k, `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/${k}`])),
  ...Object.fromEntries(gpuDict.map(k => [k, `https://www.w3.org/TR/webgpu/#dictdef-${k.toLowerCase()}`])),
  ...Object.fromEntries(apis.map(k => [k, `https://developer.mozilla.org/en-US/docs/Web/API/${k}`])),
};

module.exports = refs;
