declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace complex {
                        /**
                         * Represents an Ender Dragon.
                         */
                        // @ts-ignore
                        interface EnderDragon extends org.spongepowered.api.entity.living.complex.ComplexLiving, org.spongepowered.api.entity.living.monster.Boss, org.spongepowered.api.entity.living.Aerial, org.spongepowered.api.entity.projectile.ProjectileLauncher {
                            // @ts-ignore
                            getParts(): Array<org.spongepowered.api.entity.living.complex.EnderDragonPart>
                            /**
                             * Returns the current {@code EnderCrystal} that is healing this
                             * ender dragon.
                             * @return The ender crystal
                             */
                            // @ts-ignore
                            getHealingCrystal(): java.util.Optional<org.spongepowered.api.entity.EnderCrystal>
                            /**
                             * Gets the boss bar this dragon uses.
                             * @return The boss bar
                             */
                            // @ts-ignore
                            getBossBar(): org.spongepowered.api.boss.ServerBossBar
                            /**
                             * Gets the phase manager.
                             * <p>The phase manager controls the active {@link EnderDragonPhase} of
                             * the dragon in The End.</p>
                             * @return The phase manager
                             */
                            // @ts-ignore
                            getPhaseManager(): org.spongepowered.api.entity.living.complex.dragon.phase.EnderDragonPhaseManager
                        }
                    }
                }
            }
        }
    }
}
