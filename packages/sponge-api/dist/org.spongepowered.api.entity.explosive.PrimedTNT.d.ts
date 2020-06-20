declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace explosive {
                    /**
                     * Represents a TNT that will explode.
                     */
                    // @ts-ignore
                    interface PrimedTNT extends org.spongepowered.api.entity.explosive.FusedExplosive {
                        /**
                         * Gets the living entity that set off this primed TNT.
                         * @return The living entity that set off this primed TNT, if available
                         */
                        // @ts-ignore
                        getDetonator(): java.util.Optional<org.spongepowered.api.entity.living.Living>
                    }
                }
            }
        }
    }
}
