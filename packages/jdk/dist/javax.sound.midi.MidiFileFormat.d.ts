declare namespace javax {
    namespace sound {
        namespace midi {
            /**
             * A <code>MidiFileFormat</code> object encapsulates a MIDI file's
             * type, as well as its length and timing information.
             * <p>A <code>MidiFileFormat</code> object can
             * include a set of properties. A property is a pair of key and value:
             * the key is of type <code>String</code>, the associated property
             * value is an arbitrary object.
             * Properties specify additional informational
             * meta data (like a author, or copyright).
             * Properties are optional information, and file reader and file
             * writer implementations are not required to provide or
             * recognize properties.
             * <p>The following table lists some common properties that should
             * be used in implementations:
             * <table border=1>
             * <caption>MIDI File Format Properties</caption>
             * <tr>
             * <th>Property key</th>
             * <th>Value type</th>
             * <th>Description</th>
             * </tr>
             * <tr>
             * <td>&quot;author&quot;</td>
             * <td>{@link java.lang.String String}</td>
             * <td>name of the author of this file</td>
             * </tr>
             * <tr>
             * <td>&quot;title&quot;</td>
             * <td>{@link java.lang.String String}</td>
             * <td>title of this file</td>
             * </tr>
             * <tr>
             * <td>&quot;copyright&quot;</td>
             * <td>{@link java.lang.String String}</td>
             * <td>copyright message</td>
             * </tr>
             * <tr>
             * <td>&quot;date&quot;</td>
             * <td>{@link java.util.Date Date}</td>
             * <td>date of the recording or release</td>
             * </tr>
             * <tr>
             * <td>&quot;comment&quot;</td>
             * <td>{@link java.lang.String String}</td>
             * <td>an arbitrary text</td>
             * </tr>
             * </table>
             * @see MidiSystem#getMidiFileFormat(java.io.File)
             * @see Sequencer#setSequence(java.io.InputStream stream)
             * @author Kara Kytle
             * @author Florian Bomers
             */
            // @ts-ignore
            class MidiFileFormat extends java.lang.Object {
                /**
                 * Constructs a <code>MidiFileFormat</code>.
                 * @param type the MIDI file type (0, 1, or 2)
                 * @param divisionType the timing division type (PPQ or one of the SMPTE types)
                 * @param resolution the timing resolution
                 * @param bytes the length of the MIDI file in bytes, or UNKNOWN_LENGTH if not known
                 * @param microseconds the duration of the file in microseconds, or UNKNOWN_LENGTH if not known
                 * @see #UNKNOWN_LENGTH
                 * @see Sequence#PPQ
                 * @see Sequence#SMPTE_24
                 * @see Sequence#SMPTE_25
                 * @see Sequence#SMPTE_30DROP
                 * @see Sequence#SMPTE_30
                 */
                // @ts-ignore
                constructor(type: number /*int*/, divisionType: number /*float*/, resolution: number /*int*/, bytes: number /*int*/, microseconds: number /*long*/)
                /**
                 * Construct a <code>MidiFileFormat</code> with a set of properties.
                 * @param type         the MIDI file type (0, 1, or 2)
                 * @param divisionType the timing division type
                 *       (PPQ or one of the SMPTE types)
                 * @param resolution   the timing resolution
                 * @param bytes the length of the MIDI file in bytes,
                 *       or UNKNOWN_LENGTH if not known
                 * @param microseconds the duration of the file in microseconds,
                 *       or UNKNOWN_LENGTH if not known
                 * @param properties  a <code>Map&lt;String,Object&gt;</code> object
                 *         with properties
                 * @see #UNKNOWN_LENGTH
                 * @see Sequence#PPQ
                 * @see Sequence#SMPTE_24
                 * @see Sequence#SMPTE_25
                 * @see Sequence#SMPTE_30DROP
                 * @see Sequence#SMPTE_30
                 * @since 1.5
                 */
                // @ts-ignore
                constructor(type: number /*int*/, divisionType: number /*float*/, resolution: number /*int*/, bytes: number /*int*/, microseconds: number /*long*/, properties: java.util.Map<java.lang.String | string, java.lang.Object | any>)
                /**
                 * Represents unknown length.
                 * @see #getByteLength
                 * @see #getMicrosecondLength
                 */
                // @ts-ignore
                public static readonly UNKNOWN_LENGTH: number /*int*/
                /**
                 * The type of MIDI file.
                 */
                // @ts-ignore
                type: number /*int*/
                /**
                 * The division type of the MIDI file.
                 * @see Sequence#PPQ
                 * @see Sequence#SMPTE_24
                 * @see Sequence#SMPTE_25
                 * @see Sequence#SMPTE_30DROP
                 * @see Sequence#SMPTE_30
                 */
                // @ts-ignore
                divisionType: number /*float*/
                /**
                 * The timing resolution of the MIDI file.
                 */
                // @ts-ignore
                resolution: number /*int*/
                /**
                 * The length of the MIDI file in bytes.
                 */
                // @ts-ignore
                byteLength: number /*int*/
                /**
                 * The duration of the MIDI file in microseconds.
                 */
                // @ts-ignore
                microsecondLength: number /*long*/
                /**
                 * Obtains the MIDI file type.
                 * @return the file's type (0, 1, or 2)
                 */
                // @ts-ignore
                public getType(): number /*int*/
                /**
                 * Obtains the timing division type for the MIDI file.
                 * @return the division type (PPQ or one of the SMPTE types)
                 * @see Sequence#Sequence(float, int)
                 * @see Sequence#PPQ
                 * @see Sequence#SMPTE_24
                 * @see Sequence#SMPTE_25
                 * @see Sequence#SMPTE_30DROP
                 * @see Sequence#SMPTE_30
                 * @see Sequence#getDivisionType()
                 */
                // @ts-ignore
                public getDivisionType(): number /*float*/
                /**
                 * Obtains the timing resolution for the MIDI file.
                 * If the division type is PPQ, the resolution is specified in ticks per beat.
                 * For SMTPE timing, the resolution is specified in ticks per frame.
                 * @return the number of ticks per beat (PPQ) or per frame (SMPTE)
                 * @see #getDivisionType
                 * @see Sequence#getResolution()
                 */
                // @ts-ignore
                public getResolution(): number /*int*/
                /**
                 * Obtains the length of the MIDI file, expressed in 8-bit bytes.
                 * @return the number of bytes in the file, or UNKNOWN_LENGTH if not known
                 * @see #UNKNOWN_LENGTH
                 */
                // @ts-ignore
                public getByteLength(): number /*int*/
                /**
                 * Obtains the length of the MIDI file, expressed in microseconds.
                 * @return the file's duration in microseconds, or UNKNOWN_LENGTH if not known
                 * @see Sequence#getMicrosecondLength()
                 * @see #getByteLength
                 * @see #UNKNOWN_LENGTH
                 */
                // @ts-ignore
                public getMicrosecondLength(): number /*long*/
                /**
                 * Obtain an unmodifiable map of properties.
                 * The concept of properties is further explained in
                 * the {@link MidiFileFormat class description}.
                 * @return a <code>Map&lt;String,Object&gt;</code> object containing
                 *          all properties. If no properties are recognized, an empty map is
                 *          returned.
                 * @see #getProperty(String)
                 * @since 1.5
                 */
                // @ts-ignore
                public properties(): java.util.Map<java.lang.String | string, java.lang.Object | any>
                /**
                 * Obtain the property value specified by the key.
                 * The concept of properties is further explained in
                 * the {@link MidiFileFormat class description}.
                 * <p>If the specified property is not defined for a
                 * particular file format, this method returns
                 * <code>null</code>.
                 * @param key the key of the desired property
                 * @return the value of the property with the specified key,
                 *          or <code>null</code> if the property does not exist.
                 * @see #properties()
                 * @since 1.5
                 */
                // @ts-ignore
                public getProperty(key: java.lang.String | string): any
            }
        }
    }
}
