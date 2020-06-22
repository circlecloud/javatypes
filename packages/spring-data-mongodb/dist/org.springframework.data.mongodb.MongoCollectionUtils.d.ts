declare namespace org {
    namespace springframework {
        namespace data {
            namespace mongodb {
                /**
                 * Helper class featuring helper methods for working with MongoDb collections.
                 * <p/>
                 * <p/>
                 * Mainly intended for internal use within the framework.
                 * @author Thomas Risberg
                 * @since 1.0
                 */
                // @ts-ignore
                abstract class MongoCollectionUtils extends java.lang.Object {
                    /**
                     * Obtains the collection name to use for the provided class
                     * @param entityClass The class to determine the preferred collection name for
                     * @return The preferred collection name
                     */
                    // @ts-ignore
                    public static getPreferredCollectionName(entityClass: java.lang.Class<any>): string
                }
            }
        }
    }
}
