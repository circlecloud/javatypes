declare namespace org {
    namespace apache {
        namespace catalina {
            namespace manager {
                /**
                 * Helper JavaBean for JSPs, because JSTL 1.1/EL 2.0 is too dumb to
                 * to what I need (call methods with parameters), or I am too dumb to use it correctly. :)
                 * @author C&eacute;drik LIME
                 */
                // @ts-ignore
                class JspHelper extends java.lang.Object {
                    /**
                     * Try to get user locale from the session, if possible.
                     * IMPLEMENTATION NOTE: this method has explicit support for Tapestry 3 and
                     * Struts 1.x
                     * @param in_session Session from which the locale should be guessed
                     * @return String
                     */
                    // @ts-ignore
                    public static guessDisplayLocaleFromSession(in_session: org.apache.catalina.Session): string
                    /**
                     * Try to get user name from the session, if possible.
                     * @param in_session The Servlet session
                     * @return the user name
                     */
                    // @ts-ignore
                    public static guessDisplayUserFromSession(in_session: org.apache.catalina.Session): string
                    // @ts-ignore
                    public static getDisplayCreationTimeForSession(in_session: org.apache.catalina.Session): string
                    // @ts-ignore
                    public static getDisplayLastAccessedTimeForSession(in_session: org.apache.catalina.Session): string
                    // @ts-ignore
                    public static getDisplayUsedTimeForSession(in_session: org.apache.catalina.Session): string
                    // @ts-ignore
                    public static getDisplayTTLForSession(in_session: org.apache.catalina.Session): string
                    // @ts-ignore
                    public static getDisplayInactiveTimeForSession(in_session: org.apache.catalina.Session): string
                    // @ts-ignore
                    public static secondsToTimeString(in_seconds: number /*long*/): string
                    // @ts-ignore
                    public static escapeXml(obj: java.lang.Object | any): string
                    /**
                     * Performs the following substring replacements
                     * (to facilitate output to XML/HTML pages):
                     * &amp; -&gt; &amp;amp;
                     * &lt; -&gt; &amp;lt;
                     * &gt; -&gt; &amp;gt;
                     * " -&gt; &amp;#034;
                     * ' -&gt; &amp;#039;
                     * See also OutSupport.writeEscapedXml().
                     * @param buffer The XML to escape
                     * @return the escaped XML
                     */
                    // @ts-ignore
                    public static escapeXml(buffer: java.lang.String | string): string
                    // @ts-ignore
                    public static formatNumber(number: number /*long*/): string
                }
            }
        }
    }
}
