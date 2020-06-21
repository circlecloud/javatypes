declare namespace org {
    namespace springframework {
        namespace core {
            namespace io {
                namespace support {
                    /**
                     * Region of a {@link Resource} implementation, materialized by a {@code position}
                     * within the {@link Resource} and a byte {@code count} for the length of that region.
                     * @author Arjen Poutsma
                     * @since 4.3
                     */
                    // @ts-ignore
                    class ResourceRegion extends java.lang.Object {
                        /**
                         * Create a new {@code ResourceRegion} from a given {@link Resource}.
                         * This region of a resource is represented by a start {@code position}
                         * and a byte {@code count} within the given {@code Resource}.
                         * @param resource a Resource
                         * @param position the start position of the region in that resource
                         * @param count the byte count of the region in that resource
                         */
                        // @ts-ignore
                        constructor(resource: org.springframework.core.io.Resource, position: number /*long*/, count: number /*long*/)
                        /**
                         * Return the underlying {@link Resource} for this {@code ResourceRegion}.
                         */
                        // @ts-ignore
                        public getResource(): org.springframework.core.io.Resource
                        /**
                         * Return the start position of this region in the underlying {@link Resource}.
                         */
                        // @ts-ignore
                        public getPosition(): number /*long*/
                        /**
                         * Return the byte count of this region in the underlying {@link Resource}.
                         */
                        // @ts-ignore
                        public getCount(): number /*long*/
                    }
                }
            }
        }
    }
}
