declare namespace javax {
    namespace xml {
        namespace bind {
            namespace annotation {
                /**
                 * Used by XmlAccessorOrder to control the ordering of properties and
                 * fields in a JAXB bound class.
                 * @author Sekhar Vajjhala, Sun Microsystems, Inc.
                 * @since JAXB2.0
                 * @see XmlAccessorOrder
                 */
                // @ts-ignore
                class XmlAccessOrder extends java.lang.Enum<javax.xml.bind.annotation.XmlAccessOrder> {
                    /**
                     * The ordering of fields and properties in a class is undefined.
                     */
                    // @ts-ignore
                    readonly UNDEFINED: javax.xml.bind.annotation.XmlAccessOrder
                    /**
                     * The ordering of fields and properties in a class is in
                     * alphabetical order as determined by the
                     * method java.lang.String.compareTo(String anotherString).
                     */
                    // @ts-ignore
                    readonly ALPHABETICAL: javax.xml.bind.annotation.XmlAccessOrder
                    // @ts-ignore
                    values(): javax.xml.bind.annotation.XmlAccessOrder[]
                    // @ts-ignore
                    valueOf(name: java.lang.String | string): javax.xml.bind.annotation.XmlAccessOrder
                }
            }
        }
    }
}
