declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace damage {
                            /**
                             * A type of {@link DamageModifier} that can apply a "grouping" so to speak
                             * for the damage modifier. The use case is being able to differentiate between
                             * various {@link DamageModifier}s based on the {@link DamageModifierType}
                             * without digging through the {@link Cause} provided by
                             * {@link DamageModifier#getCause()}.
                             */
                            // @ts-ignore
                            interface DamageModifierType extends org.spongepowered.api.CatalogType {
                            }
                        }
                    }
                }
            }
        }
    }
}
