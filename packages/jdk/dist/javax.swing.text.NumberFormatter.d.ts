declare namespace javax {
    namespace swing {
        namespace text {
            /**
             * <code>NumberFormatter</code> subclasses <code>InternationalFormatter</code>
             * adding special behavior for numbers. Among the specializations are
             * (these are only used if the <code>NumberFormatter</code> does not display
             * invalid numbers, for example, <code>setAllowsInvalid(false)</code>):
             * <ul>
             * <li>Pressing +/- (- is determined from the
             * <code>DecimalFormatSymbols</code> associated with the
             * <code>DecimalFormat</code>) in any field but the exponent
             * field will attempt to change the sign of the number to
             * positive/negative.
             * <li>Pressing +/- (- is determined from the
             * <code>DecimalFormatSymbols</code> associated with the
             * <code>DecimalFormat</code>) in the exponent field will
             * attempt to change the sign of the exponent to positive/negative.
             * </ul>
             * <p>
             * If you are displaying scientific numbers, you may wish to turn on
             * overwrite mode, <code>setOverwriteMode(true)</code>. For example:
             * <pre>
             * DecimalFormat decimalFormat = new DecimalFormat("0.000E0");
             * NumberFormatter textFormatter = new NumberFormatter(decimalFormat);
             * textFormatter.setOverwriteMode(true);
             * textFormatter.setAllowsInvalid(false);
             * </pre>
             * <p>
             * If you are going to allow the user to enter decimal
             * values, you should either force the DecimalFormat to contain at least
             * one decimal (<code>#.0###</code>), or allow the value to be invalid
             * <code>setAllowsInvalid(true)</code>. Otherwise users may not be able to
             * input decimal values.
             * <p>
             * <code>NumberFormatter</code> provides slightly different behavior to
             * <code>stringToValue</code> than that of its superclass. If you have
             * specified a Class for values, {@link #setValueClass}, that is one of
             * of <code>Integer</code>, <code>Long</code>, <code>Float</code>,
             * <code>Double</code>, <code>Byte</code> or <code>Short</code> and
             * the Format's <code>parseObject</code> returns an instance of
             * <code>Number</code>, the corresponding instance of the value class
             * will be created using the constructor appropriate for the primitive
             * type the value class represents. For example:
             * <code>setValueClass(Integer.class)</code> will cause the resulting
             * value to be created via
             * <code>new Integer(((Number)formatter.parseObject(string)).intValue())</code>.
             * This is typically useful if you
             * wish to set a min/max value as the various <code>Number</code>
             * implementations are generally not comparable to each other. This is also
             * useful if for some reason you need a specific <code>Number</code>
             * implementation for your values.
             * <p>
             * <strong>Warning:</strong>
             * Serialized objects of this class will not be compatible with
             * future Swing releases. The current serialization support is
             * appropriate for short term storage or RMI between applications running
             * the same version of Swing.  As of 1.4, support for long term storage
             * of all JavaBeans&trade;
             * has been added to the <code>java.beans</code> package.
             * Please see {@link java.beans.XMLEncoder}.
             * @since 1.4
             */
            // @ts-ignore
            class NumberFormatter extends javax.swing.text.InternationalFormatter {
                /**
                 * Creates a <code>NumberFormatter</code> with the a default
                 * <code>NumberFormat</code> instance obtained from
                 * <code>NumberFormat.getNumberInstance()</code>.
                 */
                // @ts-ignore
                constructor()
                /**
                 * Creates a NumberFormatter with the specified Format instance.
                 * @param format Format used to dictate legal values
                 */
                // @ts-ignore
                constructor(format: java.text.NumberFormat)
                /**
                 * Sets the format that dictates the legal values that can be edited
                 * and displayed.
                 * <p>
                 * If you have used the nullary constructor the value of this property
                 * will be determined for the current locale by way of the
                 * <code>NumberFormat.getNumberInstance()</code> method.
                 * @param format NumberFormat instance used to dictate legal values
                 */
                // @ts-ignore
                public setFormat(format: java.text.Format): void
            }
        }
    }
}
