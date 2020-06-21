declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace parsing {
                    /**
                     * {@link ParseState} entry representing a JavaBean property.
                     * @author Rob Harrop
                     * @since 2.0
                     */
                    // @ts-ignore
                    class PropertyEntry extends java.lang.Object implements org.springframework.beans.factory.parsing.ParseState.Entry {
                        /**
                         * Creates a new instance of the {@link PropertyEntry} class.
                         * @param name the name of the JavaBean property represented by this instance
                         * @throws IllegalArgumentException if the supplied {#code name} is {@code null}
                         *  or consists wholly of whitespace
                         */
                        // @ts-ignore
                        constructor(name: java.lang.String | string)
                        // @ts-ignore
                        public toString(): string
                    }
                }
            }
        }
    }
}
