declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace item {
                /**
                 * @author xtypr
                 */
                // @ts-ignore
                class EntityPotion extends cn.nukkit.entity.projectile.EntityProjectile {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag, shootingEntity: cn.nukkit.entity.Entity)
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*int*/
                    // @ts-ignore
                    public static readonly DATA_POTION_ID: number /*int*/
                    // @ts-ignore
                    public potionId: number /*int*/
                    // @ts-ignore
                    initEntity(): void
                    // @ts-ignore
                    public getNetworkId(): number /*int*/
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
                    public onCollideWithEntity(entity: cn.nukkit.entity.Entity): void
                    // @ts-ignore
                    public onUpdate(currentTick: number /*int*/): boolean
                }
            }
        }
    }
}
