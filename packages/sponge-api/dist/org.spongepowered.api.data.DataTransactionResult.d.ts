declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                /**
                 * Represents a transaction taking place where a {@link DataHolder} is
                 * accepting {@link DataManipulator}s.
                 */
                // @ts-ignore
                class DataTransactionResult extends java.lang.Object {
                    /**
                     * Gets a new {@link Builder} to build a new
                     * {@link DataTransactionResult}.
                     * @return The new builder, for chaining
                     */
                    // @ts-ignore
                    public static builder(): org.spongepowered.api.data.DataTransactionResult.Builder
                    /**
                     * Creates a {@link DataTransactionResult} with no data successfully added,
                     * removed, or rejected, and with the
                     * {@link Type} of
                     * {@link Type#SUCCESS}
                     * result type.
                     * @return A clean and empty data transaction
                     */
                    // @ts-ignore
                    public static successNoData(): org.spongepowered.api.data.DataTransactionResult
                    /**
                     * Creates a new {@link DataTransactionResult} with the provided
                     * {@link ImmutableValue} being the successful addition. The result type is
                     * still {@link Type#SUCCESS}. If a {@link Value} is
                     * necessary, use {@link Value#asImmutable()} to use this method. A
                     * {@link DataTransactionResult} is always immutable once created, and any
                     * {@link BaseValue}s should be provided as {@link ImmutableValue}s or
                     * transformed into {@link ImmutableValue}s.
                     * @param value The successfully added immutable value
                     * @return The new data transaction result
                     */
                    // @ts-ignore
                    public static successResult(value: org.spongepowered.api.data.value.immutable.ImmutableValue<any>): org.spongepowered.api.data.DataTransactionResult
                    /**
                     * Creates a new {@link DataTransactionResult} with the provided
                     * {@link ImmutableValue} being the successful addition. The result type is
                     * still {@link Type#SUCCESS}. If a {@link Value} is
                     * necessary, use {@link Value#asImmutable()} to use this method. A
                     * {@link DataTransactionResult} is always immutable once created, and any
                     * {@link BaseValue}s should be provided as {@link ImmutableValue}s or
                     * transformed into {@link ImmutableValue}s.
                     * @param successful The successfully added immutable value
                     * @param replaced The replaced value
                     * @return The new data transaction result
                     */
                    // @ts-ignore
                    public static successReplaceResult(successful: org.spongepowered.api.data.value.immutable.ImmutableValue<any>, replaced: org.spongepowered.api.data.value.immutable.ImmutableValue<any>): org.spongepowered.api.data.DataTransactionResult
                    /**
                     * Creates a new {@link DataTransactionResult} with the provided
                     * {@link ImmutableValue}s being the successful additions and
                     * the provided {@link ImmutableValue}s that were replaced. The result type
                     * is still {@link Type#SUCCESS}. If a {@link Value}
                     * is necessary, use {@link Value#asImmutable()} to use this method. A
                     * {@link DataTransactionResult} is always immutable once created, and any
                     * {@link BaseValue}s should be provided as {@link ImmutableValue}s or
                     * transformed into {@link ImmutableValue}s.
                     * @param successful The successfully added immutable values
                     * @param replaced The successfully replaced immutable values
                     * @return The new data transaction result
                     */
                    // @ts-ignore
                    public static successReplaceResult(successful: java.util.Collection<org.spongepowered.api.data.value.immutable.ImmutableValue<any>> | Array<org.spongepowered.api.data.value.immutable.ImmutableValue<any>>, replaced: java.util.Collection<org.spongepowered.api.data.value.immutable.ImmutableValue<any>> | Array<org.spongepowered.api.data.value.immutable.ImmutableValue<any>>): org.spongepowered.api.data.DataTransactionResult
                    /**
                     * Creates a {@link DataTransactionResult} with the provided
                     * {@link ImmutableValue}s being successfully removed. The result type is
                     * still {@link Type#SUCCESS}. If a {@link Value} is necessary, use
                     * {@link Value#asImmutable()} to use this method. A {@link DataTransactionResult}
                     * is always immutable once created, and any {@link BaseValue}s should be provided
                     * as {@link ImmutableValue}s or transformed into {@link ImmutableValue}s.
                     * @param removed The successfully removed values
                     * @return The new data transaction result
                     */
                    // @ts-ignore
                    public static successRemove(removed: java.util.Collection<org.spongepowered.api.data.value.immutable.ImmutableValue<any>> | Array<org.spongepowered.api.data.value.immutable.ImmutableValue<any>>): org.spongepowered.api.data.DataTransactionResult
                    /**
                     * Creates a {@link DataTransactionResult} with the provided
                     * {@link ImmutableValue} being successfully removed. The result type is
                     * still {@link Type#SUCCESS}. If a {@link Value} is necessary, use
                     * {@link Value#asImmutable()} to use this method. A
                     * {@link DataTransactionResult} is always immutable once created, and a
                     * {@link BaseValue} should be provided as an {@link ImmutableValue} or
                     * transformed into an {@link ImmutableValue}.
                     * @param removed The successfully removed value
                     * @return The new data transaction result
                     */
                    // @ts-ignore
                    public static successRemove(removed: org.spongepowered.api.data.value.immutable.ImmutableValue<any>): org.spongepowered.api.data.DataTransactionResult
                    /**
                     * Creates a new {@link DataTransactionResult} that ends in failure. The
                     * provided {@link ImmutableValue} is considered "rejected" and was not
                     * successfully added.
                     * @param value The value that was rejected
                     * @return The new data transaction result
                     */
                    // @ts-ignore
                    public static failResult(value: org.spongepowered.api.data.value.immutable.ImmutableValue<any>): org.spongepowered.api.data.DataTransactionResult
                    /**
                     * Creates a new {@link DataTransactionResult} that ends in failure. The
                     * provided {@link ImmutableValue}s are considered "rejected" and were not
                     * successfully added.
                     * @param values The values that were rejected
                     * @return The new data transaction result
                     */
                    // @ts-ignore
                    public static failResult(values: java.lang.Iterable<org.spongepowered.api.data.value.immutable.ImmutableValue<any>>): org.spongepowered.api.data.DataTransactionResult
                    /**
                     * Creates a new {@link DataTransactionResult} that ends in failure. There
                     * is no additional data to include.
                     * @return The new data transaction result
                     */
                    // @ts-ignore
                    public static failNoData(): org.spongepowered.api.data.DataTransactionResult
                    /**
                     * Creates a new {@link DataTransactionResult} that ends in failure. The
                     * provided {@link ImmutableValue} is considered "incompatible" and was not
                     * successfully added.
                     * @param value The value that was incompatible or errored
                     * @return The new data transaction result
                     */
                    // @ts-ignore
                    public static errorResult(value: org.spongepowered.api.data.value.immutable.ImmutableValue<any>): org.spongepowered.api.data.DataTransactionResult
                    /**
                     * Gets the type of result.
                     * @return the type of result
                     */
                    // @ts-ignore
                    public getType(): org.spongepowered.api.data.DataTransactionResult.Type
                    /**
                     * Gets whether this {@link DataTransactionResult} was successful or not.
                     * @return True if this result was successful
                     */
                    // @ts-ignore
                    public isSuccessful(): boolean
                    /**
                     * If any {@link BaseValue}s applied onto a {@link CompositeValueStore} were
                     * successful, they'll be stored in the given list.
                     * @return An immutable list of the values successfully offered
                     */
                    // @ts-ignore
                    public getSuccessfulData(): Array<org.spongepowered.api.data.value.immutable.ImmutableValue<any>>
                    /**
                     * If {@link Value}s were supplied to the operation, this
                     * collection will return any {@link ImmutableValue}s which were rejected
                     * by the target {@link DataHolder}.
                     * @return Any data that was rejected from the operation
                     */
                    // @ts-ignore
                    public getRejectedData(): Array<org.spongepowered.api.data.value.immutable.ImmutableValue<any>>
                    /**
                     * If the operation replaced any {@link Value}s, this returns a collection
                     * of the replaced {@link ImmutableValue}s.
                     * @return Any data that was replaced
                     */
                    // @ts-ignore
                    public getReplacedData(): Array<org.spongepowered.api.data.value.immutable.ImmutableValue<any>>
                    /**
                     * If this result of {@link #isSuccessful()} returns {@code true},
                     * the provided {@link Consumer} is called provided a list of all
                     * "successful" data as retrieved from {@link #getSuccessfulData()}.
                     * @param consumer The consumer to call
                     */
                    // @ts-ignore
                    public ifSuccessful(consumer: java.util.function$.Consumer<java.util.List<org.spongepowered.api.data.value.immutable.ImmutableValue<any>> | Array<org.spongepowered.api.data.value.immutable.ImmutableValue<any>>>): void
                    /**
                     * If this result of {@link #isSuccessful()} returns {@code true},
                     * the provided {@link Consumer} is called provided a list of all
                     * "successful" data as retrieved from {@link #getSuccessfulData()}.
                     * @param consumer The consumer to call
                     * @deprecated Use {#link #ifSuccessful(Consumer)} instead
                     */
                    // @ts-ignore
                    public ifSucessful(consumer: java.util.function$.Consumer<java.util.List<org.spongepowered.api.data.value.immutable.ImmutableValue<any>> | Array<org.spongepowered.api.data.value.immutable.ImmutableValue<any>>>): void
                    /**
                     * Used to call a {@link Supplier} for an {@link Exception} of type
                     * {@code E} such that if this transaction's {@link #isSuccessful()}
                     * returns {@code false}, the supplier's exception is thrown.
                     * @param supplier The supplier of the exception to throw
                     * @param <E> The type of exception
                     * @throws E The exception to throw if this transaction is not successful
                     */
                    // @ts-ignore
                    public ifNotSuccessful<E extends java.lang.Exception>(supplier: java.util.function$.Supplier<E>): void
                    // @ts-ignore
                    public toString(): string
                    // @ts-ignore
                    public equals(o: java.lang.Object | any): boolean
                    // @ts-ignore
                    public hashCode(): number /*int*/
                }
            }
        }
    }
}
