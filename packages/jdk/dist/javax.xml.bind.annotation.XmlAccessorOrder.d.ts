declare namespace javax {
    namespace xml {
        namespace bind {
            namespace annotation {
                /**
                 * <p> Controls the ordering of fields and properties in a class. </p>
                 * <h3>Usage </h3>
                 * <p> <tt> @XmlAccessorOrder </tt> annotation can be used with the following
                 * program elements:</p>
                 * <ul>
                 * <li> package</li>
                 * <li> a top level class </li>
                 * </ul>
                 * <p> See "Package Specification" in <tt>javax.xml.bind</tt> package javadoc for
                 * additional common information.</p>
                 * <p>The effective {@link XmlAccessOrder} on a class is determined
                 * as follows:
                 * <ul>
                 * <li> If there is a <tt>@XmlAccessorOrder</tt> on a class, then
                 * it is used. </li>
                 * <li> Otherwise, if a <tt>@XmlAccessorOrder </tt> exists on one of
                 * its super classes, then it is inherited (by the virtue of
                 * {@link Inherited})
                 * <li> Otherwise, the <tt>@XmlAccessorOrder</tt> on the package
                 * of the class is used, if it's there.
                 * <li> Otherwise {@link XmlAccessOrder#UNDEFINED}.
                 * </ul>
                 * <p>This annotation can be used with the following annotations:
                 * {@link XmlType}, {@link XmlRootElement}, {@link XmlAccessorType},
                 * {@link XmlSchema}, {@link XmlSchemaType}, {@link XmlSchemaTypes},
                 * , {@link XmlJavaTypeAdapter}. It can also be used with the
                 * following annotations at the package level: {@link XmlJavaTypeAdapter}.
                 * @author Sekhar Vajjhala, Sun Microsystems, Inc.
                 * @since JAXB2.0
                 * @see XmlAccessOrder
                 */
                // @ts-ignore
                class XmlAccessorOrder implements java.lang.annotation.Annotation {
                }
            }
        }
    }
}
