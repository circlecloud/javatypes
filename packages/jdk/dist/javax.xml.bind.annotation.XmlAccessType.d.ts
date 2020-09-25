declare namespace javax {
    namespace xml {
        namespace bind {
            namespace annotation {
                /**
                 * Used by XmlAccessorType to control serialization of fields or
                 * properties.
                 * @author Sekhar Vajjhala, Sun Microsystems, Inc.
                 * @since JAXB2.0
                 * @see XmlAccessorType
                 */
                // @ts-ignore
                class XmlAccessType extends java.lang.Enum<javax.xml.bind.annotation.XmlAccessType> {
                    /**
                     * Every getter/setter pair in a JAXB-bound class will be automatically
                     * bound to XML, unless annotated by {@link XmlTransient}.
                     * Fields are bound to XML only when they are explicitly annotated
                     * by some of the JAXB annotations.
                     */
                    // @ts-ignore
                    public static readonly PROPERTY: javax.xml.bind.annotation.XmlAccessType
                    /**
                     * Every non static, non transient field in a JAXB-bound class will be automatically
                     * bound to XML, unless annotated by {@link XmlTransient}.
                     * Getter/setter pairs are bound to XML only when they are explicitly annotated
                     * by some of the JAXB annotations.
                     */
                    // @ts-ignore
                    public static readonly FIELD: javax.xml.bind.annotation.XmlAccessType
                    /**
                     * Every public getter/setter pair and every public field will be
                     * automatically bound to XML, unless annotated by {@link XmlTransient}.
                     * Fields or getter/setter pairs that are private, protected, or
                     * defaulted to package-only access are bound to XML only when they are
                     * explicitly annotated by the appropriate JAXB annotations.
                     */
                    // @ts-ignore
                    public static readonly PUBLIC_MEMBER: javax.xml.bind.annotation.XmlAccessType
                    /**
                     * None of the fields or properties is bound to XML unless they
                     * are specifically  annotated with some of the JAXB annotations.
                     */
                    // @ts-ignore
                    public static readonly NONE: javax.xml.bind.annotation.XmlAccessType
                    // @ts-ignore
                    public static values(): javax.xml.bind.annotation.XmlAccessType[]
                    // @ts-ignore
                    public static valueOf(name: java.lang.String | string): javax.xml.bind.annotation.XmlAccessType
                }
            }
        }
    }
}
