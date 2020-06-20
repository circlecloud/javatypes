declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace vehicle {
                    namespace minecart {
                        /**
                         * Represents a Minecart with a MobSpawner inside it.
                         */
                        // @ts-ignore
                        interface MobSpawnerMinecart extends org.spongepowered.api.entity.vehicle.minecart.Minecart {
                            /**
                             * Gets a copy of the {@link MobSpawnerData}.
                             * @return A copy of the mob spawner data
                             */
                            // @ts-ignore
                            getSpawnerData(): org.spongepowered.api.data.manipulator.mutable.MobSpawnerData
                        }
                    }
                }
            }
        }
    }
}
