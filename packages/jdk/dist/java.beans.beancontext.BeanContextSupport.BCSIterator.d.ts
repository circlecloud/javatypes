declare namespace java {
    namespace beans {
        namespace beancontext {
            namespace BeanContextSupport {
                /**
                 * protected final subclass that encapsulates an iterator but implements
                 * a noop remove() method.
                 */
                // @ts-ignore
                class BCSIterator extends java.lang.Object implements java.util.Iterator {
                    // @ts-ignore
                    hasNext(): boolean
                    // @ts-ignore
                    next(): java.lang.Object
                    // @ts-ignore
                    remove(): void
                }
            }
        }
    }
}
