declare namespace javax {
    namespace xml {
        namespace bind {
            namespace annotation {
                namespace adapters {
                    /**
                     * <p>
                     * A container for multiple @{@link XmlJavaTypeAdapter} annotations.
                     * <p> Multiple annotations of the same type are not allowed on a program
                     * element. This annotation therefore serves as a container annotation
                     * for multiple &#64;XmlJavaTypeAdapter as follows:
                     * <pre>
                     * &#64;XmlJavaTypeAdapters ({ @XmlJavaTypeAdapter(...),@XmlJavaTypeAdapter(...) })
                     * </pre>
                     * <p>The <tt>@XmlJavaTypeAdapters</tt> annnotation is useful for
                     * defining {@link XmlJavaTypeAdapter} annotations for different types
                     * at the package level.
                     * <p>See "Package Specification" in javax.xml.bind.package javadoc for
                     * additional common information.</p>
                     * @author <ul><li>Sekhar Vajjhala, Sun Microsystems, Inc.</li></ul>
                     * @see XmlJavaTypeAdapter
                     * @since JAXB2.0
                     */
                    // @ts-ignore
                    abstract class XmlJavaTypeAdapters implements java.lang.annotation.Annotation {
                    }
                }
            }
        }
    }
}
