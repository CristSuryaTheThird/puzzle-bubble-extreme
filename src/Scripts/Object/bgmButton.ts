import * as Phaser from 'phaser'

export default class bgmButton extends Phaser.GameObjects.Sprite{
    constructor(scene:Phaser.Scene, x:number, y:number){
        super(scene,x,y,'musicOn');
        this.scene.add.existing(this);
        this.setScale(1.3);
    }
}