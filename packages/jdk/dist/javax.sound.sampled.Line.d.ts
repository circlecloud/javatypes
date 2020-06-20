declare namespace javax {
    namespace sound {
        namespace sampled {
            /**
             * The <code>Line</code> interface represents a mono or multi-channel
             * audio feed. A line is an element of the digital audio
             * "pipeline," such as a mixer, an input or output port,
             * or a data path into or out of a mixer.
             * <p>
             * A line can have controls, such as gain, pan, and reverb.
             * The controls themselves are instances of classes that extend the
             * base <code>{@link Control}</code> class.
             * The <code>Line</code> interface provides two accessor methods for
             * obtaining the line's controls: <code>{@link #getControls getControls}</code> returns the
             * entire set, and <code>{@link #getControl getControl}</code> returns a single control of
             * specified type.
             * <p>
             * Lines exist in various states at different times.  When a line opens, it reserves system
             * resources for itself, and when it closes, these resources are freed for
             * other objects or applications. The <code>{@link #isOpen()}</code> method lets
             * you discover whether a line is open or closed.
             * An open line need not be processing data, however.  Such processing is
             * typically initiated by subinterface methods such as
             * <code>{@link SourceDataLine#write SourceDataLine.write}</code> and
             * <code>{@link TargetDataLine#read TargetDataLine.read}</code>.
             * <p>
             * You can register an object to receive notifications whenever the line's
             * state changes.  The object must implement the <code>{@link LineListener}</code>
             * interface, which consists of the single method
             * <code>{@link LineListener#update update}</code>.
             * This method will be invoked when a line opens and closes (and, if it's a
             * {@link DataLine}, when it starts and stops).
             * <p>
             * An object can be registered to listen to multiple lines.  The event it
             * receives in its <code>update</code> method will specify which line created
             * the event, what type of event it was
             * (<code>OPEN</code>, <code>CLOSE</code>, <code>START</code>, or <code>STOP</code>),
             * and how many sample frames the line had processed at the time the event occurred.
             * <p>
             * Certain line operations, such as open and close, can generate security
             * exceptions if invoked by unprivileged code when the line is a shared audio
             * resource.
             * @author Kara Kytle
             * @see LineEvent
             * @since 1.3
             */
            // @ts-ignore
            interface Line extends java.lang.AutoCloseable {
                /**
                 * Obtains the <code>Line.Info</code> object describing this
                 * line.
                 * @return description of the line
                 */
                // @ts-ignore
                getLineInfo(): javax.sound.sampled.Line.Info
                /**
                 * Opens the line, indicating that it should acquire any required
                 * system resources and become operational.
                 * If this operation
                 * succeeds, the line is marked as open, and an <code>OPEN</code> event is dispatched
                 * to the line's listeners.
                 * <p>
                 * Note that some lines, once closed, cannot be reopened.  Attempts
                 * to reopen such a line will always result in an <code>LineUnavailableException</code>.
                 * <p>
                 * Some types of lines have configurable properties that may affect
                 * resource allocation.   For example, a <code>DataLine</code> must
                 * be opened with a particular format and buffer size.  Such lines
                 * should provide a mechanism for configuring these properties, such
                 * as an additional <code>open</code> method or methods which allow
                 * an application to specify the desired settings.
                 * <p>
                 * This method takes no arguments, and opens the line with the current
                 * settings.  For <code>{@link SourceDataLine}</code> and
                 * <code>{@link TargetDataLine}</code> objects, this means that the line is
                 * opened with default settings.  For a <code>{@link Clip}</code>, however,
                 * the buffer size is determined when data is loaded.  Since this method does not
                 * allow the application to specify any data to load, an IllegalArgumentException
                 * is thrown. Therefore, you should instead use one of the <code>open</code> methods
                 * provided in the <code>Clip</code> interface to load data into the <code>Clip</code>.
                 * <p>
                 * For <code>DataLine</code>'s, if the <code>DataLine.Info</code>
                 * object which was used to retrieve the line, specifies at least
                 * one fully qualified audio format, the last one will be used
                 * as the default format.
                 * @throws IllegalArgumentException if this method is called on a Clip instance.
                 * @throws LineUnavailableException if the line cannot be
                 *  opened due to resource restrictions.
                 * @throws SecurityException if the line cannot be
                 *  opened due to security restrictions.
                 * @see #close
                 * @see #isOpen
                 * @see LineEvent
                 * @see DataLine
                 * @see Clip#open(AudioFormat, byte[], int, int)
                 * @see Clip#open(AudioInputStream)
                 */
                // @ts-ignore
                open(): void
                /**
                 * Closes the line, indicating that any system resources
                 * in use by the line can be released.  If this operation
                 * succeeds, the line is marked closed and a <code>CLOSE</code> event is dispatched
                 * to the line's listeners.
                 * @throws SecurityException if the line cannot be
                 *  closed due to security restrictions.
                 * @see #open
                 * @see #isOpen
                 * @see LineEvent
                 */
                // @ts-ignore
                close(): void
                /**
                 * Indicates whether the line is open, meaning that it has reserved
                 * system resources and is operational, although it might not currently be
                 * playing or capturing sound.
                 * @return <code>true</code> if the line is open, otherwise <code>false</code>
                 * @see #open()
                 * @see #close()
                 */
                // @ts-ignore
                isOpen(): boolean
                /**
                 * Obtains the set of controls associated with this line.
                 * Some controls may only be available when the line is open.
                 * If there are no controls, this method returns an array of length 0.
                 * @return the array of controls
                 * @see #getControl
                 */
                // @ts-ignore
                getControls(): javax.sound.sampled.Control[]
                /**
                 * Indicates whether the line supports a control of the specified type.
                 * Some controls may only be available when the line is open.
                 * @param control the type of the control for which support is queried
                 * @return <code>true</code> if at least one control of the specified type is
                 *  supported, otherwise <code>false</code>.
                 */
                // @ts-ignore
                isControlSupported(control: javax.sound.sampled.Control.Type): boolean
                /**
                 * Obtains a control of the specified type,
                 * if there is any.
                 * Some controls may only be available when the line is open.
                 * @param control the type of the requested control
                 * @return a control of the specified type
                 * @throws IllegalArgumentException if a control of the specified type
                 *  is not supported
                 * @see #getControls
                 * @see #isControlSupported(Control.Type control)
                 */
                // @ts-ignore
                getControl(control: javax.sound.sampled.Control.Type): javax.sound.sampled.Control
                /**
                 * Adds a listener to this line.  Whenever the line's status changes, the
                 * listener's <code>update()</code> method is called with a <code>LineEvent</code> object
                 * that describes the change.
                 * @param listener the object to add as a listener to this line
                 * @see #removeLineListener
                 * @see LineListener#update
                 * @see LineEvent
                 */
                // @ts-ignore
                addLineListener(listener: javax.sound.sampled.LineListener): void
                /**
                 * Removes the specified listener from this line's list of listeners.
                 * @param listener listener to remove
                 * @see #addLineListener
                 */
                // @ts-ignore
                removeLineListener(listener: javax.sound.sampled.LineListener): void
            }
        }
    }
}
