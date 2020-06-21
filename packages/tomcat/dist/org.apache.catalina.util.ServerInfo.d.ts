declare namespace org {
    namespace apache {
        namespace catalina {
            namespace util {
                /**
                 * Simple utility module to make it easy to plug in the server identifier
                 * when integrating Tomcat.
                 * @author Craig R. McClanahan
                 */
                // @ts-ignore
                class ServerInfo extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * @return the server identification for this version of Tomcat.
                     */
                    // @ts-ignore
                    public static getServerInfo(): string
                    /**
                     * @return the server built time for this version of Tomcat.
                     */
                    // @ts-ignore
                    public static getServerBuilt(): string
                    /**
                     * @return the server's version number.
                     */
                    // @ts-ignore
                    public static getServerNumber(): string
                    // @ts-ignore
                    public static main(args: java.lang.String[] | string[]): void
                }
            }
        }
    }
}
