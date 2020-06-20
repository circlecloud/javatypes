declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace extra {
                namespace fluid {
                    namespace data {
                        namespace property {
                            /**
                             * Viscosity ("thickness") of the fluid - completely arbitrary; negative values
                             * are not valid. The default viscosity is closely approximated to that
                             * of what exists in real life water: <code>meter/second^2 * (x10^-3)</code>.
                             * <p>Higher viscosity means that a fluid flows more slowly, like molasses.
                             * Lower viscosity means that a fluid flows more quickly, like alcohol.</p>
                             */
                            // @ts-ignore
                            class FluidViscosityProperty extends org.spongepowered.api.data.property.IntProperty {
                                /**
                                 * Creates a new {@link FluidViscosityProperty} with the desired viscosity.
                                 * @param value The viscosity
                                 */
                                // @ts-ignore
                                constructor(value: number /*int*/)
                                /**
                                 * Creates a new {@link FluidViscosityProperty} with the desired viscosity
                                 * and {@link org.spongepowered.api.data.Property.Operator} for comparisons.
                                 * @param value The viscosity
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
