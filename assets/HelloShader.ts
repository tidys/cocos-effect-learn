const { ccclass, property } = cc._decorator;
cc.dynamicAtlasManager.enabled = false;
@ccclass
export default class HelloShader extends cc.Component {
    start() {
        const render = this.getComponent(cc.Sprite);
        const material = render.getMaterial(0)
        material.setProperty('colorLeft', new cc.Vec4(0, 0, 1, 1));
    }
}
