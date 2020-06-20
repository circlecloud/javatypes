declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace health {
                            /**
                             * A type of {@link HealthModifier} that can apply a "grouping" so to speak
                             * for the damage modifier. The use case is being able to differentiate between
                             * various {@link HealthModifier}s based on the {@link HealthModifierType}
                             * without digging through the {@link Cause} provided by
                             * {@link HealthModifier#getCause()}.
                             */
                            // @ts-ignore
                            interface HealthModifierType extends org.spongepowered.api.CatalogType {
                            }
                        }
                    }
                }
            }
        }
    }
}
