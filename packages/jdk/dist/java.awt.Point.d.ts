declare namespace java {
    namespace awt {
        /**
         * A point representing a location in {@code (x,y)} coordinate space,
         * specified in integer precision.
         * @author Sami Shaio
         * @since 1.0
         */
        // @ts-ignore
        class Point extends java.awt.geom.Point2D implements java.io.Serializable {
            /**
             * Constructs and initializes a point at the origin
             * (0,&nbsp;0) of the coordinate space.
             * @since 1.1
             */
            // @ts-ignore
            constructor()
            /**
             * Constructs and initializes a point with the same location as
             * the specified <code>Point</code> object.
             * @param p a point
             * @since 1.1
             */
            // @ts-ignore
            constructor(p: java.awt.Point)
            /**
             * Constructs and initializes a point at the specified
             * {@code (x,y)} location in the coordinate space.
             * @param x the X coordinate of the newly constructed <code>Point</code>
             * @param y the Y coordinate of the newly constructed <code>Point</code>
             * @since 1.0
             */
            // @ts-ignore
            constructor(x: number /*int*/, y: number /*int*/)
            /**
             * The X coordinate of this <code>Point</code>.
             * If no X coordinate is set it will default to 0.
             * @serial 
             * @see #getLocation()
             * @see #move(int, int)
             * @since 1.0
             */
            // @ts-ignore
            public x: number /*int*/
            /**
             * The Y coordinate of this <code>Point</code>.
             * If no Y coordinate is set it will default to 0.
             * @serial 
             * @see #getLocation()
             * @see #move(int, int)
             * @since 1.0
             */
            // @ts-ignore
            public y: number /*int*/
            /**
             * {@inheritDoc}
             * @since 1.2
             */
            // @ts-ignore
            public getX(): number /*double*/
            /**
             * {@inheritDoc}
             * @since 1.2
             */
            // @ts-ignore
            public getY(): number /*double*/
            /**
             * Returns the location of this point.
             * This method is included for completeness, to parallel the
             * <code>getLocation</code> method of <code>Component</code>.
             * @return a copy of this point, at the same location
             * @see java.awt.Component#getLocation
             * @see java.awt.Point#setLocation(java.awt.Point)
             * @see java.awt.Point#setLocation(int, int)
             * @since 1.1
             */
            // @ts-ignore
            public getLocation(): java.awt.Point
            /**
             * Sets the location of the point to the specified location.
             * This method is included for completeness, to parallel the
             * <code>setLocation</code> method of <code>Component</code>.
             * @param p  a point, the new location for this point
             * @see java.awt.Component#setLocation(java.awt.Point)
             * @see java.awt.Point#getLocation
             * @since 1.1
             */
            // @ts-ignore
            public setLocation(p: java.awt.Point): void
            /**
             * Changes the point to have the specified location.
             * <p>
             * This method is included for completeness, to parallel the
             * <code>setLocation</code> method of <code>Component</code>.
             * Its behavior is identical with <code>move(int,&nbsp;int)</code>.
             * @param x the X coordinate of the new location
             * @param y the Y coordinate of the new location
             * @see java.awt.Component#setLocation(int, int)
             * @see java.awt.Point#getLocation
             * @see java.awt.Point#move(int, int)
             * @since 1.1
             */
            // @ts-ignore
            public setLocation(x: number /*int*/, y: number /*int*/): void
            /**
             * Sets the location of this point to the specified double coordinates.
             * The double values will be rounded to integer values.
             * Any number smaller than <code>Integer.MIN_VALUE</code>
             * will be reset to <code>MIN_VALUE</code>, and any number
             * larger than <code>Integer.MAX_VALUE</code> will be
             * reset to <code>MAX_VALUE</code>.
             * @param x the X coordinate of the new location
             * @param y the Y coordinate of the new location
             * @see #getLocation
             */
            // @ts-ignore
            public setLocation(x: number /*double*/, y: number /*double*/): void
            /**
             * Moves this point to the specified location in the
             * {@code (x,y)} coordinate plane. This method
             * is identical with <code>setLocation(int,&nbsp;int)</code>.
             * @param x the X coordinate of the new location
             * @param y the Y coordinate of the new location
             * @see java.awt.Component#setLocation(int, int)
             */
            // @ts-ignore
            public move(x: number /*int*/, y: number /*int*/): void
            /**
             * Translates this point, at location {@code (x,y)},
             * by {@code dx} along the {@code x} axis and {@code dy}
             * along the {@code y} axis so that it now represents the point
             * {@code (x+dx,y+dy)}.
             * @param dx   the distance to move this point
             *                             along the X axis
             * @param dy    the distance to move this point
             *                             along the Y axis
             */
            // @ts-ignore
            public translate(dx: number /*int*/, dy: number /*int*/): void
            /**
             * Determines whether or not two points are equal. Two instances of
             * <code>Point2D</code> are equal if the values of their
             * <code>x</code> and <code>y</code> member fields, representing
             * their position in the coordinate space, are the same.
             * @param obj an object to be compared with this <code>Point2D</code>
             * @return <code>true</code> if the object to be compared is
             *          an instance of <code>Point2D</code> and has
             *          the same values; <code>false</code> otherwise.
             */
            // @ts-ignore
            public equals(obj: java.lang.Object | any): boolean
            /**
             * Returns a string representation of this point and its location
             * in the {@code (x,y)} coordinate space. This method is
             * intended to be used only for debugging purposes, and the content
             * and format of the returned string may vary between implementations.
             * The returned string may be empty but may not be <code>null</code>.
             * @return a string representation of this point
             */
            // @ts-ignore
            public toString(): string
        }
    }
}
