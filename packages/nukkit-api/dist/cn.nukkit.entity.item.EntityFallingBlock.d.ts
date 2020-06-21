declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace item {
                /**
                 * @author MagicDroidX
                 */
                // @ts-ignore
                class EntityFallingBlock extends cn.nukkit.entity.Entity {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*int*/
                    // @ts-ignore
                    blockId: number /*int*/
                    // @ts-ignore
                    damage: number /*int*/
                    // @ts-ignore
                    public getWidth(): number /*float*/
                    // @ts-ignore
                    public getLength(): number /*float*/
                    // @ts-ignore
                    public getHeight(): number /*float*/
                    // @ts-ignore
                    getGravity(): number /*float*/
                    // @ts-ignore
                    getDrag(): number /*float*/
                    // @ts-ignore
                    getBaseOffset(): number /*float*/
                    // @ts-ignore
                    public canCollide(): boolean
                    // @ts-ignore
                    initEntity(): void
                    // @ts-ignore
                    public canCollideWith(entity: cn.nukkit.entity.Entity): boolean
                    // @ts-ignore
                    public attack(source: cn.nukkit.event.entity.EntityDamageEvent): boolean
                    // @ts-ignore
                    public onUpdate(currentTick: number /*int*/): boolean
                    // @ts-ignore
                    public getBlock(): number /*int*/
                    // @ts-ignore
                    public getDamage(): number /*int*/
                    // @ts-ignore
                    public getNetworkId(): number /*int*/
                    // @ts-ignore
                    public saveNBT(): void
                    // @ts-ignore
                    public canBeMovedByCurrents(): boolean
                }
            }
        }
    }
}
