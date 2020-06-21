declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace HarvestEntityEvent {
                        /**
                         * An event where the target is a {@link Player}. Usually this will
                         * have additional information regarding whether the player
                         * {@link #keepsInventory()} and their current experience.
                         */
                        // @ts-ignore
                        interface TargetPlayer extends org.spongepowered.api.event.entity.HarvestEntityEvent.TargetHumanoid, org.spongepowered.api.event.entity.living.humanoid.player.TargetPlayerEvent {
                            /**
                             * Gets whether the player keeps their inventory on death.
                             * @return Whether the player keeps their inventory on death
                             */
                            // @ts-ignore
                            keepsInventory(): boolean
                            /**
                             * Sets if the player keeps their inventory on death.
                             * @param keepInventory Whether the player should keep inventory
                             */
                            // @ts-ignore
                            setKeepsInventory(keepInventory: boolean): void
                            /**
                             * Gets whether the player keeps all of their EXP on death.
                             * @return Whether the player keeps all of their EXP on death
                             */
                            // @ts-ignore
                            keepsLevel(): boolean
                            /**
                             * Sets if the player keeps all of their EXP on death.
                             * @param keepLevel Whether the player will keep experience on death
                             */
                            // @ts-ignore
                            setKeepsLevel(keepLevel: boolean): void
                            /**
                             * Gets the new level the player will have after death.
                             * @return The new level after death
                             */
                            // @ts-ignore
                            getLevel(): number /*int*/
                            /**
                             * Sets the new level the player will have after death.
                             * @param level The new level after death
                             */
                            // @ts-ignore
                            setLevel(level: number /*int*/): void
                        }
                    }
                }
            }
        }
    }
}
