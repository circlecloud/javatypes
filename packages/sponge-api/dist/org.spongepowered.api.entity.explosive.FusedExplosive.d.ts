declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace explosive {
                    /**
                     * Represents an explosive that detonates after its fuse has expired.
                     * <p>A FusedExplosive may already be ignited once spawned.</p>
                     */
                    // @ts-ignore
                    interface FusedExplosive extends org.spongepowered.api.entity.explosive.Explosive {
                        /**
                         * Returns the {@link FuseData} for this explosive.
                         * @return FuseData
                         */
                        // @ts-ignore
                        getFuseData(): org.spongepowered.api.data.manipulator.mutable.entity.FuseData
                        /**
                         * Returns true if this explosive is currently primed.
                         * @return True if primed
                         */
                        // @ts-ignore
                        isPrimed(): boolean
                        /**
                         * Primes this explosive to detonate after the amount of ticks that
                         * this entity explodes in defined by {@link Keys#FUSE_DURATION}.
                         * @throws IllegalStateException if explosive already primed
                         */
                        // @ts-ignore
                        prime(): void
                        /**
                         * Cancels an actively primed explosive.
                         * @throws IllegalStateException if explosive is not primed
                         */
                        // @ts-ignore
                        defuse(): void
                    }
                }
            }
        }
    }
}
