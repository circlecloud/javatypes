declare namespace org {
    namespace springframework {
        namespace data {
            namespace redis {
                namespace connection {
                    /**
                     * The result of an asynchronous operation
                     * @author Jennifer Hickey
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @param <T> The data type of the object that holds the future result (usually type of the
                     *           {#link java.util.concurrent.Future} or response wrapper).
                     */
                    // @ts-ignore
                    abstract class FutureResult<T> extends java.lang.Object {
                        /**
                         * Create new {@link FutureResult} for given object actually holding the result itself.
                         * @param resultHolder must not be {#literal null}.
                         */
                        // @ts-ignore
                        constructor(resultHolder: T)
                        /**
                         * Create new {@link FutureResult} for given object actually holding the result itself and a converter capable of
                         * transforming the result via {@link #convert(Object)}.
                         * @param resultHolder must not be {#literal null}.
                         * @param converter can be {#literal null} and will be defaulted to an identity converter {@code value -> value} to
                         *           preserve the original value.
                         */
                        // @ts-ignore
                        constructor(resultHolder: T, converter: Converter)
                        /**
                         * Create new {@link FutureResult} for given object actually holding the result itself and a converter capable of
                         * transforming the result via {@link #convert(Object)}.
                         * @param resultHolder must not be {#literal null}.
                         * @param converter can be {#literal null} and will be defaulted to an identity converter {@code value -> value} to
                         *           preserve the original value.
                         * @param defaultConversionResult must not be {#literal null}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        constructor(resultHolder: T, converter: Converter, defaultConversionResult: java.util.function$.Supplier<any>)
                        // @ts-ignore
                        converter: Converter
                        /**
                         * Get the object holding the actual result.
                         * @return never {#literal null}.
                         * @since 1.1
                         */
                        // @ts-ignore
                        public getResultHolder(): T
                        /**
                         * Converts the given result if a converter is specified, else returns the result
                         * @param result The result to convert. Can be {#literal null}.
                         * @return The converted result or {#literal null}.
                         */
                        // @ts-ignore
                        public convert(result: java.lang.Object | any): any
                        // @ts-ignore
                        public getConverter(): Converter
                        /**
                         * Indicates if this result is the status of an operation. Typically status results will be discarded on conversion.
                         * @return true if this is a status result (i.e. OK)
                         */
                        // @ts-ignore
                        public isStatus(): boolean
                        /**
                         * Indicates if this result is the status of an operation. Typically status results will be discarded on conversion.
                         */
                        // @ts-ignore
                        public setStatus(status: boolean): void
                        /**
                         * @return The result of the operation. Can be {#literal null}.
                         */
                        // @ts-ignore
                        public abstract get(): any
                        /**
                         * Indicate whether or not the actual result needs to be {@link #convert(Object) converted} before handing over.
                         * @return {#literal true} if result conversion is required.
                         * @since 2.1
                         */
                        // @ts-ignore
                        public abstract conversionRequired(): boolean
                    }
                }
            }
        }
    }
}
