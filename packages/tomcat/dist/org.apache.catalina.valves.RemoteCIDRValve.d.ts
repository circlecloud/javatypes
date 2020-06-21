declare namespace org {
    namespace apache {
        namespace catalina {
            namespace valves {
                // @ts-ignore
                class RemoteCIDRValve extends org.apache.catalina.valves.ValveBase {
                    // @ts-ignore
                    constructor()
                    /**
                     * Return a string representation of the {@link NetMask} list in #allow.
                     * @return the #allow list as a string, without the leading '[' and trailing
                     *          ']'
                     */
                    // @ts-ignore
                    public getAllow(): string
                    /**
                     * Fill the #allow list with the list of netmasks provided as an argument,
                     * if any. Calls #fillFromInput.
                     * @param input The list of netmasks, as a comma separated string
                     * @throws IllegalArgumentException One or more netmasks are invalid
                     */
                    // @ts-ignore
                    public setAllow(input: java.lang.String | string): void
                    /**
                     * Return a string representation of the {@link NetMask} list in #deny.
                     * @return the #deny list as a string, without the leading '[' and trailing
                     *          ']'
                     */
                    // @ts-ignore
                    public getDeny(): string
                    /**
                     * Fill the #deny list with the list of netmasks provided as an argument, if
                     * any. Calls #fillFromInput.
                     * @param input The list of netmasks, as a comma separated string
                     * @throws IllegalArgumentException One or more netmasks are invalid
                     */
                    // @ts-ignore
                    public setDeny(input: java.lang.String | string): void
                    // @ts-ignore
                    public invoke(request: org.apache.catalina.connector.Request, response: org.apache.catalina.connector.Response): void
                }
            }
        }
    }
}
