declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace property {
                    namespace item {
                        /**
                         * Represents a item property that is used for defining the amount of fuel
                         * ticks an item will grant to a furnace.
                         * <p>As with all {@link Property}, this property is immutable when
                         * retrieved from an item.</p>
                         */
                        // @ts-ignore
                        class BurningFuelProperty extends org.spongepowered.api.data.property.IntProperty {
                            /**
                             * Creates a new {@link BurningFuelProperty} with the given amount of
                             * fuel ticks.
                             * @param value The amount of fuel ticks
                             */
                            // @ts-ignore
                            constructor(value: number /*int*/)
                            /**
                             * Creates a new {@link BurningFuelProperty} with the given amount of
                             * fuel ticks.
                             * @param value The amount of fuel ticks
                             * @param op The operator to compare this property to other properties
                             */
                            // @ts-ignore
                            constructor(value: number /*int*/, op: org.spongepowered.api.data.Property.Operator)
                        }
                    }
                }
            }
        }
    }
}
