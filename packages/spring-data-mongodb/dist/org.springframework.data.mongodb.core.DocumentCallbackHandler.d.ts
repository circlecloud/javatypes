declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * An interface used by {@link MongoTemplate} for processing documents returned from a MongoDB query on a per-document
                     * basis. Implementations of this interface perform the actual work of prcoessing each document but don't need to worry
                     * about exception handling. {@MongoException}s will be caught and translated by the calling MongoTemplate An
                     * DocumentCallbackHandler is typically stateful: It keeps the result state within the object, to be available later for
                     * later inspection.
                     * @author Mark Pollack
                     * @author Grame Rocher
                     * @author Oliver Gierke
                     * @author John Brisbin
                     * @author Christoph Strobl
                     * @since 1.0
                     */
                    // @ts-ignore
                    interface DocumentCallbackHandler {
                        // @ts-ignore
                        processDocument(document: Document): void
                    }
                }
            }
        }
    }
}
