import nipplejs from 'nipplejs';

AFRAME.registerComponent("joystick-controls", {
    schema: {
        moveSpeed:  { type: 'number', default: 1 },
        turnSpeed:  { type: 'number', default: 1 },
        margin: { type: 'vec2', default: {x:50,y:50} },
        color:  { type: 'color', default: '#fff' },
        damping: { type: 'number', default: 0.001 }
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
            AFRAME.ANIME({
                targets: this.move,
                x: 0,
                y: 0,
                duration: 1 / THIS.data.damping,
                easing: 'easeOutCubic',
                onComplete: () => { THIS.moving = false; }
            });
            // THIS.move.x = THIS.move.y = 0;
        }).on('dir:up plain:up', (e, data) => {
            // drag up direction
            THIS.dir = 1;
        }).on('dir:down plain:down', (e, data) => {
            // drag down direction
            THIS.dir = -1;
        });

        this.rot = this.el.getAttribute("rotation");
        this.pos = this.el.getAttribute("position");
    },
    createJoyWrapper() {
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'joystick-wrapper');
        document.body.appendChild(wrapper);
        this.insertCSS(`
            .joystick-wrapper { position:fixed; left:${this.data.margin.x}px; bottom:${this.data.margin.y}px; width:100px; height:100px; border-radius:50%; z-index:9999; }
            .joystick-wrapper .nipple .front { box-shadow: 0 0 8px rgba(0,0,0,.3); }
            .joystick-wrapper .nipple .back  { border: 1px solid rgba(0,0,0,.1); }
        `);
        return wrapper;
    },
    insertCSS(cssText) {
        if (document.querySelector('#joystick-controls-style')) return;
        
        const styleSheet = document.createElement('style');
        styleSheet.id = 'joystick-controls-style';
        styleSheet.innerHTML = cssText;
        document.head.appendChild(styleSheet);
    },
    tick: function() {
        if (!this.moving) return;
        
        this.rot.y -= this.move.x * this.data.turnSpeed / 200 * this.dir;
        this.el.setAttribute("rotation", this.rot);

        const speed = this.move.y * this.data.moveSpeed / 2000;

        this.pos.x -= speed * Math.sin(this.rot.y * Math.PI / 180);
        this.pos.z -= speed * Math.cos(this.rot.y * Math.PI / 180);
    }
});