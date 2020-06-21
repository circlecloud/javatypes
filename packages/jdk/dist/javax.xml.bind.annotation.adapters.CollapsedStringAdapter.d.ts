declare namespace javax {
    namespace xml {
        namespace bind {
            namespace annotation {
                namespace adapters {
                    /**
                     * Built-in {@link XmlAdapter} to handle <tt>xs:token</tt> and its derived types.
                     * <p>
                     * This adapter removes leading and trailing whitespaces, then truncate any
                     * sequnce of tab, CR, LF, and SP by a single whitespace character ' '.
                     * @author Kohsuke Kawaguchi
                     * @since JAXB 2.0
                     */
                    // @ts-ignore
                    class CollapsedStringAdapter extends javax.xml.bind.annotation.adapters.XmlAdapter<java.lang.String | string, java.lang.String | string> {
                        // @ts-ignore
                        constructor()
                        /**
                         * Removes leading and trailing whitespaces of the string
                         * given as the parameter, then truncate any
                         * sequnce of tab, CR, LF, and SP by a single whitespace character ' '.
                         */
                        // @ts-ignore
                        public unmarshal(text: java.lang.String | string): string
                        /**
                         * No-op.
                         * Just return the same string given as the parameter.
                         */
                        // @ts-ignore
                        public marshal(s: java.lang.String | string): string
                        /**
                         * returns true if the specified char is a white space character.
                         */
                        // @ts-ignore
                        static isWhiteSpace(ch: string): boolean
                    }
                }
            }
        }
    }
}
