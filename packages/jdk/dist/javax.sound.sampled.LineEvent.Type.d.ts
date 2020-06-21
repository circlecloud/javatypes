declare namespace javax {
    namespace sound {
        namespace sampled {
            namespace LineEvent {
                /**
                 * The LineEvent.Type inner class identifies what kind of event occurred on a line.
                 * Static instances are provided for the common types (OPEN, CLOSE, START, and STOP).
                 * @see LineEvent#getType()
                 */
                // @ts-ignore
                class Type extends java.lang.Object {
                    /**
                     * Constructs a new event type.
                     * @param name name of the type
                     */
                    // @ts-ignore
                    constructor(name: java.lang.String | string)
                    /**
                     * A type of event that is sent when a line opens, reserving system
                     * resources for itself.
                     * @see #CLOSE
                     * @see Line#open
                     */
                    // @ts-ignore
                    public static readonly OPEN: javax.sound.sampled.LineEvent.Type
                    /**
                     * A type of event that is sent when a line closes, freeing the system
                     * resources it had obtained when it was opened.
                     * @see #OPEN
                     * @see Line#close
                     */
                    // @ts-ignore
                    public static readonly CLOSE: javax.sound.sampled.LineEvent.Type
                    /**
                     * A type of event that is sent when a line begins to engage in active
                     * input or output of audio data in response to a
                     * {@link DataLine#start start} request.
                     * @see #STOP
                     * @see DataLine#start
                     */
                    // @ts-ignore
                    public static readonly START: javax.sound.sampled.LineEvent.Type
                    /**
                     * A type of event that is sent when a line ceases active input or output
                     * of audio data in response to a {@link DataLine#stop stop} request,
                     * or because the end of media has been reached.
                     * @see #START
                     * @see DataLine#stop
                     */
                    // @ts-ignore
                    public static readonly STOP: javax.sound.sampled.LineEvent.Type
                    /**
                     * Indicates whether the specified object is equal to this event type,
                     * returning <code>true</code> if the objects are identical.
                     * @param obj the reference object with which to compare
                     * @return <code>true</code> if this event type is the same as
                     *  <code>obj</code>; <code>false</code> otherwise
                     */
                    // @ts-ignore
                    public equals(obj: java.lang.Object | any): boolean
                    /**
                     * Finalizes the hashcode method.
                     */
                    // @ts-ignore
                    public hashCode(): number /*int*/
                    /**
                     * Returns the type name as the string representation.
                     */
                    // @ts-ignore
                    public toString(): string
                }
            }
        }
    }
}
