declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace projectile {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                abstract class EntityProjectile extends cn.nukkit.entity.Entity {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag, shootingEntity: cn.nukkit.entity.Entity)
                    // @ts-ignore
                    public static readonly DATA_SHOOTER_ID: number /*int*/
                    // @ts-ignore
                    public shootingEntity: cn.nukkit.entity.Entity
                    // @ts-ignore
                    public hadCollision: boolean
                    // @ts-ignore
                    public closeOnCollide: boolean
                    // @ts-ignore
                    damage: number /*double*/
                    // @ts-ignore
                    getDamage(): number /*double*/
                    // @ts-ignore
                    getBaseDamage(): number /*double*/
                    // @ts-ignore
                    public getResultDamage(): number /*int*/
                    // @ts-ignore
                    public attack(source: cn.nukkit.event.entity.EntityDamageEvent): boolean
                    // @ts-ignore
                    public onCollideWithEntity(entity: cn.nukkit.entity.Entity): void
                    // @ts-ignore
                    initEntity(): void
                    // @ts-ignore
                    public canCollideWith(entity: cn.nukkit.entity.Entity): boolean
                    // @ts-ignore
                    public saveNBT(): void
                    // @ts-ignore
                    public onUpdate(currentTick: number /*int*/): boolean
                }
            }
        }
    }
}
