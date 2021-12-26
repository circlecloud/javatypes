declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace volatilecode {
                    // @ts-ignore
                    class VolatileCodeEnabled_v1_13_R2 extends java.lang.Object implements io.lumine.xikage.mythicmobs.volatilecode.VolatileCodeHandler {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public createCompoundTag(value: java.util.Map<java.lang.String | string, io.lumine.xikage.mythicmobs.util.jnbt.Tag>): io.lumine.xikage.mythicmobs.util.jnbt.CompoundTag
                        // @ts-ignore
                        public setEntityAbsorptionHearts(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, value: number /*float*/): void
                        // @ts-ignore
                        public getEntityAbsorptionHearts(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): number /*float*/
                        // @ts-ignore
                        public setItemDurability(item: ItemStack, durability: number /*int*/): ItemStack
                        // @ts-ignore
                        public getEntitiesBySelector(am: io.lumine.xikage.mythicmobs.skills.SkillCaster, targetSelector: java.lang.String | string): Array<io.lumine.xikage.mythicmobs.adapters.AbstractEntity>
                        // @ts-ignore
                        public PlaySoundAtLocation(location: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, sound: java.lang.String | string, volume: number /*float*/, pitch: number /*float*/): void
                        // @ts-ignore
                        public CreateFireworksExplosion(location: Location, flicker: boolean, trail: boolean, type: number /*int*/, colors: number /*int*/[], fadeColors: number /*int*/[], flightDuration: number /*int*/): void
                        // @ts-ignore
                        public setItemAttributes(item: ItemStack, itemName: java.lang.String | string, options: java.util.Map<java.lang.String | string, java.lang.Object | any>, attributes: java.util.Map<java.lang.String | string, java.util.Map<java.lang.String | string, java.lang.Object | any>>): ItemStack
                        // @ts-ignore
                        public setItemAttribute(itemName: java.lang.String | string, attr: java.lang.String | string, amount: number /*double*/, item: ItemStack): ItemStack
                        // @ts-ignore
                        public getItemAttributeList(nms: net.minecraft.server.v1_13_R2.ItemStack): NBTTagList
                        // @ts-ignore
                        public listItemAttributes(player: Player): void
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
                        public setItemUnbreakable(i: ItemStack): ItemStack
                        // @ts-ignore
                        public setItemHideFlags(i: ItemStack): ItemStack
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
                        public doDamage(mob: io.lumine.xikage.mythicmobs.mobs.ActiveMob, t: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, amount: number /*float*/): void
                        // @ts-ignore
                        public getAbsorptionHearts(entity: LivingEntity): number /*double*/
                        // @ts-ignore
                        public setClientVelocity(player: Player, velocity: Vector): void
                        // @ts-ignore
                        public saveSkinData(player: Player, name: java.lang.String | string): void
                        // @ts-ignore
                        public getItemRecharge(player: Player): number /*float*/
                        // @ts-ignore
                        public getItemRecharging(player: Player): boolean
                        // @ts-ignore
                        public doEffectArmSwing(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): void
                        // @ts-ignore
                        public setEnderDragonAI(entity: org.bukkit.entity.Entity): void
                        // @ts-ignore
                        public setEnderDragonPathPoint(location: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): void
                        // @ts-ignore
                        public lookAt(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, yaw: number /*float*/, pitch: number /*float*/): void
                        // @ts-ignore
                        public lookAtLocation(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, to: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, headOnly: boolean, immediate: boolean): void
                        // @ts-ignore
                        public lookAtEntity(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, to: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, headOnly: boolean, immediate: boolean): void
                        // @ts-ignore
                        public setHeadYaw(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, yaw: number /*float*/): void
                        // @ts-ignore
                        public sendResourcePack(player: io.lumine.xikage.mythicmobs.adapters.AbstractPlayer, url: java.lang.String | string, hash: java.lang.String | string): void
                        // @ts-ignore
                        public getBlockHandler(): io.lumine.xikage.mythicmobs.volatilecode.handlers.VolatileBlockHandler
                        // @ts-ignore
                        public getEntityHandler(): io.lumine.xikage.mythicmobs.volatilecode.handlers.VolatileEntityHandler
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
