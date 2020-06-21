declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace data {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class Vector3fEntityData extends cn.nukkit.entity.data.EntityData<cn.nukkit.math.Vector3f> {
                    // @ts-ignore
                    constructor(id: number /*int*/, x: number /*float*/, y: number /*float*/, z: number /*float*/)
                    // @ts-ignore
                    constructor(id: number /*int*/, pos: cn.nukkit.math.Vector3f)
                    // @ts-ignore
                    public x: number /*float*/
                    // @ts-ignore
                    public y: number /*float*/
                    // @ts-ignore
                    public z: number /*float*/
                    // @ts-ignore
                    public getData(): cn.nukkit.math.Vector3f
                    // @ts-ignore
                    public setData(data: cn.nukkit.math.Vector3f): void
                    // @ts-ignore
                    public getType(): number /*int*/
                }
            }
        }
    }
}
