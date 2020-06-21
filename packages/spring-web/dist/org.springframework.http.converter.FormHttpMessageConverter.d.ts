declare namespace org {
    namespace springframework {
        namespace http {
            namespace converter {
                /**
                 * Implementation of {@link HttpMessageConverter} to read and write 'normal' HTML
                 * forms and also to write (but not read) multipart data (e.g. file uploads).
                 * <p>In other words, this converter can read and write the
                 * {@code "application/x-www-form-urlencoded"} media type as
                 * {@link MultiValueMap MultiValueMap&lt;String, String&gt;}, and it can also
                 * write (but not read) the {@code "multipart/form-data"} and
                 * {@code "multipart/mixed"} media types as
                 * {@link MultiValueMap MultiValueMap&lt;String, Object&gt;}.
                 * <h3>Multipart Data</h3>
                 * <p>By default, {@code "multipart/form-data"} is used as the content type when
                 * {@linkplain #write writing} multipart data. As of Spring Framework 5.2 it is
                 * also possible to write multipart data using other multipart subtypes such as
                 * {@code "multipart/mixed"} and {@code "multipart/related"}, as long as the
                 * multipart subtype is registered as a {@linkplain #getSupportedMediaTypes
                 * supported media type} <em>and</em> the desired multipart subtype is specified
                 * as the content type when {@linkplain #write writing} the multipart data. Note
                 * that {@code "multipart/mixed"} is registered as a supported media type by
                 * default.
                 * <p>When writing multipart data, this converter uses other
                 * {@link HttpMessageConverter HttpMessageConverters} to write the respective
                 * MIME parts. By default, basic converters are registered for byte array,
                 * {@code String}, and {@code Resource}. These can be overridden via
                 * {@link #setPartConverters} or augmented via {@link #addPartConverter}.
                 * <h3>Examples</h3>
                 * <p>The following snippet shows how to submit an HTML form using the
                 * {@code "multipart/form-data"} content type.
                 * <pre class="code">
                 * RestTemplate restTemplate = new RestTemplate();
                 * // AllEncompassingFormHttpMessageConverter is configured by default
                 * MultiValueMap&lt;String, Object&gt; form = new LinkedMultiValueMap&lt;&gt;();
                 * form.add("field 1", "value 1");
                 * form.add("field 2", "value 2");
                 * form.add("field 2", "value 3");
                 * form.add("field 3", 4);  // non-String form values supported as of 5.1.4
                 * restTemplate.postForLocation("https://example.com/myForm", form);</pre>
                 * <p>The following snippet shows how to do a file upload using the
                 * {@code "multipart/form-data"} content type.
                 * <pre class="code">
                 * MultiValueMap&lt;String, Object&gt; parts = new LinkedMultiValueMap&lt;&gt;();
                 * parts.add("field 1", "value 1");
                 * parts.add("file", new ClassPathResource("myFile.jpg"));
                 * restTemplate.postForLocation("https://example.com/myFileUpload", parts);</pre>
                 * <p>The following snippet shows how to do a file upload using the
                 * {@code "multipart/mixed"} content type.
                 * <pre class="code">
                 * MultiValueMap&lt;String, Object&gt; parts = new LinkedMultiValueMap&lt;&gt;();
                 * parts.add("field 1", "value 1");
                 * parts.add("file", new ClassPathResource("myFile.jpg"));
                 * HttpHeaders requestHeaders = new HttpHeaders();
                 * requestHeaders.setContentType(MediaType.MULTIPART_MIXED);
                 * restTemplate.postForLocation("https://example.com/myFileUpload",
                 * new HttpEntity&lt;&gt;(parts, requestHeaders));</pre>
                 * <p>The following snippet shows how to do a file upload using the
                 * {@code "multipart/related"} content type.
                 * <pre class="code">
                 * MediaType multipartRelated = new MediaType("multipart", "related");
                 * restTemplate.getMessageConverters().stream()
                 * .filter(FormHttpMessageConverter.class::isInstance)
                 * .map(FormHttpMessageConverter.class::cast)
                 * .findFirst()
                 * .orElseThrow(() -&gt; new IllegalStateException("Failed to find FormHttpMessageConverter"))
                 * .addSupportedMediaTypes(multipartRelated);
                 * MultiValueMap&lt;String, Object&gt; parts = new LinkedMultiValueMap&lt;&gt;();
                 * parts.add("field 1", "value 1");
                 * parts.add("file", new ClassPathResource("myFile.jpg"));
                 * HttpHeaders requestHeaders = new HttpHeaders();
                 * requestHeaders.setContentType(multipartRelated);
                 * restTemplate.postForLocation("https://example.com/myFileUpload",
                 * new HttpEntity&lt;&gt;(parts, requestHeaders));</pre>
                 * <h3>Miscellaneous</h3>
                 * <p>Some methods in this class were inspired by
                 * {@code org.apache.commons.httpclient.methods.multipart.MultipartRequestEntity}.
                 * @author Arjen Poutsma
                 * @author Rossen Stoyanchev
                 * @author Juergen Hoeller
                 * @author Sam Brannen
                 * @since 3.0
                 * @see org.springframework.http.converter.support.AllEncompassingFormHttpMessageConverter
                 * @see org.springframework.util.MultiValueMap
                 */
                // @ts-ignore
                class FormHttpMessageConverter extends java.lang.Object implements org.springframework.http.converter.HttpMessageConverter<object> {
                    // @ts-ignore
                    constructor()
                    /**
                     * The default charset used by the converter.
                     */
                    // @ts-ignore
                    public static readonly DEFAULT_CHARSET: java.nio.charset.Charset
                    /**
                     * Set the list of {@link MediaType} objects supported by this converter.
                     * @see #addSupportedMediaTypes(MediaType...)
                     * @see #getSupportedMediaTypes()
                     */
                    // @ts-ignore
                    public setSupportedMediaTypes(supportedMediaTypes: java.util.List<org.springframework.http.MediaType> | Array<org.springframework.http.MediaType>): void
                    /**
                     * Add {@link MediaType} objects to be supported by this converter.
                     * <p>The supplied {@code MediaType} objects will be appended to the list
                     * of {@linkplain #getSupportedMediaTypes() supported MediaType objects}.
                     * @param supportedMediaTypes a var-args list of {#code MediaType} objects to add
                     * @since 5.2
                     * @see #setSupportedMediaTypes(List)
                     */
                    // @ts-ignore
                    public addSupportedMediaTypes(...supportedMediaTypes: org.springframework.http.MediaType[]): void
                    /**
                     * {@inheritDoc}
                     * @see #setSupportedMediaTypes(List)
                     * @see #addSupportedMediaTypes(MediaType...)
                     */
                    // @ts-ignore
                    public getSupportedMediaTypes(): Array<org.springframework.http.MediaType>
                    /**
                     * Set the message body converters to use. These converters are used to
                     * convert objects to MIME parts.
                     */
                    // @ts-ignore
                    public setPartConverters(partConverters: java.util.List<org.springframework.http.converter.HttpMessageConverter<any>> | Array<org.springframework.http.converter.HttpMessageConverter<any>>): void
                    /**
                     * Add a message body converter. Such a converter is used to convert objects
                     * to MIME parts.
                     */
                    // @ts-ignore
                    public addPartConverter(partConverter: org.springframework.http.converter.HttpMessageConverter<any>): void
                    /**
                     * Set the default character set to use for reading and writing form data when
                     * the request or response {@code Content-Type} header does not explicitly
                     * specify it.
                     * <p>As of 4.3, this is also used as the default charset for the conversion
                     * of text bodies in a multipart request.
                     * <p>As of 5.0, this is also used for part headers including
                     * {@code Content-Disposition} (and its filename parameter) unless (the mutually
                     * exclusive) {@link #setMultipartCharset multipartCharset} is also set, in
                     * which case part headers are encoded as ASCII and <i>filename</i> is encoded
                     * with the {@code encoded-word} syntax from RFC 2047.
                     * <p>By default this is set to "UTF-8".
                     */
                    // @ts-ignore
                    public setCharset(charset: java.nio.charset.Charset): void
                    /**
                     * Set the character set to use when writing multipart data to encode file
                     * names. Encoding is based on the {@code encoded-word} syntax defined in
                     * RFC 2047 and relies on {@code MimeUtility} from {@code javax.mail}.
                     * <p>As of 5.0 by default part headers, including {@code Content-Disposition}
                     * (and its filename parameter) will be encoded based on the setting of
                     * {@link #setCharset(Charset)} or {@code UTF-8} by default.
                     * @since 4.1.1
                     * @see <a href="https://en.wikipedia.org/wiki/MIME#Encoded-Word">Encoded-Word</a>
                     */
                    // @ts-ignore
                    public setMultipartCharset(charset: java.nio.charset.Charset): void
                    // @ts-ignore
                    public canRead(clazz: java.lang.Class<any>, mediaType: org.springframework.http.MediaType): boolean
                    // @ts-ignore
                    public canWrite(clazz: java.lang.Class<any>, mediaType: org.springframework.http.MediaType): boolean
                    // @ts-ignore
                    public read(clazz: java.lang.Class<any>, inputMessage: org.springframework.http.HttpInputMessage): object
                    // @ts-ignore
                    public write(map: object, contentType: org.springframework.http.MediaType, outputMessage: org.springframework.http.HttpOutputMessage): void
                    /**
                     * Return the content type used to write forms, given the preferred content type.
                     * By default, this method returns the given content type, but adds the
                     * {@linkplain #setCharset(Charset) charset} if it does not have one.
                     * If {@code contentType} is {@code null},
                     * {@code application/x-www-form-urlencoded; charset=UTF-8} is returned.
                     * <p>Subclasses can override this method to change this behavior.
                     * @param contentType the preferred content type (can be {#code null})
                     * @return the content type to be used
                     * @since 5.2.2
                     */
                    // @ts-ignore
                    getFormContentType(contentType: org.springframework.http.MediaType): org.springframework.http.MediaType
                    // @ts-ignore
                    serializeForm(formData: object, charset: java.nio.charset.Charset): string
                    /**
                     * Generate a multipart boundary.
                     * <p>This implementation delegates to
                     * {@link MimeTypeUtils#generateMultipartBoundary()}.
                     */
                    // @ts-ignore
                    generateMultipartBoundary(): number /*byte*/[]
                    /**
                     * Return an {@link HttpEntity} for the given part Object.
                     * @param part the part to return an {#link HttpEntity} for
                     * @return the part Object itself it is an {#link HttpEntity},
                     *  or a newly built {@link HttpEntity} wrapper for that part
                     */
                    // @ts-ignore
                    getHttpEntity(part: java.lang.Object | any): org.springframework.http.HttpEntity<any>
                    /**
                     * Return the filename of the given multipart part. This value will be used for the
                     * {@code Content-Disposition} header.
                     * <p>The default implementation returns {@link Resource#getFilename()} if the part is a
                     * {@code Resource}, and {@code null} in other cases. Can be overridden in subclasses.
                     * @param part the part to determine the file name for
                     * @return the filename, or {#code null} if not known
                     */
                    // @ts-ignore
                    getFilename(part: java.lang.Object | any): string
                }
            }
        }
    }
}
