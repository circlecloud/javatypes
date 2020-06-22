declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * Provides a simple wrapper to encapsulate the variety of settings you can use when creating a collection.
                     * @author Thomas Risberg
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @author Andreas Zink
                     */
                    // @ts-ignore
                    class CollectionOptions extends java.lang.Object {
                        /**
                         * Constructs a new <code>CollectionOptions</code> instance.
                         * @param size the collection size in bytes, this data space is preallocated. Can be {#literal null}.
                         * @param maxDocuments the maximum number of documents in the collection. Can be {#literal null}.
                         * @param capped true to created a "capped" collection (fixed size with auto-FIFO behavior based on insertion order),
                         *           false otherwise. Can be {#literal null}.
                         * @deprecated since 2.0 please use {#link CollectionOptions#empty()} as entry point.
                         */
                        // @ts-ignore
                        constructor(size: java.lang.Long | number, maxDocuments: java.lang.Long | number, capped: java.lang.Boolean)
                        /**
                         * Create new {@link CollectionOptions} by just providing the {@link Collation} to use.
                         * @param collation must not be {#literal null}.
                         * @return new {#link CollectionOptions}.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public static just(collation: org.springframework.data.mongodb.core.query.Collation): org.springframework.data.mongodb.core.CollectionOptions
                        /**
                         * Create new empty {@link CollectionOptions}.
                         * @return new {#link CollectionOptions}.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public static empty(): org.springframework.data.mongodb.core.CollectionOptions
                        /**
                         * Create new {@link CollectionOptions} with already given settings and capped set to {@literal true}. <br />
                         * <strong>NOTE</strong> Using capped collections requires defining {@link #size(int)}.
                         * @return new {#link CollectionOptions}.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public capped(): org.springframework.data.mongodb.core.CollectionOptions
                        /**
                         * Create new {@link CollectionOptions} with already given settings and {@code maxDocuments} set to given value.
                         * @param maxDocuments can be {#literal null}.
                         * @return new {#link CollectionOptions}.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public maxDocuments(maxDocuments: number /*long*/): org.springframework.data.mongodb.core.CollectionOptions
                        /**
                         * Create new {@link CollectionOptions} with already given settings and {@code size} set to given value.
                         * @param size can be {#literal null}.
                         * @return new {#link CollectionOptions}.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public size(size: number /*long*/): org.springframework.data.mongodb.core.CollectionOptions
                        /**
                         * Create new {@link CollectionOptions} with already given settings and {@code collation} set to given value.
                         * @param collation can be {#literal null}.
                         * @return new {#link CollectionOptions}.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public collation(collation: org.springframework.data.mongodb.core.query.Collation): org.springframework.data.mongodb.core.CollectionOptions
                        /**
                         * Create new {@link CollectionOptions} with already given settings and {@code validationOptions} set to given
                         * {@link MongoJsonSchema}.
                         * @param schema can be {#literal null}.
                         * @return new {#link CollectionOptions}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        public schema(schema: org.springframework.data.mongodb.core.schema.MongoJsonSchema): org.springframework.data.mongodb.core.CollectionOptions
                        /**
                         * Create new {@link CollectionOptions} with already given settings and {@code validationOptions} set to given
                         * {@link Validator}.
                         * @param validator can be {#literal null}.
                         * @return new {#link CollectionOptions}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        public validator(validator: org.springframework.data.mongodb.core.validation.Validator): org.springframework.data.mongodb.core.CollectionOptions
                        /**
                         * Create new {@link CollectionOptions} with already given settings and {@code validationLevel} set to
                         * {@link ValidationLevel#OFF}.
                         * @return new {#link CollectionOptions}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        public disableValidation(): org.springframework.data.mongodb.core.CollectionOptions
                        /**
                         * Create new {@link CollectionOptions} with already given settings and {@code validationLevel} set to
                         * {@link ValidationLevel#STRICT}.
                         * @return new {#link CollectionOptions}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        public strictValidation(): org.springframework.data.mongodb.core.CollectionOptions
                        /**
                         * Create new {@link CollectionOptions} with already given settings and {@code validationLevel} set to
                         * {@link ValidationLevel#MODERATE}.
                         * @return new {#link CollectionOptions}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        public moderateValidation(): org.springframework.data.mongodb.core.CollectionOptions
                        /**
                         * Create new {@link CollectionOptions} with already given settings and {@code validationAction} set to
                         * {@link ValidationAction#WARN}.
                         * @return new {#link CollectionOptions}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        public warnOnValidationError(): org.springframework.data.mongodb.core.CollectionOptions
                        /**
                         * Create new {@link CollectionOptions} with already given settings and {@code validationAction} set to
                         * {@link ValidationAction#ERROR}.
                         * @return new {#link CollectionOptions}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        public failOnValidationError(): org.springframework.data.mongodb.core.CollectionOptions
                        /**
                         * Create new {@link CollectionOptions} with already given settings and {@code validationLevel} set given
                         * {@link ValidationLevel}.
                         * @param validationLevel must not be {#literal null}.
                         * @return new {#link CollectionOptions}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        public schemaValidationLevel(validationLevel: ValidationLevel): org.springframework.data.mongodb.core.CollectionOptions
                        /**
                         * Create new {@link CollectionOptions} with already given settings and {@code validationAction} set given
                         * {@link ValidationAction}.
                         * @param validationAction must not be {#literal null}.
                         * @return new {#link CollectionOptions}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        public schemaValidationAction(validationAction: ValidationAction): org.springframework.data.mongodb.core.CollectionOptions
                        /**
                         * Create new {@link CollectionOptions} with the given {@link ValidationOptions}.
                         * @param validationOptions must not be {#literal null}. Use {@link ValidationOptions#none()} to remove validation.
                         * @return new {#link CollectionOptions}.
                         * @since 2.1
                         */
                        // @ts-ignore
                        public validation(validationOptions: org.springframework.data.mongodb.core.CollectionOptions.ValidationOptions): org.springframework.data.mongodb.core.CollectionOptions
                        /**
                         * Get the max number of documents the collection should be limited to.
                         * @return {#link Optional#empty()} if not set.
                         */
                        // @ts-ignore
                        public getMaxDocuments(): java.util.Optional<java.lang.Long | number>
                        /**
                         * Get the {@literal size} in bytes the collection should be limited to.
                         * @return {#link Optional#empty()} if not set.
                         */
                        // @ts-ignore
                        public getSize(): java.util.Optional<java.lang.Long | number>
                        /**
                         * Get if the collection should be capped.
                         * @return {#link Optional#empty()} if not set.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public getCapped(): java.util.Optional<java.lang.Boolean>
                        /**
                         * Get the {@link Collation} settings.
                         * @return {#link Optional#empty()} if not set.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public getCollation(): java.util.Optional<org.springframework.data.mongodb.core.query.Collation>
                        /**
                         * Get the {@link MongoJsonSchema} for the collection.
                         * @return {#link Optional#empty()} if not set.
                         * @since 2.1
                         */
                        // @ts-ignore
                        public getValidationOptions(): java.util.Optional<org.springframework.data.mongodb.core.CollectionOptions.ValidationOptions>
                    }
                }
            }
        }
    }
}
