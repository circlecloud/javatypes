declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace projectile {
                /**
                 * Created by PetteriM1
                 */
                // @ts-ignore
                class EntityThrownTrident extends cn.nukkit.entity.projectile.EntityProjectile {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag, shootingEntity: cn.nukkit.entity.Entity)
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag, shootingEntity: cn.nukkit.entity.Entity, critical: boolean)
                    // @ts-ignore
                    public static readonly NETWORK_ID: number /*int*/
                    // @ts-ignore
                    public static readonly DATA_SOURCE_ID: number /*int*/
                    // @ts-ignore
                    trident: cn.nukkit.item.Item
                    // @ts-ignore
                    gravity: number /*float*/
                    // @ts-ignore
                    drag: number /*float*/
                    // @ts-ignore
                    public getNetworkId(): number /*int*/
                    // @ts-ignore
                    public getWidth(): number /*float*/
                    // @ts-ignore
                    public getLength(): number /*float*/
                    // @ts-ignore
                    public getHeight(): number /*float*/
                    // @ts-ignore
                    public getGravity(): number /*float*/
                    // @ts-ignore
                    public getDrag(): number /*float*/
                    // @ts-ignore
                    initEntity(): void
                    // @ts-ignore
                    public saveNBT(): void
                    // @ts-ignore
                    public getItem(): cn.nukkit.item.Item
                    // @ts-ignore
                    public setItem(item: cn.nukkit.item.Item): void
                    // @ts-ignore
                    public setCritical(): void
                    // @ts-ignore
                    public setCritical(value: boolean): void
                    // @ts-ignore
                    public isCritical(): boolean
                    // @ts-ignore
                    public getResultDamage(): number /*int*/
                    // @ts-ignore
                    getBaseDamage(): number /*double*/
                    // @ts-ignore
                    public onUpdate(currentTick: number /*int*/): boolean
                    // @ts-ignore
                    public spawnTo(player: cn.nukkit.Player): void
                    // @ts-ignore
                    public onCollideWithEntity(entity: cn.nukkit.entity.Entity): void
                    // @ts-ignore
                    public create(type: java.lang.Object | any, source: cn.nukkit.level.Position, ...args: java.lang.Object[] | any[]): cn.nukkit.entity.Entity
                }
            }
        }
    }
}
