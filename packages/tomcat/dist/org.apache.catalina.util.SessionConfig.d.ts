declare namespace org {
    namespace apache {
        namespace catalina {
            namespace util {
                // @ts-ignore
                class SessionConfig extends java.lang.Object {
                    /**
                     * Determine the name to use for the session cookie for the provided
                     * context.
                     * @param context The context
                     * @return the cookie name for the context
                     */
                    // @ts-ignore
                    public static getSessionCookieName(context: org.apache.catalina.Context): string
                    /**
                     * Determine the name to use for the session path parameter for the provided
                     * context.
                     * @param context The context
                     * @return the parameter name for the session
                     */
                    // @ts-ignore
                    public static getSessionUriParamName(context: org.apache.catalina.Context): string
                    /**
                     * Determine the value to use for the session cookie path for the provided
                     * context.
                     * @param context The context
                     * @return the parameter name for the session
                     */
                    // @ts-ignore
                    public static getSessionCookiePath(context: org.apache.catalina.Context): string
                }
            }
        }
    }
}
