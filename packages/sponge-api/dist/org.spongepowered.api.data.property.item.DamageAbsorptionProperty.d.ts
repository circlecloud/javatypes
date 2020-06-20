declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace property {
                    namespace item {
                        /**
                         * Represents the percentage of damage the item will absorb when equipped. The
                         * damage absorbed can be dependent on the type of damage, equipment type, and
                         * item type.
                         */
                        // @ts-ignore
                        class DamageAbsorptionProperty extends org.spongepowered.api.data.property.IntProperty {
                            /**
                             * Creates a new {@link DamageAbsorptionProperty} with the given amount of
                             * damage absorption per hit.
                             * @param value The amount of absorbed damage
                             */
                            // @ts-ignore
                            constructor(value: number /*int*/)
                            /**
                             * Creates a new {@link DamageAbsorptionProperty} with the given amount of
                             * damage absorption per hit.
                             * @param value The amount of absorbed damage
                             * @param operator The operator to compare this property to other properties
                             */
                            // @ts-ignore
                            constructor(value: number /*int*/, operator: org.spongepowered.api.data.Property.Operator)
                            /**
                             * Creates a new {@link DamageAbsorptionProperty} with the given amount of
                             * damage absorption per hit.
                             * @param value The amount of absorbed damage
                             * @param operator The operator to compare this property to other properties
                             */
                            // @ts-ignore
                            constructor(value: any, operator: org.spongepowered.api.data.Property.Operator)
                        }
                    }
                }
            }
        }
    }
}
