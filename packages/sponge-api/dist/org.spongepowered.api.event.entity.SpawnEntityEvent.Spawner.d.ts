declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace entity {
                    namespace SpawnEntityEvent {
                        /**
                         * A deprecated sub-event used when a spawn entity event was caused by a
                         * {@link MobSpawner}.
                         * @deprecated Utilize {#link SpawnTypes#MOB_SPAWNER} as context.
                         */
                        // @ts-ignore
                        interface Spawner extends org.spongepowered.api.event.entity.SpawnEntityEvent {
                        }
                    }
                }
            }
        }
    }
}
