declare namespace org {
    namespace apache {
        namespace catalina {
            namespace filters {
                // @ts-ignore
                class RemoteCIDRFilter extends org.apache.catalina.filters.FilterBase {
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
                     * @return the #deny list as string, without the leading '[' and trailing
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
                    isConfigProblemFatal(): boolean
                    // @ts-ignore
                    public doFilter(request: javax.servlet.ServletRequest, response: javax.servlet.ServletResponse, chain: javax.servlet.FilterChain): void
                    // @ts-ignore
                    public getLogger(): org.apache.juli.logging.Log
                }
            }
        }
    }
}
