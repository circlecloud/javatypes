declare namespace org {
    namespace apache {
        namespace naming {
            /**
             * Represents a reference address to an EJB.
             * @author Remy Maucherat
             */
            // @ts-ignore
            class EjbRef extends org.apache.naming.AbstractRef {
                /**
                 * EJB Reference.
                 * @param ejbType EJB type
                 * @param home Home interface classname
                 * @param remote Remote interface classname
                 * @param link EJB link
                 */
                // @ts-ignore
                constructor(ejbType: java.lang.String | string, home: java.lang.String | string, remote: java.lang.String | string, link: java.lang.String | string)
                /**
                 * EJB Reference.
                 * @param ejbType EJB type
                 * @param home    Home interface classname
                 * @param remote  Remote interface classname
                 * @param link    EJB link
                 * @param factory The possibly null class name of the object's factory.
                 * @param factoryLocation   The possibly null location from which to load
                 *                           the factory (e.g. URL)
                 */
                // @ts-ignore
                constructor(ejbType: java.lang.String | string, home: java.lang.String | string, remote: java.lang.String | string, link: java.lang.String | string, factory: java.lang.String | string, factoryLocation: java.lang.String | string)
                /**
                 * Default factory for this reference.
                 */
                // @ts-ignore
                public static readonly DEFAULT_FACTORY: java.lang.String | string
                /**
                 * EJB type address type.
                 */
                // @ts-ignore
                public static readonly TYPE: java.lang.String | string
                /**
                 * Remote interface classname address type.
                 */
                // @ts-ignore
                public static readonly REMOTE: java.lang.String | string
                /**
                 * Link address type.
                 */
                // @ts-ignore
                public static readonly LINK: java.lang.String | string
                // @ts-ignore
                getDefaultFactoryClassName(): string
            }
        }
    }
}
