declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace common {
                            /**
                             * Another abstract helper class further simplifying implementing various
                             * single value enum based {@link DataManipulator}s.
                             * @param <E> The type of enum value
                             * @param <M> The manipulator type
                             * @param <I> The immutable manipulator type
                             */
                            // @ts-ignore
                            class AbstractSingleEnumData<E extends java.lang.Enum<E>, M extends org.spongepowered.api.data.manipulator.DataManipulator<M, I>, I extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<I, M>> extends org.spongepowered.api.data.manipulator.mutable.common.AbstractSingleData<E, M, I> {
                                /**
                                 * @deprecated Use {#link #AbstractSingleEnumData(Key, Enum, Enum)} instead.
                                 */
                                // @ts-ignore
                                constructor(value: E extends java.lang.Enum<E>, usedKey: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.BaseValue<E>>, defaultValue: E extends java.lang.Enum<E>)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<E>>, value: E extends java.lang.Enum<E>)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<E>>, value: E extends java.lang.Enum<E>, defaultValue: E extends java.lang.Enum<E>)
                                // @ts-ignore
                                toContainer(): org.spongepowered.api.data.DataContainer
                                // @ts-ignore
                                fillContainer(dataContainer: org.spongepowered.api.data.DataContainer): org.spongepowered.api.data.DataContainer
                                // @ts-ignore
                                getValueGetter(): org.spongepowered.api.data.value.mutable.Value<E>
                            }
                        }
                    }
                }
            }
        }
    }
}
