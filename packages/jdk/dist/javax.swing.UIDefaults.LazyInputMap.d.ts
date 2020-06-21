declare namespace javax {
    namespace swing {
        namespace UIDefaults {
            /**
             * <code>LazyInputMap</code> will create a <code>InputMap</code>
             * in its <code>createValue</code>
             * method. The bindings are passed in in the constructor.
             * The bindings are an array with
             * the even number entries being string <code>KeyStrokes</code>
             * (eg "alt SPACE") and
             * the odd number entries being the value to use in the
             * <code>InputMap</code> (and the key in the <code>ActionMap</code>).
             * @since 1.3
             */
            // @ts-ignore
            class LazyInputMap extends java.lang.Object implements javax.swing.UIDefaults.LazyValue {
                // @ts-ignore
                constructor(bindings: java.lang.Object[] | any[])
                /**
                 * Creates an <code>InputMap</code> with the bindings that are
                 * passed in.
                 * @param table a <code>UIDefaults</code> table
                 * @return the <code>InputMap</code>
                 */
                // @ts-ignore
                public createValue(table: javax.swing.UIDefaults): any
            }
        }
    }
}
