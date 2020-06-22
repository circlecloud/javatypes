declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                namespace core {
                    /**
                     * Simple {@link PersistenceExceptionTranslator} for Mongo. Convert the given runtime exception to an appropriate
                     * exception from the {@code org.springframework.dao} hierarchy. Return {@literal null} if no translation is
                     * appropriate: any other exception may have resulted from user code, and should not be translated.
                     * @author Oliver Gierke
                     * @author Michal Vich
                     * @author Christoph Strobl
                     */
                    // @ts-ignore
                    class MongoExceptionTranslator extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public translateExceptionIfPossible(ex: java.lang.RuntimeException): DataAccessException
                    }
                }
            }
        }
    }
}
