declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        /**
                         * An {@link DataManipulator} representing the flight modifier of a
                         * {@link Firework} or {@link ItemTypes#FIREWORKS} item.
                         */
                        // @ts-ignore
                        interface FireworkRocketData extends org.spongepowered.api.data.manipulator.DataManipulator<org.spongepowered.api.data.manipulator.mutable.FireworkRocketData, org.spongepowered.api.data.manipulator.immutable.ImmutableFireworkRocketData> {
                            /**
                             * Gets the flight modifier for this firework.
                             * <p>Flight modifiers are tiered ranks of flight duration. Generally,
                             * the modifier is used to calculate the fuse time of a firework when
                             * launched. This can be approximated by multiplying 10 and the modifier,
                             * and adding a random number between 0 and 13. Again, this is a general
                             * approximation of what vanilla Minecraft performs.</p>
                             * @return The flight modifier
                             * @see Keys#FIREWORK_FLIGHT_MODIFIER
                             */
                            // @ts-ignore
                            flightModifier(): org.spongepowered.api.data.value.mutable.MutableBoundedValue<java.lang.Integer>
                        }
                    }
                }
            }
        }
    }
}
