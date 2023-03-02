const { ccclass, property } = cc._decorator;
cc.dynamicAtlasManager.enabled = false;
@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.Material)
    material: cc.Material = null;



    start() {
        const render = this.getComponent(cc.Sprite);
        const material = render.getMaterial(0)
        material.setProperty('colorLeft', new cc.Vec4(0, 0, 1, 1));
    }

    // update (dt) {}
}
