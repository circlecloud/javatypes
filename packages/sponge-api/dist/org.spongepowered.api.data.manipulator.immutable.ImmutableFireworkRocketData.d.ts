declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        /**
                         * An {@link ImmutableDataManipulator} representing the flight modifier of a
                         * {@link Firework} or {@link ItemTypes#FIREWORKS} item.
                         */
                        // @ts-ignore
                        interface ImmutableFireworkRocketData extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<org.spongepowered.api.data.manipulator.immutable.ImmutableFireworkRocketData, org.spongepowered.api.data.manipulator.mutable.FireworkRocketData> {
                            /**
                             * Gets the {@link ImmutableBoundedValue} for the flight modifier.
                             * <p>Flight modifiers are tiered ranks of flight duration. Generally,
                             * the modifier is used to calculate the fuse time of a firework when
                             * launched. This can be approximated by multiplying 10 and the modifier,
                             * and adding a random number between 0 and 13. Again, this is a general
                             * approximation of what vanilla Minecraft performs.</p>
                             * @return The flight modifier
                             */
                            // @ts-ignore
                            flightModifier(): org.spongepowered.api.data.value.immutable.ImmutableBoundedValue<java.lang.Integer>
                        }
                    }
                }
            }
        }
    }
}
