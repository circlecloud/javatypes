declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace common {
                            /**
                             * An abstract implementation of an {@link ImmutableDataManipulator} dealing
                             * specifically with an {@link Enum} value. Note that due to the limitations
                             * of adding new values to an {@code Enum}, these may be cached.
                             * @param <E> The enum type
                             * @param <I> The immutable manipulator type
                             * @param <M> The mutable manipulator type
                             */
                            // @ts-ignore
                            abstract class AbstractImmutableSingleEnumData<E extends java.lang.Enum<E>, I extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<I, M>, M extends org.spongepowered.api.data.manipulator.DataManipulator<M, I>> extends org.spongepowered.api.data.manipulator.immutable.common.AbstractImmutableSingleData<E, I, M> {
                                /**
                                 * @deprecated Use {#link #AbstractImmutableSingleEnumData(Key, Enum, Enum)} instead.
                                 */
                                // @ts-ignore
                                constructor(value: E, defaultValue: E, usedKey: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<E>>)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<E>>, value: E)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<E>>, value: E, defaultValue: E)
                                /**
                                 * @deprecated Use {#link #getValueGetter()} instead.
                                 */
                                // @ts-ignore
                                enumType(): org.spongepowered.api.data.value.immutable.ImmutableValue<E>
                                // @ts-ignore
                                getValueGetter(): org.spongepowered.api.data.value.immutable.ImmutableValue<E>
                                // @ts-ignore
                                public toContainer(): org.spongepowered.api.data.DataContainer
                                // @ts-ignore
                                fillContainer(dataContainer: org.spongepowered.api.data.DataContainer): org.spongepowered.api.data.DataContainer
                            }
                        }
                    }
                }
            }
        }
    }
}
