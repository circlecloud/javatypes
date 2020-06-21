declare namespace org {
    namespace apache {
        namespace catalina {
            namespace util {
                /**
                 * This class is very similar to the java.net.URLEncoder class.
                 * Unfortunately, with java.net.URLEncoder there is no way to specify to the
                 * java.net.URLEncoder which characters should NOT be encoded.
                 * This code was moved from DefaultServlet.java
                 * @author Craig R. McClanahan
                 * @author Remy Maucherat
                 */
                // @ts-ignore
                class URLEncoder extends java.lang.Object implements java.lang.Cloneable {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public static readonly DEFAULT: org.apache.catalina.util.URLEncoder
                    // @ts-ignore
                    public static readonly QUERY: org.apache.catalina.util.URLEncoder
                    // @ts-ignore
                    public addSafeCharacter(c: string): void
                    // @ts-ignore
                    public removeSafeCharacter(c: string): void
                    // @ts-ignore
                    public setEncodeSpaceAsPlus(encodeSpaceAsPlus: boolean): void
                    /**
                     * URL encodes the provided path using the given character set.
                     * @param path      The path to encode
                     * @param charset   The character set to use to convert the path to bytes
                     * @return The encoded path
                     */
                    // @ts-ignore
                    public encode(path: java.lang.String | string, charset: java.nio.charset.Charset): string
                    // @ts-ignore
                    public clone(): any
                }
            }
        }
    }
}
