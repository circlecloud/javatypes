declare namespace org {
    namespace spongepowered {
        namespace api {
            namespace text {
                namespace transform {
                    /**
                     * Implementation of {@link PartitionedTextFormatter} that allows for
                     * modifications on the partitions.
                     */
                    // @ts-ignore
                    class DynamicPartitionedTextFormatter extends java.lang.Object implements org.spongepowered.api.text.transform.PartitionedTextFormatter<org.spongepowered.api.text.transform.SimpleTextFormatter> {
                        /**
                         * Creates a new {@link DynamicPartitionedTextFormatter}.
                         * @param initialSize The initial size of partitions
                         */
                        // @ts-ignore
                        constructor(initialSize: number /*int*/)
                        /**
                         * creates a new partitioned text formatter.
                         */
                        // @ts-ignore
                        constructor()
                        // @ts-ignore
                        readonly partitions: java.util.List<org.spongepowered.api.text.transform.SimpleTextFormatter> | Array<org.spongepowered.api.text.transform.SimpleTextFormatter>
                        // @ts-ignore
                        public getAll(): object
                        // @ts-ignore
                        public get(i: number /*int*/): org.spongepowered.api.text.transform.SimpleTextFormatter
                        // @ts-ignore
                        public set(i: number /*int*/, element: org.spongepowered.api.text.transform.SimpleTextFormatter): org.spongepowered.api.text.transform.SimpleTextFormatter
                        // @ts-ignore
                        public size(): number /*int*/
                        // @ts-ignore
                        public isEmpty(): boolean
                        // @ts-ignore
                        public contains(element: org.spongepowered.api.text.transform.SimpleTextFormatter): boolean
                        // @ts-ignore
                        public clear(): void
                        // @ts-ignore
                        public add(element: org.spongepowered.api.text.transform.SimpleTextFormatter): boolean
                        // @ts-ignore
                        public add(elements: java.util.Collection<org.spongepowered.api.text.transform.SimpleTextFormatter> | Array<org.spongepowered.api.text.transform.SimpleTextFormatter>): boolean
                        // @ts-ignore
                        public insert(i: number /*int*/, element: org.spongepowered.api.text.transform.SimpleTextFormatter): void
                        // @ts-ignore
                        public insert(i: number /*int*/, elements: java.util.Collection<org.spongepowered.api.text.transform.SimpleTextFormatter> | Array<org.spongepowered.api.text.transform.SimpleTextFormatter>): void
                        // @ts-ignore
                        public remove(element: org.spongepowered.api.text.transform.SimpleTextFormatter): boolean
                        // @ts-ignore
                        public remove(elements: java.util.Collection<org.spongepowered.api.text.transform.SimpleTextFormatter> | Array<org.spongepowered.api.text.transform.SimpleTextFormatter>): boolean
                        // @ts-ignore
                        public retain(elements: java.util.Collection<org.spongepowered.api.text.transform.SimpleTextFormatter> | Array<org.spongepowered.api.text.transform.SimpleTextFormatter>): boolean
                    }
                }
            }
        }
    }
}
