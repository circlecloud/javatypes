declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace event {
                namespace cause {
                    namespace entity {
                        namespace damage {
                            /**
                             * A {@link DamageType} is a type of "grouping" for {@link DamageSource}s since
                             * a {@link DamageSource} instance can be inherently different from another
                             * {@link DamageSource} by virtue of the {@link Object} backing the source.
                             * Furthermore, it is impossible to refer to {@link DamageSource}s statically
                             * due to the nature of constructing them. It is possible however, that the
                             * parent {@link Object} being referred to as the "damage source" can damage
                             * an {@link Entity} with varying {@link DamageType}s depending on the
                             * circumstances.
                             */
                            // @ts-ignore
                            interface DamageType extends org.spongepowered.api.CatalogType {
                            }
                        }
                    }
                }
            }
        }
    }
}
