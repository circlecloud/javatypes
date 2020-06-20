declare namespace javax {
    namespace swing {
        namespace UIDefaults {
            /**
             * This class enables one to store an entry in the defaults
             * table that isn't constructed until the first time it's
             * looked up with one of the <code>getXXX(key)</code> methods.
             * Lazy values are useful for defaults that are expensive
             * to construct or are seldom retrieved.  The first time
             * a <code>LazyValue</code> is retrieved its "real value" is computed
             * by calling <code>LazyValue.createValue()</code> and the real
             * value is used to replace the <code>LazyValue</code> in the
             * <code>UIDefaults</code>
             * table.  Subsequent lookups for the same key return
             * the real value.  Here's an example of a <code>LazyValue</code>
             * that constructs a <code>Border</code>:
             * <pre>
             * Object borderLazyValue = new UIDefaults.LazyValue() {
             * public Object createValue(UIDefaults table) {
             * return new BorderFactory.createLoweredBevelBorder();
             * }
             * };
             * uiDefaultsTable.put("MyBorder", borderLazyValue);
             * </pre>
             * @see UIDefaults#get
             */
            // @ts-ignore
            interface LazyValue {
                /**
                 * Creates the actual value retrieved from the <code>UIDefaults</code>
                 * table. When an object that implements this interface is
                 * retrieved from the table, this method is used to create
                 * the real value, which is then stored in the table and
                 * returned to the calling method.
                 * @param table  a <code>UIDefaults</code> table
                 * @return the created <code>Object</code>
                 */
                // @ts-ignore
                createValue(table: javax.swing.UIDefaults): java.lang.Object
            }
        }
    }
}
