declare namespace org {
    namespace bukkit {
        namespace event {
            namespace entity {
                namespace VillagerCareerChangeEvent {
                    /**
                     * Reasons for the villager's profession changing.
                     */
                    // @ts-ignore
                    class ChangeReason extends java.lang.Enum<org.bukkit.event.entity.VillagerCareerChangeEvent.ChangeReason> {
                        /**
                         * Villager lost their job due to too little experience.
                         */
                        // @ts-ignore
                        readonly LOSING_JOB: org.bukkit.event.entity.VillagerCareerChangeEvent.ChangeReason
                        /**
                         * Villager gained employment.
                         */
                        // @ts-ignore
                        readonly EMPLOYED: org.bukkit.event.entity.VillagerCareerChangeEvent.ChangeReason
                        // @ts-ignore
                        values(): org.bukkit.event.entity.VillagerCareerChangeEvent.ChangeReason[]
                        // @ts-ignore
                        valueOf(name: java.lang.String | string): org.bukkit.event.entity.VillagerCareerChangeEvent.ChangeReason
                    }
                }
            }
        }
    }
}
