declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                // @ts-ignore
                class VillagerCareerChangeEvent extends org.bukkit.event.entity.EntityEvent implements org.bukkit.event.Cancellable {
                    // @ts-ignore
                    constructor(what: org.bukkit.entity.Villager, profession: org.bukkit.entity.Villager.Profession, reason: org.bukkit.event.entity.VillagerCareerChangeEvent.ChangeReason)
                    // @ts-ignore
                    getEntity(): org.bukkit.entity.Villager
                    /**
                     * Gets the future profession of the villager.
                     * @return The profession the villager will change to
                     */
                    // @ts-ignore
                    getProfession(): org.bukkit.entity.Villager.Profession
                    /**
                     * Sets the profession the villager will become from this event.
                     * @param profession new profession
                     */
                    // @ts-ignore
                    setProfession(profession: org.bukkit.entity.Villager.Profession): void
                    /**
                     * Gets the reason for why the villager's career is changing.
                     * @return Reason for villager's profession changing
                     */
                    // @ts-ignore
                    getReason(): org.bukkit.event.entity.VillagerCareerChangeEvent.ChangeReason
                    // @ts-ignore
                    isCancelled(): boolean
                    // @ts-ignore
                    setCancelled(cancel: boolean): void
                    // @ts-ignore
                    getHandlers(): org.bukkit.event.HandlerList
                    // @ts-ignore
                    getHandlerList(): org.bukkit.event.HandlerList
                }
            }
        }
    }
}
