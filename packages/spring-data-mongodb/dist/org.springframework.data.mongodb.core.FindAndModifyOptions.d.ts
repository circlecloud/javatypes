declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * @author Mark Pollak
                     * @author Oliver Gierke
                     * @author Christoph Strobl
                     */
                    // @ts-ignore
                    class FindAndModifyOptions extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Static factory method to create a FindAndModifyOptions instance
                         * @return new instance of {#link FindAndModifyOptions}.
                         */
                        // @ts-ignore
                        public static options(): org.springframework.data.mongodb.core.FindAndModifyOptions
                        /**
                         * Create new {@link FindAndModifyOptions} based on option of given {@litearl source}.
                         * @param source can be {#literal null}.
                         * @return new instance of {#link FindAndModifyOptions}.
                         * @since 2.0
                         */
                        // @ts-ignore
                        public static of(source: org.springframework.data.mongodb.core.FindAndModifyOptions): org.springframework.data.mongodb.core.FindAndModifyOptions
                        // @ts-ignore
                        public returnNew(returnNew: boolean): org.springframework.data.mongodb.core.FindAndModifyOptions
                        // @ts-ignore
                        public upsert(upsert: boolean): org.springframework.data.mongodb.core.FindAndModifyOptions
                        // @ts-ignore
                        public remove(remove: boolean): org.springframework.data.mongodb.core.FindAndModifyOptions
                        /**
                         * Define the {@link Collation} specifying language-specific rules for string comparison.
                         * @param collation
                         * @return 
                         * @since 2.0
                         */
                        // @ts-ignore
                        public collation(collation: org.springframework.data.mongodb.core.query.Collation): org.springframework.data.mongodb.core.FindAndModifyOptions
                        // @ts-ignore
                        public isReturnNew(): boolean
                        // @ts-ignore
                        public isUpsert(): boolean
                        // @ts-ignore
                        public isRemove(): boolean
                        /**
                         * Get the {@link Collation} specifying language-specific rules for string comparison.
                         * @return 
                         * @since 2.0
                         */
                        // @ts-ignore
                        public getCollation(): java.util.Optional<org.springframework.data.mongodb.core.query.Collation>
                    }
                }
            }
        }
    }
}
