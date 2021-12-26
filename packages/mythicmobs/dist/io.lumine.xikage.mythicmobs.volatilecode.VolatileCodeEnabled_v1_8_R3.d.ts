declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace volatilecode {
                    // @ts-ignore
                    class VolatileCodeEnabled_v1_8_R3 extends java.lang.Object implements io.lumine.xikage.mythicmobs.volatilecode.VolatileCodeHandler {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public setEntityAbsorptionHearts(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, value: number /*float*/): void
                        // @ts-ignore
                        public getEntityAbsorptionHearts(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): number /*float*/
                        // @ts-ignore
                        public getEntitiesBySelector(am: io.lumine.xikage.mythicmobs.skills.SkillCaster, targetSelector: java.lang.String | string): Array<io.lumine.xikage.mythicmobs.adapters.AbstractEntity>
                        // @ts-ignore
                        public PlaySoundAtLocation(location: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, sound: java.lang.String | string, volume: number /*float*/, pitch: number /*float*/): void
                        // @ts-ignore
                        public CreateFireworksExplosion(location: Location, flicker: boolean, trail: boolean, type: number /*int*/, colors: number /*int*/[], fadeColors: number /*int*/[], flightDuration: number /*int*/): void
                        // @ts-ignore
                        public doParticleEffect(location: Location, name: java.lang.String | string, spreadHoriz: number /*float*/, spreadVert: number /*float*/, count: number /*int*/, speed: number /*float*/, yOffset: number /*float*/, radius: number /*int*/): void
                        // @ts-ignore
                        public setMaxHealth(e: org.bukkit.entity.Entity, health: number /*double*/): void
                        // @ts-ignore
                        public setFollowRange(e: org.bukkit.entity.Entity, range: number /*double*/): void
                        // @ts-ignore
                        public setKnockBackResistance(e: org.bukkit.entity.Entity, knock: number /*double*/): void
                        // @ts-ignore
                        public setMobSpeed(e: org.bukkit.entity.Entity, speed: number /*double*/): void
                        // @ts-ignore
                        public setAttackDamage(e: org.bukkit.entity.Entity, damage: number /*double*/): void
                        // @ts-ignore
                        public setItemAttribute(itemName: java.lang.String | string, attr: java.lang.String | string, amount: number /*double*/, item: org.bukkit.inventory.ItemStack): org.bukkit.inventory.ItemStack
                        // @ts-ignore
                        public getItemAttributeList(nms: ItemStack): NBTTagList
                        // @ts-ignore
                        public listItemAttributes(player: Player): void
                        // @ts-ignore
                        public setCreeperFuseTicks(c: Creeper, t: number /*int*/): void
                        // @ts-ignore
                        public setCreeperExplosionRadius(c: Creeper, r: number /*int*/): void
                        // @ts-ignore
                        public setZombieSpawnReinforcements(z: Zombie, d: number /*double*/): void
                        // @ts-ignore
                        public setEntitySilent(e: org.bukkit.entity.Entity): void
                        // @ts-ignore
                        public setChickenHostile(c: Chicken): void
                        // @ts-ignore
                        public setTarget(entity: LivingEntity, target: LivingEntity): void
                        // @ts-ignore
                        public aiGoalSelectorHandler(entity: LivingEntity, aiMods: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): void
                        // @ts-ignore
                        public aiTargetSelectorHandler(entity: LivingEntity, aiMods: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): void
                        // @ts-ignore
                        public setItemUnbreakable(i: org.bukkit.inventory.ItemStack): org.bukkit.inventory.ItemStack
                        // @ts-ignore
                        public setItemHideFlags(i: org.bukkit.inventory.ItemStack): org.bukkit.inventory.ItemStack
                        // @ts-ignore
                        public sendTitleToPlayer(player: Player, title: java.lang.String | string, subtitle: java.lang.String | string, fadeIn: number /*int*/, stay: number /*int*/, fadeOut: number /*int*/): void
                        // @ts-ignore
                        public sendActionBarMessageToPlayer(player: Player, message: java.lang.String | string): void
                        // @ts-ignore
                        public sendWorldEnvironment(player: io.lumine.xikage.mythicmobs.adapters.AbstractPlayer, env: java.lang.String | string): void
                        // @ts-ignore
                        public setNoAI(am: io.lumine.xikage.mythicmobs.mobs.ActiveMob): void
                        // @ts-ignore
                        public playLocalizedLightningEffect(target: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, radius: number /*double*/): void
                        // @ts-ignore
                        public setItemAttributes(item: org.bukkit.inventory.ItemStack, itemName: java.lang.String | string, options: java.util.Map<java.lang.String | string, java.lang.Object | any>, attributes: java.util.Map<java.lang.String | string, java.util.Map<java.lang.String | string, java.lang.Object | any>>): org.bukkit.inventory.ItemStack
                        // @ts-ignore
                        public doDamage(mob: io.lumine.xikage.mythicmobs.mobs.ActiveMob, target: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, amount: number /*float*/): void
                        // @ts-ignore
                        public getAbsorptionHearts(entity: LivingEntity): number /*double*/
                        // @ts-ignore
                        public saveSkinData(player: Player, name: java.lang.String | string): void
                        // @ts-ignore
                        public setClientVelocity(player: Player, velocity: Vector): void
                        // @ts-ignore
                        public getItemRecharge(player: Player): number /*float*/
                        // @ts-ignore
                        public doEffectArmSwing(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): void
                        // @ts-ignore
                        public setEnderDragonAI(entity: org.bukkit.entity.Entity): void
                        // @ts-ignore
                        public setEnderDragonPathPoint(location: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): void
                        // @ts-ignore
                        public applyPhysics(target: Block): void
                        // @ts-ignore
                        public getItemHandler(): io.lumine.xikage.mythicmobs.volatilecode.handlers.VolatileItemHandler
                        // @ts-ignore
                        public getWorldHandler(): io.lumine.xikage.mythicmobs.volatilecode.handlers.VolatileWorldHandler
                    }
                }
            }
        }
    }
}
