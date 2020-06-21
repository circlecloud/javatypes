declare namespace javax {
    namespace servlet {
        namespace http {
            /**
             * Represents how the request from which this object was obtained was mapped to
             * the associated servlet.
             * @since 4.0
             */
            // @ts-ignore
            interface HttpServletMapping {
                /**
                 * @return The value that was matched or the empty String if not known.
                 */
                // @ts-ignore
                getMatchValue(): string
                /**
                 * @return The {#code url-pattern} that matched this request or the empty
                 *          String if not known.
                 */
                // @ts-ignore
                getPattern(): string
                /**
                 * @return The name of the servlet (as specified in web.xml,
                 *          {#link WebServlet#name()},
                 *          {@link javax.servlet.ServletContext#addServlet(String, Class)} or
                 *          one of the other <code>addServlet()</code> methods) that the
                 *          request was mapped to.
                 */
                // @ts-ignore
                getServletName(): string
                /**
                 * @return The type of match ({#code null} if not known)
                 */
                // @ts-ignore
                getMappingMatch(): javax.servlet.http.MappingMatch
            }
        }
    }
}
