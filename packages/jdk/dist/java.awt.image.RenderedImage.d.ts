declare namespace java {
    namespace awt {
        namespace image {
            /**
             * RenderedImage is a common interface for objects which contain
             * or can produce image data in the form of Rasters.  The image
             * data may be stored/produced as a single tile or a regular array
             * of tiles.
             */
            // @ts-ignore
            interface RenderedImage {
                /**
                 * Returns a vector of RenderedImages that are the immediate sources of
                 * image data for this RenderedImage.  This method returns null if
                 * the RenderedImage object has no information about its immediate
                 * sources.  It returns an empty Vector if the RenderedImage object has
                 * no immediate sources.
                 * @return a Vector of <code>RenderedImage</code> objects.
                 */
                // @ts-ignore
                getSources(): java.util.Vector<java.awt.image.RenderedImage>
                /**
                 * Gets a property from the property set of this image.  The set of
                 * properties and whether it is immutable is determined by the
                 * implementing class.  This method returns
                 * java.awt.Image.UndefinedProperty if the specified property is
                 * not defined for this RenderedImage.
                 * @param name the name of the property
                 * @return the property indicated by the specified name.
                 * @see java.awt.Image#UndefinedProperty
                 */
                // @ts-ignore
                getProperty(name: java.lang.String | string): any
                /**
                 * Returns an array of names recognized by
                 * {@link #getProperty(String) getProperty(String)}
                 * or <code>null</code>, if no property names are recognized.
                 * @return a <code>String</code> array containing all of the
                 *  property names that <code>getProperty(String)</code> recognizes;
                 *  or <code>null</code> if no property names are recognized.
                 */
                // @ts-ignore
                getPropertyNames(): string[]
                /**
                 * Returns the ColorModel associated with this image.  All Rasters
                 * returned from this image will have this as their ColorModel.  This
                 * can return null.
                 * @return the <code>ColorModel</code> of this image.
                 */
                // @ts-ignore
                getColorModel(): java.awt.image.ColorModel
                /**
                 * Returns the SampleModel associated with this image.  All Rasters
                 * returned from this image will have this as their SampleModel.
                 * @return the <code>SampleModel</code> of this image.
                 */
                // @ts-ignore
                getSampleModel(): java.awt.image.SampleModel
                /**
                 * Returns the width of the RenderedImage.
                 * @return the width of this <code>RenderedImage</code>.
                 */
                // @ts-ignore
                getWidth(): number /*int*/
                /**
                 * Returns the height of the RenderedImage.
                 * @return the height of this <code>RenderedImage</code>.
                 */
                // @ts-ignore
                getHeight(): number /*int*/
                /**
                 * Returns the minimum X coordinate (inclusive) of the RenderedImage.
                 * @return the X coordinate of this <code>RenderedImage</code>.
                 */
                // @ts-ignore
                getMinX(): number /*int*/
                /**
                 * Returns the minimum Y coordinate (inclusive) of the RenderedImage.
                 * @return the Y coordinate of this <code>RenderedImage</code>.
                 */
                // @ts-ignore
                getMinY(): number /*int*/
                /**
                 * Returns the number of tiles in the X direction.
                 * @return the number of tiles in the X direction.
                 */
                // @ts-ignore
                getNumXTiles(): number /*int*/
                /**
                 * Returns the number of tiles in the Y direction.
                 * @return the number of tiles in the Y direction.
                 */
                // @ts-ignore
                getNumYTiles(): number /*int*/
                /**
                 * Returns the minimum tile index in the X direction.
                 * @return the minimum tile index in the X direction.
                 */
                // @ts-ignore
                getMinTileX(): number /*int*/
                /**
                 * Returns the minimum tile index in the Y direction.
                 * @return the minimum tile index in the X direction.
                 */
                // @ts-ignore
                getMinTileY(): number /*int*/
                /**
                 * Returns the tile width in pixels.  All tiles must have the same
                 * width.
                 * @return the tile width in pixels.
                 */
                // @ts-ignore
                getTileWidth(): number /*int*/
                /**
                 * Returns the tile height in pixels.  All tiles must have the same
                 * height.
                 * @return the tile height in pixels.
                 */
                // @ts-ignore
                getTileHeight(): number /*int*/
                /**
                 * Returns the X offset of the tile grid relative to the origin,
                 * i.e., the X coordinate of the upper-left pixel of tile (0, 0).
                 * (Note that tile (0, 0) may not actually exist.)
                 * @return the X offset of the tile grid relative to the origin.
                 */
                // @ts-ignore
                getTileGridXOffset(): number /*int*/
                /**
                 * Returns the Y offset of the tile grid relative to the origin,
                 * i.e., the Y coordinate of the upper-left pixel of tile (0, 0).
                 * (Note that tile (0, 0) may not actually exist.)
                 * @return the Y offset of the tile grid relative to the origin.
                 */
                // @ts-ignore
                getTileGridYOffset(): number /*int*/
                /**
                 * Returns tile (tileX, tileY).  Note that tileX and tileY are indices
                 * into the tile array, not pixel locations.  The Raster that is returned
                 * is live and will be updated if the image is changed.
                 * @param tileX the X index of the requested tile in the tile array
                 * @param tileY the Y index of the requested tile in the tile array
                 * @return the tile given the specified indices.
                 */
                // @ts-ignore
                getTile(tileX: number /*int*/, tileY: number /*int*/): java.awt.image.Raster
                /**
                 * Returns the image as one large tile (for tile based
                 * images this will require fetching the whole image
                 * and copying the image data over).  The Raster returned is
                 * a copy of the image data and will not be updated if the image
                 * is changed.
                 * @return the image as one large tile.
                 */
                // @ts-ignore
                getData(): java.awt.image.Raster
                /**
                 * Computes and returns an arbitrary region of the RenderedImage.
                 * The Raster returned is a copy of the image data and will not
                 * be updated if the image is changed.
                 * @param rect the region of the RenderedImage to be returned.
                 * @return the region of the <code>RenderedImage</code>
                 *  indicated by the specified <code>Rectangle</code>.
                 */
                // @ts-ignore
                getData(rect: java.awt.Rectangle): java.awt.image.Raster
                /**
                 * Computes an arbitrary rectangular region of the RenderedImage
                 * and copies it into a caller-supplied WritableRaster.  The region
                 * to be computed is determined from the bounds of the supplied
                 * WritableRaster.  The supplied WritableRaster must have a
                 * SampleModel that is compatible with this image.  If raster is null,
                 * an appropriate WritableRaster is created.
                 * @param raster a WritableRaster to hold the returned portion of the
                 *                image, or null.
                 * @return a reference to the supplied or created WritableRaster.
                 */
                // @ts-ignore
                copyData(raster: java.awt.image.WritableRaster): java.awt.image.WritableRaster
            }
        }
    }
}
