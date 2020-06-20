declare namespace org {
    namespace springframework {
        namespace util {
            namespace xml {
                /**
                 * Convenience methods for working with the StAX API. Partly historic due to JAXP 1.3
                 * compatibility; as of Spring 4.0, relying on JAXP 1.4 as included in JDK 1.6 and higher.
                 * <p>In particular, methods for using StAX ({@code javax.xml.stream}) in combination with
                 * the TrAX API ({@code javax.xml.transform}), and converting StAX readers/writers into SAX
                 * readers/handlers and vice-versa.
                 * @author Arjen Poutsma
                 * @author Juergen Hoeller
                 * @since 3.0
                 */
                // @ts-ignore
                class StaxUtils extends java.lang.Object {
                    // @ts-ignore
                    constructor()
                    /**
                     * Create an {@link XMLInputFactory} with Spring's defensive setup,
                     * i.e. no support for the resolution of DTDs and external entities.
                     * @return a new defensively initialized input factory instance to use
                     * @since 5.0
                     */
                    // @ts-ignore
                    createDefensiveInputFactory(): javax.xml.stream.XMLInputFactory
                    /**
                     * Variant of {@link #createDefensiveInputFactory()} with a custom instance.
                     * @param instanceSupplier supplier for the input factory instance
                     * @return a new defensively initialized input factory instance to use
                     * @since 5.0.12
                     */
                    // @ts-ignore
                    createDefensiveInputFactory<T extends javax.xml.stream.XMLInputFactory>(instanceSupplier: java.util.function.Supplier<T> | java.util.function$.Supplier<T>): T
                    /**
                     * Create a JAXP 1.4 {@link StAXSource} for the given {@link XMLStreamReader}.
                     * @param streamReader the StAX stream reader
                     * @return a source wrapping the {#code streamReader}
                     */
                    // @ts-ignore
                    createStaxSource(streamReader: javax.xml.stream.XMLStreamReader): javax.xml.transform.Source
                    /**
                     * Create a JAXP 1.4 {@link StAXSource} for the given {@link XMLEventReader}.
                     * @param eventReader the StAX event reader
                     * @return a source wrapping the {#code eventReader}
                     */
                    // @ts-ignore
                    createStaxSource(eventReader: javax.xml.stream.XMLEventReader): javax.xml.transform.Source
                    /**
                     * Create a custom, non-JAXP 1.4 StAX {@link Source} for the given {@link XMLStreamReader}.
                     * @param streamReader the StAX stream reader
                     * @return a source wrapping the {#code streamReader}
                     */
                    // @ts-ignore
                    createCustomStaxSource(streamReader: javax.xml.stream.XMLStreamReader): javax.xml.transform.Source
                    /**
                     * Create a custom, non-JAXP 1.4 StAX {@link Source} for the given {@link XMLEventReader}.
                     * @param eventReader the StAX event reader
                     * @return a source wrapping the {#code eventReader}
                     */
                    // @ts-ignore
                    createCustomStaxSource(eventReader: javax.xml.stream.XMLEventReader): javax.xml.transform.Source
                    /**
                     * Indicate whether the given {@link Source} is a JAXP 1.4 StAX Source or
                     * custom StAX Source.
                     * @return {#code true} if {@code source} is a JAXP 1.4 {@link StAXSource} or
                     *  custom StAX Source; {@code false} otherwise
                     */
                    // @ts-ignore
                    isStaxSource(source: javax.xml.transform.Source): boolean
                    /**
                     * Return the {@link XMLStreamReader} for the given StAX Source.
                     * @param source a JAXP 1.4 {#link StAXSource}
                     * @return the {#link XMLStreamReader}
                     * @throws IllegalArgumentException if {#code source} isn't a JAXP 1.4 {@link StAXSource}
                     *  or custom StAX Source
                     */
                    // @ts-ignore
                    getXMLStreamReader(source: javax.xml.transform.Source): javax.xml.stream.XMLStreamReader
                    /**
                     * Return the {@link XMLEventReader} for the given StAX Source.
                     * @param source a JAXP 1.4 {#link StAXSource}
                     * @return the {#link XMLEventReader}
                     * @throws IllegalArgumentException if {#code source} isn't a JAXP 1.4 {@link StAXSource}
                     *  or custom StAX Source
                     */
                    // @ts-ignore
                    getXMLEventReader(source: javax.xml.transform.Source): javax.xml.stream.XMLEventReader
                    /**
                     * Create a JAXP 1.4 {@link StAXResult} for the given {@link XMLStreamWriter}.
                     * @param streamWriter the StAX stream writer
                     * @return a result wrapping the {#code streamWriter}
                     */
                    // @ts-ignore
                    createStaxResult(streamWriter: javax.xml.stream.XMLStreamWriter): javax.xml.transform.Result
                    /**
                     * Create a JAXP 1.4 {@link StAXResult} for the given {@link XMLEventWriter}.
                     * @param eventWriter the StAX event writer
                     * @return a result wrapping {#code streamReader}
                     */
                    // @ts-ignore
                    createStaxResult(eventWriter: javax.xml.stream.XMLEventWriter): javax.xml.transform.Result
                    /**
                     * Create a custom, non-JAXP 1.4 StAX {@link Result} for the given {@link XMLStreamWriter}.
                     * @param streamWriter the StAX stream writer
                     * @return a source wrapping the {#code streamWriter}
                     */
                    // @ts-ignore
                    createCustomStaxResult(streamWriter: javax.xml.stream.XMLStreamWriter): javax.xml.transform.Result
                    /**
                     * Create a custom, non-JAXP 1.4 StAX {@link Result} for the given {@link XMLEventWriter}.
                     * @param eventWriter the StAX event writer
                     * @return a source wrapping the {#code eventWriter}
                     */
                    // @ts-ignore
                    createCustomStaxResult(eventWriter: javax.xml.stream.XMLEventWriter): javax.xml.transform.Result
                    /**
                     * Indicate whether the given {@link Result} is a JAXP 1.4 StAX Result or
                     * custom StAX Result.
                     * @return {#code true} if {@code result} is a JAXP 1.4 {@link StAXResult} or
                     *  custom StAX Result; {@code false} otherwise
                     */
                    // @ts-ignore
                    isStaxResult(result: javax.xml.transform.Result): boolean
                    /**
                     * Return the {@link XMLStreamWriter} for the given StAX Result.
                     * @param result a JAXP 1.4 {#link StAXResult}
                     * @return the {#link XMLStreamReader}
                     * @throws IllegalArgumentException if {#code source} isn't a JAXP 1.4 {@link StAXResult}
                     *  or custom StAX Result
                     */
                    // @ts-ignore
                    getXMLStreamWriter(result: javax.xml.transform.Result): javax.xml.stream.XMLStreamWriter
                    /**
                     * Return the {@link XMLEventWriter} for the given StAX Result.
                     * @param result a JAXP 1.4 {#link StAXResult}
                     * @return the {#link XMLStreamReader}
                     * @throws IllegalArgumentException if {#code source} isn't a JAXP 1.4 {@link StAXResult}
                     *  or custom StAX Result
                     */
                    // @ts-ignore
                    getXMLEventWriter(result: javax.xml.transform.Result): javax.xml.stream.XMLEventWriter
                    /**
                     * Create a {@link XMLEventReader} from the given list of {@link XMLEvent}.
                     * @param events the list of {#link XMLEvent XMLEvents}.
                     * @return an {#code XMLEventReader} that reads from the given events
                     * @since 5.0
                     */
                    // @ts-ignore
                    createXMLEventReader(events: Array<javax.xml.stream.events.XMLEvent>): javax.xml.stream.XMLEventReader
                    /**
                     * Create a SAX {@link ContentHandler} that writes to the given StAX {@link XMLStreamWriter}.
                     * @param streamWriter the StAX stream writer
                     * @return a content handler writing to the {#code streamWriter}
                     */
                    // @ts-ignore
                    createContentHandler(streamWriter: javax.xml.stream.XMLStreamWriter): org.xml.sax.ContentHandler
                    /**
                     * Create a SAX {@link ContentHandler} that writes events to the given StAX {@link XMLEventWriter}.
                     * @param eventWriter the StAX event writer
                     * @return a content handler writing to the {#code eventWriter}
                     */
                    // @ts-ignore
                    createContentHandler(eventWriter: javax.xml.stream.XMLEventWriter): org.xml.sax.ContentHandler
                    /**
                     * Create a SAX {@link XMLReader} that reads from the given StAX {@link XMLStreamReader}.
                     * @param streamReader the StAX stream reader
                     * @return a XMLReader reading from the {#code streamWriter}
                     */
                    // @ts-ignore
                    createXMLReader(streamReader: javax.xml.stream.XMLStreamReader): org.xml.sax.XMLReader
                    /**
                     * Create a SAX {@link XMLReader} that reads from the given StAX {@link XMLEventReader}.
                     * @param eventReader the StAX event reader
                     * @return a XMLReader reading from the {#code eventWriter}
                     */
                    // @ts-ignore
                    createXMLReader(eventReader: javax.xml.stream.XMLEventReader): org.xml.sax.XMLReader
                    /**
                     * Return a {@link XMLStreamReader} that reads from a {@link XMLEventReader}.
                     * Useful because the StAX {@code XMLInputFactory} allows one to create an
                     * event reader from a stream reader, but not vice-versa.
                     * @return a stream reader that reads from an event reader
                     */
                    // @ts-ignore
                    createEventStreamReader(eventReader: javax.xml.stream.XMLEventReader): javax.xml.stream.XMLStreamReader
                    /**
                     * Return a {@link XMLStreamWriter} that writes to a {@link XMLEventWriter}.
                     * @return a stream writer that writes to an event writer
                     * @since 3.2
                     */
                    // @ts-ignore
                    createEventStreamWriter(eventWriter: javax.xml.stream.XMLEventWriter): javax.xml.stream.XMLStreamWriter
                    /**
                     * Return a {@link XMLStreamWriter} that writes to a {@link XMLEventWriter}.
                     * @return a stream writer that writes to an event writer
                     * @since 3.0.5
                     */
                    // @ts-ignore
                    createEventStreamWriter(eventWriter: javax.xml.stream.XMLEventWriter, eventFactory: javax.xml.stream.XMLEventFactory): javax.xml.stream.XMLStreamWriter
                }
            }
        }
    }
}
