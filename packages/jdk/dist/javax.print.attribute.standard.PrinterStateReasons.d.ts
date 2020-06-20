declare namespace javax {
    namespace print {
        namespace attribute {
            namespace standard {
                /**
                 * Class PrinterStateReasons is a printing attribute class, a set of
                 * enumeration values, that provides additional information about the
                 * printer's current state, i.e., information that augments the value of the
                 * printer's {@link PrinterState PrinterState} attribute.
                 * <P>
                 * Instances of {@link PrinterStateReason PrinterStateReason} do not appear in
                 * a Print Service's attribute set directly. Rather, a PrinterStateReasons
                 * attribute appears in the Print Service's attribute set. The
                 * PrinterStateReasons attribute contains zero, one, or more than one {@link
                 * PrinterStateReason PrinterStateReason} objects which pertain to the Print
                 * Service's status, and each {@link PrinterStateReason PrinterStateReason}
                 * object is associated with a {@link Severity Severity} level of REPORT
                 * (least severe), WARNING, or ERROR (most severe). The printer adds a {@link
                 * PrinterStateReason PrinterStateReason} object to the Print Service's
                 * PrinterStateReasons attribute when the corresponding condition becomes true
                 * of the printer, and the printer removes the {@link PrinterStateReason
                 * PrinterStateReason} object again when the corresponding condition becomes
                 * false, regardless of whether the Print Service's overall
                 * {@link PrinterState PrinterState} also changed.
                 * <P>
                 * Class PrinterStateReasons inherits its implementation from class {@link
                 * java.util.HashMap java.util.HashMap}. Each entry in the map consists of a
                 * {@link PrinterStateReason PrinterStateReason} object (key) mapping to a
                 * {@link Severity Severity} object (value):
                 * <P>
                 * Unlike most printing attributes which are immutable once constructed, class
                 * PrinterStateReasons is designed to be mutable; you can add {@link
                 * PrinterStateReason PrinterStateReason} objects to an existing
                 * PrinterStateReasons object and remove them again. However, like class
                 * {@link java.util.HashMap java.util.HashMap}, class PrinterStateReasons is
                 * not multiple thread safe. If a PrinterStateReasons object will be used by
                 * multiple threads, be sure to synchronize its operations (e.g., using a
                 * synchronized map view obtained from class {@link java.util.Collections
                 * java.util.Collections}).
                 * <P>
                 * <B>IPP Compatibility:</B> The string values returned by each individual
                 * {@link PrinterStateReason PrinterStateReason} object's and the associated
                 * {@link Severity Severity} object's <CODE>toString()</CODE> methods,
                 * concatenated
                 * together with a hyphen (<CODE>"-"</CODE>) in between, gives the IPP keyword
                 * value. The category name returned by <CODE>getName()</CODE> gives the IPP
                 * attribute name.
                 * <P>
                 * @author Alan Kaminsky
                 */
                // @ts-ignore
                class PrinterStateReasons extends java.util.HashMap<javax.print.attribute.standard.PrinterStateReason, javax.print.attribute.standard.Severity> implements javax.print.attribute.PrintServiceAttribute {
                    /**
                     * Construct a new, empty printer state reasons attribute; the underlying
                     * hash map has the default initial capacity and load factor.
                     */
                    // @ts-ignore
                    constructor()
                    /**
                     * super a new, empty printer state reasons attribute; the underlying
                     * hash map has the given initial capacity and the default load factor.
                     * @param initialCapacity  Initial capacity.
                     * @throws IllegalArgumentException if the initial capacity is less
                     *      than zero.
                     */
                    // @ts-ignore
                    constructor(initialCapacity: number /*int*/)
                    /**
                     * Construct a new, empty printer state reasons attribute; the underlying
                     * hash map has the given initial capacity and load factor.
                     * @param initialCapacity  Initial capacity.
                     * @param loadFactor       Load factor.
                     * @throws IllegalArgumentException if the initial capacity is less
                     *      than zero.
                     */
                    // @ts-ignore
                    constructor(initialCapacity: number /*int*/, loadFactor: number /*float*/)
                    /**
                     * Construct a new printer state reasons attribute that contains the same
                     * {@link PrinterStateReason PrinterStateReason}-to-{@link Severity
                     * Severity} mappings as the given map. The underlying hash map's initial
                     * capacity and load factor are as specified in the superclass constructor
                     * {@link java.util.HashMap#HashMap(java.util.Map)
                     * HashMap(Map)}.
                     * @param map  Map to copy.
                     * @exception NullPointerException
                     *      (unchecked exception) Thrown if <CODE>map</CODE> is null or if any
                     *      key or value in <CODE>map</CODE> is null.
                     * @throws ClassCastException
                     *      (unchecked exception) Thrown if any key in <CODE>map</CODE> is not
                     *    an instance of class {#link PrinterStateReason PrinterStateReason} or
                     *      if any value in <CODE>map</CODE> is not an instance of class
                     *      {@link Severity Severity}.
                     */
                    // @ts-ignore
                    constructor(map: java.util.Map<javax.print.attribute.standard.PrinterStateReason, javax.print.attribute.standard.Severity>)
                    /**
                     * Adds the given printer state reason to this printer state reasons
                     * attribute, associating it with the given severity level. If this
                     * printer state reasons attribute previously contained a mapping for the
                     * given printer state reason, the old value is replaced.
                     * @param reason    Printer state reason. This must be an instance of
                     *                     class {#link PrinterStateReason PrinterStateReason}.
                     * @param severity  Severity of the printer state reason. This must be
                     *                       an instance of class {#link Severity Severity}.
                     * @return Previous severity associated with the given printer state
                     *           reason, or <tt>null</tt> if the given printer state reason was
                     *           not present.
                     * @throws NullPointerException
                     *      (unchecked exception) Thrown if <CODE>reason</CODE> is null or
                     *      <CODE>severity</CODE> is null.
                     * @throws ClassCastException
                     *      (unchecked exception) Thrown if <CODE>reason</CODE> is not an
                     *    instance of class {#link PrinterStateReason PrinterStateReason} or if
                     *      <CODE>severity</CODE> is not an instance of class {@link Severity
                     *      Severity}.
                     * @since 1.5
                     */
                    // @ts-ignore
                    put(reason: javax.print.attribute.standard.PrinterStateReason, severity: javax.print.attribute.standard.Severity): javax.print.attribute.standard.Severity
                    /**
                     * Get the printing attribute class which is to be used as the "category"
                     * for this printing attribute value.
                     * <P>
                     * For class PrinterStateReasons, the
                     * category is class PrinterStateReasons itself.
                     * @return Printing attribute class (category), an instance of class
                     *           {#link java.lang.Class java.lang.Class}.
                     */
                    // @ts-ignore
                    getCategory(): java.lang.Class<? extends javax.print.attribute.Attribute>
                    /**
                     * Get the name of the category of which this attribute value is an
                     * instance.
                     * <P>
                     * For class PrinterStateReasons, the
                     * category name is <CODE>"printer-state-reasons"</CODE>.
                     * @return Attribute category name.
                     */
                    // @ts-ignore
                    getName(): java.lang.String
                    /**
                     * Obtain an unmodifiable set view of the individual printer state reason
                     * attributes at the given severity level in this PrinterStateReasons
                     * attribute. Each element in the set view is a {@link PrinterStateReason
                     * PrinterStateReason} object. The only elements in the set view are the
                     * {@link PrinterStateReason PrinterStateReason} objects that map to the
                     * given severity value. The set view is backed by this
                     * PrinterStateReasons attribute, so changes to this PrinterStateReasons
                     * attribute are reflected  in the set view.
                     * The set view does not support element insertion or
                     * removal. The set view's iterator does not support element removal.
                     * @param severity  Severity level.
                     * @return Set view of the individual {#link PrinterStateReason
                     *           PrinterStateReason} attributes at the given {@link Severity
                     *           Severity} level.
                     * @exception NullPointerException
                     *      (unchecked exception) Thrown if <CODE>severity</CODE> is null.
                     */
                    // @ts-ignore
                    printerStateReasonSet(severity: javax.print.attribute.standard.Severity): java.util.Set<javax.print.attribute.standard.PrinterStateReason>
                }
            }
        }
    }
}
