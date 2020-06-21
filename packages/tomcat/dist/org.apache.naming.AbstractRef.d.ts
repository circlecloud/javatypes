declare namespace org {
    namespace apache {
        namespace naming {
            // @ts-ignore
            abstract class AbstractRef extends javax.naming.Reference {
                // @ts-ignore
                constructor(className: java.lang.String | string)
                // @ts-ignore
                constructor(className: java.lang.String | string, factory: java.lang.String | string, factoryLocation: java.lang.String | string)
                /**
                 * Retrieves the class name of the factory of the object to which this
                 * reference refers.
                 */
                // @ts-ignore
                public getFactoryClassName(): string
                // @ts-ignore
                abstract getDefaultFactoryClassName(): string
                /**
                 * Return a String rendering of this object.
                 */
                // @ts-ignore
                public toString(): string
            }
        }
    }
}
