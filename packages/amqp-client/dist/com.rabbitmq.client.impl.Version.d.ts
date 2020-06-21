declare namespace com {
    namespace rabbitmq {
        namespace client {
            namespace impl {
                /**
                 * Encapsulation of AMQP protocol version
                 */
                // @ts-ignore
                class Version extends java.lang.Object {
                    /**
                     * Creates a new <code>Version</code> instance.
                     * @param major the AMQP major version number
                     * @param minor the AMQP minor version number
                     */
                    // @ts-ignore
                    constructor(major: number /*int*/, minor: number /*int*/)
                    /**
                     * Retrieve the major version number.
                     * @return the major version number
                     */
                    // @ts-ignore
                    public getMajor(): number /*int*/
                    /**
                     * Retrieve the minor version number.
                     * @return the minor version number
                     */
                    // @ts-ignore
                    public getMinor(): number /*int*/
                    /**
                     * Retrieve a String representation of the version in the standard
                     * AMQP version format of major-minor.
                     * @return a <code>String</code> representation of the version
                     * @see Object#toString()
                     */
                    // @ts-ignore
                    public toString(): string
                    // @ts-ignore
                    public equals(o: java.lang.Object | any): boolean
                    // @ts-ignore
                    public hashCode(): number /*int*/
                    /**
                     * Adjust a version for spec weirdness.
                     * The AMQP 0-8 spec confusingly defines the version as 8-0. This
                     * method maps the latter to the former.
                     * @return the adjusted <code>Version</code>
                     */
                    // @ts-ignore
                    public adjust(): com.rabbitmq.client.impl.Version
                    /**
                     * Check compatibility of a client and server version, from the
                     * client's perspective.
                     * @param clientVersion the client <code>Version</code>
                     * @param serverVersion the server <code>Version</code>
                     * @return a <code>boolean</code> value
                     */
                    // @ts-ignore
                    public static checkVersion(clientVersion: com.rabbitmq.client.impl.Version, serverVersion: com.rabbitmq.client.impl.Version): boolean
                }
            }
        }
    }
}
