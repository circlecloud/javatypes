declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * Options applicable to MongoDB <a href="https://docs.mongodb.com/manual/changeStreams/">Change Streams</a>. Intended
                     * to be used along with {@link org.springframework.data.mongodb.core.messaging.ChangeStreamRequest} in a sync world as
                     * well {@link ReactiveMongoOperations} if you prefer it that way.
                     * @author Christoph Strobl
                     * @author Mark Paluch
                     * @since 2.1
                     */
                    // @ts-ignore
                    class ChangeStreamOptions extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * @return {#link Optional#empty()} if not set.
                         */
                        // @ts-ignore
                        public getFilter(): java.util.Optional<java.lang.Object | any>
                        /**
                         * @return {#link Optional#empty()} if not set.
                         */
                        // @ts-ignore
                        public getResumeToken(): java.util.Optional<BsonValue>
                        /**
                         * @return {#link Optional#empty()} if not set.
                         */
                        // @ts-ignore
                        public getFullDocumentLookup(): java.util.Optional<FullDocument>
                        /**
                         * @return {#link Optional#empty()} if not set.
                         */
                        // @ts-ignore
                        public getCollation(): java.util.Optional<org.springframework.data.mongodb.core.query.Collation>
                        /**
                         * @return {#link Optional#empty()} if not set.
                         */
                        // @ts-ignore
                        public getResumeTimestamp(): java.util.Optional<java.time.Instant>
                        /**
                         * @return empty {#link ChangeStreamOptions}.
                         */
                        // @ts-ignore
                        public static empty(): org.springframework.data.mongodb.core.ChangeStreamOptions
                        /**
                         * Obtain a shiny new {@link ChangeStreamOptionsBuilder} and start defining options in this fancy fluent way. Just
                         * don't forget to call {@link ChangeStreamOptionsBuilder#build() build()} when your're done.
                         * @return new instance of {#link ChangeStreamOptionsBuilder}.
                         */
                        // @ts-ignore
                        public static builder(): org.springframework.data.mongodb.core.ChangeStreamOptions.ChangeStreamOptionsBuilder
                    }
                }
            }
        }
    }
}
