declare namespace org {
    namespace apache {
        namespace catalina {
            namespace manager {
                namespace util {
                    /**
                     * Utility methods on HttpSessions...
                     * @author C&eacute;drik LIME
                     */
                    // @ts-ignore
                    class SessionUtils extends java.lang.Object {
                        /**
                         * Try to get user locale from the session, if possible.
                         * IMPLEMENTATION NOTE: this method has explicit support for Tapestry 3, Struts 1.x and Spring
                         * JSF check the browser meta tag "accept languages" to choose what language to display.
                         * @param in_session The session
                         * @return the locale
                         */
                        // @ts-ignore
                        public static guessLocaleFromSession(in_session: org.apache.catalina.Session): java.util.Locale
                        // @ts-ignore
                        public static guessLocaleFromSession(in_session: javax.servlet.http.HttpSession): java.util.Locale
                        /**
                         * Try to get user from the session, if possible.
                         * @param in_session The session
                         * @return the user
                         */
                        // @ts-ignore
                        public static guessUserFromSession(in_session: org.apache.catalina.Session): any
                        // @ts-ignore
                        public static getUsedTimeForSession(in_session: org.apache.catalina.Session): number /*long*/
                        // @ts-ignore
                        public static getTTLForSession(in_session: org.apache.catalina.Session): number /*long*/
                        // @ts-ignore
                        public static getInactiveTimeForSession(in_session: org.apache.catalina.Session): number /*long*/
                    }
                }
            }
        }
    }
}
