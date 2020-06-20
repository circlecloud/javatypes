declare namespace javax {
    namespace sound {
        namespace midi {
            /**
             * The <code>MidiSystem</code> class provides access to the installed MIDI
             * system resources, including devices such as synthesizers, sequencers, and
             * MIDI input and output ports.  A typical simple MIDI application might
             * begin by invoking one or more <code>MidiSystem</code> methods to learn
             * what devices are installed and to obtain the ones needed in that
             * application.
             * <p>
             * The class also has methods for reading files, streams, and  URLs that
             * contain standard MIDI file data or soundbanks.  You can query the
             * <code>MidiSystem</code> for the format of a specified MIDI file.
             * <p>
             * You cannot instantiate a <code>MidiSystem</code>; all the methods are
             * static.
             * <p>Properties can be used to specify default MIDI devices.
             * Both system properties and a properties file are considered.
             * The <code>sound.properties</code> properties file is read from
             * an implementation-specific location (typically it is the <code>lib</code>
             * directory in the Java installation directory).
             * If a property exists both as a system property and in the
             * properties file, the system property takes precedence. If none is
             * specified, a suitable default is chosen among the available devices.
             * The syntax of the properties file is specified in
             * {@link java.util.Properties#load(InputStream) Properties.load}. The
             * following table lists the available property keys and which methods
             * consider them:
             * <table border=0>
             * <caption>MIDI System Property Keys</caption>
             * <tr>
             * <th>Property Key</th>
             * <th>Interface</th>
             * <th>Affected Method</th>
             * </tr>
             * <tr>
             * <td><code>javax.sound.midi.Receiver</code></td>
             * <td>{@link Receiver}</td>
             * <td>{@link #getReceiver}</td>
             * </tr>
             * <tr>
             * <td><code>javax.sound.midi.Sequencer</code></td>
             * <td>{@link Sequencer}</td>
             * <td>{@link #getSequencer}</td>
             * </tr>
             * <tr>
             * <td><code>javax.sound.midi.Synthesizer</code></td>
             * <td>{@link Synthesizer}</td>
             * <td>{@link #getSynthesizer}</td>
             * </tr>
             * <tr>
             * <td><code>javax.sound.midi.Transmitter</code></td>
             * <td>{@link Transmitter}</td>
             * <td>{@link #getTransmitter}</td>
             * </tr>
             * </table>
             * The property value consists of the provider class name
             * and the device name, separated by the hash mark (&quot;#&quot;).
             * The provider class name is the fully-qualified
             * name of a concrete {@link javax.sound.midi.spi.MidiDeviceProvider
             * MIDI device provider} class. The device name is matched against
             * the <code>String</code> returned by the <code>getName</code>
             * method of <code>MidiDevice.Info</code>.
             * Either the class name, or the device name may be omitted.
             * If only the class name is specified, the trailing hash mark
             * is optional.
             * <p>If the provider class is specified, and it can be
             * successfully retrieved from the installed providers,
             * the list of
             * <code>MidiDevice.Info</code> objects is retrieved
             * from the provider. Otherwise, or when these devices
             * do not provide a subsequent match, the list is retrieved
             * from {@link #getMidiDeviceInfo} to contain
             * all available <code>MidiDevice.Info</code> objects.
             * <p>If a device name is specified, the resulting list of
             * <code>MidiDevice.Info</code> objects is searched:
             * the first one with a matching name, and whose
             * <code>MidiDevice</code> implements the
             * respective interface, will be returned.
             * If no matching <code>MidiDevice.Info</code> object
             * is found, or the device name is not specified,
             * the first suitable device from the resulting
             * list will be returned. For Sequencer and Synthesizer,
             * a device is suitable if it implements the respective
             * interface; whereas for Receiver and Transmitter, a device is
             * suitable if it
             * implements neither Sequencer nor Synthesizer and provides
             * at least one Receiver or Transmitter, respectively.
             * For example, the property <code>javax.sound.midi.Receiver</code>
             * with a value
             * <code>&quot;com.sun.media.sound.MidiProvider#SunMIDI1&quot;</code>
             * will have the following consequences when
             * <code>getReceiver</code> is called:
             * if the class <code>com.sun.media.sound.MidiProvider</code> exists
             * in the list of installed MIDI device providers,
             * the first <code>Receiver</code> device with name
             * <code>&quot;SunMIDI1&quot;</code> will be returned. If it cannot
             * be found, the first <code>Receiver</code> from that provider
             * will be returned, regardless of name.
             * If there is none, the first <code>Receiver</code> with name
             * <code>&quot;SunMIDI1&quot;</code> in the list of all devices
             * (as returned by <code>getMidiDeviceInfo</code>) will be returned,
             * or, if not found, the first <code>Receiver</code> that can
             * be found in the list of all devices is returned.
             * If that fails, too, a <code>MidiUnavailableException</code>
             * is thrown.
             * @author Kara Kytle
             * @author Florian Bomers
             * @author Matthias Pfisterer
             */
            // @ts-ignore
            class MidiSystem extends java.lang.Object {
                /**
                 * Obtains an array of information objects representing
                 * the set of all MIDI devices available on the system.
                 * A returned information object can then be used to obtain the
                 * corresponding device object, by invoking
                 * {@link #getMidiDevice(MidiDevice.Info) getMidiDevice}.
                 * @return an array of <code>MidiDevice.Info</code> objects, one
                 *  for each installed MIDI device.  If no such devices are installed,
                 *  an array of length 0 is returned.
                 */
                // @ts-ignore
                getMidiDeviceInfo(): javax.sound.midi.MidiDevice.Info[]
                /**
                 * Obtains the requested MIDI device.
                 * @param info a device information object representing the desired device.
                 * @return the requested device
                 * @throws MidiUnavailableException if the requested device is not available
                 *  due to resource restrictions
                 * @throws IllegalArgumentException if the info object does not represent
                 *  a MIDI device installed on the system
                 * @see #getMidiDeviceInfo
                 */
                // @ts-ignore
                getMidiDevice(info: javax.sound.midi.MidiDevice.Info): javax.sound.midi.MidiDevice
                /**
                 * Obtains a MIDI receiver from an external MIDI port
                 * or other default device.
                 * The returned receiver always implements
                 * the {@code MidiDeviceReceiver} interface.
                 * <p>If the system property
                 * <code>javax.sound.midi.Receiver</code>
                 * is defined or it is defined in the file &quot;sound.properties&quot;,
                 * it is used to identify the device that provides the default receiver.
                 * For details, refer to the {@link MidiSystem class description}.
                 * If a suitable MIDI port is not available, the Receiver is
                 * retrieved from an installed synthesizer.
                 * <p>If a native receiver provided by the default device does not implement
                 * the {@code MidiDeviceReceiver} interface, it will be wrapped in a
                 * wrapper class that implements the {@code MidiDeviceReceiver} interface.
                 * The corresponding {@code Receiver} method calls will be forwarded
                 * to the native receiver.
                 * <p>If this method returns successfully, the {@link
                 * javax.sound.midi.MidiDevice MidiDevice} the
                 * <code>Receiver</code> belongs to is opened implicitly, if it is
                 * not already open. It is possible to close an implicitly opened
                 * device by calling {@link javax.sound.midi.Receiver#close close}
                 * on the returned <code>Receiver</code>. All open <code>Receiver</code>
                 * instances have to be closed in order to release system resources
                 * hold by the <code>MidiDevice</code>. For a
                 * detailed description of open/close behaviour see the class
                 * description of {@link javax.sound.midi.MidiDevice MidiDevice}.
                 * @return the default MIDI receiver
                 * @throws MidiUnavailableException if the default receiver is not
                 *          available due to resource restrictions,
                 *          or no device providing receivers is installed in the system
                 */
                // @ts-ignore
                getReceiver(): javax.sound.midi.Receiver
                /**
                 * Obtains a MIDI transmitter from an external MIDI port
                 * or other default source.
                 * The returned transmitter always implements
                 * the {@code MidiDeviceTransmitter} interface.
                 * <p>If the system property
                 * <code>javax.sound.midi.Transmitter</code>
                 * is defined or it is defined in the file &quot;sound.properties&quot;,
                 * it is used to identify the device that provides the default transmitter.
                 * For details, refer to the {@link MidiSystem class description}.
                 * <p>If a native transmitter provided by the default device does not implement
                 * the {@code MidiDeviceTransmitter} interface, it will be wrapped in a
                 * wrapper class that implements the {@code MidiDeviceTransmitter} interface.
                 * The corresponding {@code Transmitter} method calls will be forwarded
                 * to the native transmitter.
                 * <p>If this method returns successfully, the {@link
                 * javax.sound.midi.MidiDevice MidiDevice} the
                 * <code>Transmitter</code> belongs to is opened implicitly, if it
                 * is not already open. It is possible to close an implicitly
                 * opened device by calling {@link
                 * javax.sound.midi.Transmitter#close close} on the returned
                 * <code>Transmitter</code>. All open <code>Transmitter</code>
                 * instances have to be closed in order to release system resources
                 * hold by the <code>MidiDevice</code>. For a detailed description
                 * of open/close behaviour see the class description of {@link
                 * javax.sound.midi.MidiDevice MidiDevice}.
                 * @return the default MIDI transmitter
                 * @throws MidiUnavailableException if the default transmitter is not
                 *          available due to resource restrictions,
                 *          or no device providing transmitters is installed in the system
                 */
                // @ts-ignore
                getTransmitter(): javax.sound.midi.Transmitter
                /**
                 * Obtains the default synthesizer.
                 * <p>If the system property
                 * <code>javax.sound.midi.Synthesizer</code>
                 * is defined or it is defined in the file &quot;sound.properties&quot;,
                 * it is used to identify the default synthesizer.
                 * For details, refer to the {@link MidiSystem class description}.
                 * @return the default synthesizer
                 * @throws MidiUnavailableException if the synthesizer is not
                 *          available due to resource restrictions,
                 *          or no synthesizer is installed in the system
                 */
                // @ts-ignore
                getSynthesizer(): javax.sound.midi.Synthesizer
                /**
                 * Obtains the default <code>Sequencer</code>, connected to
                 * a default device.
                 * The returned <code>Sequencer</code> instance is
                 * connected to the default <code>Synthesizer</code>,
                 * as returned by {@link #getSynthesizer}.
                 * If there is no <code>Synthesizer</code>
                 * available, or the default <code>Synthesizer</code>
                 * cannot be opened, the <code>sequencer</code> is connected
                 * to the default <code>Receiver</code>, as returned
                 * by {@link #getReceiver}.
                 * The connection is made by retrieving a <code>Transmitter</code>
                 * instance from the <code>Sequencer</code> and setting its
                 * <code>Receiver</code>.
                 * Closing and re-opening the sequencer will restore the
                 * connection to the default device.
                 * <p>This method is equivalent to calling
                 * <code>getSequencer(true)</code>.
                 * <p>If the system property
                 * <code>javax.sound.midi.Sequencer</code>
                 * is defined or it is defined in the file &quot;sound.properties&quot;,
                 * it is used to identify the default sequencer.
                 * For details, refer to the {@link MidiSystem class description}.
                 * @return the default sequencer, connected to a default Receiver
                 * @throws MidiUnavailableException if the sequencer is not
                 *          available due to resource restrictions,
                 *          or there is no <code>Receiver</code> available by any
                 *          installed <code>MidiDevice</code>,
                 *          or no sequencer is installed in the system.
                 * @see #getSequencer(boolean)
                 * @see #getSynthesizer
                 * @see #getReceiver
                 */
                // @ts-ignore
                getSequencer(): javax.sound.midi.Sequencer
                /**
                 * Obtains the default <code>Sequencer</code>, optionally
                 * connected to a default device.
                 * <p>If <code>connected</code> is true, the returned
                 * <code>Sequencer</code> instance is
                 * connected to the default <code>Synthesizer</code>,
                 * as returned by {@link #getSynthesizer}.
                 * If there is no <code>Synthesizer</code>
                 * available, or the default <code>Synthesizer</code>
                 * cannot be opened, the <code>sequencer</code> is connected
                 * to the default <code>Receiver</code>, as returned
                 * by {@link #getReceiver}.
                 * The connection is made by retrieving a <code>Transmitter</code>
                 * instance from the <code>Sequencer</code> and setting its
                 * <code>Receiver</code>.
                 * Closing and re-opening the sequencer will restore the
                 * connection to the default device.
                 * <p>If <code>connected</code> is false, the returned
                 * <code>Sequencer</code> instance is not connected, it
                 * has no open <code>Transmitters</code>. In order to
                 * play the sequencer on a MIDI device, or a <code>Synthesizer</code>,
                 * it is necessary to get a <code>Transmitter</code> and set its
                 * <code>Receiver</code>.
                 * <p>If the system property
                 * <code>javax.sound.midi.Sequencer</code>
                 * is defined or it is defined in the file "sound.properties",
                 * it is used to identify the default sequencer.
                 * For details, refer to the {@link MidiSystem class description}.
                 * @param connected whether or not the returned {#code Sequencer}
                 *  is connected to the default {@code Synthesizer}
                 * @return the default sequencer
                 * @throws MidiUnavailableException if the sequencer is not
                 *          available due to resource restrictions,
                 *          or no sequencer is installed in the system,
                 *          or if <code>connected</code> is true, and there is
                 *          no <code>Receiver</code> available by any installed
                 *          <code>MidiDevice</code>
                 * @see #getSynthesizer
                 * @see #getReceiver
                 * @since 1.5
                 */
                // @ts-ignore
                getSequencer(connected: boolean): javax.sound.midi.Sequencer
                /**
                 * Constructs a MIDI sound bank by reading it from the specified stream.
                 * The stream must point to
                 * a valid MIDI soundbank file.  In general, MIDI soundbank providers may
                 * need to read some data from the stream before determining whether they
                 * support it.  These parsers must
                 * be able to mark the stream, read enough data to determine whether they
                 * support the stream, and, if not, reset the stream's read pointer to
                 * its original position.  If the input stream does not support this,
                 * this method may fail with an IOException.
                 * @param stream the source of the sound bank data.
                 * @return the sound bank
                 * @throws InvalidMidiDataException if the stream does not point to
                 *  valid MIDI soundbank data recognized by the system
                 * @throws IOException if an I/O error occurred when loading the soundbank
                 * @see InputStream#markSupported
                 * @see InputStream#mark
                 */
                // @ts-ignore
                getSoundbank(stream: java.io.InputStream): javax.sound.midi.Soundbank
                /**
                 * Constructs a <code>Soundbank</code> by reading it from the specified URL.
                 * The URL must point to a valid MIDI soundbank file.
                 * @param url the source of the sound bank data
                 * @return the sound bank
                 * @throws InvalidMidiDataException if the URL does not point to valid MIDI
                 *  soundbank data recognized by the system
                 * @throws IOException if an I/O error occurred when loading the soundbank
                 */
                // @ts-ignore
                getSoundbank(url: java.net.URL): javax.sound.midi.Soundbank
                /**
                 * Constructs a <code>Soundbank</code> by reading it from the specified
                 * <code>File</code>.
                 * The <code>File</code> must point to a valid MIDI soundbank file.
                 * @param file the source of the sound bank data
                 * @return the sound bank
                 * @throws InvalidMidiDataException if the <code>File</code> does not
                 *  point to valid MIDI soundbank data recognized by the system
                 * @throws IOException if an I/O error occurred when loading the soundbank
                 */
                // @ts-ignore
                getSoundbank(file: java.io.File): javax.sound.midi.Soundbank
                /**
                 * Obtains the MIDI file format of the data in the specified input stream.
                 * The stream must point to valid MIDI file data for a file type recognized
                 * by the system.
                 * <p>
                 * This method and/or the code it invokes may need to read some data from
                 * the stream to determine whether its data format is supported.  The
                 * implementation may therefore
                 * need to mark the stream, read enough data to determine whether it is in
                 * a supported format, and reset the stream's read pointer to its original
                 * position.  If the input stream does not permit this set of operations,
                 * this method may fail with an <code>IOException</code>.
                 * <p>
                 * This operation can only succeed for files of a type which can be parsed
                 * by an installed file reader.  It may fail with an InvalidMidiDataException
                 * even for valid files if no compatible file reader is installed.  It
                 * will also fail with an InvalidMidiDataException if a compatible file reader
                 * is installed, but encounters errors while determining the file format.
                 * @param stream the input stream from which file format information
                 *  should be extracted
                 * @return an <code>MidiFileFormat</code> object describing the MIDI file
                 *  format
                 * @throws InvalidMidiDataException if the stream does not point to valid
                 *  MIDI file data recognized by the system
                 * @throws IOException if an I/O exception occurs while accessing the
                 *  stream
                 * @see #getMidiFileFormat(URL)
                 * @see #getMidiFileFormat(File)
                 * @see InputStream#markSupported
                 * @see InputStream#mark
                 */
                // @ts-ignore
                getMidiFileFormat(stream: java.io.InputStream): javax.sound.midi.MidiFileFormat
                /**
                 * Obtains the MIDI file format of the data in the specified URL.  The URL
                 * must point to valid MIDI file data for a file type recognized
                 * by the system.
                 * <p>
                 * This operation can only succeed for files of a type which can be parsed
                 * by an installed file reader.  It may fail with an InvalidMidiDataException
                 * even for valid files if no compatible file reader is installed.  It
                 * will also fail with an InvalidMidiDataException if a compatible file reader
                 * is installed, but encounters errors while determining the file format.
                 * @param url the URL from which file format information should be
                 *  extracted
                 * @return a <code>MidiFileFormat</code> object describing the MIDI file
                 *  format
                 * @throws InvalidMidiDataException if the URL does not point to valid MIDI
                 *  file data recognized by the system
                 * @throws IOException if an I/O exception occurs while accessing the URL
                 * @see #getMidiFileFormat(InputStream)
                 * @see #getMidiFileFormat(File)
                 */
                // @ts-ignore
                getMidiFileFormat(url: java.net.URL): javax.sound.midi.MidiFileFormat
                /**
                 * Obtains the MIDI file format of the specified <code>File</code>.  The
                 * <code>File</code> must point to valid MIDI file data for a file type
                 * recognized by the system.
                 * <p>
                 * This operation can only succeed for files of a type which can be parsed
                 * by an installed file reader.  It may fail with an InvalidMidiDataException
                 * even for valid files if no compatible file reader is installed.  It
                 * will also fail with an InvalidMidiDataException if a compatible file reader
                 * is installed, but encounters errors while determining the file format.
                 * @param file the <code>File</code> from which file format information
                 *  should be extracted
                 * @return a <code>MidiFileFormat</code> object describing the MIDI file
                 *  format
                 * @throws InvalidMidiDataException if the <code>File</code> does not point
                 *   to valid MIDI file data recognized by the system
                 * @throws IOException if an I/O exception occurs while accessing the file
                 * @see #getMidiFileFormat(InputStream)
                 * @see #getMidiFileFormat(URL)
                 */
                // @ts-ignore
                getMidiFileFormat(file: java.io.File): javax.sound.midi.MidiFileFormat
                /**
                 * Obtains a MIDI sequence from the specified input stream.  The stream must
                 * point to valid MIDI file data for a file type recognized
                 * by the system.
                 * <p>
                 * This method and/or the code it invokes may need to read some data
                 * from the stream to determine whether
                 * its data format is supported.  The implementation may therefore
                 * need to mark the stream, read enough data to determine whether it is in
                 * a supported format, and reset the stream's read pointer to its original
                 * position.  If the input stream does not permit this set of operations,
                 * this method may fail with an <code>IOException</code>.
                 * <p>
                 * This operation can only succeed for files of a type which can be parsed
                 * by an installed file reader.  It may fail with an InvalidMidiDataException
                 * even for valid files if no compatible file reader is installed.  It
                 * will also fail with an InvalidMidiDataException if a compatible file reader
                 * is installed, but encounters errors while constructing the <code>Sequence</code>
                 * object from the file data.
                 * @param stream the input stream from which the <code>Sequence</code>
                 *  should be constructed
                 * @return a <code>Sequence</code> object based on the MIDI file data
                 *  contained in the input stream
                 * @throws InvalidMidiDataException if the stream does not point to
                 *  valid MIDI file data recognized by the system
                 * @throws IOException if an I/O exception occurs while accessing the
                 *  stream
                 * @see InputStream#markSupported
                 * @see InputStream#mark
                 */
                // @ts-ignore
                getSequence(stream: java.io.InputStream): javax.sound.midi.Sequence
                /**
                 * Obtains a MIDI sequence from the specified URL.  The URL must
                 * point to valid MIDI file data for a file type recognized
                 * by the system.
                 * <p>
                 * This operation can only succeed for files of a type which can be parsed
                 * by an installed file reader.  It may fail with an InvalidMidiDataException
                 * even for valid files if no compatible file reader is installed.  It
                 * will also fail with an InvalidMidiDataException if a compatible file reader
                 * is installed, but encounters errors while constructing the <code>Sequence</code>
                 * object from the file data.
                 * @param url the URL from which the <code>Sequence</code> should be
                 *  constructed
                 * @return a <code>Sequence</code> object based on the MIDI file data
                 *  pointed to by the URL
                 * @throws InvalidMidiDataException if the URL does not point to valid MIDI
                 *  file data recognized by the system
                 * @throws IOException if an I/O exception occurs while accessing the URL
                 */
                // @ts-ignore
                getSequence(url: java.net.URL): javax.sound.midi.Sequence
                /**
                 * Obtains a MIDI sequence from the specified <code>File</code>.
                 * The <code>File</code> must point to valid MIDI file data
                 * for a file type recognized by the system.
                 * <p>
                 * This operation can only succeed for files of a type which can be parsed
                 * by an installed file reader.  It may fail with an InvalidMidiDataException
                 * even for valid files if no compatible file reader is installed.  It
                 * will also fail with an InvalidMidiDataException if a compatible file reader
                 * is installed, but encounters errors while constructing the <code>Sequence</code>
                 * object from the file data.
                 * @param file the <code>File</code> from which the <code>Sequence</code>
                 *  should be constructed
                 * @return a <code>Sequence</code> object based on the MIDI file data
                 *  pointed to by the File
                 * @throws InvalidMidiDataException if the File does not point to valid MIDI
                 *  file data recognized by the system
                 * @throws IOException if an I/O exception occurs
                 */
                // @ts-ignore
                getSequence(file: java.io.File): javax.sound.midi.Sequence
                /**
                 * Obtains the set of MIDI file types for which file writing support is
                 * provided by the system.
                 * @return array of unique file types.  If no file types are supported,
                 *  an array of length 0 is returned.
                 */
                // @ts-ignore
                getMidiFileTypes(): int[]
                /**
                 * Indicates whether file writing support for the specified MIDI file type
                 * is provided by the system.
                 * @param fileType the file type for which write capabilities are queried
                 * @return <code>true</code> if the file type is supported,
                 *  otherwise <code>false</code>
                 */
                // @ts-ignore
                isFileTypeSupported(fileType: number /*int*/): boolean
                /**
                 * Obtains the set of MIDI file types that the system can write from the
                 * sequence specified.
                 * @param sequence the sequence for which MIDI file type support
                 *  is queried
                 * @return the set of unique supported file types.  If no file types are supported,
                 *  returns an array of length 0.
                 */
                // @ts-ignore
                getMidiFileTypes(sequence: javax.sound.midi.Sequence): int[]
                /**
                 * Indicates whether a MIDI file of the file type specified can be written
                 * from the sequence indicated.
                 * @param fileType the file type for which write capabilities
                 *  are queried
                 * @param sequence the sequence for which file writing support is queried
                 * @return <code>true</code> if the file type is supported for this
                 *  sequence, otherwise <code>false</code>
                 */
                // @ts-ignore
                isFileTypeSupported(fileType: number /*int*/, sequence: javax.sound.midi.Sequence): boolean
                /**
                 * Writes a stream of bytes representing a file of the MIDI file type
                 * indicated to the output stream provided.
                 * @param in sequence containing MIDI data to be written to the file
                 * @param fileType the file type of the file to be written to the output stream
                 * @param out stream to which the file data should be written
                 * @return the number of bytes written to the output stream
                 * @throws IOException if an I/O exception occurs
                 * @throws IllegalArgumentException if the file format is not supported by
                 *  the system
                 * @see #isFileTypeSupported(int, Sequence)
                 * @see #getMidiFileTypes(Sequence)
                 */
                // @ts-ignore
                write(input: javax.sound.midi.Sequence, fileType: number /*int*/, out: java.io.OutputStream): int
                /**
                 * Writes a stream of bytes representing a file of the MIDI file type
                 * indicated to the external file provided.
                 * @param in sequence containing MIDI data to be written to the file
                 * @param type the file type of the file to be written to the output stream
                 * @param out external file to which the file data should be written
                 * @return the number of bytes written to the file
                 * @throws IOException if an I/O exception occurs
                 * @throws IllegalArgumentException if the file type is not supported by
                 *  the system
                 * @see #isFileTypeSupported(int, Sequence)
                 * @see #getMidiFileTypes(Sequence)
                 */
                // @ts-ignore
                write(input: javax.sound.midi.Sequence, type: number /*int*/, out: java.io.File): int
            }
        }
    }
}
