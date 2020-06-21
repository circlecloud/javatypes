declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace item {
                /**
                 * Created by Snake1999 on 2016/1/30.
                 * Package cn.nukkit.entity.item in project Nukkit.
                 */
                // @ts-ignore
                class EntityMinecartEmpty extends cn.nukkit.entity.item.EntityMinecartAbstract {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*int*/
                    // @ts-ignore
                    public getNetworkId(): number /*int*/
                    // @ts-ignore
                    public getType(): cn.nukkit.utils.MinecartType
                    // @ts-ignore
                    public isRideable(): boolean
                    // @ts-ignore
                    activate(x: number /*int*/, y: number /*int*/, z: number /*int*/, flag: boolean): void
                    // @ts-ignore
                    public onUpdate(currentTick: number /*int*/): boolean
                }
            }
        }
    }
}
