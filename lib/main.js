import nipplejs from 'nipplejs';

AFRAME.registerComponent("joystick-controls", {
    schema: {
        moveSpeed:  { type: 'number', default: 1 },
        turnSpeed:  { type: 'number', default: 1 },
        margin: { type: 'vec2', default: {x:50,y:50} },
        color:  { type: 'color', default: '#fff' }
    },
    init: function() {
        const THIS = this;
        this.move = { x:0, y:0 };
        this.dir = 1;

        const joyDiv = this.createJoyWrapper();
        this.joystick = nipplejs.create({
            zone: joyDiv,
            mode: 'static',
            position: { left:'50%', top:'50%' },
            color: this.data.color
        });

        this.joystick.on('start', (e, data) => {
            // start drag
            THIS.moving = true;
        }).on('move', (e, data) => {
            // drag move
            THIS.move.x = data.vector.x * 100;
            THIS.move.y = data.vector.y * 100;
        }).on('end', (e, data) => {
            // stop drag
            THIS.moving = false;
        }).on('dir:up', (e, data) => {
            // drag up direction
            THIS.dir = 1;
        }).on('dir:down', (e, data) => {
            // drag down direction
            THIS.dir = -1;
        });

        this.rot = this.el.getAttribute("rotation");
        this.pos = this.el.getAttribute("position");
    },
    createJoyWrapper() {
        const wrapper = document.createElement('div');
        wrapper.setAttribute('id', 'joystick-wrapper');
        wrapper.style.width = '100px';
        wrapper.style.height = '100px';
        wrapper.style.position = 'fixed';
        wrapper.style.borderRadius = '50%';
        wrapper.style.zIndex = 99999;
        wrapper.style.left = 0;
        wrapper.style.bottom = 0;
        wrapper.style.margin = `${this.data.margin.y}px ${this.data.margin.x}px`;
        document.body.appendChild(wrapper);
        return wrapper;
    },
    tick: function() {
        if (!this.moving) return;
        
        this.rot.y -= this.move.x * this.data.turnSpeed / 200 * this.dir;
        this.el.setAttribute("rotation", this.rot);

        const speed = this.move.y * this.data.moveSpeed / 2000;

        this.pos.x -= speed * Math.sin(this.rot.y * Math.PI / 180);
        this.pos.z -= speed * Math.cos(this.rot.y * Math.PI / 180);

        this.el.object3D.position.x = this.pos.x;
        this.el.object3D.position.z = this.pos.z;
    }
});