declare namespace org {
    namespace apache {
        namespace tomcat {
            namespace util {
                namespace descriptor {
                    namespace web {
                        /**
                         * <p><strong>RuleSet</strong> for processing the contents of a web application
                         * deployment descriptor (<code>/WEB-INF/web.xml</code>) resource.</p>
                         * @author Craig R. McClanahan
                         */
                        // @ts-ignore
                        class WebRuleSet extends java.lang.Object implements org.apache.tomcat.util.digester.RuleSet {
                            /**
                             * Construct an instance of this <code>RuleSet</code> with the default
                             * matching pattern prefix and default fragment setting.
                             */
                            // @ts-ignore
                            constructor()
                            /**
                             * Construct an instance of this <code>RuleSet</code> with the default
                             * matching pattern prefix.
                             * @param fragment <code>true</code> if this is a web fragment
                             */
                            // @ts-ignore
                            constructor(fragment: boolean)
                            /**
                             * Construct an instance of this <code>RuleSet</code> with the specified
                             * matching pattern prefix.
                             * @param prefix Prefix for matching pattern rules (including the
                             *   trailing slash character)
                             * @param fragment <code>true</code> if this is a web fragment
                             */
                            // @ts-ignore
                            constructor(prefix: java.lang.String | string, fragment: boolean)
                            /**
                             * The string resources for this package.
                             */
                            // @ts-ignore
                            static readonly sm: org.apache.tomcat.util.res.StringManager
                            /**
                             * The matching pattern prefix to use for recognizing our elements.
                             */
                            // @ts-ignore
                            readonly prefix: java.lang.String | string
                            /**
                             * The full pattern matching prefix, including the webapp or web-fragment
                             * component, to use for matching elements
                             */
                            // @ts-ignore
                            readonly fullPrefix: java.lang.String | string
                            /**
                             * Flag that indicates if this ruleset is for a web-fragment.xml file or for
                             * a web.xml file.
                             */
                            // @ts-ignore
                            readonly fragment: boolean
                            /**
                             * The <code>SetSessionConfig</code> rule used to parse the web.xml
                             */
                            // @ts-ignore
                            readonly sessionConfig: org.apache.tomcat.util.descriptor.web.SetSessionConfig
                            /**
                             * The <code>SetLoginConfig</code> rule used to parse the web.xml
                             */
                            // @ts-ignore
                            readonly loginConfig: org.apache.tomcat.util.descriptor.web.SetLoginConfig
                            /**
                             * The <code>SetJspConfig</code> rule used to parse the web.xml
                             */
                            // @ts-ignore
                            readonly jspConfig: org.apache.tomcat.util.descriptor.web.SetJspConfig
                            /**
                             * The <code>NameRule</code> rule used to parse the web.xml
                             */
                            // @ts-ignore
                            readonly name: org.apache.tomcat.util.descriptor.web.NameRule
                            /**
                             * The <code>AbsoluteOrderingRule</code> rule used to parse the web.xml
                             */
                            // @ts-ignore
                            readonly absoluteOrdering: org.apache.tomcat.util.descriptor.web.AbsoluteOrderingRule
                            /**
                             * The <code>RelativeOrderingRule</code> rule used to parse the web.xml
                             */
                            // @ts-ignore
                            readonly relativeOrdering: org.apache.tomcat.util.descriptor.web.RelativeOrderingRule
                            /**
                             * <p>Add the set of Rule instances defined in this RuleSet to the
                             * specified <code>Digester</code> instance, associating them with
                             * our namespace URI (if any).  This method should only be called
                             * by a Digester instance.</p>
                             * @param digester Digester instance to which the new Rule instances
                             *   should be added.
                             */
                            // @ts-ignore
                            public addRuleInstances(digester: org.apache.tomcat.util.digester.Digester): void
                            // @ts-ignore
                            configureNamingRules(digester: org.apache.tomcat.util.digester.Digester): void
                            // @ts-ignore
                            configureInjectionRules(digester: org.apache.tomcat.util.digester.Digester, base: java.lang.String | string): void
                            /**
                             * Reset counter used for validating the web.xml file.
                             */
                            // @ts-ignore
                            public recycle(): void
                        }
                    }
                }
            }
        }
    }
}
