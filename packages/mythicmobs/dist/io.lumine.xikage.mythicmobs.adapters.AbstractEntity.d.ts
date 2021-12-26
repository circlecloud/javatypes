declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace adapters {
                    // @ts-ignore
                    interface AbstractEntity {
                        // @ts-ignore
                        getLocation(): io.lumine.xikage.mythicmobs.adapters.AbstractLocation
                        // @ts-ignore
                        getBukkitEntity(): Entity
                        // @ts-ignore
                        isLiving(): boolean
                        // @ts-ignore
                        isCreature(): boolean
                        // @ts-ignore
                        isPlayer(): boolean
                        // @ts-ignore
                        isAnimal(): boolean
                        // @ts-ignore
                        isWaterMob(): boolean
                        // @ts-ignore
                        isFlyingMob(): boolean
                        // @ts-ignore
                        getUniqueId(): java.util.UUID
                        // @ts-ignore
                        hasLineOfSight(p0: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): boolean
                        // @ts-ignore
                        teleport(p0: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): void
                        // @ts-ignore
                        getHealth(): number /*double*/
                        // @ts-ignore
                        isDead(): boolean
                        // @ts-ignore
                        isValid(): boolean
                        // @ts-ignore
                        remove(): boolean
                        // @ts-ignore
                        getMaxHealth(): number /*double*/
                        // @ts-ignore
                        setMaxHealth(p0: number /*double*/): void
                        // @ts-ignore
                        setFireTicks(p0: number /*int*/): void
                        // @ts-ignore
                        getCustomName(): any
                        // @ts-ignore
                        addPotionEffect(p0: PotionEffect): void
                        // @ts-ignore
                        setPassenger(p0: Entity): void
                        // @ts-ignore
                        getEyeLocation(): io.lumine.xikage.mythicmobs.adapters.AbstractLocation
                        // @ts-ignore
                        getEyeHeight(): number /*double*/
                        // @ts-ignore
                        getWorld(): io.lumine.xikage.mythicmobs.adapters.AbstractWorld
                        // @ts-ignore
                        getTarget(): io.lumine.xikage.mythicmobs.adapters.AbstractEntity
                        // @ts-ignore
                        getVehicle(): io.lumine.xikage.mythicmobs.adapters.AbstractEntity
                        // @ts-ignore
                        eject(): void
                        // @ts-ignore
                        setHealth(p0: number /*double*/): void
                        // @ts-ignore
                        getName(): string
                        // @ts-ignore
                        damage(p0: number /*float*/): void
                        // @ts-ignore
                        asPlayer(): io.lumine.xikage.mythicmobs.adapters.AbstractPlayer
                        // @ts-ignore
                        setNoDamageTicks(p0: number /*int*/): void
                        // @ts-ignore
                        isMonster(): boolean
                        // @ts-ignore
                        isCitizensNPC(): boolean
                        // @ts-ignore
                        isGliding(): boolean
                        // @ts-ignore
                        hasPotionEffect(p0: java.lang.String | string): boolean
                        // @ts-ignore
                        hasPotionEffect(p0: java.lang.String | string, p1: io.lumine.xikage.mythicmobs.util.types.RangedDouble, p2: io.lumine.xikage.mythicmobs.util.types.RangedDouble): boolean
                        // @ts-ignore
                        hasPotionEffect(): boolean
                        // @ts-ignore
                        hasScoreboardTag(p0: java.lang.String | string): boolean
                        // @ts-ignore
                        addScoreboardTag(p0: java.lang.String | string): void
                        // @ts-ignore
                        removeScoreboardTag(p0: java.lang.String | string): void
                        // @ts-ignore
                        getPassenger(): io.lumine.xikage.mythicmobs.adapters.AbstractEntity
                        // @ts-ignore
                        setGravity(p0: boolean): void
                        // @ts-ignore
                        equipItemHead(p0: io.lumine.xikage.mythicmobs.adapters.AbstractItemStack): void
                        // @ts-ignore
                        equipItemChest(p0: io.lumine.xikage.mythicmobs.adapters.AbstractItemStack): void
                        // @ts-ignore
                        equipItemLegs(p0: io.lumine.xikage.mythicmobs.adapters.AbstractItemStack): void
                        // @ts-ignore
                        equipItemFeet(p0: io.lumine.xikage.mythicmobs.adapters.AbstractItemStack): void
                        // @ts-ignore
                        equipItemMainHand(p0: io.lumine.xikage.mythicmobs.adapters.AbstractItemStack): void
                        // @ts-ignore
                        equipItemOffHand(p0: io.lumine.xikage.mythicmobs.adapters.AbstractItemStack): void
                        // @ts-ignore
                        setDamage(p0: number /*double*/): void
                        // @ts-ignore
                        setMovementSpeed(p0: number /*double*/): void
                        // @ts-ignore
                        setAttackSpeed(p0: number /*double*/): void
                        // @ts-ignore
                        getLuck(): number /*int*/
                        // @ts-ignore
                        setMetadata(p0: java.lang.String | string, p1: java.lang.Object | any): void
                        // @ts-ignore
                        hasMetadata(p0: java.lang.String | string): boolean
                        // @ts-ignore
                        removeMetadata(p0: java.lang.String | string): void
                        // @ts-ignore
                        getMetadata(p0: java.lang.String | string): java.util.Optional<java.lang.Object | any>
                        // @ts-ignore
                        isLoaded(): boolean
                        // @ts-ignore
                        setAI(p0: boolean): void
                        // @ts-ignore
                        setVelocity(p0: io.lumine.xikage.mythicmobs.adapters.AbstractVector): void
                        // @ts-ignore
                        getEnchantmentLevel(p0: java.lang.String | string): number /*int*/
                        // @ts-ignore
                        getEnchantmentLevelHeld(p0: java.lang.String | string): number /*int*/
                    }
                }
            }
        }
    }
}
