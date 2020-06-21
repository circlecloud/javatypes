declare namespace javax {
    namespace swing {
        namespace UIDefaults {
            /**
             * This class provides an implementation of <code>LazyValue</code>
             * which can be
             * used to delay loading of the Class for the instance to be created.
             * It also avoids creation of an anonymous inner class for the
             * <code>LazyValue</code>
             * subclass.  Both of these improve performance at the time that a
             * a Look and Feel is loaded, at the cost of a slight performance
             * reduction the first time <code>createValue</code> is called
             * (since Reflection APIs are used).
             * @since 1.3
             */
            // @ts-ignore
            class ProxyLazyValue extends java.lang.Object implements javax.swing.UIDefaults.LazyValue {
                /**
                 * Creates a <code>LazyValue</code> which will construct an instance
                 * when asked.
                 * @param c    a <code>String</code> specifying the classname
                 *              of the instance to be created on demand
                 */
                // @ts-ignore
                constructor(c: java.lang.String | string)
                /**
                 * Creates a <code>LazyValue</code> which will construct an instance
                 * when asked.
                 * @param c    a <code>String</code> specifying the classname of
                 *               the class
                 *               containing a static method to be called for
                 *               instance creation
                 * @param m    a <code>String</code> specifying the static
                 *               method to be called on class c
                 */
                // @ts-ignore
                constructor(c: java.lang.String | string, m: java.lang.String | string)
                /**
                 * Creates a <code>LazyValue</code> which will construct an instance
                 * when asked.
                 * @param c    a <code>String</code> specifying the classname
                 *               of the instance to be created on demand
                 * @param o    an array of <code>Objects</code> to be passed as
                 *               paramaters to the constructor in class c
                 */
                // @ts-ignore
                constructor(c: java.lang.String | string, o: java.lang.Object[] | any[])
                /**
                 * Creates a <code>LazyValue</code> which will construct an instance
                 * when asked.
                 * @param c    a <code>String</code> specifying the classname
                 *               of the class
                 *               containing a static method to be called for
                 *               instance creation.
                 * @param m    a <code>String</code> specifying the static method
                 *               to be called on class c
                 * @param o    an array of <code>Objects</code> to be passed as
                 *               paramaters to the static method in class c
                 */
                // @ts-ignore
                constructor(c: java.lang.String | string, m: java.lang.String | string, o: java.lang.Object[] | any[])
                /**
                 * Creates the value retrieved from the <code>UIDefaults</code> table.
                 * The object is created each time it is accessed.
                 * @param table  a <code>UIDefaults</code> table
                 * @return the created <code>Object</code>
                 */
                // @ts-ignore
                public createValue(table: javax.swing.UIDefaults): any
            }
        }
    }
}
