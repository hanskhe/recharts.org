const map = {
  index: {
    loading: 'Loading',
    success: 'Success',
    error: 'Error',
    empty: 'Empty',
  },
  api: {
    placeholder: 'Search',
  },
  examples: {
    placeholder: 'Search',
  },
  blog: {
    placeholder: 'Please choose...',
  },
  frame: {
    guide: '指南',
    api: 'API',
    examples: '实例',
    blog: '博客',
    contract: '联系我们',
  },
  guide: {
    guide: '指南',
    installation: '安装',
    'getting-started': '快速上手',
    customize: '组件自定义',
  },
  installation: {
    installation: '安装',
    'npm-desc': '推荐使用 npm 的方式安装，它能更好地和 CommonJS打包工具配合使用，例如：',
    'umd-desc': '目前可以通过 unpkg.com 获取到 UMD 版本的资源',
    'umd-use': '然后你就可以如此引用整个 Recharts 库：',
    'dev-build': '本地开发',
    dot: '。',
  },
  'getting-started': {
    'getting-started': '快速上手',
    'step-1-title': '1. 选择图表类型',
    'step-1-desc': '传入简单的js对象（通常是一个数组）生成简单的图表。',
    'step-2-title': '2. 添加需要的组件',
    'step-2-desc': '例如， LineChart 可以添加组件 XAxis, YAxis, Legend, CartesianGrid, 等等。',
    'step-3-title': '3. 调整部分组件的配置',
    'step-3-desc': '例如，可以调整 margin-right 的值来保证有足够的空间展示 x 轴最右侧的刻度，也可以调整网格的线型。',
    'step-4-title': '4. 丰富交互',
    'step-4-desc': '添加 Tooltip 组件就能很简单的实现浮窗展示提示信息的功能。',
    'step-5-title': '5. 实现自定义功能',
    'step-5-desc': '例如，你可以通过传入自定义的刻度组件来实现定制化的功能，当然其他的组件也支持类似的功能，比如 Bar 组件也能接收自定义的 shape 组件或者 shape 函数。',
  },
  customize: {
    'customize': '组件自定义',
    'step-1-title': '1. 组件 Line , Area , Bar , XAxis, YAxis 的 labels 支持自定义',
    'step-1-desc': '例如，我们可以创建具有自定义label的<Bar />，以及自定义<XAxis /> 的刻度。',
    'step-2-title': '2. 组件的形状可以自定义',
    'step-2-desc': '例如，当 <Bar /> 的属性 shape 是一个函数或者 react element 的时候，可以用来自定义柱子的形状。',
    'step-3-title': '3. Tooltip 的内容可以自定义',
    'step-3-desc': '我们经常需要在提示浮层中展示更多的信息，这时候就可以时候自定义的 content 。',
    'step-4-title': '4. 组件样式支持 svg 属性',
    'step-4-desc': '除了 Tooltip 和 Legend 使用 html 实现的，其他的组件都是纯 svg 实现，支持 svg 的所有属性。',
    'step-5-title': '5. Tooltip 和 Legend 支持自定义的 style',
    'step-5-desc': 'Tooltip 和 Legend 是使用 html 实现的，开放了 style 相关的 api ，当然也可以通过 css 来改变样式。',
  },
  api: {
    'charts': '图表类型',
    'general-components': '通用组件',
    'cartesian-components': '笛卡尔坐标系组件',
    'polar-components': '极坐标系组件',
    'shapes': '图形',
    default: '默认值：',
    format: '格式：',
    examples: '示例：',
  },
};

export default map;