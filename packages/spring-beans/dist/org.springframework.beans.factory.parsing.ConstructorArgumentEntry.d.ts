declare namespace org {
    namespace springframework {
        namespace beans {
            namespace factory {
                namespace parsing {
                    /**
                     * {@link ParseState} entry representing a (possibly indexed)
                     * constructor argument.
                     * @author Rob Harrop
                     * @author Juergen Hoeller
                     * @since 2.0
                     */
                    // @ts-ignore
                    class ConstructorArgumentEntry extends java.lang.Object implements org.springframework.beans.factory.parsing.ParseState.Entry {
                        /**
                         * Creates a new instance of the {@link ConstructorArgumentEntry} class
                         * representing a constructor argument with a (currently) unknown index.
                         */
                        // @ts-ignore
                        constructor()
                        /**
                         * Creates a new instance of the {@link ConstructorArgumentEntry} class
                         * representing a constructor argument at the supplied {@code index}.
                         * @param index the index of the constructor argument
                         * @throws IllegalArgumentException if the supplied {#code index}
                         *  is less than zero
                         */
                        // @ts-ignore
                        constructor(index: number /*int*/)
                        // @ts-ignore
                        toString(): java.lang.String
                    }
                }
            }
        }
    }
}
