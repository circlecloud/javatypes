declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace volatilecode {
                    // @ts-ignore
                    class VolatileCodeDisabled extends java.lang.Object implements io.lumine.xikage.mythicmobs.volatilecode.VolatileCodeHandler {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public PlaySoundAtLocation(loc: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, sound: java.lang.String | string, volume: number /*float*/, pitch: number /*float*/): void
                        // @ts-ignore
                        public CreateFireworksExplosion(location: Location, flicker: boolean, trail: boolean, type: number /*int*/, colors: number /*int*/[], fadeColors: number /*int*/[], flightDuration: number /*int*/): void
                        // @ts-ignore
                        public doParticleEffect(location: Location, name: java.lang.String | string, spreadHoriz: number /*float*/, spreadVert: number /*float*/, count: number /*int*/, speed: number /*float*/, yOffset: number /*float*/, radius: number /*int*/): void
                        // @ts-ignore
                        public setMaxHealth(e: Entity, health: number /*double*/): void
                        // @ts-ignore
                        public setFollowRange(e: Entity, range: number /*double*/): void
                        // @ts-ignore
                        public setKnockBackResistance(e: Entity, knock: number /*double*/): void
                        // @ts-ignore
                        public setMobSpeed(e: Entity, speed: number /*double*/): void
                        // @ts-ignore
                        public setAttackDamage(e: Entity, damage: number /*double*/): void
                        // @ts-ignore
                        public setItemAttribute(itemName: java.lang.String | string, attr: java.lang.String | string, amount: number /*double*/, item: ItemStack): ItemStack
                        // @ts-ignore
                        public listItemAttributes(player: Player): void
                        // @ts-ignore
                        public setCreeperFuseTicks(c: Creeper, t: number /*int*/): void
                        // @ts-ignore
                        public setCreeperExplosionRadius(c: Creeper, r: number /*int*/): void
                        // @ts-ignore
                        public setChickenHostile(c: Chicken): void
                        // @ts-ignore
                        public setTarget(entity: LivingEntity, target: LivingEntity): void
                        // @ts-ignore
                        public aiGoalSelectorHandler(l: LivingEntity, aiMods: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): void
                        // @ts-ignore
                        public aiTargetSelectorHandler(l: LivingEntity, aiMods: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): void
                        // @ts-ignore
                        public setZombieSpawnReinforcements(z: Zombie, d: number /*double*/): void
                        // @ts-ignore
                        public setItemUnbreakable(i: ItemStack): ItemStack
                        // @ts-ignore
                        public sendTitleToPlayer(player: Player, title: java.lang.String | string, subtitle: java.lang.String | string, fadeIn: number /*int*/, stay: number /*int*/, fadeOut: number /*int*/): void
                        // @ts-ignore
                        public sendActionBarMessageToPlayer(player: Player, message: java.lang.String | string): void
                        // @ts-ignore
                        public setItemHideFlags(i: ItemStack): ItemStack
                        // @ts-ignore
                        public setEntitySilent(e: Entity): void
                        // @ts-ignore
                        public getEntitiesBySelector(am: io.lumine.xikage.mythicmobs.skills.SkillCaster, targetSelector: java.lang.String | string): Array<io.lumine.xikage.mythicmobs.adapters.AbstractEntity>
                        // @ts-ignore
                        public sendWorldEnvironment(player: io.lumine.xikage.mythicmobs.adapters.AbstractPlayer, env: java.lang.String | string): void
                        // @ts-ignore
                        public setNoAI(am: io.lumine.xikage.mythicmobs.mobs.ActiveMob): void
                        // @ts-ignore
                        public playLocalizedLightningEffect(target: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, radius: number /*double*/): void
                        // @ts-ignore
                        public setItemAttributes(item: ItemStack, itemName: java.lang.String | string, options: java.util.Map<java.lang.String | string, java.lang.Object | any>, attributes: java.util.Map<java.lang.String | string, java.util.Map<java.lang.String | string, java.lang.Object | any>>): ItemStack
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
                        public setEnderDragonAI(entity: Entity): void
                        // @ts-ignore
                        public setEnderDragonPathPoint(location: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): void
                    }
                }
            }
        }
    }
}
