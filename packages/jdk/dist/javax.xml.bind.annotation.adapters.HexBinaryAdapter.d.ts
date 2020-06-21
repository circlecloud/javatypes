declare namespace javax {
    namespace xml {
        namespace bind {
            namespace annotation {
                namespace adapters {
                    /**
                     * {@link XmlAdapter} for <tt>xs:hexBinary</tt>.
                     * <p>
                     * This {@link XmlAdapter} binds <tt>byte[]</tt> to the hexBinary representation in XML.
                     * @author Kohsuke Kawaguchi
                     * @since JAXB 2.0
                     */
                    // @ts-ignore
                    class HexBinaryAdapter extends javax.xml.bind.annotation.adapters.XmlAdapter<java.lang.String | string, number /*byte*/[]> {
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        public unmarshal(s: java.lang.String | string): number /*byte*/[]
                        // @ts-ignore
                        public marshal(bytes: number /*byte*/[]): string
                    }
                }
            }
        }
    }
}
