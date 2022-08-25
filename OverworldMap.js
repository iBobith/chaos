class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;
        this.walls = config.wall || {};

        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;

        this.upperImage = new Image();
        this.upperImage.src = config.upperSrc;
    }

    drawLowerImage(ctx, cameraPerson) {
        ctx.drawImage(this.lowerImage,
         utils.withGrid(10.5) - cameraPerson.x, utils.withGrid(6) - cameraPerson.y)
    }
    drawUpperImage(ctx, cameraPerson) {
        ctx.drawImage(this.upperImage,
            utils.withGrid(10.5) - cameraPerson.x, utils.withGrid(6) - cameraPerson.y)
    }
    isSpaceTaken(currentX, currentY, direction) {
        const {x, y} = utils.nextPosition(currentX, currentY, direction);
        return this.walls[`${x}, ${y}`] || false;
    }
}

window.OverworldMaps = {
    DemoRoom: {
        lowerSrc: "/images/maps/DemoLower.png",
        upperSrc: "/images/maps/DemoUpper.png",
        gameObjects: {
            hero: new Person({
                isPlayerControlled: true,
                x: utils.withGrid(4),
                y: utils.withGrid(6)
            }),
            npc1: new Person({
                x: utils.withGrid(7),
                y: utils.withGrid(9),
                src: "/images/characters/people/npc1.png"
            }),
        },
        walls: {
            // "16, 16": true;
            [utils.asGridCoord(7, 6)] : true,
            [utils.asGridCoord(8, 6)] : true,
            [utils.asGridCoord(7, 7)] : true,
            [utils.asGridCoord(8, 7)] : true,
        }
    },
    Shop: {
        lowerSrc: "/images/maps/PizzaShopLower.png",
        upperSrc: "/images/maps/PizzaShopUpper.png",
        gameObjects: {
            hero: new GameObject({
                x: 3,
                y: 7,
            }),
            npcA: new GameObject({
                x: 9,
                y: 8,
                src: "/images/characters/people/npc2.png"
            }),
            npcB: new GameObject({
                x: 3,
                y: 5,
                src: "/images/characters/people/npc3.png"
            }),
    },
    Street: {

    },
    }
}