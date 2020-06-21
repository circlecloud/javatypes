declare namespace org {
    namespace springframework {
        namespace cache {
            namespace config {
                /**
                 * Configuration constants for internal sharing across subpackages.
                 * @author Juergen Hoeller
                 * @since 4.1
                 */
                // @ts-ignore
                abstract class CacheManagementConfigUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * The name of the cache advisor bean.
                     */
                    // @ts-ignore
                    public static readonly CACHE_ADVISOR_BEAN_NAME: java.lang.String | string
                    /**
                     * The name of the cache aspect bean.
                     */
                    // @ts-ignore
                    public static readonly CACHE_ASPECT_BEAN_NAME: java.lang.String | string
                    /**
                     * The name of the JCache advisor bean.
                     */
                    // @ts-ignore
                    public static readonly JCACHE_ADVISOR_BEAN_NAME: java.lang.String | string
                    /**
                     * The name of the JCache advisor bean.
                     */
                    // @ts-ignore
                    public static readonly JCACHE_ASPECT_BEAN_NAME: java.lang.String | string
                }
            }
        }
    }
}
