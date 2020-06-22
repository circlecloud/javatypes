declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    namespace query {
                        /**
                         * Meta-data for {@link Query} instances.
                         * @author Christoph Strobl
                         * @author Oliver Gierke
                         * @author Mark Paluch
                         * @since 1.6
                         */
                        // @ts-ignore
                        class Meta extends java.lang.Object {
                            // @ts-ignore
                            constructor()
                            /**
                             * @return {#literal null} if not set.
                             */
                            // @ts-ignore
                            public getMaxTimeMsec(): number
                            /**
                             * Set the maximum time limit in milliseconds for processing operations.
                             * @param maxTimeMsec
                             */
                            // @ts-ignore
                            public setMaxTimeMsec(maxTimeMsec: number /*long*/): void
                            /**
                             * Set the maximum time limit for processing operations.
                             * @param timeout
                             * @param timeUnit
                             * @deprecated since 2.1. Use {#link #setMaxTime(Duration)} instead.
                             */
                            // @ts-ignore
                            public setMaxTime(timeout: number /*long*/, timeUnit: java.util.concurrent.TimeUnit): void
                            /**
                             * Set the maximum time limit for processing operations.
                             * @param timeout must not be {#literal null}.
                             * @since 2.1
                             */
                            // @ts-ignore
                            public setMaxTime(timeout: java.time.Duration): void
                            /**
                             * @return {#literal null} if not set.
                             */
                            // @ts-ignore
                            public getMaxScan(): number
                            /**
                             * Only scan the specified number of documents.
                             * @param maxScan
                             * @deprecated since 2.1 due to deprecation in MongoDB 4.0.
                             */
                            // @ts-ignore
                            public setMaxScan(maxScan: number /*long*/): void
                            /**
                             * Add a comment to the query that is propagated to the profile log.
                             * @param comment
                             */
                            // @ts-ignore
                            public setComment(comment: java.lang.String | string): void
                            /**
                             * @return {#literal null} if not set.
                             */
                            // @ts-ignore
                            public getComment(): string
                            /**
                             * Using snapshot prevents the cursor from returning a document more than once.
                             * @param useSnapshot
                             * @deprecated since 2.1 due to deprecation as of MongoDB 3.6
                             */
                            // @ts-ignore
                            public setSnapshot(useSnapshot: boolean): void
                            /**
                             * @return {#literal null} if not set.
                             */
                            // @ts-ignore
                            public getSnapshot(): boolean
                            /**
                             * @return {#literal null} if not set.
                             * @since 2.1
                             */
                            // @ts-ignore
                            public getCursorBatchSize(): number
                            /**
                             * Apply the batch size (number of documents to return in each response) for a query. <br />
                             * Use {@literal 0 (zero)} for no limit. A <strong>negative limit</strong> closes the cursor after returning a single
                             * batch indicating to the server that the client will not ask for a subsequent one.
                             * @param cursorBatchSize The number of documents to return per batch.
                             * @since 2.1
                             */
                            // @ts-ignore
                            public setCursorBatchSize(cursorBatchSize: number /*int*/): void
                            /**
                             * Add {@link CursorOption} influencing behavior of the {@link com.mongodb.DBCursor}.
                             * @param option must not be {#literal null}.
                             * @return 
                             * @since 1.10
                             */
                            // @ts-ignore
                            public addFlag(option: org.springframework.data.mongodb.core.query.Meta.CursorOption): boolean
                            /**
                             * @return never {#literal null}.
                             * @since 1.10
                             */
                            // @ts-ignore
                            public getFlags(): Array<org.springframework.data.mongodb.core.query.Meta.CursorOption>
                            /**
                             * @return 
                             */
                            // @ts-ignore
                            public hasValues(): boolean
                            /**
                             * Get {@link Iterable} of set meta values.
                             * @return 
                             */
                            // @ts-ignore
                            public values(): java.lang.Iterable<java.util.Map.Entry<java.lang.String | string, java.lang.Object | any>>
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
