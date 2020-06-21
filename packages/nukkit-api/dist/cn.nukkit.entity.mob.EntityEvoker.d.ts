declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace mob {
                /**
                 * @author PikyCZ
                 */
                // @ts-ignore
                class EntityEvoker extends cn.nukkit.entity.mob.EntityMob {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*int*/
                    // @ts-ignore
                    public getNetworkId(): number /*int*/
                    // @ts-ignore
                    initEntity(): void
                    // @ts-ignore
                    public getWidth(): number /*float*/
                    // @ts-ignore
                    public getHeight(): number /*float*/
                    // @ts-ignore
                    public getName(): string
                }
            }
        }
    }
}
