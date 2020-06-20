declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace property {
                    namespace item {
                        /**
                         * Represents an {@link Property} that applies a set of
                         * {@link PotionEffect}s on use, consumption, or on equip. The properties
                         * are not mutable, but can be compared against.
                         * <p>Examples of these properties include: hunger from eating zombie flesh,
                         * regeneration from a golden apple, etc.</p>
                         */
                        // @ts-ignore
                        class ApplicableEffectProperty extends org.spongepowered.api.data.property.AbstractProperty<java.lang.String, java.util.Set<org.spongepowered.api.effect.potion.PotionEffect>> {
                            /**
                             * Creates a {@link ApplicableEffectProperty} with a specific set of {@link PotionEffect}s.
                             * @param value The potion effects
                             */
                            // @ts-ignore
                            constructor(value: Array<org.spongepowered.api.effect.potion.PotionEffect>)
                            /**
                             * Creates a {@link ApplicableEffectProperty} with a specific set of {@link PotionEffect}s.
                             * @param value The potion effects
                             * @param op The operator to use when comparing against other properties
                             */
                            // @ts-ignore
                            constructor(value: Array<org.spongepowered.api.effect.potion.PotionEffect>, op: org.spongepowered.api.data.Property.Operator)
                            // @ts-ignore
                            compareTo(o: org.spongepowered.api.data.Property<any, ?>): int
                        }
                    }
                }
            }
        }
    }
}
