# 渲染函数

Vue 推荐在绝大多数情况下使用模板来创建你的 HTML。然而在一些场景中，你真的需要 JavaScript 的完全编程的能力。这时你可以用**渲染函数**，它比模板更接近编译器。

让我们深入一个简单的例子，这个例子里 `render` 函数很实用。假设我们要生成一些带锚点的标题：

```html
<h1>
  <a name="hello-world" href="#hello-world">
    Hello world!
  </a>
</h1>
```

锚点标题的使用非常频繁，我们应该创建一个组件：

```vue-html
<anchored-heading :level="1">Hello world!</anchored-heading>
```

当开始写一个只能通过 `level` prop 动态生成标题 (heading) 的组件时，我们很快就可以得出这样的结论：

```js
const { createApp } = Vue

const app = createApp({})

app.component('anchored-heading', {
  template: `
    <h1 v-if="level === 1">
      <slot></slot>
    </h1>
    <h2 v-else-if="level === 2">
      <slot></slot>
    </h2>
    <h3 v-else-if="level === 3">
      <slot></slot>
    </h3>
    <h4 v-else-if="level === 4">
      <slot></slot>
    </h4>
    <h5 v-else-if="level === 5">
      <slot></slot>
    </h5>
    <h6 v-else-if="level === 6">
      <slot></slot>
    </h6>
  `,
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})
```

这个模板感觉不太好。它不仅冗长，而且我们为每个级别标题重复书写了 `<slot></slot>`。当我们添加锚元素时，我们必须在每个 `v-if/v-else-if` 分支中再次重复它。

虽然模板在大多数组件中都非常好用，但是显然在这里它就不合适了。那么，我们来尝试使用 `render` 函数重写上面的例子：

```js
const { createApp, h } = Vue

const app = createApp({})

app.component('anchored-heading', {
  render() {
    return h(
      'h' + this.level, // tag name
      {}, // props/attributes
      this.$slots.default() // array of children
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})
```

`render()` 函数的实现要精简得多，但是需要非常熟悉组件的实例 property。在这个例子中，你需要知道，向组件中传递不带 `v-slot` 指令的子节点时，比如 `anchored-heading` 中的 `Hello world!` ，这些子节点被存储在组件实例中的 `$slots.default` 中。如果你还不了解，**在深入渲染函数之前推荐阅读[实例 property API](../api/instance-properties.html)**。

## DOM 树

在深入渲染函数之前，了解一些浏览器的工作原理是很重要的。以下面这段 HTML 为例：

```html
<div>
  <h1>My title</h1>
  Some text content
  <!-- TODO: Add tagline -->
</div>
```

