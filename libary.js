var ice = {};

ice.newScene = function (name, parent, w, h) {
    document.getElementById(parent).innerHTML += "<canvas id='"+name+"' style='postion: absolute;'></canvas>";
    let canvas = document.getElementById(name);
    canvas.width = w;
    canvas.height = h;
    return(canvas);
};

ice.collide = function (userX, userY, w, h, map) {
    let value;
        for (var i = 0; i <map.length; i++) {
            if (
                userX+w*0.90 >= map[i].x && userX+w*0.10 <= map[i].x+map[i].width &&
                userY+h*0.90 >= map[i].y && userY+h*0.10 <= map[i].y+map[i].height
            ) {
            value = true;
        }else {value = false};
    };
    return(value);
};

ice.useIceEngine = function () {
    document.querySelector("body").innerHTML += "<div id='BGMaterial'></div>";
    document.getElementById("BGMaterial").innerHTML += "<audio></audio>";
};

ice.particlesystem = function (ctx, amount, posX, posY, distribution, size) {
    var particles = [];
    for (var i = 0; i < amount; i++) {
        particles[i] = {x: Math.random() * posX * distribution, y: Math.random() * posY * distribution};
    };
    for (var i = 0; i < amount; i++) {
        ctx.fillRect(particles[i].x, particles[i].y, size, size);
    };
}