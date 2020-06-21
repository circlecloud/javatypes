declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace data {
                // @ts-ignore
                class Transaction<T extends org.spongepowered.api.data.DataSerializable> extends java.lang.Object implements org.spongepowered.api.data.DataSerializable {
                    /**
                     * Creates a new transaction.
                     * @param original The original object being replaced
                     * @param defaultReplacement The default replacement
                     */
                    // @ts-ignore
                    constructor(original: T, defaultReplacement: T)
                    /**
                     * Creates a new {@link Transaction} with the added possibility of
                     * <i>intermediary</i> transactions that may have taken place between
                     * what is {@link #getOriginal() original} and {@link #getDefault()
                     * the default result}. The list may be {@code null}, however the list
                     * will wrapped to become an unmodifiable list.
                     * <p>It is imperative that the provided list is not to be modified
                     * outside this created {@link Transaction} synchronously and
                     * asynchronously as consumers of the provided list will not be able
                     * to react accordingly.</p>
                     * @param original
                     * @param defaultReplacement
                     * @param intermediary
                     */
                    // @ts-ignore
                    constructor(original: T, defaultReplacement: T, intermediary: java.util.List<any> | Array<any>)
                    /**
                     * Gets the original snapshot.
                     * @return The original snapshot
                     */
                    // @ts-ignore
                    public getOriginal(): T
                    /**
                     * Gets the default replacement snapshot.
                     * @return The default replacement
                     */
                    // @ts-ignore
                    public getDefault(): T
                    /**
                     * Gets a {@link List} of any and all intermediary transactions that may
                     * have taken place to get the final {@link Transaction} of
                     * {@link #getOriginal() the original} and {@link #getDefault() the default}
                     * results. This is exposed for monitoring purposes only, as the provided
                     * list is not modifiable. The list may be {@link List#isEmpty() empty}
                     * by default, but will never be {@code null}.
                     * <p>Note that special processing with this list may sometimes only take
                     * place if {@link #getCustom() a custom} result has not been set by a plugin,
                     * or if {@link #isValid()} returns {@code false}.</p>
                     * @return The intermediary list of transactions
                     */
                    // @ts-ignore
                    public getIntermediary(): Array<any>
                    /**
                     * Gets the custom snapshot if one was set.
                     * @return The custom snapshot, if available
                     */
                    // @ts-ignore
                    public getCustom(): java.util.Optional<T>
                    /**
                     * Sets the custom snapshot. If setting <code>null</code>, this will
                     * reset to use the {@link #getDefault()} snapshot.
                     * @param custom The custom snapshot
                     */
                    // @ts-ignore
                    public setCustom(custom: T): void
                    /**
                     * Gets the proposed final snapshot, if the {@link #getCustom()} returns
                     * {@link Optional#isPresent()}, the custom is returned, otherwise,
                     * {@link #getDefault()} is returned.
                     * @return The proposed final snapshot
                     */
                    // @ts-ignore
                    public getFinal(): T
                    /**
                     * Gets whether this transaction is marked as valid.
                     * @return The valid state of this transaction
                     */
                    // @ts-ignore
                    public isValid(): boolean
                    /**
                     * Sets whether this transaction is valid or not.
                     * @param valid The valid state of this transaction
                     */
                    // @ts-ignore
                    public setValid(valid: boolean): void
                    // @ts-ignore
                    public hashCode(): number /*int*/
                    // @ts-ignore
                    public equals(obj: java.lang.Object | any): boolean
                    // @ts-ignore
                    public toString(): string
                    // @ts-ignore
                    public getContentVersion(): number /*int*/
                    // @ts-ignore
                    public toContainer(): org.spongepowered.api.data.DataContainer
                }
            }
        }
    }
}
