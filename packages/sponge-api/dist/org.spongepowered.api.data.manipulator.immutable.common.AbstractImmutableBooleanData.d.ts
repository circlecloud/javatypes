declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace common {
                            /**
                             * An abstract implementation of an {@link ImmutableDataManipulator} handling
                             * specifically a {@code boolean} value. Technically these can be cached since
                             * their values are immutable.
                             * @param <I> The immutable manipulator type
                             * @param <M> The mutable manipulator type
                             */
                            // @ts-ignore
                            class AbstractImmutableBooleanData<I extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<I, M>, M extends org.spongepowered.api.data.manipulator.DataManipulator<M, I>> extends org.spongepowered.api.data.manipulator.immutable.common.AbstractImmutableSingleData<java.lang.Boolean, I, M> {
                                /**
                                 * @deprecated Use {#link #AbstractImmutableBooleanData(Key, boolean, boolean)} instead.
                                 */
                                // @ts-ignore
                                constructor(value: boolean, usedKey: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>, defaultValue: boolean)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>, value: boolean)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<java.lang.Boolean>>, value: boolean, defaultValue: boolean)
                                // @ts-ignore
                                getValueGetter(): org.spongepowered.api.data.value.immutable.ImmutableValue<java.lang.Boolean>
                            }
                        }
                    }
                }
            }
        }
    }
}
