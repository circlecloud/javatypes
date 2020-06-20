declare namespace javax {
    namespace xml {
        namespace bind {
            namespace annotation {
                namespace adapters {
                    /**
                     * {@link XmlAdapter} to handle <tt>xs:normalizedString</tt>.
                     * <p>
                     * Replaces any tab, CR, and LF by a whitespace character ' ',
                     * as specified in <a href="http://www.w3.org/TR/xmlschema-2/#rf-whiteSpace">the whitespace facet 'replace'</a>
                     * @author Kohsuke Kawaguchi, Martin Grebac
                     * @since JAXB 2.0
                     */
                    // @ts-ignore
                    class NormalizedStringAdapter extends javax.xml.bind.annotation.adapters.XmlAdapter<java.lang.String, java.lang.String> {
                        // @ts-ignore
                        constructor()
                        /**
                         * Replace any tab, CR, and LF by a whitespace character ' ',
                         * as specified in <a href="http://www.w3.org/TR/xmlschema-2/#rf-whiteSpace">the whitespace facet 'replace'</a>
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
                         * Returns true if the specified char is a white space character
                         * but not 0x20.
                         */
                        // @ts-ignore
                        isWhiteSpaceExceptSpace(ch: string): boolean
                    }
                }
            }
        }
    }
}
