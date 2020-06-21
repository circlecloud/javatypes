declare namespace javax {
    namespace imageio {
        /**
         * A simple container class to aggregate an image, a set of
         * thumbnail (preview) images, and an object representing metadata
         * associated with the image.
         * <p> The image data may take the form of either a
         * <code>RenderedImage</code>, or a <code>Raster</code>.  Reader
         * methods that return an <code>IIOImage</code> will always return a
         * <code>BufferedImage</code> using the <code>RenderedImage</code>
         * reference.  Writer methods that accept an <code>IIOImage</code>
         * will always accept a <code>RenderedImage</code>, and may optionally
         * accept a <code>Raster</code>.
         * <p> Exactly one of <code>getRenderedImage</code> and
         * <code>getRaster</code> will return a non-<code>null</code> value.
         * Subclasses are responsible for ensuring this behavior.
         * @see ImageReader#readAll(int, ImageReadParam)
         * @see ImageReader#readAll(java.util.Iterator)
         * @see ImageWriter#write(javax.imageio.metadata.IIOMetadata,
         *                         IIOImage, ImageWriteParam)
         * @see ImageWriter#write(IIOImage)
         * @see ImageWriter#writeToSequence(IIOImage, ImageWriteParam)
         * @see ImageWriter#writeInsert(int, IIOImage, ImageWriteParam)
         */
        // @ts-ignore
        class IIOImage extends java.lang.Object {
            /**
             * Constructs an <code>IIOImage</code> containing a
             * <code>RenderedImage</code>, and thumbnails and metadata
             * associated with it.
             * <p> All parameters are stored by reference.
             * <p> The <code>thumbnails</code> argument must either be
             * <code>null</code> or contain only <code>BufferedImage</code>
             * objects.
             * @param image a <code>RenderedImage</code>.
             * @param thumbnails a <code>List</code> of <code>BufferedImage</code>s,
             *  or <code>null</code>.
             * @param metadata an <code>IIOMetadata</code> object, or
             *  <code>null</code>.
             * @exception IllegalArgumentException if <code>image</code> is
             *  <code>null</code>.
             */
            // @ts-ignore
            constructor(image: java.awt.image.RenderedImage, thumbnails: java.util.List<any> | Array<any>, metadata: javax.imageio.metadata.IIOMetadata)
            /**
             * Constructs an <code>IIOImage</code> containing a
             * <code>Raster</code>, and thumbnails and metadata
             * associated with it.
             * <p> All parameters are stored by reference.
             * @param raster a <code>Raster</code>.
             * @param thumbnails a <code>List</code> of <code>BufferedImage</code>s,
             *  or <code>null</code>.
             * @param metadata an <code>IIOMetadata</code> object, or
             *  <code>null</code>.
             * @exception IllegalArgumentException if <code>raster</code> is
             *  <code>null</code>.
             */
            // @ts-ignore
            constructor(raster: java.awt.image.Raster, thumbnails: java.util.List<any> | Array<any>, metadata: javax.imageio.metadata.IIOMetadata)
            /**
             * The <code>RenderedImage</code> being referenced.
             */
            // @ts-ignore
            image: java.awt.image.RenderedImage
            /**
             * The <code>Raster</code> being referenced.
             */
            // @ts-ignore
            raster: java.awt.image.Raster
            /**
             * A <code>List</code> of <code>BufferedImage</code> thumbnails,
             * or <code>null</code>.  Non-<code>BufferedImage</code> objects
             * must not be stored in this <code>List</code>.
             */
            // @ts-ignore
            thumbnails: java.util.List<any> | Array<any>
            /**
             * An <code>IIOMetadata</code> object containing metadata
             * associated with the image.
             */
            // @ts-ignore
            metadata: javax.imageio.metadata.IIOMetadata
            /**
             * Returns the currently set <code>RenderedImage</code>, or
             * <code>null</code> if only a <code>Raster</code> is available.
             * @return a <code>RenderedImage</code>, or <code>null</code>.
             * @see #setRenderedImage
             */
            // @ts-ignore
            public getRenderedImage(): java.awt.image.RenderedImage
            /**
             * Sets the current <code>RenderedImage</code>.  The value is
             * stored by reference.  Any existing <code>Raster</code> is
             * discarded.
             * @param image a <code>RenderedImage</code>.
             * @exception IllegalArgumentException if <code>image</code> is
             *  <code>null</code>.
             * @see #getRenderedImage
             */
            // @ts-ignore
            public setRenderedImage(image: java.awt.image.RenderedImage): void
            /**
             * Returns <code>true</code> if this <code>IIOImage</code> stores
             * a <code>Raster</code> rather than a <code>RenderedImage</code>.
             * @return <code>true</code> if a <code>Raster</code> is
             *  available.
             */
            // @ts-ignore
            public hasRaster(): boolean
            /**
             * Returns the currently set <code>Raster</code>, or
             * <code>null</code> if only a <code>RenderedImage</code> is
             * available.
             * @return a <code>Raster</code>, or <code>null</code>.
             * @see #setRaster
             */
            // @ts-ignore
            public getRaster(): java.awt.image.Raster
            /**
             * Sets the current <code>Raster</code>.  The value is
             * stored by reference.  Any existing <code>RenderedImage</code> is
             * discarded.
             * @param raster a <code>Raster</code>.
             * @exception IllegalArgumentException if <code>raster</code> is
             *  <code>null</code>.
             * @see #getRaster
             */
            // @ts-ignore
            public setRaster(raster: java.awt.image.Raster): void
            /**
             * Returns the number of thumbnails stored in this
             * <code>IIOImage</code>.
             * @return the number of thumbnails, as an <code>int</code>.
             */
            // @ts-ignore
            public getNumThumbnails(): number /*int*/
            /**
             * Returns a thumbnail associated with the main image.
             * @param index the index of the desired thumbnail image.
             * @return a thumbnail image, as a <code>BufferedImage</code>.
             * @exception IndexOutOfBoundsException if the supplied index is
             *  negative or larger than the largest valid index.
             * @exception ClassCastException if a
             *  non-<code>BufferedImage</code> object is encountered in the
             *  list of thumbnails at the given index.
             * @see #getThumbnails
             * @see #setThumbnails
             */
            // @ts-ignore
            public getThumbnail(index: number /*int*/): java.awt.image.BufferedImage
            /**
             * Returns the current <code>List</code> of thumbnail
             * <code>BufferedImage</code>s, or <code>null</code> if none is
             * set.  A live reference is returned.
             * @return the current <code>List</code> of
             *  <code>BufferedImage</code> thumbnails, or <code>null</code>.
             * @see #getThumbnail(int)
             * @see #setThumbnails
             */
            // @ts-ignore
            public getThumbnails(): Array<any>
            /**
             * Sets the list of thumbnails to a new <code>List</code> of
             * <code>BufferedImage</code>s, or to <code>null</code>.  The
             * reference to the previous <code>List</code> is discarded.
             * <p> The <code>thumbnails</code> argument must either be
             * <code>null</code> or contain only <code>BufferedImage</code>
             * objects.
             * @param thumbnails a <code>List</code> of
             *  <code>BufferedImage</code> thumbnails, or <code>null</code>.
             * @see #getThumbnail(int)
             * @see #getThumbnails
             */
            // @ts-ignore
            public setThumbnails(thumbnails: java.util.List<any> | Array<any>): void
            /**
             * Returns a reference to the current <code>IIOMetadata</code>
             * object, or <code>null</code> is none is set.
             * @return an <code>IIOMetadata</code> object, or <code>null</code>.
             * @see #setMetadata
             */
            // @ts-ignore
            public getMetadata(): javax.imageio.metadata.IIOMetadata
            /**
             * Sets the <code>IIOMetadata</code> to a new object, or
             * <code>null</code>.
             * @param metadata an <code>IIOMetadata</code> object, or
             *  <code>null</code>.
             * @see #getMetadata
             */
            // @ts-ignore
            public setMetadata(metadata: javax.imageio.metadata.IIOMetadata): void
        }
    }
}
