declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                namespace manipulator {
                    namespace mutable {
                        namespace common {
                            /**
                             * An abstraction for the various {@link DataManipulator}s that handle a single
                             * value, adding the provided {@link #getValue()} and {@link #setValue(Object)}
                             * methods for easy manipulation. This as well simplifies handling various
                             * other common implementations, such as {@link #hashCode()} and
                             * {@link #equals(Object)}.
                             * @param <T> The type of single value this will hold
                             * @param <M> The type of {#link DataManipulator}
                             * @param <I> The type of {#link ImmutableDataManipulator}
                             */
                            // @ts-ignore
                            abstract class AbstractSingleData<T, M extends org.spongepowered.api.data.manipulator.DataManipulator<M, I>, I extends org.spongepowered.api.data.manipulator.ImmutableDataManipulator<I, M>> extends org.spongepowered.api.data.manipulator.mutable.common.AbstractData<M, I> {
                                /**
                                 * @deprecated Use {#link #AbstractSingleData(Key, Object)} instead.
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
                                readonly defaultValue: T
                                // @ts-ignore
                                value: T
                                // @ts-ignore
                                registerGettersAndSetters(): void
                                /**
                                 * Gets the {@link Value} as a method since this manipulator only focuses
                                 * on a single value.
                                 * @return The constructed value
                                 */
                                // @ts-ignore
                                abstract getValueGetter(): org.spongepowered.api.data.value.mutable.Value<any>
                                // @ts-ignore
                                public get<E>(key: org.spongepowered.api.data.key.Key<any>): java.util.Optional<E>
                                // @ts-ignore
                                public supports(key: org.spongepowered.api.data.key.Key<any>): boolean
                                // @ts-ignore
                                public abstract asImmutable(): I
                                /**
                                 * A simple getter for usage with a {@link Supplier} for
                                 * the {@link #registerFieldGetter(Key, Supplier)} method.
                                 * @return The value
                                 */
                                // @ts-ignore
                                getValue(): T
                                /**
                                 * A simple setter for usage with a {@link Consumer} for
                                 * the {@link #registerFieldSetter(Key, Consumer)} method.
                                 * @param value The value
                                 * @return This manipulator
                                 */
                                // @ts-ignore
                                setValue(value: T): M
                                // @ts-ignore
                                fillContainer(dataContainer: org.spongepowered.api.data.DataContainer): org.spongepowered.api.data.DataContainer
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
