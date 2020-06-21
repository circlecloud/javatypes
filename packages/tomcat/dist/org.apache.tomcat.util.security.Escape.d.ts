declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace security {
                    /**
                     * Provides utility methods to escape content for different contexts. It is
                     * critical that the escaping used is correct for the context in which the data
                     * is to be used.
                     */
                    // @ts-ignore
                    class Escape extends java.lang.Object {
                        /**
                         * Escape content for use in HTML. This escaping is suitable for the
                         * following uses:
                         * <ul>
                         * <li>Element content when the escaped data will be placed directly inside
                         * tags such as &lt;p&gt;, &lt;td&gt; etc.</li>
                         * <li>Attribute values when the attribute value is quoted with &quot; or
                         * &#x27;.</li>
                         * </ul>
                         * @param content   The content to escape
                         * @return The escaped content or {#code null} if the content was
                         *           {@code null}
                         */
                        // @ts-ignore
                        public static htmlElementContent(content: java.lang.String | string): string
                        /**
                         * Convert the object to a string via {@link Object#toString()} and HTML
                         * escape the resulting string for use in HTML content.
                         * @param obj       The object to convert to String and then escape
                         * @return The escaped content or <code>&quot;?&quot;</code> if obj is
                         *          {#code null}
                         */
                        // @ts-ignore
                        public static htmlElementContent(obj: java.lang.Object | any): string
                        /**
                         * Escape content for use in XML.
                         * @param content   The content to escape
                         * @return The escaped content or {#code null} if the content was
                         *           {@code null}
                         */
                        // @ts-ignore
                        public static xml(content: java.lang.String | string): string
                        /**
                         * Escape content for use in XML.
                         * @param ifNull    The value to return if content is {#code null}
                         * @param content   The content to escape
                         * @return The escaped content or the value of {#code ifNull} if the
                         *           content was {@code null}
                         */
                        // @ts-ignore
                        public static xml(ifNull: java.lang.String | string, content: java.lang.String | string): string
                        /**
                         * Escape content for use in XML.
                         * @param ifNull        The value to return if content is {#code null}
                         * @param escapeCRLF    Should CR and LF also be escaped?
                         * @param content       The content to escape
                         * @return The escaped content or the value of ifNull if the content was
                         *           {#code null}
                         */
                        // @ts-ignore
                        public static xml(ifNull: java.lang.String | string, escapeCRLF: boolean, content: java.lang.String | string): string
                    }
                }
            }
        }
    }
}
