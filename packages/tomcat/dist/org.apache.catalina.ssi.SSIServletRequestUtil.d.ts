declare namespace org {
    namespace apache {
        namespace catalina {
            namespace ssi {
                // @ts-ignore
                class SSIServletRequestUtil extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Return the relative path associated with this servlet. Taken from
                     * DefaultServlet.java. Perhaps this should be put in
                     * org.apache.catalina.util somewhere? Seems like it would be widely used.
                     * @param request
                     *             The servlet request we are processing
                     * @return the relative path
                     */
                    // @ts-ignore
                    public static getRelativePath(request: javax.servlet.http.HttpServletRequest): string
                }
            }
        }
    }
}
