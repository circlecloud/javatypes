declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    // @ts-ignore
                    interface ImmutableDataManipulatorBuilder<I extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<I, M>, M extends org.spongepowered.api.data.manipulator.DataManipulator<M, I>> extends org.spongepowered.api.data.persistence.DataBuilder<I> {
                        /**
                         * Creates a new specific {@link ImmutableDataManipulator} for consumption.
                         * @return The newly created immutable data manipulator
                         */
                        // @ts-ignore
                        createImmutable(): I
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
                        createFrom(dataHolder: org.spongepowered.api.data.DataHolder): java.util.Optional<I>
                        /**
                         * Creates the desired {@link ImmutableDataManipulator} from the provided
                         * {@link ImmutableDataHolder}, if it is supported.
                         * @param dataHolder The data holder
                         * @return The immutable manipulator, if available
                         */
                        // @ts-ignore
                        createFrom(dataHolder: org.spongepowered.api.data.ImmutableDataHolder<any>): java.util.Optional<I>
                        // @ts-ignore
                        reset(): org.spongepowered.api.data.manipulator.ImmutableDataManipulatorBuilder<I, M>
                    }
                }
            }
        }
    }
}
