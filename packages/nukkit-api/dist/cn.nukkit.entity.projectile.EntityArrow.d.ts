declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace projectile {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                class EntityArrow extends cn.nukkit.entity.projectile.EntityProjectile {
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
                    public static readonly PICKUP_NONE: number /*int*/
                    // @ts-ignore
                    public static readonly PICKUP_ANY: number /*int*/
                    // @ts-ignore
                    public static readonly PICKUP_CREATIVE: number /*int*/
                    // @ts-ignore
                    pickupMode: number /*int*/
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
                    public saveNBT(): void
                    // @ts-ignore
                    public getPickupMode(): number /*int*/
                    // @ts-ignore
                    public setPickupMode(pickupMode: number /*int*/): void
                }
            }
        }
    }
}
