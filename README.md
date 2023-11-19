# aframe-joystick-controls-component

[![License](http://img.shields.io/npm/l/aframe-orbit-controls-component.svg?style=flat-square)](https://npmjs.org/package/aframe-orbit-controls-component)

### Overview
The aframe-joystick-controls-component is an A-Frame component that facilitates joystick-based control for effortless manipulation of model movement. This component integrates [nippleJS](https://yoannmoi.net/nipplejs/#demo) to create a dynamic joystick interface, providing an intuitive means to navigate models within an A-Frame scene.

### API

| Property  | Description                  | Default Value  |
| --------  | -----------                  | -------------  |
| moveSpeed | Move speed of control target | 1              |
| turnSpeed | Turn speed of control target | 1              |
| margin    | Joystick Margin              | 50 50          |
| color     | Joystick Color               | #fff           |


### Installation

#### Browser

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="./aframe.min.js"></script>
  <script src="./aframe-joystick-controls-component.js"></script>
</head>

<body>
  <a-scene>
    <a-box position="0 0.5 -3" color="#08f" joystick-controls>
      <a-box scale="0.5 0.5 1.2" color="#0cf" position="0 0 .5"></a-box>
    </a-box>
  </a-scene>
</body>
```
