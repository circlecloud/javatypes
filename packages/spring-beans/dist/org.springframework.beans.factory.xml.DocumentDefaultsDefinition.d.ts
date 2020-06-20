declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace xml {
                    /**
                     * Simple JavaBean that holds the defaults specified at the {@code <beans>}
                     * level in a standard Spring XML bean definition document:
                     * {@code default-lazy-init}, {@code default-autowire}, etc.
                     * @author Juergen Hoeller
                     * @since 2.0.2
                     */
                    // @ts-ignore
                    class DocumentDefaultsDefinition extends java.lang.Object implements org.springframework.beans.factory.parsing.DefaultsDefinition {
                        // @ts-ignore
                        constructor()
                        /**
                         * Set the default lazy-init flag for the document that's currently parsed.
                         */
                        // @ts-ignore
                        setLazyInit(lazyInit: string): void
                        /**
                         * Return the default lazy-init flag for the document that's currently parsed.
                         */
                        // @ts-ignore
                        getLazyInit(): java.lang.String
                        /**
                         * Set the default merge setting for the document that's currently parsed.
                         */
                        // @ts-ignore
                        setMerge(merge: string): void
                        /**
                         * Return the default merge setting for the document that's currently parsed.
                         */
                        // @ts-ignore
                        getMerge(): java.lang.String
                        /**
                         * Set the default autowire setting for the document that's currently parsed.
                         */
                        // @ts-ignore
                        setAutowire(autowire: string): void
                        /**
                         * Return the default autowire setting for the document that's currently parsed.
                         */
                        // @ts-ignore
                        getAutowire(): java.lang.String
                        /**
                         * Set the default autowire-candidate pattern for the document that's currently parsed.
                         * Also accepts a comma-separated list of patterns.
                         */
                        // @ts-ignore
                        setAutowireCandidates(autowireCandidates: string): void
                        /**
                         * Return the default autowire-candidate pattern for the document that's currently parsed.
                         * May also return a comma-separated list of patterns.
                         */
                        // @ts-ignore
                        getAutowireCandidates(): java.lang.String
                        /**
                         * Set the default init-method setting for the document that's currently parsed.
                         */
                        // @ts-ignore
                        setInitMethod(initMethod: string): void
                        /**
                         * Return the default init-method setting for the document that's currently parsed.
                         */
                        // @ts-ignore
                        getInitMethod(): java.lang.String
                        /**
                         * Set the default destroy-method setting for the document that's currently parsed.
                         */
                        // @ts-ignore
                        setDestroyMethod(destroyMethod: string): void
                        /**
                         * Return the default destroy-method setting for the document that's currently parsed.
                         */
                        // @ts-ignore
                        getDestroyMethod(): java.lang.String
                        /**
                         * Set the configuration source {@code Object} for this metadata element.
                         * <p>The exact type of the object will depend on the configuration mechanism used.
                         */
                        // @ts-ignore
                        setSource(source: any): void
                        // @ts-ignore
                        getSource(): java.lang.Object
                    }
                }
            }
        }
    }
}
