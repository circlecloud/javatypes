declare namespace javax {
    namespace imageio {
        /**
         * An abstract superclass for parsing and decoding of images.  This
         * class must be subclassed by classes that read in images in the
         * context of the Java Image I/O framework.
         * <p> <code>ImageReader</code> objects are normally instantiated by
         * the service provider interface (SPI) class for the specific format.
         * Service provider classes (e.g., instances of
         * <code>ImageReaderSpi</code>) are registered with the
         * <code>IIORegistry</code>, which uses them for format recognition
         * and presentation of available format readers and writers.
         * <p> When an input source is set (using the <code>setInput</code>
         * method), it may be marked as "seek forward only".  This setting
         * means that images contained within the input source will only be
         * read in order, possibly allowing the reader to avoid caching
         * portions of the input containing data associated with images that
         * have been read previously.
         * @see ImageWriter
         * @see javax.imageio.spi.IIORegistry
         * @see javax.imageio.spi.ImageReaderSpi
         */
        // @ts-ignore
        abstract class ImageReader extends java.lang.Object {
            /**
             * Constructs an <code>ImageReader</code> and sets its
             * <code>originatingProvider</code> field to the supplied value.
             * <p> Subclasses that make use of extensions should provide a
             * constructor with signature <code>(ImageReaderSpi,
             * Object)</code> in order to retrieve the extension object.  If
             * the extension object is unsuitable, an
             * <code>IllegalArgumentException</code> should be thrown.
             * @param originatingProvider the <code>ImageReaderSpi</code> that is
             *  invoking this constructor, or <code>null</code>.
             */
            // @ts-ignore
            constructor(originatingProvider: javax.imageio.spi.ImageReaderSpi)
            /**
             * The <code>ImageReaderSpi</code> that instantiated this object,
             * or <code>null</code> if its identity is not known or none
             * exists.  By default it is initialized to <code>null</code>.
             */
            // @ts-ignore
            originatingProvider: javax.imageio.spi.ImageReaderSpi
            /**
             * The <code>ImageInputStream</code> or other
             * <code>Object</code> by <code>setInput</code> and retrieved
             * by <code>getInput</code>.  By default it is initialized to
             * <code>null</code>.
             */
            // @ts-ignore
            input: java.lang.Object | any
            /**
             * <code>true</code> if the current input source has been marked
             * as allowing only forward seeking by <code>setInput</code>.  By
             * default, the value is <code>false</code>.
             * @see #minIndex
             * @see #setInput
             */
            // @ts-ignore
            seekForwardOnly: boolean
            /**
             * <code>true</code> if the current input source has been marked
             * as allowing metadata to be ignored by <code>setInput</code>.
             * By default, the value is <code>false</code>.
             * @see #setInput
             */
            // @ts-ignore
            ignoreMetadata: boolean
            /**
             * The smallest valid index for reading, initially 0.  When
             * <code>seekForwardOnly</code> is <code>true</code>, various methods
             * may throw an <code>IndexOutOfBoundsException</code> on an
             * attempt to access data associate with an image having a lower
             * index.
             * @see #seekForwardOnly
             * @see #setInput
             */
            // @ts-ignore
            minIndex: number /*int*/
            /**
             * An array of <code>Locale</code>s which may be used to localize
             * warning messages, or <code>null</code> if localization is not
             * supported.
             */
            // @ts-ignore
            availableLocales: java.util.Locale[]
            /**
             * The current <code>Locale</code> to be used for localization, or
             * <code>null</code> if none has been set.
             */
            // @ts-ignore
            locale: java.util.Locale
            /**
             * A <code>List</code> of currently registered
             * <code>IIOReadWarningListener</code>s, initialized by default to
             * <code>null</code>, which is synonymous with an empty
             * <code>List</code>.
             */
            // @ts-ignore
            warningListeners: java.util.List<javax.imageio.event.IIOReadWarningListener> | Array<javax.imageio.event.IIOReadWarningListener>
            /**
             * A <code>List</code> of the <code>Locale</code>s associated with
             * each currently registered <code>IIOReadWarningListener</code>,
             * initialized by default to <code>null</code>, which is
             * synonymous with an empty <code>List</code>.
             */
            // @ts-ignore
            warningLocales: java.util.List<java.util.Locale> | Array<java.util.Locale>
            /**
             * A <code>List</code> of currently registered
             * <code>IIOReadProgressListener</code>s, initialized by default
             * to <code>null</code>, which is synonymous with an empty
             * <code>List</code>.
             */
            // @ts-ignore
            progressListeners: java.util.List<javax.imageio.event.IIOReadProgressListener> | Array<javax.imageio.event.IIOReadProgressListener>
            /**
             * A <code>List</code> of currently registered
             * <code>IIOReadUpdateListener</code>s, initialized by default to
             * <code>null</code>, which is synonymous with an empty
             * <code>List</code>.
             */
            // @ts-ignore
            updateListeners: java.util.List<javax.imageio.event.IIOReadUpdateListener> | Array<javax.imageio.event.IIOReadUpdateListener>
            /**
             * Returns a <code>String</code> identifying the format of the
             * input source.
             * <p> The default implementation returns
             * <code>originatingProvider.getFormatNames()[0]</code>.
             * Implementations that may not have an originating service
             * provider, or which desire a different naming policy should
             * override this method.
             * @exception IOException if an error occurs reading the
             *  information from the input source.
             * @return the format name, as a <code>String</code>.
             */
            // @ts-ignore
            public getFormatName(): string
            /**
             * Returns the <code>ImageReaderSpi</code> that was passed in on
             * the constructor.  Note that this value may be <code>null</code>.
             * @return an <code>ImageReaderSpi</code>, or <code>null</code>.
             * @see ImageReaderSpi
             */
            // @ts-ignore
            public getOriginatingProvider(): javax.imageio.spi.ImageReaderSpi
            /**
             * Sets the input source to use to the given
             * <code>ImageInputStream</code> or other <code>Object</code>.
             * The input source must be set before any of the query or read
             * methods are used.  If <code>input</code> is <code>null</code>,
             * any currently set input source will be removed.  In any case,
             * the value of <code>minIndex</code> will be initialized to 0.
             * <p> The <code>seekForwardOnly</code> parameter controls whether
             * the value returned by <code>getMinIndex</code> will be
             * increased as each image (or thumbnail, or image metadata) is
             * read.  If <code>seekForwardOnly</code> is true, then a call to
             * <code>read(index)</code> will throw an
             * <code>IndexOutOfBoundsException</code> if {@code index < this.minIndex};
             * otherwise, the value of
             * <code>minIndex</code> will be set to <code>index</code>.  If
             * <code>seekForwardOnly</code> is <code>false</code>, the value of
             * <code>minIndex</code> will remain 0 regardless of any read
             * operations.
             * <p> The <code>ignoreMetadata</code> parameter, if set to
             * <code>true</code>, allows the reader to disregard any metadata
             * encountered during the read.  Subsequent calls to the
             * <code>getStreamMetadata</code> and
             * <code>getImageMetadata</code> methods may return
             * <code>null</code>, and an <code>IIOImage</code> returned from
             * <code>readAll</code> may return <code>null</code> from their
             * <code>getMetadata</code> method.  Setting this parameter may
             * allow the reader to work more efficiently.  The reader may
             * choose to disregard this setting and return metadata normally.
             * <p> Subclasses should take care to remove any cached
             * information based on the previous stream, such as header
             * information or partially decoded image data.
             * <p> Use of a general <code>Object</code> other than an
             * <code>ImageInputStream</code> is intended for readers that
             * interact directly with a capture device or imaging protocol.
             * The set of legal classes is advertised by the reader's service
             * provider's <code>getInputTypes</code> method; most readers
             * will return a single-element array containing only
             * <code>ImageInputStream.class</code> to indicate that they
             * accept only an <code>ImageInputStream</code>.
             * <p> The default implementation checks the <code>input</code>
             * argument against the list returned by
             * <code>originatingProvider.getInputTypes()</code> and fails
             * if the argument is not an instance of one of the classes
             * in the list.  If the originating provider is set to
             * <code>null</code>, the input is accepted only if it is an
             * <code>ImageInputStream</code>.
             * @param input the <code>ImageInputStream</code> or other
             *  <code>Object</code> to use for future decoding.
             * @param seekForwardOnly if <code>true</code>, images and metadata
             *  may only be read in ascending order from this input source.
             * @param ignoreMetadata if <code>true</code>, metadata
             *  may be ignored during reads.
             * @exception IllegalArgumentException if <code>input</code> is
             *  not an instance of one of the classes returned by the
             *  originating service provider's <code>getInputTypes</code>
             *  method, or is not an <code>ImageInputStream</code>.
             * @see ImageInputStream
             * @see #getInput
             * @see javax.imageio.spi.ImageReaderSpi#getInputTypes
             */
            // @ts-ignore
            public setInput(input: java.lang.Object | any, seekForwardOnly: boolean, ignoreMetadata: boolean): void
            /**
             * Sets the input source to use to the given
             * <code>ImageInputStream</code> or other <code>Object</code>.
             * The input source must be set before any of the query or read
             * methods are used.  If <code>input</code> is <code>null</code>,
             * any currently set input source will be removed.  In any case,
             * the value of <code>minIndex</code> will be initialized to 0.
             * <p> The <code>seekForwardOnly</code> parameter controls whether
             * the value returned by <code>getMinIndex</code> will be
             * increased as each image (or thumbnail, or image metadata) is
             * read.  If <code>seekForwardOnly</code> is true, then a call to
             * <code>read(index)</code> will throw an
             * <code>IndexOutOfBoundsException</code> if {@code index < this.minIndex};
             * otherwise, the value of
             * <code>minIndex</code> will be set to <code>index</code>.  If
             * <code>seekForwardOnly</code> is <code>false</code>, the value of
             * <code>minIndex</code> will remain 0 regardless of any read
             * operations.
             * <p> This method is equivalent to <code>setInput(input,
             * seekForwardOnly, false)</code>.
             * @param input the <code>ImageInputStream</code> or other
             *  <code>Object</code> to use for future decoding.
             * @param seekForwardOnly if <code>true</code>, images and metadata
             *  may only be read in ascending order from this input source.
             * @exception IllegalArgumentException if <code>input</code> is
             *  not an instance of one of the classes returned by the
             *  originating service provider's <code>getInputTypes</code>
             *  method, or is not an <code>ImageInputStream</code>.
             * @see #getInput
             */
            // @ts-ignore
            public setInput(input: java.lang.Object | any, seekForwardOnly: boolean): void
            /**
             * Sets the input source to use to the given
             * <code>ImageInputStream</code> or other <code>Object</code>.
             * The input source must be set before any of the query or read
             * methods are used.  If <code>input</code> is <code>null</code>,
             * any currently set input source will be removed.  In any case,
             * the value of <code>minIndex</code> will be initialized to 0.
             * <p> This method is equivalent to <code>setInput(input, false,
             * false)</code>.
             * @param input the <code>ImageInputStream</code> or other
             *  <code>Object</code> to use for future decoding.
             * @exception IllegalArgumentException if <code>input</code> is
             *  not an instance of one of the classes returned by the
             *  originating service provider's <code>getInputTypes</code>
             *  method, or is not an <code>ImageInputStream</code>.
             * @see #getInput
             */
            // @ts-ignore
            public setInput(input: java.lang.Object | any): void
            /**
             * Returns the <code>ImageInputStream</code> or other
             * <code>Object</code> previously set as the input source.  If the
             * input source has not been set, <code>null</code> is returned.
             * @return the <code>Object</code> that will be used for future
             *  decoding, or <code>null</code>.
             * @see ImageInputStream
             * @see #setInput
             */
            // @ts-ignore
            public getInput(): any
            /**
             * Returns <code>true</code> if the current input source has been
             * marked as seek forward only by passing <code>true</code> as the
             * <code>seekForwardOnly</code> argument to the
             * <code>setInput</code> method.
             * @return <code>true</code> if the input source is seek forward
             *  only.
             * @see #setInput
             */
            // @ts-ignore
            public isSeekForwardOnly(): boolean
            /**
             * Returns <code>true</code> if the current input source has been
             * marked as allowing metadata to be ignored by passing
             * <code>true</code> as the <code>ignoreMetadata</code> argument
             * to the <code>setInput</code> method.
             * @return <code>true</code> if the metadata may be ignored.
             * @see #setInput
             */
            // @ts-ignore
            public isIgnoringMetadata(): boolean
            /**
             * Returns the lowest valid index for reading an image, thumbnail,
             * or image metadata.  If <code>seekForwardOnly()</code> is
             * <code>false</code>, this value will typically remain 0,
             * indicating that random access is possible.  Otherwise, it will
             * contain the value of the most recently accessed index, and
             * increase in a monotonic fashion.
             * @return the minimum legal index for reading.
             */
            // @ts-ignore
            public getMinIndex(): number /*int*/
            /**
             * Returns an array of <code>Locale</code>s that may be used to
             * localize warning listeners and compression settings.  A return
             * value of <code>null</code> indicates that localization is not
             * supported.
             * <p> The default implementation returns a clone of the
             * <code>availableLocales</code> instance variable if it is
             * non-<code>null</code>, or else returns <code>null</code>.
             * @return an array of <code>Locale</code>s that may be used as
             *  arguments to <code>setLocale</code>, or <code>null</code>.
             */
            // @ts-ignore
            public getAvailableLocales(): java.util.Locale[]
            /**
             * Sets the current <code>Locale</code> of this
             * <code>ImageReader</code> to the given value.  A value of
             * <code>null</code> removes any previous setting, and indicates
             * that the reader should localize as it sees fit.
             * @param locale the desired <code>Locale</code>, or
             *  <code>null</code>.
             * @exception IllegalArgumentException if <code>locale</code> is
             *  non-<code>null</code> but is not one of the values returned by
             *  <code>getAvailableLocales</code>.
             * @see #getLocale
             */
            // @ts-ignore
            public setLocale(locale: java.util.Locale): void
            /**
             * Returns the currently set <code>Locale</code>, or
             * <code>null</code> if none has been set.
             * @return the current <code>Locale</code>, or <code>null</code>.
             * @see #setLocale
             */
            // @ts-ignore
            public getLocale(): java.util.Locale
            /**
             * Returns the number of images, not including thumbnails, available
             * from the current input source.
             * <p> Note that some image formats (such as animated GIF) do not
             * specify how many images are present in the stream.  Thus
             * determining the number of images will require the entire stream
             * to be scanned and may require memory for buffering.  If images
             * are to be processed in order, it may be more efficient to
             * simply call <code>read</code> with increasing indices until an
             * <code>IndexOutOfBoundsException</code> is thrown to indicate
             * that no more images are available.  The
             * <code>allowSearch</code> parameter may be set to
             * <code>false</code> to indicate that an exhaustive search is not
             * desired; the return value will be <code>-1</code> to indicate
             * that a search is necessary.  If the input has been specified
             * with <code>seekForwardOnly</code> set to <code>true</code>,
             * this method throws an <code>IllegalStateException</code> if
             * <code>allowSearch</code> is set to <code>true</code>.
             * @param allowSearch if <code>true</code>, the true number of
             *  images will be returned even if a search is required.  If
             *  <code>false</code>, the reader may return <code>-1</code>
             *  without performing the search.
             * @return the number of images, as an <code>int</code>, or
             *  <code>-1</code> if <code>allowSearch</code> is
             *  <code>false</code> and a search would be required.
             * @exception IllegalStateException if the input source has not been set,
             *  or if the input has been specified with <code>seekForwardOnly</code>
             *  set to <code>true</code>.
             * @exception IOException if an error occurs reading the
             *  information from the input source.
             * @see #setInput
             */
            // @ts-ignore
            public abstract getNumImages(allowSearch: boolean): number /*int*/
            /**
             * Returns the width in pixels of the given image within the input
             * source.
             * <p> If the image can be rendered to a user-specified size, then
             * this method returns the default width.
             * @param imageIndex the index of the image to be queried.
             * @return the width of the image, as an <code>int</code>.
             * @exception IllegalStateException if the input source has not been set.
             * @exception IndexOutOfBoundsException if the supplied index is
             *  out of bounds.
             * @exception IOException if an error occurs reading the width
             *  information from the input source.
             */
            // @ts-ignore
            public abstract getWidth(imageIndex: number /*int*/): number /*int*/
            /**
             * Returns the height in pixels of the given image within the
             * input source.
             * <p> If the image can be rendered to a user-specified size, then
             * this method returns the default height.
             * @param imageIndex the index of the image to be queried.
             * @return the height of the image, as an <code>int</code>.
             * @exception IllegalStateException if the input source has not been set.
             * @exception IndexOutOfBoundsException if the supplied index is
             *  out of bounds.
             * @exception IOException if an error occurs reading the height
             *  information from the input source.
             */
            // @ts-ignore
            public abstract getHeight(imageIndex: number /*int*/): number /*int*/
            /**
             * Returns <code>true</code> if the storage format of the given
             * image places no inherent impediment on random access to pixels.
             * For most compressed formats, such as JPEG, this method should
             * return <code>false</code>, as a large section of the image in
             * addition to the region of interest may need to be decoded.
             * <p> This is merely a hint for programs that wish to be
             * efficient; all readers must be able to read arbitrary regions
             * as specified in an <code>ImageReadParam</code>.
             * <p> Note that formats that return <code>false</code> from
             * this method may nonetheless allow tiling (<i>e.g.</i> Restart
             * Markers in JPEG), and random access will likely be reasonably
             * efficient on tiles.  See {@link #isImageTiled isImageTiled}.
             * <p> A reader for which all images are guaranteed to support
             * easy random access, or are guaranteed not to support easy
             * random access, may return <code>true</code> or
             * <code>false</code> respectively without accessing any image
             * data.  In such cases, it is not necessary to throw an exception
             * even if no input source has been set or the image index is out
             * of bounds.
             * <p> The default implementation returns <code>false</code>.
             * @param imageIndex the index of the image to be queried.
             * @return <code>true</code> if reading a region of interest of
             *  the given image is likely to be efficient.
             * @exception IllegalStateException if an input source is required
             *  to determine the return value, but none has been set.
             * @exception IndexOutOfBoundsException if an image must be
             *  accessed to determine the return value, but the supplied index
             *  is out of bounds.
             * @exception IOException if an error occurs during reading.
             */
            // @ts-ignore
            public isRandomAccessEasy(imageIndex: number /*int*/): boolean
            /**
             * Returns the aspect ratio of the given image (that is, its width
             * divided by its height) as a <code>float</code>.  For images
             * that are inherently resizable, this method provides a way to
             * determine the appropriate width given a desired height, or vice
             * versa.  For non-resizable images, the true width and height
             * are used.
             * <p> The default implementation simply returns
             * <code>(float)getWidth(imageIndex)/getHeight(imageIndex)</code>.
             * @param imageIndex the index of the image to be queried.
             * @return a <code>float</code> indicating the aspect ratio of the
             *  given image.
             * @exception IllegalStateException if the input source has not been set.
             * @exception IndexOutOfBoundsException if the supplied index is
             *  out of bounds.
             * @exception IOException if an error occurs during reading.
             */
            // @ts-ignore
            public getAspectRatio(imageIndex: number /*int*/): number /*float*/
            /**
             * Returns an <code>ImageTypeSpecifier</code> indicating the
             * <code>SampleModel</code> and <code>ColorModel</code> which most
             * closely represents the "raw" internal format of the image.  For
             * example, for a JPEG image the raw type might have a YCbCr color
             * space even though the image would conventionally be transformed
             * into an RGB color space prior to display.  The returned value
             * should also be included in the list of values returned by
             * <code>getImageTypes</code>.
             * <p> The default implementation simply returns the first entry
             * from the list provided by <code>getImageType</code>.
             * @param imageIndex the index of the image to be queried.
             * @return an <code>ImageTypeSpecifier</code>.
             * @exception IllegalStateException if the input source has not been set.
             * @exception IndexOutOfBoundsException if the supplied index is
             *  out of bounds.
             * @exception IOException if an error occurs reading the format
             *  information from the input source.
             */
            // @ts-ignore
            public getRawImageType(imageIndex: number /*int*/): javax.imageio.ImageTypeSpecifier
            /**
             * Returns an <code>Iterator</code> containing possible image
             * types to which the given image may be decoded, in the form of
             * <code>ImageTypeSpecifiers</code>s.  At least one legal image
             * type will be returned.
             * <p> The first element of the iterator should be the most
             * "natural" type for decoding the image with as little loss as
             * possible.  For example, for a JPEG image the first entry should
             * be an RGB image, even though the image data is stored
             * internally in a YCbCr color space.
             * @param imageIndex the index of the image to be
             *  <code>retrieved</code>.
             * @return an <code>Iterator</code> containing at least one
             *  <code>ImageTypeSpecifier</code> representing suggested image
             *  types for decoding the current given image.
             * @exception IllegalStateException if the input source has not been set.
             * @exception IndexOutOfBoundsException if the supplied index is
             *  out of bounds.
             * @exception IOException if an error occurs reading the format
             *  information from the input source.
             * @see ImageReadParam#setDestination(BufferedImage)
             * @see ImageReadParam#setDestinationType(ImageTypeSpecifier)
             */
            // @ts-ignore
            public abstract getImageTypes(imageIndex: number /*int*/): java.util.Iterator<javax.imageio.ImageTypeSpecifier>
            /**
             * Returns a default <code>ImageReadParam</code> object
             * appropriate for this format.  All subclasses should define a
             * set of default values for all parameters and return them with
             * this call.  This method may be called before the input source
             * is set.
             * <p> The default implementation constructs and returns a new
             * <code>ImageReadParam</code> object that does not allow source
             * scaling (<i>i.e.</i>, it returns <code>new
             * ImageReadParam()</code>.
             * @return an <code>ImageReadParam</code> object which may be used
             *  to control the decoding process using a set of default settings.
             */
            // @ts-ignore
            public getDefaultReadParam(): javax.imageio.ImageReadParam
            /**
             * Returns an <code>IIOMetadata</code> object representing the
             * metadata associated with the input source as a whole (i.e., not
             * associated with any particular image), or <code>null</code> if
             * the reader does not support reading metadata, is set to ignore
             * metadata, or if no metadata is available.
             * @return an <code>IIOMetadata</code> object, or <code>null</code>.
             * @exception IOException if an error occurs during reading.
             */
            // @ts-ignore
            public abstract getStreamMetadata(): javax.imageio.metadata.IIOMetadata
            /**
             * Returns an <code>IIOMetadata</code> object representing the
             * metadata associated with the input source as a whole (i.e.,
             * not associated with any particular image).  If no such data
             * exists, <code>null</code> is returned.
             * <p> The resulting metadata object is only responsible for
             * returning documents in the format named by
             * <code>formatName</code>.  Within any documents that are
             * returned, only nodes whose names are members of
             * <code>nodeNames</code> are required to be returned.  In this
             * way, the amount of metadata processing done by the reader may
             * be kept to a minimum, based on what information is actually
             * needed.
             * <p> If <code>formatName</code> is not the name of a supported
             * metadata format, <code>null</code> is returned.
             * <p> In all cases, it is legal to return a more capable metadata
             * object than strictly necessary.  The format name and node names
             * are merely hints that may be used to reduce the reader's
             * workload.
             * <p> The default implementation simply returns the result of
             * calling <code>getStreamMetadata()</code>, after checking that
             * the format name is supported.  If it is not,
             * <code>null</code> is returned.
             * @param formatName a metadata format name that may be used to retrieve
             *  a document from the returned <code>IIOMetadata</code> object.
             * @param nodeNames a <code>Set</code> containing the names of
             *  nodes that may be contained in a retrieved document.
             * @return an <code>IIOMetadata</code> object, or <code>null</code>.
             * @exception IllegalArgumentException if <code>formatName</code>
             *  is <code>null</code>.
             * @exception IllegalArgumentException if <code>nodeNames</code>
             *  is <code>null</code>.
             * @exception IOException if an error occurs during reading.
             */
            // @ts-ignore
            public getStreamMetadata(formatName: java.lang.String | string, nodeNames: java.util.Set<java.lang.String | string> | Array<java.lang.String | string>): javax.imageio.metadata.IIOMetadata
            /**
             * Returns an <code>IIOMetadata</code> object containing metadata
             * associated with the given image, or <code>null</code> if the
             * reader does not support reading metadata, is set to ignore
             * metadata, or if no metadata is available.
             * @param imageIndex the index of the image whose metadata is to
             *  be retrieved.
             * @return an <code>IIOMetadata</code> object, or
             *  <code>null</code>.
             * @exception IllegalStateException if the input source has not been
             *  set.
             * @exception IndexOutOfBoundsException if the supplied index is
             *  out of bounds.
             * @exception IOException if an error occurs during reading.
             */
            // @ts-ignore
            public abstract getImageMetadata(imageIndex: number /*int*/): javax.imageio.metadata.IIOMetadata
            /**
             * Returns an <code>IIOMetadata</code> object representing the
             * metadata associated with the given image, or <code>null</code>
             * if the reader does not support reading metadata or none
             * is available.
             * <p> The resulting metadata object is only responsible for
             * returning documents in the format named by
             * <code>formatName</code>.  Within any documents that are
             * returned, only nodes whose names are members of
             * <code>nodeNames</code> are required to be returned.  In this
             * way, the amount of metadata processing done by the reader may
             * be kept to a minimum, based on what information is actually
             * needed.
             * <p> If <code>formatName</code> is not the name of a supported
             * metadata format, <code>null</code> may be returned.
             * <p> In all cases, it is legal to return a more capable metadata
             * object than strictly necessary.  The format name and node names
             * are merely hints that may be used to reduce the reader's
             * workload.
             * <p> The default implementation simply returns the result of
             * calling <code>getImageMetadata(imageIndex)</code>, after
             * checking that the format name is supported.  If it is not,
             * <code>null</code> is returned.
             * @param imageIndex the index of the image whose metadata is to
             *  be retrieved.
             * @param formatName a metadata format name that may be used to retrieve
             *  a document from the returned <code>IIOMetadata</code> object.
             * @param nodeNames a <code>Set</code> containing the names of
             *  nodes that may be contained in a retrieved document.
             * @return an <code>IIOMetadata</code> object, or <code>null</code>.
             * @exception IllegalStateException if the input source has not been
             *  set.
             * @exception IndexOutOfBoundsException if the supplied index is
             *  out of bounds.
             * @exception IllegalArgumentException if <code>formatName</code>
             *  is <code>null</code>.
             * @exception IllegalArgumentException if <code>nodeNames</code>
             *  is <code>null</code>.
             * @exception IOException if an error occurs during reading.
             */
            // @ts-ignore
            public getImageMetadata(imageIndex: number /*int*/, formatName: java.lang.String | string, nodeNames: java.util.Set<java.lang.String | string> | Array<java.lang.String | string>): javax.imageio.metadata.IIOMetadata
            /**
             * Reads the image indexed by <code>imageIndex</code> and returns
             * it as a complete <code>BufferedImage</code>, using a default
             * <code>ImageReadParam</code>.  This is a convenience method
             * that calls <code>read(imageIndex, null)</code>.
             * <p> The image returned will be formatted according to the first
             * <code>ImageTypeSpecifier</code> returned from
             * <code>getImageTypes</code>.
             * <p> Any registered <code>IIOReadProgressListener</code> objects
             * will be notified by calling their <code>imageStarted</code>
             * method, followed by calls to their <code>imageProgress</code>
             * method as the read progresses.  Finally their
             * <code>imageComplete</code> method will be called.
             * <code>IIOReadUpdateListener</code> objects may be updated at
             * other times during the read as pixels are decoded.  Finally,
             * <code>IIOReadWarningListener</code> objects will receive
             * notification of any non-fatal warnings that occur during
             * decoding.
             * @param imageIndex the index of the image to be retrieved.
             * @return the desired portion of the image as a
             *  <code>BufferedImage</code>.
             * @exception IllegalStateException if the input source has not been
             *  set.
             * @exception IndexOutOfBoundsException if the supplied index is
             *  out of bounds.
             * @exception IOException if an error occurs during reading.
             */
            // @ts-ignore
            public read(imageIndex: number /*int*/): java.awt.image.BufferedImage
            /**
             * Reads the image indexed by <code>imageIndex</code> and returns
             * it as a complete <code>BufferedImage</code>, using a supplied
             * <code>ImageReadParam</code>.
             * <p> The actual <code>BufferedImage</code> returned will be
             * chosen using the algorithm defined by the
             * <code>getDestination</code> method.
             * <p> Any registered <code>IIOReadProgressListener</code> objects
             * will be notified by calling their <code>imageStarted</code>
             * method, followed by calls to their <code>imageProgress</code>
             * method as the read progresses.  Finally their
             * <code>imageComplete</code> method will be called.
             * <code>IIOReadUpdateListener</code> objects may be updated at
             * other times during the read as pixels are decoded.  Finally,
             * <code>IIOReadWarningListener</code> objects will receive
             * notification of any non-fatal warnings that occur during
             * decoding.
             * <p> The set of source bands to be read and destination bands to
             * be written is determined by calling <code>getSourceBands</code>
             * and <code>getDestinationBands</code> on the supplied
             * <code>ImageReadParam</code>.  If the lengths of the arrays
             * returned by these methods differ, the set of source bands
             * contains an index larger that the largest available source
             * index, or the set of destination bands contains an index larger
             * than the largest legal destination index, an
             * <code>IllegalArgumentException</code> is thrown.
             * <p> If the supplied <code>ImageReadParam</code> contains
             * optional setting values not supported by this reader (<i>e.g.</i>
             * source render size or any format-specific settings), they will
             * be ignored.
             * @param imageIndex the index of the image to be retrieved.
             * @param param an <code>ImageReadParam</code> used to control
             *  the reading process, or <code>null</code>.
             * @return the desired portion of the image as a
             *  <code>BufferedImage</code>.
             * @exception IllegalStateException if the input source has not been
             *  set.
             * @exception IndexOutOfBoundsException if the supplied index is
             *  out of bounds.
             * @exception IllegalArgumentException if the set of source and
             *  destination bands specified by
             *  <code>param.getSourceBands</code> and
             *  <code>param.getDestinationBands</code> differ in length or
             *  include indices that are out of bounds.
             * @exception IllegalArgumentException if the resulting image would
             *  have a width or height less than 1.
             * @exception IOException if an error occurs during reading.
             */
            // @ts-ignore
            public abstract read(imageIndex: number /*int*/, param: javax.imageio.ImageReadParam): java.awt.image.BufferedImage
            /**
             * Reads the image indexed by <code>imageIndex</code> and returns
             * an <code>IIOImage</code> containing the image, thumbnails, and
             * associated image metadata, using a supplied
             * <code>ImageReadParam</code>.
             * <p> The actual <code>BufferedImage</code> referenced by the
             * returned <code>IIOImage</code> will be chosen using the
             * algorithm defined by the <code>getDestination</code> method.
             * <p> Any registered <code>IIOReadProgressListener</code> objects
             * will be notified by calling their <code>imageStarted</code>
             * method, followed by calls to their <code>imageProgress</code>
             * method as the read progresses.  Finally their
             * <code>imageComplete</code> method will be called.
             * <code>IIOReadUpdateListener</code> objects may be updated at
             * other times during the read as pixels are decoded.  Finally,
             * <code>IIOReadWarningListener</code> objects will receive
             * notification of any non-fatal warnings that occur during
             * decoding.
             * <p> The set of source bands to be read and destination bands to
             * be written is determined by calling <code>getSourceBands</code>
             * and <code>getDestinationBands</code> on the supplied
             * <code>ImageReadParam</code>.  If the lengths of the arrays
             * returned by these methods differ, the set of source bands
             * contains an index larger that the largest available source
             * index, or the set of destination bands contains an index larger
             * than the largest legal destination index, an
             * <code>IllegalArgumentException</code> is thrown.
             * <p> Thumbnails will be returned in their entirety regardless of
             * the region settings.
             * <p> If the supplied <code>ImageReadParam</code> contains
             * optional setting values not supported by this reader (<i>e.g.</i>
             * source render size or any format-specific settings), those
             * values will be ignored.
             * @param imageIndex the index of the image to be retrieved.
             * @param param an <code>ImageReadParam</code> used to control
             *  the reading process, or <code>null</code>.
             * @return an <code>IIOImage</code> containing the desired portion
             *  of the image, a set of thumbnails, and associated image
             *  metadata.
             * @exception IllegalStateException if the input source has not been
             *  set.
             * @exception IndexOutOfBoundsException if the supplied index is
             *  out of bounds.
             * @exception IllegalArgumentException if the set of source and
             *  destination bands specified by
             *  <code>param.getSourceBands</code> and
             *  <code>param.getDestinationBands</code> differ in length or
             *  include indices that are out of bounds.
             * @exception IllegalArgumentException if the resulting image
             *  would have a width or height less than 1.
             * @exception IOException if an error occurs during reading.
             */
            // @ts-ignore
            public readAll(imageIndex: number /*int*/, param: javax.imageio.ImageReadParam): javax.imageio.IIOImage
            /**
             * Returns an <code>Iterator</code> containing all the images,
             * thumbnails, and metadata, starting at the index given by
             * <code>getMinIndex</code>, from the input source in the form of
             * <code>IIOImage</code> objects.  An <code>Iterator</code>
             * containing <code>ImageReadParam</code> objects is supplied; one
             * element is consumed for each image read from the input source
             * until no more images are available.  If the read param
             * <code>Iterator</code> runs out of elements, but there are still
             * more images available from the input source, default read
             * params are used for the remaining images.
             * <p> If <code>params</code> is <code>null</code>, a default read
             * param will be used for all images.
             * <p> The actual <code>BufferedImage</code> referenced by the
             * returned <code>IIOImage</code> will be chosen using the
             * algorithm defined by the <code>getDestination</code> method.
             * <p> Any registered <code>IIOReadProgressListener</code> objects
             * will be notified by calling their <code>sequenceStarted</code>
             * method once.  Then, for each image decoded, there will be a
             * call to <code>imageStarted</code>, followed by calls to
             * <code>imageProgress</code> as the read progresses, and finally
             * to <code>imageComplete</code>.  The
             * <code>sequenceComplete</code> method will be called after the
             * last image has been decoded.
             * <code>IIOReadUpdateListener</code> objects may be updated at
             * other times during the read as pixels are decoded.  Finally,
             * <code>IIOReadWarningListener</code> objects will receive
             * notification of any non-fatal warnings that occur during
             * decoding.
             * <p> The set of source bands to be read and destination bands to
             * be written is determined by calling <code>getSourceBands</code>
             * and <code>getDestinationBands</code> on the supplied
             * <code>ImageReadParam</code>.  If the lengths of the arrays
             * returned by these methods differ, the set of source bands
             * contains an index larger that the largest available source
             * index, or the set of destination bands contains an index larger
             * than the largest legal destination index, an
             * <code>IllegalArgumentException</code> is thrown.
             * <p> Thumbnails will be returned in their entirety regardless of the
             * region settings.
             * <p> If any of the supplied <code>ImageReadParam</code>s contain
             * optional setting values not supported by this reader (<i>e.g.</i>
             * source render size or any format-specific settings), they will
             * be ignored.
             * @param params an <code>Iterator</code> containing
             *  <code>ImageReadParam</code> objects.
             * @return an <code>Iterator</code> representing the
             *  contents of the input source as <code>IIOImage</code>s.
             * @exception IllegalStateException if the input source has not been
             *  set.
             * @exception IllegalArgumentException if any
             *  non-<code>null</code> element of <code>params</code> is not an
             *  <code>ImageReadParam</code>.
             * @exception IllegalArgumentException if the set of source and
             *  destination bands specified by
             *  <code>param.getSourceBands</code> and
             *  <code>param.getDestinationBands</code> differ in length or
             *  include indices that are out of bounds.
             * @exception IllegalArgumentException if a resulting image would
             *  have a width or height less than 1.
             * @exception IOException if an error occurs during reading.
             * @see ImageReadParam
             * @see IIOImage
             */
            // @ts-ignore
            public readAll(params: java.util.Iterator<any>): java.util.Iterator<javax.imageio.IIOImage>
            /**
             * Returns <code>true</code> if this plug-in supports reading
             * just a {@link java.awt.image.Raster Raster} of pixel data.
             * If this method returns <code>false</code>, calls to
             * {@link #readRaster readRaster} or {@link #readTileRaster readTileRaster}
             * will throw an <code>UnsupportedOperationException</code>.
             * <p> The default implementation returns <code>false</code>.
             * @return <code>true</code> if this plug-in supports reading raw
             *  <code>Raster</code>s.
             * @see #readRaster
             * @see #readTileRaster
             */
            // @ts-ignore
            public canReadRaster(): boolean
            /**
             * Returns a new <code>Raster</code> object containing the raw pixel data
             * from the image stream, without any color conversion applied.  The
             * application must determine how to interpret the pixel data by other
             * means.  Any destination or image-type parameters in the supplied
             * <code>ImageReadParam</code> object are ignored, but all other
             * parameters are used exactly as in the {@link #read read}
             * method, except that any destination offset is used as a logical rather
             * than a physical offset.  The size of the returned <code>Raster</code>
             * will always be that of the source region clipped to the actual image.
             * Logical offsets in the stream itself are ignored.
             * <p> This method allows formats that normally apply a color
             * conversion, such as JPEG, and formats that do not normally have an
             * associated colorspace, such as remote sensing or medical imaging data,
             * to provide access to raw pixel data.
             * <p> Any registered <code>readUpdateListener</code>s are ignored, as
             * there is no <code>BufferedImage</code>, but all other listeners are
             * called exactly as they are for the {@link #read read} method.
             * <p> If {@link #canReadRaster canReadRaster()} returns
             * <code>false</code>, this method throws an
             * <code>UnsupportedOperationException</code>.
             * <p> If the supplied <code>ImageReadParam</code> contains
             * optional setting values not supported by this reader (<i>e.g.</i>
             * source render size or any format-specific settings), they will
             * be ignored.
             * <p> The default implementation throws an
             * <code>UnsupportedOperationException</code>.
             * @param imageIndex the index of the image to be read.
             * @param param an <code>ImageReadParam</code> used to control
             *  the reading process, or <code>null</code>.
             * @return the desired portion of the image as a
             *  <code>Raster</code>.
             * @exception UnsupportedOperationException if this plug-in does not
             *  support reading raw <code>Raster</code>s.
             * @exception IllegalStateException if the input source has not been
             *  set.
             * @exception IndexOutOfBoundsException if the supplied index is
             *  out of bounds.
             * @exception IOException if an error occurs during reading.
             * @see #canReadRaster
             * @see #read
             * @see java.awt.image.Raster
             */
            // @ts-ignore
            public readRaster(imageIndex: number /*int*/, param: javax.imageio.ImageReadParam): java.awt.image.Raster
            /**
             * Returns <code>true</code> if the image is organized into
             * <i>tiles</i>, that is, equal-sized non-overlapping rectangles.
             * <p> A reader plug-in may choose whether or not to expose tiling
             * that is present in the image as it is stored.  It may even
             * choose to advertise tiling when none is explicitly present.  In
             * general, tiling should only be advertised if there is some
             * advantage (in speed or space) to accessing individual tiles.
             * Regardless of whether the reader advertises tiling, it must be
             * capable of reading an arbitrary rectangular region specified in
             * an <code>ImageReadParam</code>.
             * <p> A reader for which all images are guaranteed to be tiled,
             * or are guaranteed not to be tiled, may return <code>true</code>
             * or <code>false</code> respectively without accessing any image
             * data.  In such cases, it is not necessary to throw an exception
             * even if no input source has been set or the image index is out
             * of bounds.
             * <p> The default implementation just returns <code>false</code>.
             * @param imageIndex the index of the image to be queried.
             * @return <code>true</code> if the image is tiled.
             * @exception IllegalStateException if an input source is required
             *  to determine the return value, but none has been set.
             * @exception IndexOutOfBoundsException if an image must be
             *  accessed to determine the return value, but the supplied index
             *  is out of bounds.
             * @exception IOException if an error occurs during reading.
             */
            // @ts-ignore
            public isImageTiled(imageIndex: number /*int*/): boolean
            /**
             * Returns the width of a tile in the given image.
             * <p> The default implementation simply returns
             * <code>getWidth(imageIndex)</code>, which is correct for
             * non-tiled images.  Readers that support tiling should override
             * this method.
             * @return the width of a tile.
             * @param imageIndex the index of the image to be queried.
             * @exception IllegalStateException if the input source has not been set.
             * @exception IndexOutOfBoundsException if the supplied index is
             *  out of bounds.
             * @exception IOException if an error occurs during reading.
             */
            // @ts-ignore
            public getTileWidth(imageIndex: number /*int*/): number /*int*/
            /**
             * Returns the height of a tile in the given image.
             * <p> The default implementation simply returns
             * <code>getHeight(imageIndex)</code>, which is correct for
             * non-tiled images.  Readers that support tiling should override
             * this method.
             * @return the height of a tile.
             * @param imageIndex the index of the image to be queried.
             * @exception IllegalStateException if the input source has not been set.
             * @exception IndexOutOfBoundsException if the supplied index is
             *  out of bounds.
             * @exception IOException if an error occurs during reading.
             */
            // @ts-ignore
            public getTileHeight(imageIndex: number /*int*/): number /*int*/
            /**
             * Returns the X coordinate of the upper-left corner of tile (0,
             * 0) in the given image.
             * <p> A reader for which the tile grid X offset always has the
             * same value (usually 0), may return the value without accessing
             * any image data.  In such cases, it is not necessary to throw an
             * exception even if no input source has been set or the image
             * index is out of bounds.
             * <p> The default implementation simply returns 0, which is
             * correct for non-tiled images and tiled images in most formats.
             * Readers that support tiling with non-(0, 0) offsets should
             * override this method.
             * @return the X offset of the tile grid.
             * @param imageIndex the index of the image to be queried.
             * @exception IllegalStateException if an input source is required
             *  to determine the return value, but none has been set.
             * @exception IndexOutOfBoundsException if an image must be
             *  accessed to determine the return value, but the supplied index
             *  is out of bounds.
             * @exception IOException if an error occurs during reading.
             */
            // @ts-ignore
            public getTileGridXOffset(imageIndex: number /*int*/): number /*int*/
            /**
             * Returns the Y coordinate of the upper-left corner of tile (0,
             * 0) in the given image.
             * <p> A reader for which the tile grid Y offset always has the
             * same value (usually 0), may return the value without accessing
             * any image data.  In such cases, it is not necessary to throw an
             * exception even if no input source has been set or the image
             * index is out of bounds.
             * <p> The default implementation simply returns 0, which is
             * correct for non-tiled images and tiled images in most formats.
             * Readers that support tiling with non-(0, 0) offsets should
             * override this method.
             * @return the Y offset of the tile grid.
             * @param imageIndex the index of the image to be queried.
             * @exception IllegalStateException if an input source is required
             *  to determine the return value, but none has been set.
             * @exception IndexOutOfBoundsException if an image must be
             *  accessed to determine the return value, but the supplied index
             *  is out of bounds.
             * @exception IOException if an error occurs during reading.
             */
            // @ts-ignore
            public getTileGridYOffset(imageIndex: number /*int*/): number /*int*/
            /**
             * Reads the tile indicated by the <code>tileX</code> and
             * <code>tileY</code> arguments, returning it as a
             * <code>BufferedImage</code>.  If the arguments are out of range,
             * an <code>IllegalArgumentException</code> is thrown.  If the
             * image is not tiled, the values 0, 0 will return the entire
             * image; any other values will cause an
             * <code>IllegalArgumentException</code> to be thrown.
             * <p> This method is merely a convenience equivalent to calling
             * <code>read(int, ImageReadParam)</code> with a read param
             * specifying a source region having offsets of
             * <code>tileX*getTileWidth(imageIndex)</code>,
             * <code>tileY*getTileHeight(imageIndex)</code> and width and
             * height of <code>getTileWidth(imageIndex)</code>,
             * <code>getTileHeight(imageIndex)</code>; and subsampling
             * factors of 1 and offsets of 0.  To subsample a tile, call
             * <code>read</code> with a read param specifying this region
             * and different subsampling parameters.
             * <p> The default implementation returns the entire image if
             * <code>tileX</code> and <code>tileY</code> are 0, or throws
             * an <code>IllegalArgumentException</code> otherwise.
             * @param imageIndex the index of the image to be retrieved.
             * @param tileX the column index (starting with 0) of the tile
             *  to be retrieved.
             * @param tileY the row index (starting with 0) of the tile
             *  to be retrieved.
             * @return the tile as a <code>BufferedImage</code>.
             * @exception IllegalStateException if the input source has not been
             *  set.
             * @exception IndexOutOfBoundsException if <code>imageIndex</code>
             *  is out of bounds.
             * @exception IllegalArgumentException if the tile indices are
             *  out of bounds.
             * @exception IOException if an error occurs during reading.
             */
            // @ts-ignore
            public readTile(imageIndex: number /*int*/, tileX: number /*int*/, tileY: number /*int*/): java.awt.image.BufferedImage
            /**
             * Returns a new <code>Raster</code> object containing the raw
             * pixel data from the tile, without any color conversion applied.
             * The application must determine how to interpret the pixel data by other
             * means.
             * <p> If {@link #canReadRaster canReadRaster()} returns
             * <code>false</code>, this method throws an
             * <code>UnsupportedOperationException</code>.
             * <p> The default implementation checks if reading
             * <code>Raster</code>s is supported, and if so calls {@link
             * #readRaster readRaster(imageIndex, null)} if
             * <code>tileX</code> and <code>tileY</code> are 0, or throws an
             * <code>IllegalArgumentException</code> otherwise.
             * @param imageIndex the index of the image to be retrieved.
             * @param tileX the column index (starting with 0) of the tile
             *  to be retrieved.
             * @param tileY the row index (starting with 0) of the tile
             *  to be retrieved.
             * @return the tile as a <code>Raster</code>.
             * @exception UnsupportedOperationException if this plug-in does not
             *  support reading raw <code>Raster</code>s.
             * @exception IllegalArgumentException if the tile indices are
             *  out of bounds.
             * @exception IllegalStateException if the input source has not been
             *  set.
             * @exception IndexOutOfBoundsException if <code>imageIndex</code>
             *  is out of bounds.
             * @exception IOException if an error occurs during reading.
             * @see #readTile
             * @see #readRaster
             * @see java.awt.image.Raster
             */
            // @ts-ignore
            public readTileRaster(imageIndex: number /*int*/, tileX: number /*int*/, tileY: number /*int*/): java.awt.image.Raster
            /**
             * Returns a <code>RenderedImage</code> object that contains the
             * contents of the image indexed by <code>imageIndex</code>.  By
             * default, the returned image is simply the
             * <code>BufferedImage</code> returned by <code>read(imageIndex,
             * param)</code>.
             * <p> The semantics of this method may differ from those of the
             * other <code>read</code> methods in several ways.  First, any
             * destination image and/or image type set in the
             * <code>ImageReadParam</code> may be ignored.  Second, the usual
             * listener calls are not guaranteed to be made, or to be
             * meaningful if they are.  This is because the returned image may
             * not be fully populated with pixel data at the time it is
             * returned, or indeed at any time.
             * <p> If the supplied <code>ImageReadParam</code> contains
             * optional setting values not supported by this reader (<i>e.g.</i>
             * source render size or any format-specific settings), they will
             * be ignored.
             * <p> The default implementation just calls
             * {@link #read read(imageIndex, param)}.
             * @param imageIndex the index of the image to be retrieved.
             * @param param an <code>ImageReadParam</code> used to control
             *  the reading process, or <code>null</code>.
             * @return a <code>RenderedImage</code> object providing a view of
             *  the image.
             * @exception IllegalStateException if the input source has not been
             *  set.
             * @exception IndexOutOfBoundsException if the supplied index is
             *  out of bounds.
             * @exception IllegalArgumentException if the set of source and
             *  destination bands specified by
             *  <code>param.getSourceBands</code> and
             *  <code>param.getDestinationBands</code> differ in length or
             *  include indices that are out of bounds.
             * @exception IllegalArgumentException if the resulting image
             *  would have a width or height less than 1.
             * @exception IOException if an error occurs during reading.
             */
            // @ts-ignore
            public readAsRenderedImage(imageIndex: number /*int*/, param: javax.imageio.ImageReadParam): java.awt.image.RenderedImage
            /**
             * Returns <code>true</code> if the image format understood by
             * this reader supports thumbnail preview images associated with
             * it.  The default implementation returns <code>false</code>.
             * <p> If this method returns <code>false</code>,
             * <code>hasThumbnails</code> and <code>getNumThumbnails</code>
             * will return <code>false</code> and <code>0</code>,
             * respectively, and <code>readThumbnail</code> will throw an
             * <code>UnsupportedOperationException</code>, regardless of their
             * arguments.
             * <p> A reader that does not support thumbnails need not
             * implement any of the thumbnail-related methods.
             * @return <code>true</code> if thumbnails are supported.
             */
            // @ts-ignore
            public readerSupportsThumbnails(): boolean
            /**
             * Returns <code>true</code> if the given image has thumbnail
             * preview images associated with it.  If the format does not
             * support thumbnails (<code>readerSupportsThumbnails</code>
             * returns <code>false</code>), <code>false</code> will be
             * returned regardless of whether an input source has been set or
             * whether <code>imageIndex</code> is in bounds.
             * <p> The default implementation returns <code>true</code> if
             * <code>getNumThumbnails</code> returns a value greater than 0.
             * @param imageIndex the index of the image being queried.
             * @return <code>true</code> if the given image has thumbnails.
             * @exception IllegalStateException if the reader supports
             *  thumbnails but the input source has not been set.
             * @exception IndexOutOfBoundsException if the reader supports
             *  thumbnails but <code>imageIndex</code> is out of bounds.
             * @exception IOException if an error occurs during reading.
             */
            // @ts-ignore
            public hasThumbnails(imageIndex: number /*int*/): boolean
            /**
             * Returns the number of thumbnail preview images associated with
             * the given image.  If the format does not support thumbnails,
             * (<code>readerSupportsThumbnails</code> returns
             * <code>false</code>), <code>0</code> will be returned regardless
             * of whether an input source has been set or whether
             * <code>imageIndex</code> is in bounds.
             * <p> The default implementation returns 0 without checking its
             * argument.
             * @param imageIndex the index of the image being queried.
             * @return the number of thumbnails associated with the given
             *  image.
             * @exception IllegalStateException if the reader supports
             *  thumbnails but the input source has not been set.
             * @exception IndexOutOfBoundsException if the reader supports
             *  thumbnails but <code>imageIndex</code> is out of bounds.
             * @exception IOException if an error occurs during reading.
             */
            // @ts-ignore
            public getNumThumbnails(imageIndex: number /*int*/): number /*int*/
            /**
             * Returns the width of the thumbnail preview image indexed by
             * <code>thumbnailIndex</code>, associated with the image indexed
             * by <code>ImageIndex</code>.
             * <p> If the reader does not support thumbnails,
             * (<code>readerSupportsThumbnails</code> returns
             * <code>false</code>), an <code>UnsupportedOperationException</code>
             * will be thrown.
             * <p> The default implementation simply returns
             * <code>readThumbnail(imageindex,
             * thumbnailIndex).getWidth()</code>.  Subclasses should therefore
             * override this method if possible in order to avoid forcing the
             * thumbnail to be read.
             * @param imageIndex the index of the image to be retrieved.
             * @param thumbnailIndex the index of the thumbnail to be retrieved.
             * @return the width of the desired thumbnail as an <code>int</code>.
             * @exception UnsupportedOperationException if thumbnails are not
             *  supported.
             * @exception IllegalStateException if the input source has not been set.
             * @exception IndexOutOfBoundsException if either of the supplied
             *  indices are out of bounds.
             * @exception IOException if an error occurs during reading.
             */
            // @ts-ignore
            public getThumbnailWidth(imageIndex: number /*int*/, thumbnailIndex: number /*int*/): number /*int*/
            /**
             * Returns the height of the thumbnail preview image indexed by
             * <code>thumbnailIndex</code>, associated with the image indexed
             * by <code>ImageIndex</code>.
             * <p> If the reader does not support thumbnails,
             * (<code>readerSupportsThumbnails</code> returns
             * <code>false</code>), an <code>UnsupportedOperationException</code>
             * will be thrown.
             * <p> The default implementation simply returns
             * <code>readThumbnail(imageindex,
             * thumbnailIndex).getHeight()</code>.  Subclasses should
             * therefore override this method if possible in order to avoid
             * forcing the thumbnail to be read.
             * @param imageIndex the index of the image to be retrieved.
             * @param thumbnailIndex the index of the thumbnail to be retrieved.
             * @return the height of the desired thumbnail as an <code>int</code>.
             * @exception UnsupportedOperationException if thumbnails are not
             *  supported.
             * @exception IllegalStateException if the input source has not been set.
             * @exception IndexOutOfBoundsException if either of the supplied
             *  indices are out of bounds.
             * @exception IOException if an error occurs during reading.
             */
            // @ts-ignore
            public getThumbnailHeight(imageIndex: number /*int*/, thumbnailIndex: number /*int*/): number /*int*/
            /**
             * Returns the thumbnail preview image indexed by
             * <code>thumbnailIndex</code>, associated with the image indexed
             * by <code>ImageIndex</code> as a <code>BufferedImage</code>.
             * <p> Any registered <code>IIOReadProgressListener</code> objects
             * will be notified by calling their
             * <code>thumbnailStarted</code>, <code>thumbnailProgress</code>,
             * and <code>thumbnailComplete</code> methods.
             * <p> If the reader does not support thumbnails,
             * (<code>readerSupportsThumbnails</code> returns
             * <code>false</code>), an <code>UnsupportedOperationException</code>
             * will be thrown regardless of whether an input source has been
             * set or whether the indices are in bounds.
             * <p> The default implementation throws an
             * <code>UnsupportedOperationException</code>.
             * @param imageIndex the index of the image to be retrieved.
             * @param thumbnailIndex the index of the thumbnail to be retrieved.
             * @return the desired thumbnail as a <code>BufferedImage</code>.
             * @exception UnsupportedOperationException if thumbnails are not
             *  supported.
             * @exception IllegalStateException if the input source has not been set.
             * @exception IndexOutOfBoundsException if either of the supplied
             *  indices are out of bounds.
             * @exception IOException if an error occurs during reading.
             */
            // @ts-ignore
            public readThumbnail(imageIndex: number /*int*/, thumbnailIndex: number /*int*/): java.awt.image.BufferedImage
            /**
             * Requests that any current read operation be aborted.  The
             * contents of the image following the abort will be undefined.
             * <p> Readers should call <code>clearAbortRequest</code> at the
             * beginning of each read operation, and poll the value of
             * <code>abortRequested</code> regularly during the read.
             */
            // @ts-ignore
            public abort(): void
            /**
             * Returns <code>true</code> if a request to abort the current
             * read operation has been made since the reader was instantiated or
             * <code>clearAbortRequest</code> was called.
             * @return <code>true</code> if the current read operation should
             *  be aborted.
             * @see #abort
             * @see #clearAbortRequest
             */
            // @ts-ignore
            abortRequested(): boolean
            /**
             * Clears any previous abort request.  After this method has been
             * called, <code>abortRequested</code> will return
             * <code>false</code>.
             * @see #abort
             * @see #abortRequested
             */
            // @ts-ignore
            clearAbortRequest(): void
            /**
             * Adds an <code>IIOReadWarningListener</code> to the list of
             * registered warning listeners.  If <code>listener</code> is
             * <code>null</code>, no exception will be thrown and no action
             * will be taken.  Messages sent to the given listener will be
             * localized, if possible, to match the current
             * <code>Locale</code>.  If no <code>Locale</code> has been set,
             * warning messages may be localized as the reader sees fit.
             * @param listener an <code>IIOReadWarningListener</code> to be registered.
             * @see #removeIIOReadWarningListener
             */
            // @ts-ignore
            public addIIOReadWarningListener(listener: javax.imageio.event.IIOReadWarningListener): void
            /**
             * Removes an <code>IIOReadWarningListener</code> from the list of
             * registered error listeners.  If the listener was not previously
             * registered, or if <code>listener</code> is <code>null</code>,
             * no exception will be thrown and no action will be taken.
             * @param listener an IIOReadWarningListener to be unregistered.
             * @see #addIIOReadWarningListener
             */
            // @ts-ignore
            public removeIIOReadWarningListener(listener: javax.imageio.event.IIOReadWarningListener): void
            /**
             * Removes all currently registered
             * <code>IIOReadWarningListener</code> objects.
             * <p> The default implementation sets the
             * <code>warningListeners</code> and <code>warningLocales</code>
             * instance variables to <code>null</code>.
             */
            // @ts-ignore
            public removeAllIIOReadWarningListeners(): void
            /**
             * Adds an <code>IIOReadProgressListener</code> to the list of
             * registered progress listeners.  If <code>listener</code> is
             * <code>null</code>, no exception will be thrown and no action
             * will be taken.
             * @param listener an IIOReadProgressListener to be registered.
             * @see #removeIIOReadProgressListener
             */
            // @ts-ignore
            public addIIOReadProgressListener(listener: javax.imageio.event.IIOReadProgressListener): void
            /**
             * Removes an <code>IIOReadProgressListener</code> from the list
             * of registered progress listeners.  If the listener was not
             * previously registered, or if <code>listener</code> is
             * <code>null</code>, no exception will be thrown and no action
             * will be taken.
             * @param listener an IIOReadProgressListener to be unregistered.
             * @see #addIIOReadProgressListener
             */
            // @ts-ignore
            public removeIIOReadProgressListener(listener: javax.imageio.event.IIOReadProgressListener): void
            /**
             * Removes all currently registered
             * <code>IIOReadProgressListener</code> objects.
             * <p> The default implementation sets the
             * <code>progressListeners</code> instance variable to
             * <code>null</code>.
             */
            // @ts-ignore
            public removeAllIIOReadProgressListeners(): void
            /**
             * Adds an <code>IIOReadUpdateListener</code> to the list of
             * registered update listeners.  If <code>listener</code> is
             * <code>null</code>, no exception will be thrown and no action
             * will be taken.  The listener will receive notification of pixel
             * updates as images and thumbnails are decoded, including the
             * starts and ends of progressive passes.
             * <p> If no update listeners are present, the reader may choose
             * to perform fewer updates to the pixels of the destination
             * images and/or thumbnails, which may result in more efficient
             * decoding.
             * <p> For example, in progressive JPEG decoding each pass
             * contains updates to a set of coefficients, which would have to
             * be transformed into pixel values and converted to an RGB color
             * space for each pass if listeners are present.  If no listeners
             * are present, the coefficients may simply be accumulated and the
             * final results transformed and color converted one time only.
             * <p> The final results of decoding will be the same whether or
             * not intermediate updates are performed.  Thus if only the final
             * image is desired it may be preferable not to register any
             * <code>IIOReadUpdateListener</code>s.  In general, progressive
             * updating is most effective when fetching images over a network
             * connection that is very slow compared to local CPU processing;
             * over a fast connection, progressive updates may actually slow
             * down the presentation of the image.
             * @param listener an IIOReadUpdateListener to be registered.
             * @see #removeIIOReadUpdateListener
             */
            // @ts-ignore
            public addIIOReadUpdateListener(listener: javax.imageio.event.IIOReadUpdateListener): void
            /**
             * Removes an <code>IIOReadUpdateListener</code> from the list of
             * registered update listeners.  If the listener was not
             * previously registered, or if <code>listener</code> is
             * <code>null</code>, no exception will be thrown and no action
             * will be taken.
             * @param listener an IIOReadUpdateListener to be unregistered.
             * @see #addIIOReadUpdateListener
             */
            // @ts-ignore
            public removeIIOReadUpdateListener(listener: javax.imageio.event.IIOReadUpdateListener): void
            /**
             * Removes all currently registered
             * <code>IIOReadUpdateListener</code> objects.
             * <p> The default implementation sets the
             * <code>updateListeners</code> instance variable to
             * <code>null</code>.
             */
            // @ts-ignore
            public removeAllIIOReadUpdateListeners(): void
            /**
             * Broadcasts the start of an sequence of image reads to all
             * registered <code>IIOReadProgressListener</code>s by calling
             * their <code>sequenceStarted</code> method.  Subclasses may use
             * this method as a convenience.
             * @param minIndex the lowest index being read.
             */
            // @ts-ignore
            processSequenceStarted(minIndex: number /*int*/): void
            /**
             * Broadcasts the completion of an sequence of image reads to all
             * registered <code>IIOReadProgressListener</code>s by calling
             * their <code>sequenceComplete</code> method.  Subclasses may use
             * this method as a convenience.
             */
            // @ts-ignore
            processSequenceComplete(): void
            /**
             * Broadcasts the start of an image read to all registered
             * <code>IIOReadProgressListener</code>s by calling their
             * <code>imageStarted</code> method.  Subclasses may use this
             * method as a convenience.
             * @param imageIndex the index of the image about to be read.
             */
            // @ts-ignore
            processImageStarted(imageIndex: number /*int*/): void
            /**
             * Broadcasts the current percentage of image completion to all
             * registered <code>IIOReadProgressListener</code>s by calling
             * their <code>imageProgress</code> method.  Subclasses may use
             * this method as a convenience.
             * @param percentageDone the current percentage of completion,
             *  as a <code>float</code>.
             */
            // @ts-ignore
            processImageProgress(percentageDone: number /*float*/): void
            /**
             * Broadcasts the completion of an image read to all registered
             * <code>IIOReadProgressListener</code>s by calling their
             * <code>imageComplete</code> method.  Subclasses may use this
             * method as a convenience.
             */
            // @ts-ignore
            processImageComplete(): void
            /**
             * Broadcasts the start of a thumbnail read to all registered
             * <code>IIOReadProgressListener</code>s by calling their
             * <code>thumbnailStarted</code> method.  Subclasses may use this
             * method as a convenience.
             * @param imageIndex the index of the image associated with the
             *  thumbnail.
             * @param thumbnailIndex the index of the thumbnail.
             */
            // @ts-ignore
            processThumbnailStarted(imageIndex: number /*int*/, thumbnailIndex: number /*int*/): void
            /**
             * Broadcasts the current percentage of thumbnail completion to
             * all registered <code>IIOReadProgressListener</code>s by calling
             * their <code>thumbnailProgress</code> method.  Subclasses may
             * use this method as a convenience.
             * @param percentageDone the current percentage of completion,
             *  as a <code>float</code>.
             */
            // @ts-ignore
            processThumbnailProgress(percentageDone: number /*float*/): void
            /**
             * Broadcasts the completion of a thumbnail read to all registered
             * <code>IIOReadProgressListener</code>s by calling their
             * <code>thumbnailComplete</code> method.  Subclasses may use this
             * method as a convenience.
             */
            // @ts-ignore
            processThumbnailComplete(): void
            /**
             * Broadcasts that the read has been aborted to all registered
             * <code>IIOReadProgressListener</code>s by calling their
             * <code>readAborted</code> method.  Subclasses may use this
             * method as a convenience.
             */
            // @ts-ignore
            processReadAborted(): void
            /**
             * Broadcasts the beginning of a progressive pass to all
             * registered <code>IIOReadUpdateListener</code>s by calling their
             * <code>passStarted</code> method.  Subclasses may use this
             * method as a convenience.
             * @param theImage the <code>BufferedImage</code> being updated.
             * @param pass the index of the current pass, starting with 0.
             * @param minPass the index of the first pass that will be decoded.
             * @param maxPass the index of the last pass that will be decoded.
             * @param minX the X coordinate of the upper-left pixel included
             *  in the pass.
             * @param minY the X coordinate of the upper-left pixel included
             *  in the pass.
             * @param periodX the horizontal separation between pixels.
             * @param periodY the vertical separation between pixels.
             * @param bands an array of <code>int</code>s indicating the
             *  set of affected bands of the destination.
             */
            // @ts-ignore
            processPassStarted(theImage: java.awt.image.BufferedImage, pass: number /*int*/, minPass: number /*int*/, maxPass: number /*int*/, minX: number /*int*/, minY: number /*int*/, periodX: number /*int*/, periodY: number /*int*/, bands: number /*int*/[]): void
            /**
             * Broadcasts the update of a set of samples to all registered
             * <code>IIOReadUpdateListener</code>s by calling their
             * <code>imageUpdate</code> method.  Subclasses may use this
             * method as a convenience.
             * @param theImage the <code>BufferedImage</code> being updated.
             * @param minX the X coordinate of the upper-left pixel included
             *  in the pass.
             * @param minY the X coordinate of the upper-left pixel included
             *  in the pass.
             * @param width the total width of the area being updated, including
             *  pixels being skipped if <code>periodX &gt; 1</code>.
             * @param height the total height of the area being updated,
             *  including pixels being skipped if <code>periodY &gt; 1</code>.
             * @param periodX the horizontal separation between pixels.
             * @param periodY the vertical separation between pixels.
             * @param bands an array of <code>int</code>s indicating the
             *  set of affected bands of the destination.
             */
            // @ts-ignore
            processImageUpdate(theImage: java.awt.image.BufferedImage, minX: number /*int*/, minY: number /*int*/, width: number /*int*/, height: number /*int*/, periodX: number /*int*/, periodY: number /*int*/, bands: number /*int*/[]): void
            /**
             * Broadcasts the end of a progressive pass to all
             * registered <code>IIOReadUpdateListener</code>s by calling their
             * <code>passComplete</code> method.  Subclasses may use this
             * method as a convenience.
             * @param theImage the <code>BufferedImage</code> being updated.
             */
            // @ts-ignore
            processPassComplete(theImage: java.awt.image.BufferedImage): void
            /**
             * Broadcasts the beginning of a thumbnail progressive pass to all
             * registered <code>IIOReadUpdateListener</code>s by calling their
             * <code>thumbnailPassStarted</code> method.  Subclasses may use this
             * method as a convenience.
             * @param theThumbnail the <code>BufferedImage</code> thumbnail
             *  being updated.
             * @param pass the index of the current pass, starting with 0.
             * @param minPass the index of the first pass that will be decoded.
             * @param maxPass the index of the last pass that will be decoded.
             * @param minX the X coordinate of the upper-left pixel included
             *  in the pass.
             * @param minY the X coordinate of the upper-left pixel included
             *  in the pass.
             * @param periodX the horizontal separation between pixels.
             * @param periodY the vertical separation between pixels.
             * @param bands an array of <code>int</code>s indicating the
             *  set of affected bands of the destination.
             */
            // @ts-ignore
            processThumbnailPassStarted(theThumbnail: java.awt.image.BufferedImage, pass: number /*int*/, minPass: number /*int*/, maxPass: number /*int*/, minX: number /*int*/, minY: number /*int*/, periodX: number /*int*/, periodY: number /*int*/, bands: number /*int*/[]): void
            /**
             * Broadcasts the update of a set of samples in a thumbnail image
             * to all registered <code>IIOReadUpdateListener</code>s by
             * calling their <code>thumbnailUpdate</code> method.  Subclasses may
             * use this method as a convenience.
             * @param theThumbnail the <code>BufferedImage</code> thumbnail
             *  being updated.
             * @param minX the X coordinate of the upper-left pixel included
             *  in the pass.
             * @param minY the X coordinate of the upper-left pixel included
             *  in the pass.
             * @param width the total width of the area being updated, including
             *  pixels being skipped if <code>periodX &gt; 1</code>.
             * @param height the total height of the area being updated,
             *  including pixels being skipped if <code>periodY &gt; 1</code>.
             * @param periodX the horizontal separation between pixels.
             * @param periodY the vertical separation between pixels.
             * @param bands an array of <code>int</code>s indicating the
             *  set of affected bands of the destination.
             */
            // @ts-ignore
            processThumbnailUpdate(theThumbnail: java.awt.image.BufferedImage, minX: number /*int*/, minY: number /*int*/, width: number /*int*/, height: number /*int*/, periodX: number /*int*/, periodY: number /*int*/, bands: number /*int*/[]): void
            /**
             * Broadcasts the end of a thumbnail progressive pass to all
             * registered <code>IIOReadUpdateListener</code>s by calling their
             * <code>thumbnailPassComplete</code> method.  Subclasses may use this
             * method as a convenience.
             * @param theThumbnail the <code>BufferedImage</code> thumbnail
             *  being updated.
             */
            // @ts-ignore
            processThumbnailPassComplete(theThumbnail: java.awt.image.BufferedImage): void
            /**
             * Broadcasts a warning message to all registered
             * <code>IIOReadWarningListener</code>s by calling their
             * <code>warningOccurred</code> method.  Subclasses may use this
             * method as a convenience.
             * @param warning the warning message to send.
             * @exception IllegalArgumentException if <code>warning</code>
             *  is <code>null</code>.
             */
            // @ts-ignore
            processWarningOccurred(warning: java.lang.String | string): void
            /**
             * Broadcasts a localized warning message to all registered
             * <code>IIOReadWarningListener</code>s by calling their
             * <code>warningOccurred</code> method with a string taken
             * from a <code>ResourceBundle</code>.  Subclasses may use this
             * method as a convenience.
             * @param baseName the base name of a set of
             *  <code>ResourceBundle</code>s containing localized warning
             *  messages.
             * @param keyword the keyword used to index the warning message
             *  within the set of <code>ResourceBundle</code>s.
             * @exception IllegalArgumentException if <code>baseName</code>
             *  is <code>null</code>.
             * @exception IllegalArgumentException if <code>keyword</code>
             *  is <code>null</code>.
             * @exception IllegalArgumentException if no appropriate
             *  <code>ResourceBundle</code> may be located.
             * @exception IllegalArgumentException if the named resource is
             *  not found in the located <code>ResourceBundle</code>.
             * @exception IllegalArgumentException if the object retrieved
             *  from the <code>ResourceBundle</code> is not a
             *  <code>String</code>.
             */
            // @ts-ignore
            processWarningOccurred(baseName: java.lang.String | string, keyword: java.lang.String | string): void
            /**
             * Restores the <code>ImageReader</code> to its initial state.
             * <p> The default implementation calls <code>setInput(null,
             * false)</code>, <code>setLocale(null)</code>,
             * <code>removeAllIIOReadUpdateListeners()</code>,
             * <code>removeAllIIOReadWarningListeners()</code>,
             * <code>removeAllIIOReadProgressListeners()</code>, and
             * <code>clearAbortRequest</code>.
             */
            // @ts-ignore
            public reset(): void
            /**
             * Allows any resources held by this object to be released.  The
             * result of calling any other method (other than
             * <code>finalize</code>) subsequent to a call to this method
             * is undefined.
             * <p>It is important for applications to call this method when they
             * know they will no longer be using this <code>ImageReader</code>.
             * Otherwise, the reader may continue to hold on to resources
             * indefinitely.
             * <p>The default implementation of this method in the superclass does
             * nothing.  Subclass implementations should ensure that all resources,
             * especially native resources, are released.
             */
            // @ts-ignore
            public dispose(): void
            /**
             * A utility method that may be used by readers to compute the
             * region of the source image that should be read, taking into
             * account any source region and subsampling offset settings in
             * the supplied <code>ImageReadParam</code>.  The actual
             * subsampling factors, destination size, and destination offset
             * are <em>not</em> taken into consideration, thus further
             * clipping must take place.  The {@link #computeRegions computeRegions}
             * method performs all necessary clipping.
             * @param param the <code>ImageReadParam</code> being used, or
             *  <code>null</code>.
             * @param srcWidth the width of the source image.
             * @param srcHeight the height of the source image.
             * @return the source region as a <code>Rectangle</code>.
             */
            // @ts-ignore
            static getSourceRegion(param: javax.imageio.ImageReadParam, srcWidth: number /*int*/, srcHeight: number /*int*/): java.awt.Rectangle
            /**
             * Computes the source region of interest and the destination
             * region of interest, taking the width and height of the source
             * image, an optional destination image, and an optional
             * <code>ImageReadParam</code> into account.  The source region
             * begins with the entire source image.  Then that is clipped to
             * the source region specified in the <code>ImageReadParam</code>,
             * if one is specified.
             * <p> If either of the destination offsets are negative, the
             * source region is clipped so that its top left will coincide
             * with the top left of the destination image, taking subsampling
             * into account.  Then the result is clipped to the destination
             * image on the right and bottom, if one is specified, taking
             * subsampling and destination offsets into account.
             * <p> Similarly, the destination region begins with the source
             * image, is translated to the destination offset given in the
             * <code>ImageReadParam</code> if there is one, and finally is
             * clipped to the destination image, if there is one.
             * <p> If either the source or destination regions end up having a
             * width or height of 0, an <code>IllegalArgumentException</code>
             * is thrown.
             * <p> The {@link #getSourceRegion getSourceRegion>}
             * method may be used if only source clipping is desired.
             * @param param an <code>ImageReadParam</code>, or <code>null</code>.
             * @param srcWidth the width of the source image.
             * @param srcHeight the height of the source image.
             * @param image a <code>BufferedImage</code> that will be the
             *  destination image, or <code>null</code>.
             * @param srcRegion a <code>Rectangle</code> that will be filled with
             *  the source region of interest.
             * @param destRegion a <code>Rectangle</code> that will be filled with
             *  the destination region of interest.
             * @exception IllegalArgumentException if <code>srcRegion</code>
             *  is <code>null</code>.
             * @exception IllegalArgumentException if <code>dstRegion</code>
             *  is <code>null</code>.
             * @exception IllegalArgumentException if the resulting source or
             *  destination region is empty.
             */
            // @ts-ignore
            static computeRegions(param: javax.imageio.ImageReadParam, srcWidth: number /*int*/, srcHeight: number /*int*/, image: java.awt.image.BufferedImage, srcRegion: java.awt.Rectangle, destRegion: java.awt.Rectangle): void
            /**
             * A utility method that may be used by readers to test the
             * validity of the source and destination band settings of an
             * <code>ImageReadParam</code>.  This method may be called as soon
             * as the reader knows both the number of bands of the source
             * image as it exists in the input stream, and the number of bands
             * of the destination image that being written.
             * <p> The method retrieves the source and destination band
             * setting arrays from param using the <code>getSourceBands</code>
             * and <code>getDestinationBands</code>methods (or considers them
             * to be <code>null</code> if <code>param</code> is
             * <code>null</code>).  If the source band setting array is
             * <code>null</code>, it is considered to be equal to the array
             * <code>{ 0, 1, ..., numSrcBands - 1 }</code>, and similarly for
             * the destination band setting array.
             * <p> The method then tests that both arrays are equal in length,
             * and that neither array contains a value larger than the largest
             * available band index.
             * <p> Any failure results in an
             * <code>IllegalArgumentException</code> being thrown; success
             * results in the method returning silently.
             * @param param the <code>ImageReadParam</code> being used to read
             *  the image.
             * @param numSrcBands the number of bands of the image as it exists
             *  int the input source.
             * @param numDstBands the number of bands in the destination image
             *  being written.
             * @exception IllegalArgumentException if <code>param</code>
             *  contains an invalid specification of a source and/or
             *  destination band subset.
             */
            // @ts-ignore
            static checkReadParamBandSettings(param: javax.imageio.ImageReadParam, numSrcBands: number /*int*/, numDstBands: number /*int*/): void
            /**
             * Returns the <code>BufferedImage</code> to which decoded pixel
             * data should be written.  The image is determined by inspecting
             * the supplied <code>ImageReadParam</code> if it is
             * non-<code>null</code>; if its <code>getDestination</code>
             * method returns a non-<code>null</code> value, that image is
             * simply returned.  Otherwise,
             * <code>param.getDestinationType</code> method is called to
             * determine if a particular image type has been specified.  If
             * so, the returned <code>ImageTypeSpecifier</code> is used after
             * checking that it is equal to one of those included in
             * <code>imageTypes</code>.
             * <p> If <code>param</code> is <code>null</code> or the above
             * steps have not yielded an image or an
             * <code>ImageTypeSpecifier</code>, the first value obtained from
             * the <code>imageTypes</code> parameter is used.  Typically, the
             * caller will set <code>imageTypes</code> to the value of
             * <code>getImageTypes(imageIndex)</code>.
             * <p> Next, the dimensions of the image are determined by a call
             * to <code>computeRegions</code>.  The actual width and height of
             * the image being decoded are passed in as the <code>width</code>
             * and <code>height</code> parameters.
             * @param param an <code>ImageReadParam</code> to be used to get
             *  the destination image or image type, or <code>null</code>.
             * @param imageTypes an <code>Iterator</code> of
             *  <code>ImageTypeSpecifier</code>s indicating the legal image
             *  types, with the default first.
             * @param width the true width of the image or tile begin decoded.
             * @param height the true width of the image or tile being decoded.
             * @return the <code>BufferedImage</code> to which decoded pixel
             *  data should be written.
             * @exception IIOException if the <code>ImageTypeSpecifier</code>
             *  specified by <code>param</code> does not match any of the legal
             *  ones from <code>imageTypes</code>.
             * @exception IllegalArgumentException if <code>imageTypes</code>
             *  is <code>null</code> or empty, or if an object not of type
             *  <code>ImageTypeSpecifier</code> is retrieved from it.
             * @exception IllegalArgumentException if the resulting image would
             *  have a width or height less than 1.
             * @exception IllegalArgumentException if the product of
             *  <code>width</code> and <code>height</code> is greater than
             *  <code>Integer.MAX_VALUE</code>.
             */
            // @ts-ignore
            static getDestination(param: javax.imageio.ImageReadParam, imageTypes: java.util.Iterator<javax.imageio.ImageTypeSpecifier>, width: number /*int*/, height: number /*int*/): java.awt.image.BufferedImage
        }
    }
}
