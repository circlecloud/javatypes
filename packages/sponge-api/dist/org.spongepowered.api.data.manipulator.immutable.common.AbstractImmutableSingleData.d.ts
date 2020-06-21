declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace immutable {
                        namespace common {
                            /**
                             * An abstract implementation of an {@link ImmutableDataManipulator} that
                             * specifically deals with a single value.
                             * @param <T> The type of value
                             * @param <I> The type of immutable manipulator
                             * @param <M> The type of mutable manipulator
                             */
                            // @ts-ignore
                            abstract class AbstractImmutableSingleData<T, I extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<I, M>, M extends org.spongepowered.api.data.manipulator.DataManipulator<M, I>> extends org.spongepowered.api.data.manipulator.immutable.common.AbstractImmutableData<I, M> {
                                /**
                                 * @deprecated Use {#link #AbstractImmutableSingleData(Key, Object)} instead.
                                 */
                                // @ts-ignore
                                constructor(value: T, usedKey: org.spongepowered.api.data.key.Key<any>)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key<any>, value: T)
                                // @ts-ignore
                                constructor(usedKey: org.spongepowered.api.data.key.Key<any>, value: T, defaultValue: T)
                                // @ts-ignore
                                readonly usedKey: org.spongepowered.api.data.key.Key<any>
                                // @ts-ignore
                                readonly value: T
                                // @ts-ignore
                                readonly defaultValue: T
                                // @ts-ignore
                                abstract getValueGetter(): org.spongepowered.api.data.value.immutable.ImmutableValue<any>
                                // @ts-ignore
                                getValue(): T
                                // @ts-ignore
                                public abstract asMutable(): M
                                // @ts-ignore
                                registerGetters(): void
                                // @ts-ignore
                                public get<E>(key: org.spongepowered.api.data.key.Key<any>): java.util.Optional<E>
                                // @ts-ignore
                                public supports(key: org.spongepowered.api.data.key.Key<any>): boolean
                                // @ts-ignore
                                public getKeys(): Array<org.spongepowered.api.data.key.Key<any>>
                                // @ts-ignore
                                public hashCode(): number /*int*/
                                // @ts-ignore
                                public equals(obj: java.lang.Object | any): boolean
                            }
                        }
                    }
                }
            }
        }
    }
}
