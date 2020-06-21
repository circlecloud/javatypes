declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace common {
                            /**
                             * An abstract {@link VariantData} implementation providing all implementation
                             * requirements, except {@link #asImmutable()}.
                             * @param <T> The type of catalog type
                             * @param <M> The manipulator type
                             * @param <I> The immutable manipulator type
                             */
                            // @ts-ignore
                            abstract class AbstractSingleCatalogData<T extends org.spongepowered.api.CatalogType, M extends org.spongepowered.api.data.manipulator.mutable.VariantData<T, M, I>, I extends org.spongepowered.api.data.manipulator.immutable.ImmutableVariantData<T, I, M>> extends org.spongepowered.api.data.manipulator.mutable.common.AbstractSingleData<T, M, I> implements org.spongepowered.api.data.manipulator.mutable.VariantData<T, M, I> {
                                /**
                                 * @deprecated Use {#link #AbstractSingleCatalogData(Key, CatalogType)} instead.
                                 */
                                // @ts-ignore
                                constructor(value: T, usedKey: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<T>>)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<T>>, value: T)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.Value<T>>, value: T, defaultValue: T)
                                // @ts-ignore
                                getValueGetter(): org.spongepowered.api.data.value.mutable.Value<any>
                                // @ts-ignore
                                public type(): org.spongepowered.api.data.value.mutable.Value<T>
                                // @ts-ignore
                                public toContainer(): org.spongepowered.api.data.DataContainer
                            }
                        }
                    }
                }
            }
        }
    }
}
