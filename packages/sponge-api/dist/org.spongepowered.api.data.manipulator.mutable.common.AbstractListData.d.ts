declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace common {
                            /**
                             * A common implementation for {@link ListData}s provided by the API.
                             * @param <E> The type of element within the list
                             * @param <M> The type of {#link DataManipulator}
                             * @param <I> The type of {#link ImmutableDataManipulator}
                             */
                            // @ts-ignore
                            abstract class AbstractListData<E, M extends org.spongepowered.api.data.manipulator.mutable.ListData<E, M, I>, I extends org.spongepowered.api.data.manipulator.immutable.ImmutableListData<E, I, M>> extends org.spongepowered.api.data.manipulator.mutable.common.AbstractSingleData<java.util.List<E> | Array<E>, M, I> implements org.spongepowered.api.data.manipulator.mutable.ListData<E, M, I> {
                                /**
                                 * @deprecated Use {#link #AbstractListData(Key, List)} instead.
                                 */
                                // @ts-ignore
                                constructor(value: java.util.List<E> | Array<E>, usedKey: org.spongepowered.api.data.key.Key<any>)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.ListValue<E>>, value: java.util.List<E> | Array<E>)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key<org.spongepowered.api.data.value.mutable.ListValue<E>>, value: java.util.List<E> | Array<E>, defaultValue: java.util.List<E> | Array<E>)
                                // @ts-ignore
                                getValueGetter(): org.spongepowered.api.data.value.mutable.ListValue<E>
                                // @ts-ignore
                                public get<V>(key: org.spongepowered.api.data.key.Key<any>): java.util.Optional<V>
                                // @ts-ignore
                                public supports(key: org.spongepowered.api.data.key.Key<any>): boolean
                                // @ts-ignore
                                public abstract asImmutable(): I
                                // @ts-ignore
                                getValue(): Array<E>
                                // @ts-ignore
                                setValue(value: java.util.List<E> | Array<E>): M
                                // @ts-ignore
                                public hashCode(): number /*int*/
                                // @ts-ignore
                                public equals(obj: java.lang.Object | any): boolean
                                // @ts-ignore
                                public getListValue(): org.spongepowered.api.data.value.mutable.ListValue<E>
                                // @ts-ignore
                                public asList(): Array<E>
                            }
                        }
                    }
                }
            }
        }
    }
}
