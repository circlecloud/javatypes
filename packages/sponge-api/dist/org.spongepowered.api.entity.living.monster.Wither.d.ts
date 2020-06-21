declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace monster {
                        /**
                         * Represents the Wither.
                         */
                        // @ts-ignore
                        interface Wither extends org.spongepowered.api.entity.living.monster.Monster, org.spongepowered.api.entity.living.Ranger, org.spongepowered.api.entity.living.monster.Boss, org.spongepowered.api.entity.living.Aerial, org.spongepowered.api.entity.explosive.FusedExplosive {
                            /**
                             * Gets the list of {@link Living} targets that this wither is targeting.
                             * Usually, as an {@link Agent}, {@link #getTarget()} would be sufficient,
                             * however, due to a Wither having the possibility of 3 targets, this
                             * is preferred use.
                             * @return The list of living targets
                             */
                            // @ts-ignore
                            getTargets(): Array<org.spongepowered.api.entity.living.Living>
                            /**
                             * Sets the list of living targets.
                             * @param targets The targets
                             */
                            // @ts-ignore
                            setTargets(targets: java.util.List<org.spongepowered.api.entity.living.Living> | Array<org.spongepowered.api.entity.living.Living>): void
                            /**
                             * Gets the boss bar this wither uses.
                             * @return The boss bar
                             */
                            // @ts-ignore
                            getBossBar(): org.spongepowered.api.boss.ServerBossBar
                        }
                    }
                }
            }
        }
    }
}
