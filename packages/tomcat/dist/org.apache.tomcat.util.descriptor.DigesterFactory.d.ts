declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace descriptor {
                    /**
                     * Wrapper class around the Digester that hide Digester's initialization
                     * details.
                     */
                    // @ts-ignore
                    class DigesterFactory extends java.lang.Object {
                        // @ts-ignore
                        constructor()
                        /**
                         * Mapping of well-known public IDs used by the Servlet API to the matching
                         * local resource.
                         */
                        // @ts-ignore
                        public static readonly SERVLET_API_PUBLIC_IDS: java.util.Map<java.lang.String | string, java.lang.String | string>
                        /**
                         * Mapping of well-known system IDs used by the Servlet API to the matching
                         * local resource.
                         */
                        // @ts-ignore
                        public static readonly SERVLET_API_SYSTEM_IDS: java.util.Map<java.lang.String | string, java.lang.String | string>
                        /**
                         * Create a <code>Digester</code> parser.
                         * @param xmlValidation turn on/off xml validation
                         * @param xmlNamespaceAware turn on/off namespace validation
                         * @param rule an instance of <code>RuleSet</code> used for parsing the xml.
                         * @param blockExternal turn on/off the blocking of external resources
                         * @return a new digester
                         */
                        // @ts-ignore
                        public static newDigester(xmlValidation: boolean, xmlNamespaceAware: boolean, rule: org.apache.tomcat.util.digester.RuleSet, blockExternal: boolean): org.apache.tomcat.util.digester.Digester
                    }
                }
            }
        }
    }
}
