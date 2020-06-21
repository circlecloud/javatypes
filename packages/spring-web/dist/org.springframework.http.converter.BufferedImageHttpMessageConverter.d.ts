declare namespace org {
    namespace springframework {
        namespace http {
            namespace converter {
                /**
                 * Implementation of {@link HttpMessageConverter} that can read and write
                 * {@link BufferedImage BufferedImages}.
                 * <p>By default, this converter can read all media types that are supported
                 * by the {@linkplain ImageIO#getReaderMIMETypes() registered image readers},
                 * and writes using the media type of the first available
                 * {@linkplain javax.imageio.ImageIO#getWriterMIMETypes() registered image writer}.
                 * The latter can be overridden by setting the
                 * {@link #setDefaultContentType defaultContentType} property.
                 * <p>If the {@link #setCacheDir cacheDir} property is set, this converter
                 * will cache image data.
                 * <p>The {@link #process(ImageReadParam)} and {@link #process(ImageWriteParam)}
                 * template methods allow subclasses to override Image I/O parameters.
                 * @author Arjen Poutsma
                 * @since 3.0
                 */
                // @ts-ignore
                class BufferedImageHttpMessageConverter extends java.lang.Object implements org.springframework.http.converter.HttpMessageConverter<java.awt.image.BufferedImage> {
                    // @ts-ignore
                    constructor()
                    /**
                     * Sets the default {@code Content-Type} to be used for writing.
                     * @throws IllegalArgumentException if the given content type is not supported by the Java Image I/O API
                     */
                    // @ts-ignore
                    public setDefaultContentType(defaultContentType: org.springframework.http.MediaType): void
                    /**
                     * Returns the default {@code Content-Type} to be used for writing.
                     * Called when {@link #write} is invoked without a specified content type parameter.
                     */
                    // @ts-ignore
                    public getDefaultContentType(): org.springframework.http.MediaType
                    /**
                     * Sets the cache directory. If this property is set to an existing directory,
                     * this converter will cache image data.
                     */
                    // @ts-ignore
                    public setCacheDir(cacheDir: java.io.File): void
                    // @ts-ignore
                    public canRead(clazz: java.lang.Class<any>, mediaType: org.springframework.http.MediaType): boolean
                    // @ts-ignore
                    public canWrite(clazz: java.lang.Class<any>, mediaType: org.springframework.http.MediaType): boolean
                    // @ts-ignore
                    public getSupportedMediaTypes(): Array<org.springframework.http.MediaType>
                    // @ts-ignore
                    public read(clazz: java.lang.Class<any>, inputMessage: org.springframework.http.HttpInputMessage): java.awt.image.BufferedImage
                    // @ts-ignore
                    public write(image: java.awt.image.BufferedImage, contentType: org.springframework.http.MediaType, outputMessage: org.springframework.http.HttpOutputMessage): void
                    /**
                     * Template method that allows for manipulating the {@link ImageReadParam}
                     * before it is used to read an image.
                     * <p>The default implementation is empty.
                     */
                    // @ts-ignore
                    process(irp: javax.imageio.ImageReadParam): void
                    /**
                     * Template method that allows for manipulating the {@link ImageWriteParam}
                     * before it is used to write an image.
                     * <p>The default implementation is empty.
                     */
                    // @ts-ignore
                    process(iwp: javax.imageio.ImageWriteParam): void
                }
            }
        }
    }
}
