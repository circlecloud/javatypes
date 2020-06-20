declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    /**
                     * A builder of {@link DataManipulator}s. This builder can build
                     * a specific {@link DataManipulator} that can be used to pre-construct
                     * customized data prior to applying to a {@link DataHolder}.
                     * <p>{@link DataManipulatorBuilder}s must be registered with the
                     * {@link DataManager} before they can be used by the game
                     * and plugins. Failure to do so may prevent the {@link DataManipulator} from
                     * being used.</p>
                     * @param <T> The type of {#link DataManipulator}
                     */
                    // @ts-ignore
                    interface DataManipulatorBuilder<T extends org.spongepowered.api.data.manipulator.DataManipulator<T, I>, I extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<I, T>> extends org.spongepowered.api.data.persistence.DataBuilder<T> {
                        /**
                         * Creates a new specific {@link DataManipulator} for consumption.
                         * @return The newly created data manipulator
                         */
                        // @ts-ignore
                        create(): T
                        /**
                         * Attempts to read data from the given {@link DataHolder} and constructs
                         * a new copy of the {@link DataManipulator} as an instance of
                         * <code>T</code>.
                         * <p>If the {@link DataHolder} does not contain the necessary information
                         * to pre-populate the {@link DataManipulator}, a fresh new
                         * {@link DataManipulator} is returned. If the {@link DataManipulator} is
                         * incompatible with the {@link DataHolder}, {@link Optional#empty()} is
                         * returned.</p>
                         * @param dataHolder The {#link DataHolder} to extract data
                         * @return A new instance of this {#link DataManipulator} with relevant data
                         *      filled from the given {@link DataHolder}, if available
                         */
                        // @ts-ignore
                        createFrom(dataHolder: org.spongepowered.api.data.DataHolder): java.util.Optional<T>
                    }
                }
            }
        }
    }
}
