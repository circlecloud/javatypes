declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace item {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                abstract class EntityVehicle extends cn.nukkit.entity.Entity implements cn.nukkit.entity.EntityRideable, cn.nukkit.entity.EntityInteractable {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    rollingDirection: boolean
                    // @ts-ignore
                    public getRollingAmplitude(): number /*int*/
                    // @ts-ignore
                    public setRollingAmplitude(time: number /*int*/): void
                    // @ts-ignore
                    public getRollingDirection(): number /*int*/
                    // @ts-ignore
                    public setRollingDirection(direction: number /*int*/): void
                    // @ts-ignore
                    public getDamage(): number /*int*/
                    // @ts-ignore
                    public setDamage(damage: number /*int*/): void
                    // @ts-ignore
                    public getInteractButtonText(): string
                    // @ts-ignore
                    public canDoInteraction(): boolean
                    // @ts-ignore
                    public onUpdate(currentTick: number /*int*/): boolean
                    // @ts-ignore
                    performHurtAnimation(): boolean
                    // @ts-ignore
                    public attack(source: cn.nukkit.event.entity.EntityDamageEvent): boolean
                }
            }
        }
    }
}
