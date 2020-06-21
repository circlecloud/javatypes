declare namespace org {
    namespace apache {
        namespace catalina {
            namespace util {
                /**
                 * Provides support for tracking per exception type and per HTTP status code
                 * error pages.
                 */
                // @ts-ignore
                class ErrorPageSupport extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    // @ts-ignore
                    public add(errorPage: org.apache.tomcat.util.descriptor.web.ErrorPage): void
                    // @ts-ignore
                    public remove(errorPage: org.apache.tomcat.util.descriptor.web.ErrorPage): void
                    // @ts-ignore
                    public find(statusCode: number /*int*/): org.apache.tomcat.util.descriptor.web.ErrorPage
                    /**
                     * Find the ErrorPage, if any, for the named exception type.
                     * @param exceptionType The fully qualified class name of the exception type
                     * @return The ErrorPage for the named exception type, or {#code null} if
                     *          none is configured
                     */
                    // @ts-ignore
                    public find(exceptionType: java.lang.String | string): org.apache.tomcat.util.descriptor.web.ErrorPage
                    // @ts-ignore
                    public find(exceptionType: java.lang.Throwable | Error): org.apache.tomcat.util.descriptor.web.ErrorPage
                    // @ts-ignore
                    public findAll(): org.apache.tomcat.util.descriptor.web.ErrorPage[]
                }
            }
        }
    }
}
