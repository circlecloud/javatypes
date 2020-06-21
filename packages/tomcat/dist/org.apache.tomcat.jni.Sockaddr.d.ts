declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace jni {
                /**
                 * Sockaddr
                 * @author Mladen Turk
                 */
                // @ts-ignore
                class Sockaddr extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * The pool to use...
                     */
                    // @ts-ignore
                    public pool: number /*long*/
                    /**
                     * The hostname
                     */
                    // @ts-ignore
                    public hostname: java.lang.String | string
                    /**
                     * Either a string of the port number or the service name for the port
                     */
                    // @ts-ignore
                    public servname: java.lang.String | string
                    /**
                     * The numeric port
                     */
                    // @ts-ignore
                    public port: number /*int*/
                    /**
                     * The family
                     */
                    // @ts-ignore
                    public family: number /*int*/
                    /**
                     * If multiple addresses were found by apr_sockaddr_info_get(), this
                     * points to a representation of the next address.
                     */
                    // @ts-ignore
                    public next: number /*long*/
                }
            }
        }
    }
}