当浏览器读到这些代码时，它会建立一个 [”DOM 节点“ 树](https://javascript.info/dom-nodes) 来保持追踪所有内容，如同你会画一张家谱树来追踪家庭成员的发展一样。

上述 HTML 对应的 DOM 节点树如下图所示

![DOM Tree Visualization](/images/dom-tree.png)

每个元素都是一个节点。每段文字也是一个节点。甚至注释也都是节点。一个节点就是页面的一个部分。就像家谱树一样，每个节点都可以有孩子节点 (也就是说每个部分可以包含其它的一些部分)。

高效地更新所有这些节点会是比较困难的，不过所幸你不必手动完成这个工作。你只需要告诉 Vue 你希望页面上的 HTML 是什么，这可以是在一个模板里：

```html
<h1>{{ blogTitle }}</h1>
```

或者一个渲染函数里：

```js
render() {
  return h('h1', {}, this.blogTitle)
}
```

在这两种情况下，Vue 都会自动保持页面的更新，即便 `blogTitle` 发生了改变。

## 虚拟 DOM 树

Vue 通过建立一个**虚拟 DOM** 来追踪自己要如何改变真实 DOM。请仔细看这行代码：

```js
return h('h1', {}, this.blogTitle)
```

`h()` 到底会返回什么呢？其实不是一个*实际*的 DOM 元素。它更准确的名字可能是 createNodeDescription，因为它所包含的信息会告诉 Vue 页面上需要渲染什么样的节点，包括及其子节点的描述信息。我们把这样的节点描述为“虚拟节点 (virtual node)”，也常简写它为 **VNode**。“虚拟 DOM”是我们对由 Vue 组件树建立起来的整个 VNode 树的称呼。

## `h()` 参数

`h()` 函数是一个用于创建 vnode 的实用程序。也许可以更准确地将其命名为 `createVNode()`，但由于频繁使用和简洁，它被称为 `h()` 。它接受三个参数：

```js
// @returns {VNode}
h(
  // {String | Object | Function} tag
  // 一个 HTML 标签名、一个组件、一个异步组件、或
  // 一个函数式组件。
  //
  // 必需的。
  'div',

  // {Object} props
  // 与 attribute、prop 和事件相对应的对象。
  // 我们会在模板中使用。
  //
  // 可选的。
  {},

  // {String | Array | Object} children
  // 子 VNodes, 使用 `h()` 构建,
  // 或使用字符串获取 "文本 Vnode" 或者
  // 有插槽的对象。
  //
  // 可选的。
  [
    'Some text comes first.',
    h('h1', 'A headline'),
    h(MyComponent, {
      someProp: 'foobar'
    })
  ]
)
```

如果没有 prop，那么通常可以将 children 作为第二个参数传入。如果会产生歧义，可以将 `null` 作为第二个参数传入，将 children 作为第三个参数传入。

## 完整实例

有了这些知识，我们现在可以完成我们最开始想实现的组件：

```js
const { createApp, h } = Vue

const app = createApp({})

/** 递归地从子节点获取文本 */
function getChildrenTextContent(children) {
  return children
    .map(node => {
      return typeof node.children === 'string'
        ? node.children
        : Array.isArray(node.children)
        ? getChildrenTextContent(node.children)
        : ''
    })
    .join('')
}

app.component('anchored-heading', {
  render() {
    // 从 children 的文本内容中创建短横线分隔 (kebab-case) id。
    const headingId = getChildrenTextContent(this.$slots.default())
      .toLowerCase()
      .replace(/\W+/g, '-') // 用短横线替换非单词字符
      .replace(/(^-|-$)/g, '') // 删除前后短横线

    return h('h' + this.level, [
      h(
        'a',
        {
          name: headingId,
          href: '#' + headingId
        },
        this.$slots.default()
      )
    ])
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})
```

## 约束

### VNodes 必须唯一

组件树中的所有 VNode 必须是唯一的。这意味着，下面的渲染函数是不合法的：

```js
render() {
  const myParagraphVNode = h('p', 'hi')
  return h('div', [
    // 错误 - 重复的 Vnode!
    myParagraphVNode, myParagraphVNode
  ])
}
```

如果你真的需要重复很多次的元素/组件，你可以使用工厂函数来实现。例如，下面这渲染函数用完全合法的方式渲染了 20 个相同的段落：

```js
render() {
  return h('div',
    Array.from({ length: 20 }).map(() => {
      return h('p', 'hi')
    })
  )
}
```

## 创建组件 VNode

要为某个组件创建一个 VNode，传递给 `h` 的第一个参数应该是组件本身。

```js
render() {
  return h(ButtonCounter)
}
```

如果我们需要通过名称来解析一个组件，那么我们可以调用 `resolveComponent`：

```js
const { h, resolveComponent } = Vue

// ...

render() {
  const ButtonCounter = resolveComponent('ButtonCounter')
  return h(ButtonCounter)
}
```

`resolveComponent` 是模板内部用来解析组件名称的同一个函数。

`render` 函数通常只需要对[全局注册](/guide/component-registration.html#global-registration)的组件使用 `resolveComponent`。而对于[局部注册](/guide/component-registration.html#local-registration)的却可以跳过，请看下面的例子：

```js
// 我们可以简化为
components: {
  ButtonCounter
},
render() {
  return h(resolveComponent('ButtonCounter'))
}
```

我们可以直接使用它，而不是通过名称注册一个组件，然后再查找：

```js
render() {
  return h(ButtonCounter)
}
```

## 使用 JavaScript 代替模板功能

### `v-if` 和 `v-for`

只要在原生的 JavaScript 中可以轻松完成的操作，Vue 的渲染函数就不会提供专有的替代方法。比如，在模板中使用的 `v-if` 和 `v-for`：

```html
<ul v-if="items.length">
  <li v-for="item in items">{{ item.name }}</li>
</ul>
<p v-else>No items found.</p>
```

这些都可以在渲染函数中用 JavaScript 的 `if`/`else` 和 `map()` 来重写：

```js
props: ['items'],
render() {
  if (this.items.length) {
    return h('ul', this.items.map((item) => {
      return h('li', item.name)
    }))
  } else {
    return h('p', 'No items found.')
  }
}
```

### `v-model`

`v-model` 指令扩展为 `modelValue` 和 `onUpdate:modelValue` 在模板编译过程中，我们必须自己提供这些 prop：

```js
props: ['modelValue'],
emits: ['update:modelValue'],
render() {
  return h(SomeComponent, {
    modelValue: this.modelValue,
    'onUpdate:modelValue': value => this.$emit('update:modelValue', value)
  })
}
```

### `v-on`

我们必须为事件处理程序提供一个正确的 prop 名称，例如，要处理 `click` 事件，prop 名称应该是 `onClick`。

```js
render() {
  return h('div', {
    onClick: $event => console.log('clicked', $event.target)
  })
}
```

#### 事件修饰符

对于 `.passive` 、`.capture` 和 `.once` 事件修饰符，可以使用驼峰写法将他们拼接在事件名后面：

实例:

```js
render() {
  return h('input', {
    onClickCapture: this.doThisInCapturingMode,
    onKeyupOnce: this.doThisOnce,
    onMouseoverOnceCapture: this.doThisOnceInCapturingMode
  })
}
```

对于所有其它的修饰符，私有前缀都不是必须的，因为你可以在事件处理函数中使用事件方法：

| 修饰符                                         | 处理函数中的等价操作                                                                                         |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `.stop`                                        | `event.stopPropagation()`                                                                                    |
| `.prevent`                                     | `event.preventDefault()`                                                                                     |
| `.self`                                        | `if (event.target !== event.currentTarget) return`                                                           |
| 按键：<br>`.enter`, `.13`                      | `if (event.keyCode !== 13) return` (对于别的按键修饰符来说，可将 13 改为[另一个按键码](http://keycode.info/) |
| 修饰键：<br>`.ctrl`, `.alt`, `.shift`, `.meta` | `if (!event.ctrlKey) return` (将 `ctrlKey` 分别修改为 `altKey`, `shiftKey`, 或 `metaKey`)                    |

这里是一个使用所有修饰符的例子：

```js
render() {
  return h('input', {
    onKeyUp: event => {
      // 如果触发事件的元素不是事件绑定的元素
      // 则返回
      if (event.target !== event.currentTarget) return
      // 如果向上键不是回车键，则终止
      // 没有同时按下按键 (13) 和 shift 键
      if (!event.shiftKey || event.keyCode !== 13) return
      // 停止事件传播
      event.stopPropagation()
      // 阻止该元素默认的 keyup 事件
      event.preventDefault()
      // ...
    }
  })
}
```

### 插槽

你可以通过 [`this.$slots`](../api/instance-properties.html#slots) 访问静态插槽的内容，每个插槽都是一个 VNode 数组：

```js
render() {
  // `<div><slot></slot></div>`
  return h('div', {}, this.$slots.default())
}
```

```js
props: ['message'],
render() {
  // `<div><slot :text="message"></slot></div>`
  return h('div', {}, this.$slots.default({
    text: this.message
  }))
}
```

要使用渲染函数将插槽传递给子组件，请执行以下操作：

```js
const { h, resolveComponent } = Vue

render() {
  // `<div><child v-slot="props"><span>{{ props.text }}</span></child></div>`
  return h('div', [
    h(
      resolveComponent('child'),
      {},
      // 将 `slots` 以 { name: props => VNode | Array<VNode> } 的形式传递给子对象。
      {
        default: (props) => Vue.h('span', props.text)
      }
    )
  ])
}
```

插槽以函数的形式传递，允许子组件控制每个插槽内容的创建。任何响应式数据都应该在插槽函数内访问，以确保它被注册为子组件的依赖关系，而不是父组件。相反，对 `resolveComponent` 的调用应该在插槽函数之外进行，否则它们会相对于错误的组件进行解析。

```js
// `<MyButton><MyIcon :name="icon" />{{ text }}</MyButton>`
render() {
  // 应该是在插槽函数外面调用 resolveComponent。
  const Button = resolveComponent('MyButton')
  const Icon = resolveComponent('MyIcon')

  return h(
    Button,
    null,
    {
      // 使用箭头函数保存 `this` 的值
      default: (props) => {
        // 响应式 property 应该在插槽函数内部读取，
        // 这样它们就会成为 children 渲染的依赖。
        return [
          h(Icon, { name: this.icon }),
          this.text
        ]
      }
    }
  )
}
```

如果一个组件从它的父组件中接收到插槽，它们可以直接传递给子组件。

```js
render() {
  return h(Panel, null, this.$slots)
}
```

也可以根据情况单独传递或包裹住。

```js
render() {
  return h(
    Panel,
    null,
    {
      // 如果我们想传递一个槽函数，我们可以通过
      header: this.$slots.header,

      // 如果我们需要以某种方式对插槽进行操作，
      // 那么我们需要用一个新的函数来包裹它
      default: (props) => {
        const children = this.$slots.default ? this.$slots.default(props) : []

        return children.concat(h('div', 'Extra child'))
      }
    }
  )
}
```

### `<component>` 和 `is`

在底层实现里，模板使用 `resolveDynamicComponent` 来实现 `is` attribute。如果我们在 `render` 函数中需要 `is` 提供的所有灵活性，我们可以使用同样的函数：

```js
const { h, resolveDynamicComponent } = Vue

// ...

// `<component :is="name"></component>`
render() {
  const Component = resolveDynamicComponent(this.name)
  return h(Component)
}
```

就像 `is`, `resolveDynamicComponent` 支持传递一个组件名称、一个 HTML 元素名称或一个组件选项对象。

通常这种程度的灵活性是不需要的。通常 `resolveDynamicComponent` 可以被换做一个更直接的替代方案。

例如，如果我们只需要支持组件名称，那么可以使用 `resolveComponent` 来代替。

如果 VNode 始终是一个 HTML 元素，那么我们可以直接把它的名字传递给 `h`：

```js
// `<component :is="bold ? 'strong' : 'em'"></component>`
render() {
  return h(this.bold ? 'strong' : 'em')
}
```

同样，如果传递给 `is` 的值是一个组件选项对象，那么不需要解析什么，可以直接作为 `h` 的第一个参数传递。

与 `<template>` 标签一样，`<component>` 标签仅在模板中作为语法占位符需要，当迁移到 `render` 函数时，应被丢弃。

### 自定义指令

可以使用 [`withDirectives`](/api/global-api.html#withdirectives) 将自定义指令应用于 VNode：

```js
const { h, resolveDirective, withDirectives } = Vue

// ...

// <div v-pin:top.animate="200"></div>
render () {
  const pin = resolveDirective('pin')

  return withDirectives(h('div'), [
    [pin, 200, 'top', { animate: true }]
  ])
}
```

[`resolveDirective`](/api/global-api.html#resolvedirective) 是模板内部用来解析指令名称的同一个函数。只有当你还没有直接访问指令的定义对象时，才需要这样做。

<!-- TODO: translation -->
### Built-in Components

[Built-in components](/api/built-in-components.html) such as `<keep-alive>`, `<transition>`, `<transition-group>`, and `<teleport>` are not registered globally by default. This allows bundlers to perform tree-shaking, so that the components are only included in the build if they are used. However, that also means we can't access them using `resolveComponent` or `resolveDynamicComponent`.

Templates have special handling for those components, automatically importing them when they are used. When we're writing our own `render` functions, we need to import them ourselves:

```js
const { h, KeepAlive, Teleport, Transition, TransitionGroup } = Vue
// ...
render () {
  return h(Transition, { mode: 'out-in' }, /* ... */)
}
```

## Return Values for Render Functions

In all of the examples we've seen so far, the `render` function has returned a single root VNode. However, there are alternatives.

Returning a string will create a text VNode, without any wrapping element:

```js
render() {
  return 'Hello world!'
}
```

We can also return an array of children, without wrapping them in a root node. This creates a fragment:

```js
// Equivalent to a template of `Hello<br>world!`
render() {
  return [
    'Hello',
    h('br'),
    'world!'
  ]
}
```

If a component needs to render nothing, perhaps because data is still loading, it can just return `null`. This will be rendered as a comment node in the DOM.

## JSX

如果你写了很多渲染函数，可能会觉得下面这样的代码写起来很痛苦：

```js
h(
  'anchored-heading',
  {
    level: 1
  },
  {
    default: () => [h('span', 'Hello'), ' world!']
  }
)
```

特别是对应的模板如此简单的情况下：

```vue-html
<anchored-heading :level="1"> <span>Hello</span> world! </anchored-heading>
```

这就是为什么会有一个 [Babel 插件](https://github.com/vuejs/jsx-next)，用于在 Vue 中使用 JSX 语法，它可以让我们回到更接近于模板的语法上。

```jsx
import AnchoredHeading from './AnchoredHeading.vue'

const app = createApp({
  render() {
    return (
      <AnchoredHeading level={1}>
        <span>Hello</span> world!
      </AnchoredHeading>
    )
  }
})

app.mount('#demo')
```

有关 JSX 如何映射到 JavaScript 的更多信息，请参阅[使用文档](https://github.com/vuejs/jsx-next#installation) 。

<!-- TODO: translation-->

## 函数式组件

Functional components are an alternative form of component that don't have any state of their own. They are rendered without creating a component instance, bypassing the usual component lifecycle.

To create a functional component we use a plain function, rather than an options object. The function is effectively the `render` function for the component. As there is no `this` reference for a functional component, Vue will pass in the `props` as the first argument:

```js
const FunctionalComponent = (props, context) => {
  // ...
}
```

The second argument, `context`, contains three properties: `attrs`, `emit`, and `slots`. These are equivalent to the instance properties [`$attrs`](/api/instance-properties.html#attrs), [`$emit`](/api/instance-methods.html#emit), and [`$slots`](/api/instance-properties.html#slots) respectively.

Most of the usual configuration options for components are not available for functional components. However, it is possible to define [`props`](/api/options-data.html#props) and [`emits`](/api/options-data.html#emits) by adding them as properties:

```js
FunctionalComponent.props = ['value']
FunctionalComponent.emits = ['click']
```

If the `props` option is not specified, then the `props` object passed to the function will contain all attributes, the same as `attrs`. The prop names will not be normalized to camelCase unless the `props` option is specified.

Functional components can be registered and consumed just like normal components. If you pass a function as the first argument to `h`, it will be treated as a functional component.

## 模板编译

你可能会有兴趣知道，Vue 的模板实际上被编译成了渲染函数。这是一个实现细节，通常不需要关心。但如果你想看看模板的功能具体是怎样被编译的，可能会发现会非常有意思。下面是一个使用 `Vue.compile` 来实时编译模板字符串的简单示例：

<iframe src="https://vue-next-template-explorer.netlify.app/" width="100%" height="420"></iframe>
