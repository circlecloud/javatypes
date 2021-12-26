declare namespace io {
    namespace lumine {
        namespace xikage {
            namespace mythicmobs {
                namespace api {
                    namespace bukkit {
                        namespace events {
                            // @ts-ignore
                            class MythicMobDeathEvent extends Event {
                                // @ts-ignore
                                constructor(am: io.lumine.xikage.mythicmobs.mobs.ActiveMob, killer: LivingEntity, drops: java.util.List<ItemStack> | Array<ItemStack>)
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
                                public getDrops(): Array<ItemStack>
                                // @ts-ignore
                                public setDrops(list: java.util.List<ItemStack> | Array<ItemStack>): void
                                // @ts-ignore
                                public getExp(): number /*int*/
                                // @ts-ignore
                                public setExp(amount: number /*int*/): void
                                // @ts-ignore
                                public getCurrency(): number /*double*/
                                // @ts-ignore
                                public setCurrency(amount: number /*double*/): void
                                // @ts-ignore
                                public getHandlers(): HandlerList
                                // @ts-ignore
                                public static getHandlerList(): HandlerList
                                // @ts-ignore
                                public getMoney(): number /*double*/
                                // @ts-ignore
                                public getExperienceSkillAPI(): number /*int*/
                                // @ts-ignore
                                public getExperienceHeroes(): number /*int*/
                                // @ts-ignore
                                public getExperienceMcMMO(): number /*int*/
                                // @ts-ignore
                                public setMoney(money: number /*double*/): void
                                // @ts-ignore
                                public setExperienceSkillAPI(experienceSkillAPI: number /*int*/): void
                                // @ts-ignore
                                public setExperienceHeroes(experienceHeroes: number /*int*/): void
                                // @ts-ignore
                                public setExperienceMcMMO(experienceMcMMO: number /*int*/): void
                                // @ts-ignore
                                public equals(o: java.lang.Object | any): boolean
                                // @ts-ignore
                                canEqual(other: java.lang.Object | any): boolean
                                // @ts-ignore
                                public hashCode(): number /*int*/
                                // @ts-ignore
                                public toString(): string
                            }
                        }
                    }
                }
            }
        }
    }
}
