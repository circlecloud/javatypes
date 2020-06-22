declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * Options for
                     * <a href="https://docs.mongodb.com/manual/reference/method/db.collection.findOneAndReplace/">findOneAndReplace<a/>.
                     * <br />
                     * Defaults to
                     * <dl>
                     * <dt>returnNew</dt>
                     * <dd>false</dd>
                     * <dt>upsert</dt>
                     * <dd>false</dd>
                     * </dl>
                     * @author Mark Paluch
                     * @author Christoph Strobl
                     * @since 2.1
                     */
                    // @ts-ignore
                    class FindAndReplaceOptions extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Static factory method to create a {@link FindAndReplaceOptions} instance.
                         * <dl>
                         * <dt>returnNew</dt>
                         * <dd>false</dd>
                         * <dt>upsert</dt>
                         * <dd>false</dd>
                         * </dl>
                         * @return new instance of {#link FindAndReplaceOptions}.
                         */
                        // @ts-ignore
                        public static options(): org.springframework.data.mongodb.core.FindAndReplaceOptions
                        /**
                         * Static factory method to create a {@link FindAndReplaceOptions} instance with
                         * <dl>
                         * <dt>returnNew</dt>
                         * <dd>false</dd>
                         * <dt>upsert</dt>
                         * <dd>false</dd>
                         * </dl>
                         * @return new instance of {#link FindAndReplaceOptions}.
                         */
                        // @ts-ignore
                        public static empty(): org.springframework.data.mongodb.core.FindAndReplaceOptions
                        /**
                         * Return the replacement document.
                         * @return this.
                         */
                        // @ts-ignore
                        public returnNew(): org.springframework.data.mongodb.core.FindAndReplaceOptions
                        /**
                         * Insert a new document if not exists.
                         * @return this.
                         */
                        // @ts-ignore
                        public upsert(): org.springframework.data.mongodb.core.FindAndReplaceOptions
                        /**
                         * Get the bit indicating to return the replacement document.
                         * @return 
                         */
                        // @ts-ignore
                        public isReturnNew(): boolean
                        /**
                         * Get the bit indicating if to create a new document if not exists.
                         * @return 
                         */
                        // @ts-ignore
                        public isUpsert(): boolean
                    }
                }
            }
        }
    }
}
