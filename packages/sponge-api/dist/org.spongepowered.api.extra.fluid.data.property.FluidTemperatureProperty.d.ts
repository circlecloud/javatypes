declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace extra {
                namespace fluid {
                    namespace data {
                        namespace property {
                            /**
                             * Temperature of the fluid - completely arbitrary; higher temperature indicates
                             * that the fluid is hotter than air. Usually, depending on the implementation,
                             * the "hotter" the fluid, the more likely it is to make flammable blocks and
                             * entities catch on fire.
                             * <p>Default value is approximately the real-life room temperature of water in
                             * degrees Kelvin, otherwise known as 300K.</p>
                             */
                            // @ts-ignore
                            class FluidTemperatureProperty extends org.spongepowered.api.data.property.IntProperty {
                                /**
                                 * Creates a new {@link FluidTemperatureProperty} with the desired temperature.
                                 * @param value The temperature
                                 */
                                // @ts-ignore
                                constructor(value: number /*int*/)
                                /**
                                 * Creates a new {@link FluidTemperatureProperty} with the desired temperature
                                 * and {@link org.spongepowered.api.data.Property.Operator} for comparisons.
                                 * @param value The temperature
                                 * @param operator The operator
                                 */
                                // @ts-ignore
                                constructor(value: number /*int*/, operator: org.spongepowered.api.data.Property.Operator)
                            }
                        }
                    }
                }
            }
        }
    }
}
