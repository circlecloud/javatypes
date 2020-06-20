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
                    class CollapsedStringAdapter extends javax.xml.bind.annotation.adapters.XmlAdapter<java.lang.String, java.lang.String> {
                        // @ts-ignore
                        constructor()
                        /**
                         * Removes leading and trailing whitespaces of the string
                         * given as the parameter, then truncate any
                         * sequnce of tab, CR, LF, and SP by a single whitespace character ' '.
                         */
                        // @ts-ignore
                        unmarshal(text: string): java.lang.String
                        /**
                         * No-op.
                         * Just return the same string given as the parameter.
                         */
                        // @ts-ignore
                        marshal(s: string): java.lang.String
                        /**
                         * returns true if the specified char is a white space character.
                         */
                        // @ts-ignore
                        isWhiteSpace(ch: string): boolean
                    }
                }
            }
        }
    }
}
