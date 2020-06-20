declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace entity {
                namespace living {
                    namespace animal {
                        /**
                         * Represents an Ocelot.
                         */
                        // @ts-ignore
                        interface Ocelot extends org.spongepowered.api.entity.living.animal.Animal {
                            /**
                             * Gets a copy of the current {@link OcelotData} being represented by
                             * this {@link Ocelot}.
                             * @return A copy of the current ocelot data
                             */
                            // @ts-ignore
                            getOcelotData(): org.spongepowered.api.data.manipulator.mutable.entity.OcelotData
                            /**
                             * Gets the {@link Value} for the {@link OcelotType} of this
                             * {@link Ocelot}.
                             * @return The ocelot variant value
                             */
                            // @ts-ignore
                            variant(): org.spongepowered.api.data.value.mutable.Value<org.spongepowered.api.data.type.OcelotType>
                        }
                    }
                }
            }
        }
    }
}
