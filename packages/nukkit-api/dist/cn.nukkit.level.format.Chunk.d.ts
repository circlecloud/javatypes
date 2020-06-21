declare namespace cn {
    namespace nukkit {
        namespace level {
            namespace format {
                /**
                 * author: MagicDroidX
                 * Nukkit Project
                 */
                // @ts-ignore
                interface Chunk extends cn.nukkit.level.format.FullChunk {
                    // @ts-ignore
                    readonly SECTION_COUNT: number /*byte*/
                    // @ts-ignore
                    isSectionEmpty(fY: number /*float*/): boolean
                    // @ts-ignore
                    getSection(fY: number /*float*/): cn.nukkit.level.format.ChunkSection
                    // @ts-ignore
                    setSection(fY: number /*float*/, section: cn.nukkit.level.format.ChunkSection): boolean
                    // @ts-ignore
                    getSections(): cn.nukkit.level.format.ChunkSection[]
                }
            }
        }
    }
}
