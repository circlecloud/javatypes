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
                        public setLazyInit(lazyInit: java.lang.String | string): void
                        /**
                         * Return the default lazy-init flag for the document that's currently parsed.
                         */
                        // @ts-ignore
                        public getLazyInit(): string
                        /**
                         * Set the default merge setting for the document that's currently parsed.
                         */
                        // @ts-ignore
                        public setMerge(merge: java.lang.String | string): void
                        /**
                         * Return the default merge setting for the document that's currently parsed.
                         */
                        // @ts-ignore
                        public getMerge(): string
                        /**
                         * Set the default autowire setting for the document that's currently parsed.
                         */
                        // @ts-ignore
                        public setAutowire(autowire: java.lang.String | string): void
                        /**
                         * Return the default autowire setting for the document that's currently parsed.
                         */
                        // @ts-ignore
                        public getAutowire(): string
                        /**
                         * Set the default autowire-candidate pattern for the document that's currently parsed.
                         * Also accepts a comma-separated list of patterns.
                         */
                        // @ts-ignore
                        public setAutowireCandidates(autowireCandidates: java.lang.String | string): void
                        /**
                         * Return the default autowire-candidate pattern for the document that's currently parsed.
                         * May also return a comma-separated list of patterns.
                         */
                        // @ts-ignore
                        public getAutowireCandidates(): string
                        /**
                         * Set the default init-method setting for the document that's currently parsed.
                         */
                        // @ts-ignore
                        public setInitMethod(initMethod: java.lang.String | string): void
                        /**
                         * Return the default init-method setting for the document that's currently parsed.
                         */
                        // @ts-ignore
                        public getInitMethod(): string
                        /**
                         * Set the default destroy-method setting for the document that's currently parsed.
                         */
                        // @ts-ignore
                        public setDestroyMethod(destroyMethod: java.lang.String | string): void
                        /**
                         * Return the default destroy-method setting for the document that's currently parsed.
                         */
                        // @ts-ignore
                        public getDestroyMethod(): string
                        /**
                         * Set the configuration source {@code Object} for this metadata element.
                         * <p>The exact type of the object will depend on the configuration mechanism used.
                         */
                        // @ts-ignore
                        public setSource(source: java.lang.Object | any): void
                        // @ts-ignore
                        public getSource(): any
                    }
                }
            }
        }
    }
}
