declare namespace org {
    namespace apache {
        namespace naming {
            /**
             * Represents a reference address to a resource.
             * @author Remy Maucherat
             */
            // @ts-ignore
            class ResourceRef extends org.apache.naming.AbstractRef {
                /**
                 * Resource Reference.
                 * @param resourceClass Resource class
                 * @param description Description of the resource
                 * @param scope Resource scope
                 * @param auth Resource authentication
                 * @param singleton Is this resource a singleton (every lookup should return
                 *                   the same instance rather than a new instance)?
                 */
                // @ts-ignore
                constructor(resourceClass: java.lang.String | string, description: java.lang.String | string, scope: java.lang.String | string, auth: java.lang.String | string, singleton: boolean)
                /**
                 * Resource Reference.
                 * @param resourceClass Resource class
                 * @param description Description of the resource
                 * @param scope Resource scope
                 * @param auth Resource authentication
                 * @param singleton Is this resource a singleton (every lookup should return
                 *                   the same instance rather than a new instance)?
                 * @param factory The possibly null class name of the object's factory.
                 * @param factoryLocation The possibly null location from which to load the
                 *                         factory (e.g. URL)
                 */
                // @ts-ignore
                constructor(resourceClass: java.lang.String | string, description: java.lang.String | string, scope: java.lang.String | string, auth: java.lang.String | string, singleton: boolean, factory: java.lang.String | string, factoryLocation: java.lang.String | string)
                /**
                 * Default factory for this reference.
                 */
                // @ts-ignore
                public static readonly DEFAULT_FACTORY: java.lang.String | string
                /**
                 * Description address type.
                 */
                // @ts-ignore
                public static readonly DESCRIPTION: java.lang.String | string
                /**
                 * Scope address type.
                 */
                // @ts-ignore
                public static readonly SCOPE: java.lang.String | string
                /**
                 * Auth address type.
                 */
                // @ts-ignore
                public static readonly AUTH: java.lang.String | string
                /**
                 * Is this resource a singleton
                 */
                // @ts-ignore
                public static readonly SINGLETON: java.lang.String | string
                // @ts-ignore
                getDefaultFactoryClassName(): string
            }
        }
    }
}
