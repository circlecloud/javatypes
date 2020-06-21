declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace item {
                /**
                 * Author: Adam Matthew [larryTheCoder]
                 * <p>
                 * Nukkit Project.
                 */
                // @ts-ignore
                class EntityMinecartTNT extends cn.nukkit.entity.item.EntityMinecartAbstract implements cn.nukkit.entity.EntityExplosive {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*int*/
                    // @ts-ignore
                    public isRideable(): boolean
                    // @ts-ignore
                    public initEntity(): void
                    // @ts-ignore
                    public onUpdate(currentTick: number /*int*/): boolean
                    // @ts-ignore
                    public activate(x: number /*int*/, y: number /*int*/, z: number /*int*/, flag: boolean): void
                    // @ts-ignore
                    public explode(): void
                    // @ts-ignore
                    public explode(square: number /*double*/): void
                    // @ts-ignore
                    public dropItem(): void
                    // @ts-ignore
                    public getType(): cn.nukkit.utils.MinecartType
                    // @ts-ignore
                    public getNetworkId(): number /*int*/
                    // @ts-ignore
                    public saveNBT(): void
                    // @ts-ignore
                    public onInteract(player: cn.nukkit.Player, item: cn.nukkit.item.Item, clickedPos: cn.nukkit.math.Vector3): boolean
                    // @ts-ignore
                    public mountEntity(entity: cn.nukkit.entity.Entity, mode: number /*byte*/): boolean
                }
            }
        }
    }
}
