declare namespace cn {
    namespace nukkit {
        namespace entity {
            namespace item {
                /**
                 * Created by: larryTheCoder on 2017/6/26.
                 * <p>
                 * Nukkit Project,
                 * Minecart and Riding Project,
                 * Package cn.nukkit.entity.item in project Nukkit.
                 */
                // @ts-ignore
                abstract class EntityMinecartAbstract extends cn.nukkit.entity.item.EntityVehicle {
                    // @ts-ignore
                    constructor(chunk: cn.nukkit.level.format.FullChunk, nbt: cn.nukkit.nbt.tag.CompoundTag)
                    // @ts-ignore
                    public abstract getType(): cn.nukkit.utils.MinecartType
                    // @ts-ignore
                    public abstract isRideable(): boolean
                    // @ts-ignore
                    public getHeight(): number /*float*/
                    // @ts-ignore
                    public getWidth(): number /*float*/
                    // @ts-ignore
                    getDrag(): number /*float*/
                    // @ts-ignore
                    public setName(name: java.lang.String | string): void
                    // @ts-ignore
                    public getName(): string
                    // @ts-ignore
                    public getBaseOffset(): number /*float*/
                    // @ts-ignore
                    public hasCustomName(): boolean
                    // @ts-ignore
                    public canDoInteraction(): boolean
                    // @ts-ignore
                    public initEntity(): void
                    // @ts-ignore
                    public onUpdate(currentTick: number /*int*/): boolean
                    // @ts-ignore
                    public attack(source: cn.nukkit.event.entity.EntityDamageEvent): boolean
                    // @ts-ignore
                    public dropItem(): void
                    // @ts-ignore
                    public kill(): void
                    // @ts-ignore
                    public close(): void
                    // @ts-ignore
                    public onInteract(p: cn.nukkit.Player, item: cn.nukkit.item.Item, clickedPos: cn.nukkit.math.Vector3): boolean
                    // @ts-ignore
                    public applyEntityCollision(entity: cn.nukkit.entity.Entity): void
                    // @ts-ignore
                    public saveNBT(): void
                    // @ts-ignore
                    public getMaxSpeed(): number /*double*/
                    // @ts-ignore
                    activate(x: number /*int*/, y: number /*int*/, z: number /*int*/, flag: boolean): void
                    /**
                     * Used to multiply the minecart current speed
                     * @param speed The speed of the minecart that will be calculated
                     */
                    // @ts-ignore
                    public setCurrentSpeed(speed: number /*double*/): void
                    /**
                     * Set the minecart display block
                     * @param block The block that will changed. Set {#code null} for BlockAir
                     * @return {#code true} if the block is normal block
                     */
                    // @ts-ignore
                    public setDisplayBlock(block: cn.nukkit.block.Block): boolean
                    /**
                     * Set the minecart display block
                     * @param block The block that will changed. Set {#code null} for BlockAir
                     * @param update Do update for the block. (This state changes if you want to show the block)
                     * @return {#code true} if the block is normal block
                     */
                    // @ts-ignore
                    public setDisplayBlock(block: cn.nukkit.block.Block, update: boolean): boolean
                    /**
                     * Get the minecart display block
                     * @return Block of minecart display block
                     */
                    // @ts-ignore
                    public getDisplayBlock(): cn.nukkit.block.Block
                    /**
                     * Set the block offset.
                     * @param offset The offset
                     */
                    // @ts-ignore
                    public setDisplayBlockOffset(offset: number /*int*/): void
                    /**
                     * Get the block display offset
                     * @return integer
                     */
                    // @ts-ignore
                    public getDisplayBlockOffset(): number /*int*/
                    /**
                     * Is the minecart can be slowed when empty?
                     * @return boolean
                     */
                    // @ts-ignore
                    public isSlowWhenEmpty(): boolean
                    /**
                     * Set the minecart slowdown flag
                     * @param slow The slowdown flag
                     */
                    // @ts-ignore
                    public setSlowWhenEmpty(slow: boolean): void
                    // @ts-ignore
                    public getFlyingVelocityMod(): cn.nukkit.math.Vector3
                    // @ts-ignore
                    public setFlyingVelocityMod(flying: cn.nukkit.math.Vector3): void
                    // @ts-ignore
                    public getDerailedVelocityMod(): cn.nukkit.math.Vector3
                    // @ts-ignore
                    public setDerailedVelocityMod(derailed: cn.nukkit.math.Vector3): void
                    // @ts-ignore
                    public setMaximumSpeed(speed: number /*double*/): void
                }
            }
        }
    }
}
