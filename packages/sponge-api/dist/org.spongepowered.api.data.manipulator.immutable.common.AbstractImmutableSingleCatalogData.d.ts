declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace common {
                            /**
                             * An abstract implementation of an {@link ImmutableVariantData} extending
                             * {@link AbstractImmutableSingleData} such that the values are immutable.
                             * @param <E> The type of catalog type
                             * @param <I> The type of immutable manipulator
                             * @param <M> The type of mutable manipulator
                             */
                            // @ts-ignore
                            abstract class AbstractImmutableSingleCatalogData<E extends org.spongepowered.api.CatalogType, I extends org.spongepowered.api.data.manipulator.immutable.ImmutableVariantData<E, I, M>, M extends org.spongepowered.api.data.manipulator.mutable.VariantData<E, M, I>> extends org.spongepowered.api.data.manipulator.immutable.common.AbstractImmutableSingleData<E, I, M> implements org.spongepowered.api.data.manipulator.immutable.ImmutableVariantData<E, I, M> {
                                /**
                                 * @deprecated Use {#link #AbstractImmutableSingleCatalogData(Key, CatalogType, CatalogType)} instead.
                                 */
                                // @ts-ignore
                                constructor(value: E, defaultValue: E, usedKey: org.spongepowered.api.data.key.Key<any>)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<E>>, value: E)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<E>>, value: E, defaultValue: E)
                                // @ts-ignore
                                getValueGetter(): org.spongepowered.api.data.value.immutable.ImmutableValue<E>
                                // @ts-ignore
                                public toContainer(): org.spongepowered.api.data.DataContainer
                                // @ts-ignore
                                public type(): org.spongepowered.api.data.value.immutable.ImmutableValue<E>
                            }
                        }
                    }
                }
            }
        }
    }
}
