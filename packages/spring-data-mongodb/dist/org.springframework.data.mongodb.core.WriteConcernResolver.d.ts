declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * A strategy interface to determine the {@link WriteConcern} to use for a given {@link MongoAction}. Return the passed
                     * in default {@link WriteConcern} (a property on {@link MongoAction}) if no determination can be made.
                     * @author Mark Pollack
                     * @author Oliver Gierke
                     */
                    // @ts-ignore
                    interface WriteConcernResolver {
                        /**
                         * Resolve the {@link WriteConcern} given the {@link MongoAction}.
                         * @param action describes the context of the Mongo action. Contains a default {#link WriteConcern} to use if one
                         *           should not be resolved.
                         * @return a {#link WriteConcern} based on the passed in {@link MongoAction} value, maybe {@literal null}.
                         */
                        // @ts-ignore
                        resolve(action: org.springframework.data.mongodb.core.MongoAction): WriteConcern
                    }
                }
            }
        }
    }
}
