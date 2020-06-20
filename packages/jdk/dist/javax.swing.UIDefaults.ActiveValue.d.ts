declare namespace javax {
    namespace swing {
        namespace UIDefaults {
            /**
             * This class enables one to store an entry in the defaults
             * table that's constructed each time it's looked up with one of
             * the <code>getXXX(key)</code> methods. Here's an example of
             * an <code>ActiveValue</code> that constructs a
             * <code>DefaultListCellRenderer</code>:
             * <pre>
             * Object cellRendererActiveValue = new UIDefaults.ActiveValue() {
             * public Object createValue(UIDefaults table) {
             * return new DefaultListCellRenderer();
             * }
             * };
             * uiDefaultsTable.put("MyRenderer", cellRendererActiveValue);
             * </pre>
             * @see UIDefaults#get
             */
            // @ts-ignore
            interface ActiveValue {
                /**
                 * Creates the value retrieved from the <code>UIDefaults</code> table.
                 * The object is created each time it is accessed.
                 * @param table  a <code>UIDefaults</code> table
                 * @return the created <code>Object</code>
                 */
                // @ts-ignore
                createValue(table: javax.swing.UIDefaults): java.lang.Object
            }
        }
    }
}
