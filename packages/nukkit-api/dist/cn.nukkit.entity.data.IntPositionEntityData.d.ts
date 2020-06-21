declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace data {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class IntPositionEntityData extends cn.nukkit.entity.data.EntityData<cn.nukkit.math.BlockVector3> {
                    // @ts-ignore
                    constructor(id: number /*int*/, x: number /*int*/, y: number /*int*/, z: number /*int*/)
                    // @ts-ignore
                    constructor(id: number /*int*/, pos: cn.nukkit.math.Vector3)
                    // @ts-ignore
                    public x: number /*int*/
                    // @ts-ignore
                    public y: number /*int*/
                    // @ts-ignore
                    public z: number /*int*/
                    // @ts-ignore
                    public getData(): cn.nukkit.math.BlockVector3
                    // @ts-ignore
                    public setData(data: cn.nukkit.math.BlockVector3): void
                    // @ts-ignore
                    public getType(): number /*int*/
                }
            }
        }
    }
}
