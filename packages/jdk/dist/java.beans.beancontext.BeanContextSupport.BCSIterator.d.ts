declare namespace java {
    namespace beans {
        namespace beancontext {
            namespace BeanContextSupport {
                /**
                 * protected final subclass that encapsulates an iterator but implements
                 * a noop remove() method.
                 */
                // @ts-ignore
                class BCSIterator extends java.lang.Object implements java.util.Iterator<any> {
                    // @ts-ignore
                    public hasNext(): boolean
                    // @ts-ignore
                    public next(): any
                    // @ts-ignore
                    public remove(): void
                }
            }
        }
    }
}
