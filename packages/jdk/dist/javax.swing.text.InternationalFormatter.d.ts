declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * <code>InternationalFormatter</code> extends <code>DefaultFormatter</code>,
             * using an instance of <code>java.text.Format</code> to handle the
             * conversion to a String, and the conversion from a String.
             * <p>
             * If <code>getAllowsInvalid()</code> is false, this will ask the
             * <code>Format</code> to format the current text on every edit.
             * <p>
             * You can specify a minimum and maximum value by way of the
             * <code>setMinimum</code> and <code>setMaximum</code> methods. In order
             * for this to work the values returned from <code>stringToValue</code> must be
             * comparable to the min/max values by way of the <code>Comparable</code>
             * interface.
             * <p>
             * Be careful how you configure the <code>Format</code> and the
             * <code>InternationalFormatter</code>, as it is possible to create a
             * situation where certain values can not be input. Consider the date
             * format 'M/d/yy', an <code>InternationalFormatter</code> that is always
             * valid (<code>setAllowsInvalid(false)</code>), is in overwrite mode
             * (<code>setOverwriteMode(true)</code>) and the date 7/1/99. In this
             * case the user will not be able to enter a two digit month or day of
             * month. To avoid this, the format should be 'MM/dd/yy'.
             * <p>
             * If <code>InternationalFormatter</code> is configured to only allow valid
             * values (<code>setAllowsInvalid(false)</code>), every valid edit will result
             * in the text of the <code>JFormattedTextField</code> being completely reset
             * from the <code>Format</code>.
             * The cursor position will also be adjusted as literal characters are
             * added/removed from the resulting String.
             * <p>
             * <code>InternationalFormatter</code>'s behavior of
             * <code>stringToValue</code> is  slightly different than that of
             * <code>DefaultTextFormatter</code>, it does the following:
             * <ol>
             * <li><code>parseObject</code> is invoked on the <code>Format</code>
             * specified by <code>setFormat</code>
             * <li>If a Class has been set for the values (<code>setValueClass</code>),
             * supers implementation is invoked to convert the value returned
             * from <code>parseObject</code> to the appropriate class.
             * <li>If a <code>ParseException</code> has not been thrown, and the value
             * is outside the min/max a <code>ParseException</code> is thrown.
             * <li>The value is returned.
             * </ol>
             * <code>InternationalFormatter</code> implements <code>stringToValue</code>
             * in this manner so that you can specify an alternate Class than
             * <code>Format</code> may return.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             * @see java.text.Format
             * @see java.lang.Comparable
             * @since 1.4
             */
            // @ts-ignore
            class InternationalFormatter extends javax.swing.text.DefaultFormatter {
                /**
                 * Creates an <code>InternationalFormatter</code> with no
                 * <code>Format</code> specified.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates an <code>InternationalFormatter</code> with the specified
                 * <code>Format</code> instance.
                 * @param format Format instance used for converting from/to Strings
                 */
                // @ts-ignore
                constructor(format: java.text.Format)
                /**
                 * Sets the format that dictates the legal values that can be edited
                 * and displayed.
                 * @param format <code>Format</code> instance used for converting
                 *  from/to Strings
                 */
                // @ts-ignore
                public setFormat(format: java.text.Format): void
                /**
                 * Returns the format that dictates the legal values that can be edited
                 * and displayed.
                 * @return Format instance used for converting from/to Strings
                 */
                // @ts-ignore
                public getFormat(): java.text.Format
                /**
                 * Sets the minimum permissible value. If the <code>valueClass</code> has
                 * not been specified, and <code>minimum</code> is non null, the
                 * <code>valueClass</code> will be set to that of the class of
                 * <code>minimum</code>.
                 * @param minimum Minimum legal value that can be input
                 * @see #setValueClass
                 */
                // @ts-ignore
                public setMinimum(minimum: java.lang.Comparable<any>): void
                /**
                 * Returns the minimum permissible value.
                 * @return Minimum legal value that can be input
                 */
                // @ts-ignore
                public getMinimum(): java.lang.Comparable<any>
                /**
                 * Sets the maximum permissible value. If the <code>valueClass</code> has
                 * not been specified, and <code>max</code> is non null, the
                 * <code>valueClass</code> will be set to that of the class of
                 * <code>max</code>.
                 * @param max Maximum legal value that can be input
                 * @see #setValueClass
                 */
                // @ts-ignore
                public setMaximum(max: java.lang.Comparable<any>): void
                /**
                 * Returns the maximum permissible value.
                 * @return Maximum legal value that can be input
                 */
                // @ts-ignore
                public getMaximum(): java.lang.Comparable<any>
                /**
                 * Installs the <code>DefaultFormatter</code> onto a particular
                 * <code>JFormattedTextField</code>.
                 * This will invoke <code>valueToString</code> to convert the
                 * current value from the <code>JFormattedTextField</code> to
                 * a String. This will then install the <code>Action</code>s from
                 * <code>getActions</code>, the <code>DocumentFilter</code>
                 * returned from <code>getDocumentFilter</code> and the
                 * <code>NavigationFilter</code> returned from
                 * <code>getNavigationFilter</code> onto the
                 * <code>JFormattedTextField</code>.
                 * <p>
                 * Subclasses will typically only need to override this if they
                 * wish to install additional listeners on the
                 * <code>JFormattedTextField</code>.
                 * <p>
                 * If there is a <code>ParseException</code> in converting the
                 * current value to a String, this will set the text to an empty
                 * String, and mark the <code>JFormattedTextField</code> as being
                 * in an invalid state.
                 * <p>
                 * While this is a public method, this is typically only useful
                 * for subclassers of <code>JFormattedTextField</code>.
                 * <code>JFormattedTextField</code> will invoke this method at
                 * the appropriate times when the value changes, or its internal
                 * state changes.
                 * @param ftf JFormattedTextField to format for, may be null indicating
                 *             uninstall from current JFormattedTextField.
                 */
                // @ts-ignore
                public install(ftf: javax.swing.JFormattedTextField): void
                /**
                 * Returns a String representation of the Object <code>value</code>.
                 * This invokes <code>format</code> on the current <code>Format</code>.
                 * @throws ParseException if there is an error in the conversion
                 * @param value Value to convert
                 * @return String representation of value
                 */
                // @ts-ignore
                public valueToString(value: java.lang.Object | any): string
                /**
                 * Returns the <code>Object</code> representation of the
                 * <code>String</code> <code>text</code>.
                 * @param text <code>String</code> to convert
                 * @return <code>Object</code> representation of text
                 * @throws ParseException if there is an error in the conversion
                 */
                // @ts-ignore
                public stringToValue(text: java.lang.String | string): any
                /**
                 * Returns the <code>Format.Field</code> constants associated with
                 * the text at <code>offset</code>. If <code>offset</code> is not
                 * a valid location into the current text, this will return an
                 * empty array.
                 * @param offset offset into text to be examined
                 * @return Format.Field constants associated with the text at the
                 *          given position.
                 */
                // @ts-ignore
                public getFields(offset: number /*int*/): java.text.Format.Field[]
                /**
                 * Creates a copy of the DefaultFormatter.
                 * @return copy of the DefaultFormatter
                 */
                // @ts-ignore
                public clone(): any
                /**
                 * If <code>getSupportsIncrement</code> returns true, this returns
                 * two Actions suitable for incrementing/decrementing the value.
                 */
                // @ts-ignore
                getActions(): javax.swing.Action[]
            }
        }
    }
}
