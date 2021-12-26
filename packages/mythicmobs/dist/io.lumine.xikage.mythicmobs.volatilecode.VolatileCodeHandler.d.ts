declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace volatilecode {
                    // @ts-ignore
                    interface VolatileCodeHandler {
                        // @ts-ignore
                        getPlugin(): io.lumine.xikage.mythicmobs.MythicMobs
                        // @ts-ignore
                        getBlockHandler(): io.lumine.xikage.mythicmobs.volatilecode.handlers.VolatileBlockHandler
                        // @ts-ignore
                        getEntityHandler(): io.lumine.xikage.mythicmobs.volatilecode.handlers.VolatileEntityHandler
                        // @ts-ignore
                        getItemHandler(): io.lumine.xikage.mythicmobs.volatilecode.handlers.VolatileItemHandler
                        // @ts-ignore
                        getWorldHandler(): io.lumine.xikage.mythicmobs.volatilecode.handlers.VolatileWorldHandler
                        // @ts-ignore
                        createCompoundTag(value: java.util.Map<java.lang.String | string, io.lumine.xikage.mythicmobs.util.jnbt.Tag>): io.lumine.xikage.mythicmobs.util.jnbt.CompoundTag
                        // @ts-ignore
                        doDamage(p0: io.lumine.xikage.mythicmobs.mobs.ActiveMob, p1: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, p2: number /*float*/): void
                        // @ts-ignore
                        PlaySoundAtLocation(p0: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, p1: java.lang.String | string, p2: number /*float*/, p3: number /*float*/): void
                        // @ts-ignore
                        CreateFireworksExplosion(p0: Location, p1: boolean, p2: boolean, p3: number /*int*/, p4: number /*int*/[], p5: number /*int*/[], p6: number /*int*/): void
                        // @ts-ignore
                        doParticleEffect(location: Location, name: java.lang.String | string, spreadHoriz: number /*float*/, spreadVert: number /*float*/, count: number /*int*/, speed: number /*float*/, yOffset: number /*float*/, radius: number /*int*/): void
                        // @ts-ignore
                        setMaxHealth(e: Entity, health: number /*double*/): void
                        // @ts-ignore
                        setFollowRange(e: Entity, range: number /*double*/): void
                        // @ts-ignore
                        setKnockBackResistance(e: Entity, knock: number /*double*/): void
                        // @ts-ignore
                        setMobSpeed(e: Entity, speed: number /*double*/): void
                        // @ts-ignore
                        setAttackDamage(e: Entity, damage: number /*double*/): void
                        // @ts-ignore
                        setCreeperFuseTicks(c: Creeper, t: number /*int*/): void
                        // @ts-ignore
                        setCreeperExplosionRadius(c: Creeper, r: number /*int*/): void
                        // @ts-ignore
                        setZombieSpawnReinforcements(z: Zombie, d: number /*double*/): void
                        // @ts-ignore
                        setEntitySilent(e: Entity): void
                        // @ts-ignore
                        playLocalizedLightningEffect(p0: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, p1: number /*double*/): void
                        // @ts-ignore
                        setItemUnbreakable(p0: ItemStack): ItemStack
                        // @ts-ignore
                        setItemHideFlags(p0: ItemStack): ItemStack
                        // @ts-ignore
                        setItemDurability(i: ItemStack, durability: number /*int*/): ItemStack
                        // @ts-ignore
                        setItemAttribute(p0: java.lang.String | string, p1: java.lang.String | string, p2: number /*double*/, p3: ItemStack): ItemStack
                        // @ts-ignore
                        listItemAttributes(p0: Player): void
                        // @ts-ignore
                        setChickenHostile(p0: Chicken): void
                        // @ts-ignore
                        setTarget(p0: LivingEntity, p1: LivingEntity): void
                        // @ts-ignore
                        aiGoalSelectorHandler(p0: LivingEntity, p1: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): void
                        // @ts-ignore
                        aiTargetSelectorHandler(p0: LivingEntity, p1: java.util.List<java.lang.String | string> | Array<java.lang.String | string>): void
                        // @ts-ignore
                        sendTitleToPlayer(p0: Player, p1: java.lang.String | string, p2: java.lang.String | string, p3: number /*int*/, p4: number /*int*/, p5: number /*int*/): void
                        // @ts-ignore
                        sendActionBarMessageToPlayer(p0: Player, p1: java.lang.String | string): void
                        // @ts-ignore
                        getEntitiesBySelector(p0: io.lumine.xikage.mythicmobs.skills.SkillCaster, p1: java.lang.String | string): Array<io.lumine.xikage.mythicmobs.adapters.AbstractEntity>
                        // @ts-ignore
                        sendWorldEnvironment(p0: io.lumine.xikage.mythicmobs.adapters.AbstractPlayer, p1: java.lang.String | string): void
                        // @ts-ignore
                        setNoAI(p0: io.lumine.xikage.mythicmobs.mobs.ActiveMob): void
                        // @ts-ignore
                        setItemAttributes(p0: ItemStack, p1: java.lang.String | string, p2: java.util.Map<java.lang.String | string, java.lang.Object | any>, p3: java.util.Map<java.lang.String | string, java.util.Map<java.lang.String | string, java.lang.Object | any>>): ItemStack
                        // @ts-ignore
                        getAbsorptionHearts(p0: LivingEntity): number /*double*/
                        // @ts-ignore
                        saveSkinData(p0: Player, p1: java.lang.String | string): void
                        // @ts-ignore
                        setClientVelocity(p0: Player, p1: Vector): void
                        // @ts-ignore
                        getItemRecharge(p0: Player): number /*float*/
                        // @ts-ignore
                        doEffectArmSwing(p0: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): void
                        // @ts-ignore
                        setEnderDragonAI(p0: Entity): void
                        // @ts-ignore
                        setEnderDragonPathPoint(p0: io.lumine.xikage.mythicmobs.adapters.AbstractLocation): void
                        // @ts-ignore
                        lookAtLocation(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, target: io.lumine.xikage.mythicmobs.adapters.AbstractLocation, headOnly: boolean, immediate: boolean): void
                        // @ts-ignore
                        lookAtEntity(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, target: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, headOnly: boolean, immediate: boolean): void
                        // @ts-ignore
                        lookAt(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, yaw: number /*float*/, pitch: number /*float*/): void
                        // @ts-ignore
                        setHeadYaw(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, yaw: number /*float*/): void
                        // @ts-ignore
                        getItemRecharging(player: Player): boolean
                        // @ts-ignore
                        applyPhysics(target: Block): void
                        // @ts-ignore
                        sendResourcePack(player: io.lumine.xikage.mythicmobs.adapters.AbstractPlayer, url: java.lang.String | string, hash: java.lang.String | string): void
                        // @ts-ignore
                        setEntityAbsorptionHearts(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity, value: number /*float*/): void
                        // @ts-ignore
                        getEntityAbsorptionHearts(entity: io.lumine.xikage.mythicmobs.adapters.AbstractEntity): number /*float*/
                    }
                }
            }
        }
    }
}
