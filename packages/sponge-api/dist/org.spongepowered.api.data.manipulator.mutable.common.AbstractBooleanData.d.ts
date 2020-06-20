declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace common {
                            /**
                             * An abstract {@link DataManipulator} dealing specifically with a
                             * {@code boolean} value type.
                             * @param <M> The manipulator type
                             * @param <I> The immutable manipulator type
                             */
                            // @ts-ignore
                            class AbstractBooleanData<M extends org.spongepowered.api.data.manipulator.DataManipulator<M, I>, I extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<I, M>> extends org.spongepowered.api.data.manipulator.mutable.common.AbstractSingleData<java.lang.Boolean, M, I> {
                                /**
                                 * @deprecated Use {#link #AbstractBooleanData(Key, boolean, boolean)} instead.
                                 */
                                // @ts-ignore
                                constructor(value: boolean, usedKey: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.BaseValue<java.lang.Boolean>>, defaultValue: boolean)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>, value: boolean)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>, value: boolean, defaultValue: boolean)
                                // @ts-ignore
                                getValueGetter(): org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>
                                // @ts-ignore
                                toContainer(): org.spongepowered.api.data.DataContainer
                            }
                        }
                    }
                }
            }
        }
    }
}
