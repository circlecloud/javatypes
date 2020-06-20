declare namespace javax {
    namespace sound {
        namespace sampled {
            /**
             * A <code>FloatControl</code> object provides control over a range of
             * floating-point values.  Float controls are often
             * represented in graphical user interfaces by continuously
             * adjustable objects such as sliders or rotary knobs.  Concrete subclasses
             * of <code>FloatControl</code> implement controls, such as gain and pan, that
             * affect a line's audio signal in some way that an application can manipulate.
             * The <code>{@link FloatControl.Type}</code>
             * inner class provides static instances of types that are used to
             * identify some common kinds of float control.
             * <p>
             * The <code>FloatControl</code> abstract class provides methods to set and get
             * the control's current floating-point value.  Other methods obtain the possible
             * range of values and the control's resolution (the smallest increment between
             * returned values).  Some float controls allow ramping to a
             * new value over a specified period of time.  <code>FloatControl</code> also
             * includes methods that return string labels for the minimum, maximum, and midpoint
             * positions of the control.
             * @see Line#getControls
             * @see Line#isControlSupported
             * @author David Rivas
             * @author Kara Kytle
             * @since 1.3
             */
            // @ts-ignore
            class FloatControl extends javax.sound.sampled.Control {
                /**
                 * Constructs a new float control object with the given parameters
                 * @param type the kind of control represented by this float control object
                 * @param minimum the smallest value permitted for the control
                 * @param maximum the largest value permitted for the control
                 * @param precision the resolution or granularity of the control.
                 *  This is the size of the increment between discrete valid values.
                 * @param updatePeriod the smallest time interval, in microseconds, over which the control
                 *  can change from one discrete value to the next during a {#link #shift(float,float,int) shift}
                 * @param initialValue the value that the control starts with when constructed
                 * @param units the label for the units in which the control's values are expressed,
                 *  such as "dB" or "frames per second"
                 * @param minLabel the label for the minimum value, such as "Left" or "Off"
                 * @param midLabel the label for the midpoint value, such as "Center" or "Default"
                 * @param maxLabel the label for the maximum value, such as "Right" or "Full"
                 * @throws IllegalArgumentException if {#code minimum} is greater
                 *      than {@code maximum} or {@code initialValue} does not fall
                 *      within the allowable range
                 */
                // @ts-ignore
                constructor(type: javax.sound.sampled.FloatControl.Type, minimum: number /*float*/, maximum: number /*float*/, precision: number /*float*/, updatePeriod: number /*int*/, initialValue: number /*float*/, units: string, minLabel: string, midLabel: string, maxLabel: string)
                /**
                 * Constructs a new float control object with the given parameters.
                 * The labels for the minimum, maximum, and mid-point values are set
                 * to zero-length strings.
                 * @param type the kind of control represented by this float control object
                 * @param minimum the smallest value permitted for the control
                 * @param maximum the largest value permitted for the control
                 * @param precision the resolution or granularity of the control.
                 *  This is the size of the increment between discrete valid values.
                 * @param updatePeriod the smallest time interval, in microseconds, over which the control
                 *  can change from one discrete value to the next during a {#link #shift(float,float,int) shift}
                 * @param initialValue the value that the control starts with when constructed
                 * @param units the label for the units in which the control's values are expressed,
                 *  such as "dB" or "frames per second"
                 * @throws IllegalArgumentException if {#code minimum} is greater
                 *      than {@code maximum} or {@code initialValue} does not fall
                 *      within the allowable range
                 */
                // @ts-ignore
                constructor(type: javax.sound.sampled.FloatControl.Type, minimum: number /*float*/, maximum: number /*float*/, precision: number /*float*/, updatePeriod: number /*int*/, initialValue: number /*float*/, units: string)
                /**
                 * Sets the current value for the control.  The default implementation
                 * simply sets the value as indicated.  If the value indicated is greater
                 * than the maximum value, or smaller than the minimum value, an
                 * IllegalArgumentException is thrown.
                 * Some controls require that their line be open before they can be affected
                 * by setting a value.
                 * @param newValue desired new value
                 * @throws IllegalArgumentException if the value indicated does not fall
                 *  within the allowable range
                 */
                // @ts-ignore
                setValue(newValue: number /*float*/): void
                /**
                 * Obtains this control's current value.
                 * @return the current value
                 */
                // @ts-ignore
                getValue(): float
                /**
                 * Obtains the maximum value permitted.
                 * @return the maximum allowable value
                 */
                // @ts-ignore
                getMaximum(): float
                /**
                 * Obtains the minimum value permitted.
                 * @return the minimum allowable value
                 */
                // @ts-ignore
                getMinimum(): float
                /**
                 * Obtains the label for the units in which the control's values are expressed,
                 * such as "dB" or "frames per second."
                 * @return the units label, or a zero-length string if no label
                 */
                // @ts-ignore
                getUnits(): java.lang.String
                /**
                 * Obtains the label for the minimum value, such as "Left" or "Off."
                 * @return the minimum value label, or a zero-length string if no label      * has been set
                 */
                // @ts-ignore
                getMinLabel(): java.lang.String
                /**
                 * Obtains the label for the mid-point value, such as "Center" or "Default."
                 * @return the mid-point value label, or a zero-length string if no label    * has been set
                 */
                // @ts-ignore
                getMidLabel(): java.lang.String
                /**
                 * Obtains the label for the maximum value, such as "Right" or "Full."
                 * @return the maximum value label, or a zero-length string if no label      * has been set
                 */
                // @ts-ignore
                getMaxLabel(): java.lang.String
                /**
                 * Obtains the resolution or granularity of the control, in the units
                 * that the control measures.
                 * The precision is the size of the increment between discrete valid values
                 * for this control, over the set of supported floating-point values.
                 * @return the control's precision
                 */
                // @ts-ignore
                getPrecision(): float
                /**
                 * Obtains the smallest time interval, in microseconds, over which the control's value can
                 * change during a shift.  The update period is the inverse of the frequency with which
                 * the control updates its value during a shift.  If the implementation does not support value shifting over
                 * time, it should set the control's value to the final value immediately
                 * and return -1 from this method.
                 * @return update period in microseconds, or -1 if shifting over time is unsupported
                 * @see #shift
                 */
                // @ts-ignore
                getUpdatePeriod(): int
                /**
                 * Changes the control value from the initial value to the final
                 * value linearly over the specified time period, specified in microseconds.
                 * This method returns without blocking; it does not wait for the shift
                 * to complete.  An implementation should complete the operation within the time
                 * specified.  The default implementation simply changes the value
                 * to the final value immediately.
                 * @param from initial value at the beginning of the shift
                 * @param to final value after the shift
                 * @param microseconds maximum duration of the shift in microseconds
                 * @throws IllegalArgumentException if either {#code from} or {@code to}
                 *      value does not fall within the allowable range
                 * @see #getUpdatePeriod
                 */
                // @ts-ignore
                shift(from: number /*float*/, to: number /*float*/, microseconds: number /*int*/): void
                /**
                 * Provides a string representation of the control
                 * @return a string description
                 */
                // @ts-ignore
                toString(): java.lang.String
            }
        }
    }
}
