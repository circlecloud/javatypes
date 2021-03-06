declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace monster {
                        /**
                         * Represents a Blaze.
                         */
                        // @ts-ignore
                        interface Blaze extends org.spongepowered.api.entity.living.monster.Monster, org.spongepowered.api.entity.living.Aerial, org.spongepowered.api.entity.projectile.ProjectileLauncher {
                            /**
                             * Gets the current {@link Value value} for whether this {@link Blaze}
                             * is considered "aflame".
                             * @return The value for whether this blaze is aflame
                             */
                            // @ts-ignore
                            aflame(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                        }
                    }
                }
            }
        }
    }
}
