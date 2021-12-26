declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace api {
                    namespace bukkit {
                        namespace events {
                            // @ts-ignore
                            class MythicMobLootDropEvent extends Event {
                                // @ts-ignore
                                constructor(am: io.lumine.xikage.mythicmobs.mobs.ActiveMob, killer: LivingEntity, drops: io.lumine.xikage.mythicmobs.drops.LootBag)
                                // @ts-ignore
                                public getMob(): io.lumine.xikage.mythicmobs.mobs.ActiveMob
                                // @ts-ignore
                                public getEntity(): Entity
                                // @ts-ignore
                                public getMobType(): io.lumine.xikage.mythicmobs.mobs.MythicMob
                                // @ts-ignore
                                public getMobLevel(): number /*int*/
                                // @ts-ignore
                                public getNumberOfPlayerKills(): number /*int*/
                                // @ts-ignore
                                public getKiller(): LivingEntity
                                // @ts-ignore
                                public getDrops(): io.lumine.xikage.mythicmobs.drops.LootBag
                                // @ts-ignore
                                public getPhysicalDrops(): Array<io.lumine.xikage.mythicmobs.drops.Drop>
                                // @ts-ignore
                                public getIntangibleDrops(): Array<io.lumine.xikage.mythicmobs.drops.Drop>
                                // @ts-ignore
                                public getIntangibleDrop(clazz: java.lang.Class<any>): java.util.Optional<io.lumine.xikage.mythicmobs.drops.Drop>
                                // @ts-ignore
                                public getExp(): number /*int*/
                                // @ts-ignore
                                public setExp(amount: number /*int*/): void
                                // @ts-ignore
                                public getMoney(): number /*int*/
                                // @ts-ignore
                                public setMoney(amount: number /*int*/): void
                                // @ts-ignore
                                public getHandlers(): HandlerList
                                // @ts-ignore
                                public static getHandlerList(): HandlerList
                            }
                        }
                    }
                }
            }
        }
    }
}
