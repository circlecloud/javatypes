declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace passive {
                /**
                 * Author: BeYkeRYkt Nukkit Project
                 */
                // @ts-ignore
                class EntitySheep extends cn.nukkit.entity.passive.EntityAnimal {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*int*/
                    // @ts-ignore
                    public sheared: boolean
                    // @ts-ignore
                    public color: number /*int*/
                    // @ts-ignore
                    public getWidth(): number /*float*/
                    // @ts-ignore
                    public getHeight(): number /*float*/
                    // @ts-ignore
                    public getName(): string
                    // @ts-ignore
                    public getNetworkId(): number /*int*/
                    // @ts-ignore
                    public initEntity(): void
                    // @ts-ignore
                    public saveNBT(): void
                    // @ts-ignore
                    public onInteract(player: cn.nukkit.Player, item: cn.nukkit.item.Item, clickedPos: cn.nukkit.math.Vector3): boolean
                    // @ts-ignore
                    public shear(): boolean
                    // @ts-ignore
                    public getDrops(): cn.nukkit.item.Item[]
                    // @ts-ignore
                    public setColor(color: number /*int*/): void
                    // @ts-ignore
                    public getColor(): number /*int*/
                }
            }
        }
    }
}
