declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace adapters {
                    namespace bukkit {
                        // @ts-ignore
                        class BukkitEntity extends java.lang.Object implements io.lumine.xikage.mythicmobs.adapters.AbstractEntity {
                            // @ts-ignore
                            constructor(e: Entity)
                            // @ts-ignore
                            public getBukkitEntity(): Entity
                            // @ts-ignore
                            public getEntityAsLiving(): LivingEntity
                            // @ts-ignore
                            public getEntityAsCreature(): Creature
                            // @ts-ignore
                            public getEntityAsPlayer(): Player
                            // @ts-ignore
                            public getLocation(): io.lumine.xikage.mythicmobs.adapters.AbstractLocation
                            // @ts-ignore
                            public getWorld(): io.lumine.xikage.mythicmobs.adapters.AbstractWorld
                            // @ts-ignore
                            public isLiving(): boolean
                            // @ts-ignore
                            public isCreature(): boolean
                            // @ts-ignore
                            public isMonster(): boolean
                            // @ts-ignore
                            public isPlayer(): boolean
                            // @ts-ignore
                            public getUniqueId(): java.util.UUID
                            // @ts-ignore
                            public hasLineOfSight(e: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): boolean
                            // @ts-ignore
                            public teleport(l: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): void
                            // @ts-ignore
                            public getHealth(): number /*double*/
                            // @ts-ignore
                            public isDead(): boolean
                            // @ts-ignore
                            public isValid(): boolean
                            // @ts-ignore
                            public remove(): boolean
                            // @ts-ignore
                            public getMaxHealth(): number /*double*/
                            // @ts-ignore
                            public setFireTicks(ticks: number /*int*/): void
                            // @ts-ignore
                            public getCustomName(): string
                            // @ts-ignore
                            public addPotionEffect(effect: PotionEffect): void
                            // @ts-ignore
                            public setPassenger(entity: Entity): void
                            // @ts-ignore
                            public setGravity(bool: boolean): void
                            // @ts-ignore
                            public setAI(bool: boolean): void
                            // @ts-ignore
                            public getEyeLocation(): io.lumine.xikage.mythicmobs.adapters.AbstractLocation
                            // @ts-ignore
                            public getEyeHeight(): number /*double*/
                            // @ts-ignore
                            public getTarget(): io.lumine.xikage.mythicmobs.adapters.AbstractEntity
                            // @ts-ignore
                            public getPassenger(): io.lumine.xikage.mythicmobs.adapters.AbstractEntity
                            // @ts-ignore
                            public getVehicle(): io.lumine.xikage.mythicmobs.adapters.AbstractEntity
                            // @ts-ignore
                            public eject(): void
                            // @ts-ignore
                            public setHealth(d: number /*double*/): void
                            // @ts-ignore
                            public getName(): string
                            // @ts-ignore
                            public setMaxHealth(health: number /*double*/): void
                            // @ts-ignore
                            public damage(damage: number /*float*/): void
                            // @ts-ignore
                            public asPlayer(): io.lumine.xikage.mythicmobs.adapters.AbstractPlayer
                            // @ts-ignore
                            public equals(o: java.lang.Object | any): boolean
                            // @ts-ignore
                            public hashCode(): number /*int*/
                            // @ts-ignore
                            public setNoDamageTicks(ticks: number /*int*/): void
                            // @ts-ignore
                            public isCitizensNPC(): boolean
                            // @ts-ignore
                            public isAnimal(): boolean
                            // @ts-ignore
                            public isWaterMob(): boolean
                            // @ts-ignore
                            public isFlyingMob(): boolean
                            // @ts-ignore
                            public isGliding(): boolean
                            // @ts-ignore
                            public hasPotionEffect(type: java.lang.String | string): boolean
                            // @ts-ignore
                            public hasPotionEffect(type: java.lang.String | string, level: io.lumine.xikage.mythicmobs.util.types.RangedDouble, duration: io.lumine.xikage.mythicmobs.util.types.RangedDouble): boolean
                            // @ts-ignore
                            public hasPotionEffect(): boolean
                            // @ts-ignore
                            public hasScoreboardTag(tag: java.lang.String | string): boolean
                            // @ts-ignore
                            public addScoreboardTag(tag: java.lang.String | string): void
                            // @ts-ignore
                            public removeScoreboardTag(tag: java.lang.String | string): void
                            // @ts-ignore
                            public equipItemHead(item: io.lumine.xikage.mythicmobs.adapters.AbstractItemStack): void
                            // @ts-ignore
                            public equipItemChest(item: io.lumine.xikage.mythicmobs.adapters.AbstractItemStack): void
                            // @ts-ignore
                            public equipItemLegs(item: io.lumine.xikage.mythicmobs.adapters.AbstractItemStack): void
                            // @ts-ignore
                            public equipItemFeet(item: io.lumine.xikage.mythicmobs.adapters.AbstractItemStack): void
                            // @ts-ignore
                            public equipItemMainHand(item: io.lumine.xikage.mythicmobs.adapters.AbstractItemStack): void
                            // @ts-ignore
                            public equipItemOffHand(item: io.lumine.xikage.mythicmobs.adapters.AbstractItemStack): void
                            // @ts-ignore
                            public setDamage(damage: number /*double*/): void
                            // @ts-ignore
                            public getDamage(): number /*double*/
                            // @ts-ignore
                            public setMovementSpeed(speed: number /*double*/): void
                            // @ts-ignore
                            public setAttackSpeed(speed: number /*double*/): void
                            // @ts-ignore
                            public getLuck(): number /*int*/
                            // @ts-ignore
                            public getEnchantmentLevel(enchantmentName: java.lang.String | string): number /*int*/
                            // @ts-ignore
                            public getEnchantmentLevelHeld(enchantmentName: java.lang.String | string): number /*int*/
                            // @ts-ignore
                            public setMetadata(key: java.lang.String | string, value: java.lang.Object | any): void
                            // @ts-ignore
                            public hasMetadata(key: java.lang.String | string): boolean
                            // @ts-ignore
                            public removeMetadata(key: java.lang.String | string): void
                            // @ts-ignore
                            public isLoaded(): boolean
                            // @ts-ignore
                            public getMetadata(key: java.lang.String | string): java.util.Optional<java.lang.Object | any>
                            // @ts-ignore
                            public setVelocity(velocity: io.lumine.xikage.mythicmobs.adapters.AbstractVector): void
                        }
                    }
                }
            }
        }
    }
}
